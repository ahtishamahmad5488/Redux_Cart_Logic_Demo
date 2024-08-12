import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from './constant';

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

export function increaseQuantity(id) {
  return {
    type: INCREASE_QUANTITY,
    id: id,
  };
}

export function decreaseQuantity(id) {
  return {
    type: DECREASE_QUANTITY,
    id: id,
  };
}
