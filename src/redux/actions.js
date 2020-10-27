export const ADD_CART= 'ADD_CART';
export const REMOVE_CART= 'REMOVE_CART';
export const QTY_CART= 'QTY_CART';
export const AMOUNT_INFO= 'AMOUNT_INFO';
export const LOGIN_INFO= 'LOGIN_INFO';
export const DELIVERY_DETAILS='DELIVERY_DETAILS';

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

export const amountInfo=(amount, items)=>{
    return{
        type: AMOUNT_INFO,
        payload:{amount, items}
    }
}

export const loginInfo=(info)=>{
    return{
        type: LOGIN_INFO,
        payload: info
    }
}

export const deliveryDetails=(info)=>{
    return{
        type:DELIVERY_DETAILS,
        payload:info
    }
}