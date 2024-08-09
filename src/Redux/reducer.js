import {ADD_TO_CART, REMOVE_TO_CART} from './constant';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];

    case REMOVE_TO_CART:
      let result = state.filter(index => {
        return index !== action.data;
      });
      return [...result];
    default:
      return state;
  }
};
