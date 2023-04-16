// import actionTypes from '../contants/actionTypes';
import { actionTypes } from '../contants/actionTypes';
// import { contextUser } from '../context/contextUser';



interface IProductReducer {
    type: string
    payload: any
    useState: any
}


export const productReducer = (state: IProductReducer, { type, payload }: IProductReducer) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}
