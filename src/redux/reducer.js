import {ADD_CART, AMOUNT_INFO, LOGIN_INFO, QTY_CART, REMOVE_CART } from './actions'
import data from '../components/data/data';

const products=data.map(item=>{
    return item
})

const initialState={
    items:products,
    cart:[],
    amount:{},
    userInfo:{}
}

const reducer =(state=initialState,action)=>{
    console.log(state)
    switch(action.type){
        case ADD_CART:
            const product=state.items.find(item=>item.id===action.payload.id)
            const alreadyInCart= state.cart.find(item=>item.id===action.payload.id? true: false)
            return{
                ...state,
                cart:alreadyInCart? state.cart.map(item=>item.id===action.payload.id? {...item,qty:item.qty+1} : item):
                [...state.cart,{...product , qty:1}]
            }

        case REMOVE_CART:
            const remainingItems= [...state.cart].filter(item=>item.id !== action.payload.id)
            return{
                ...state,
                cart:[...remainingItems],
            }

        case QTY_CART:
            const adjustQuantity= state.cart.map(item=>item.id===action.payload.id? {...item, qty:parseInt(action.payload.qty)}: item)
            return{
                ...state,
                cart: [...adjustQuantity],
            }

        case AMOUNT_INFO:
            return {
                ...state,
                amount: action.payload
            }

        case LOGIN_INFO:
            return{
                ...state,
                userInfo:action.payload
            }

        default:
            return state;
    }
}

export default reducer;