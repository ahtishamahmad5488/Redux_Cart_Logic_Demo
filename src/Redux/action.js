import {ADD_TO_CART, REMOVE_TO_CART} from './constant';

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}

export function removeToCart(index) {
  return {
    type: REMOVE_TO_CART,
    data: index,
  };
}
