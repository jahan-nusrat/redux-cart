import {ADD_CART,REMOVE_CART,QTY_CART} from './types';

export const addToCart=(id)=>{
    return{
        type: ADD_CART,
        payload:{
            id
        }
    }
}

export const removeFromCart=(id)=>{
    return{
        type: REMOVE_CART,
        payload:{
            id
        }
    }
}

export const cartQty=(id, value)=>{
    return{
        type: QTY_CART,
        payload:{
            id,
            qty: value
        }
    }
}