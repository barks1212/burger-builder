import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map(ingKey => {
      return [...Array(ingredients[ingKey])].map((_, i) => (
        <BurgerIngredient key={ingKey + i} type={ingKey} />
      ));
    })
    .reduce((acc, el) => {
      return acc.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
