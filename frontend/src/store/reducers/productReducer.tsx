// import actionTypes from '../contants/actionTypes';
import { actionTypes } from '../constants/actionTypes';
import { useContext, useReducer } from 'react';
// import contextProduct from '../../context/contextProduct';

interface IProductReducer {
    type: string
    payload: any
    state: any
}


// const initialState = useContext(contextProduct); 

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, { type, payload }: IProductReducer) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};


export const selectedProductReducer = (state = {}, { type, payload }: IProductReducer) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
}