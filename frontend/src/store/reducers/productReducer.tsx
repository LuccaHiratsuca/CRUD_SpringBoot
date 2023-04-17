// import actionTypes from '../contants/actionTypes';
import { actionTypes } from '../contants/actionTypes';
import { useContext, useReducer } from 'react';
// import contextProduct from '../../context/contextProduct';

interface IProductReducer {
    type: string
    payload: any
    state: any
}


// const initialState = useContext(contextProduct); 

const initialState = {
    products: [
        {
            id: 1,
            name: "Product 1",
            description: "Description 1"
        }
    ]	
}

export const productReducer = (state = initialState, { type, payload }: IProductReducer) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};  
