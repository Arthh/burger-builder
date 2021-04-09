import React from 'react';
import BurgerIngredient from './BurgerIngredient/';

import './styles.css'

const burger = (props) => {
  // transformando o objeto em um array, cujo ingrediente aparece qnts vezes o value dele for.
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingId => {
      return [...Array(props.ingredients[ingId])]
        .map((_,index) => {
          return <BurgerIngredient key={ingId + index} type={ingId} />
        })
    }).reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  // console.log(transformedIngredients);
  if(transformedIngredients.length === 0 ){
    transformedIngredients = (<p>Please start adding ingredients</p>);
  }   
  return (
    <div className="Burguer">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;