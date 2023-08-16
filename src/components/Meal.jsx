import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMealById } from "../api";
import Loader from "./Loader";

function Meal() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [meal, setMeal] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);

  useEffect(() => {
    getMealById(id).then((data) => {
      setMeal(data.meals[0]);
    });
  }, []);
  

  return (
    <div className="meal">
      <button
        className="btn"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
      {!meal.idMeal ? (
        <Loader />
      ) : (
        <div className="recipe">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h1>{meal.strMeal}</h1>
          <h6 className="meal_category">
            <b> Category:</b>  {meal.strCategory}
          </h6>
          {meal.strArea ? (
            <h6 className="meal_category">
              <b>Area:</b> {meal.strArea}
            </h6>
          ) : null}
          <p>{meal.strInstructions}</p>
          <button
            onClick={() => {
              setShowRecipe(!showRecipe);
            }}
            className="btn"
          >
            {!showRecipe ? (
              <span> Show Ingredients </span>
            ) : (
              <span> Hide Ingredients </span>
            )}
          </button>
          {showRecipe ? (
            <table>
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(meal).map((key) => {
                  if (key.includes("Ingredient") && meal[key]) {
                    return (
                      <tr>
                        <td>{meal[key]}</td>
                        <td>{meal[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          ) : null}

          {meal.strYoutube ? (
            <div className="row">
              <h5>Video Recipe</h5>
              <iframe
                src={`https://www.youtube.com/embed/${meal.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
                title={meal.idMeal}
              />
            </div>
          ) : null}
          {/* <iframe
            width="702"
            height="395"
            src="https://www.youtube.com/embed/pw99jyKxafs"
            title="Alex&#39;s Car Toy Adventure: Backhoe, Tractor, Cars, Concrete Truck, Fuel Truck &amp; Police Car"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
        </div>
      )}
    </div>
  );
}

export default Meal;
