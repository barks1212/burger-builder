import * as actionTypes from "../actions/actionTypes";
import * as reducerFuncs from "./functions/order";

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return reducerFuncs.purchaseInit(state, action);

    case actionTypes.PURCHASE_BURGER_START:
      return reducerFuncs.purchaseBurgerStart(state, action);

    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return reducerFuncs.purchaseBurgerSuccess(state, action);

    case actionTypes.PURCHASE_BURGER_FAIL:
      return reducerFuncs.purchaseBurgerFail(state, action);

    case actionTypes.FETCH_ORDERS_START:
      return reducerFuncs.fetchOrdersStart(state, action);

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return reducerFuncs.fetchOrdersSuccess(state, action);

    case actionTypes.FETCH_ORDERS_FAIL:
      return reducerFuncs.fetchOrdersFail(state, action);

    default:
      return state;
  }
};

export default reducer;
