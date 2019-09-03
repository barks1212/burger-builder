import * as actionTypes from "../actions/actionTypes";
import * as reducerFuncs from "./functions/burgerBuilder";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return reducerFuncs.addIngredient(state, action);

    case actionTypes.REMOVE_INGREDIENT:
      return reducerFuncs.removeIngredient(state, action);

    case actionTypes.SET_INGREDIENTS:
      return reducerFuncs.setIngredients(state, action);

    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return reducerFuncs.fetchIngredientsFailed(state, action);

    default:
      return state;
  }
};

export default reducer;
