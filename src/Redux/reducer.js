import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_TO_CART,
} from './constant';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    ///------- Add To Cart
    case ADD_TO_CART:
      return [...state, {...action.data, qty: 1}];

    ////----Remove to cart
    case REMOVE_TO_CART:
      let result = state.filter(item => {
        return item.id !== action.data.id;
      });
      return [...result];

    ///-------Increase Quantity
    case INCREASE_QUANTITY:
      return state.map(item =>
        item.id === action.id ? {...item, qty: item.qty + 1} : item,
      );

    ///---------Decrease Quantity
    case DECREASE_QUANTITY:
      return state
        .map(item =>
          item.id === action.id ? {...item, qty: item.qty - 1} : item,
        )
        .filter(item => item.qty > 0);

    default:
      return state;
  }
};
