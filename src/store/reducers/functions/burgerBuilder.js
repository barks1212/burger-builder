import { updateObject } from "../../../shared/utility"

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

export const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedState);
};

export const removeIngredient = (state, action) => {
  const updatedIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
  };
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedSt);
};

export const setIngredients = (state, action) => {
  const { salad, bacon, cheese, meat } = action.ingredients;
  return updateObject(state, {
    ingredients: {
      salad,
      bacon,
      cheese,
      meat
    },
    totalPrice: 4,
    error: false,
    building: false
  });
};

export const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true });
};
