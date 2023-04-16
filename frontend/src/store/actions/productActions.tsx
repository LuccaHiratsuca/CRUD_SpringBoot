import { actionTypes } from "../contants/actionTypes"
import IApiBack from "../../types/interfaceApiBack"

export const setProducts = (products:IApiBack) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (product:IApiBack) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}
