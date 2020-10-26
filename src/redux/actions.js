export const ADD_CART= 'ADD_CART';
export const REMOVE_CART= 'REMOVE_CART';
export const QTY_CART= 'QTY_CART';

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