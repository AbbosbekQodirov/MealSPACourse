import React from 'react'
import CatagoryItem from './CatagoryItem'

function CategoryList({catalog=[]}) {
  return (
    <div className='catList'>
      {catalog.length ? (
        <div className='list'>
          {catalog.map((el) => {
            return <CatagoryItem key={el.idCategory} {...el} />;
          })}
        </div>
      ) : (
        <h2>There is no such Meal</h2>
      )}
    </div>
  );
}

export default CategoryList