import React, { useState } from "react";

function Search({cb = Function.prototype}) {

    const [value, setValue] = useState("")
    const handleKey = (e)=>{
        if(e.key === "Enter"){
            handleSubmit()
        }
    }

    const handleSubmit = ()=>{
        cb(value)
    }

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="Search..."
          onKeyDown={handleKey}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          style={{
            paddingLeft: "10px",
            borderBottom: "2px solid rgba(255, 255, 255, 0.526)",
          }}
        />
        <button
          className="btn"
          style={{
            position: "absolute",
            top: 6,
            right: "1%",
          }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
