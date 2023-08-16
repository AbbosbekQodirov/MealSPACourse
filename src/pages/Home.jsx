import React, { useEffect, useState } from "react";
import { getAllCategories } from "../api";
import Loader from "../components/Loader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [error, setError] = useState(false)

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );

    navigate({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {

      if (data == "error") {
        setError(true)
      } else {
        setCatalog(data.categories);
        setFilteredCatalog(
          search
            ? data.categories.filter((item) =>
                item.strCategory
                  .toLowerCase()
                  .includes(search.split("=")[1].toLowerCase())
              )
            : data.categories
        );
      }
    });
  }, [search]);

  if(error){
    return (
      <h2 className="error">
        There is a problem with the Internet Please check your Internet
        connection and try again
      </h2>
    );
  }else{
    return (
      <>
        <Search cb={handleSearch} />
        {!catalog.length ? (
          <Loader />
        ) : (
          <CategoryList catalog={filteredCatalog} />
        )}
      </>
    );
  }
}

export default Home;
