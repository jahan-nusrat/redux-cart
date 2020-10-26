import {ADD_CART, QTY_CART, REMOVE_CART } from './actions'
import data from '../components/data/data';

const products=data.map(item=>{
    return item
})

const initialState={
    items:[products],
    cart:[],
}

const reducer =(state=initialState,action)=>{
    console.log(state)
    switch(action.type){
        case ADD_CART:
            const product=state.items[0].find(item=>item.id===action.payload.id)
            const alreadyInCart= state.cart.find(item=>item.id===action.payload.id? true: false)
            return{
                ...state,
                cart:alreadyInCart? state.cart.map(item=>item.id===action.payload.id? {...item,qty:item.qty+1} : item):
                [...state.cart,{...product , qty:1}]
            }

        case REMOVE_CART:
            const remainingItems= [...state.cart].filter(item=>item.id !== action.payload.id)
            return{
                cart:[...remainingItems]
            }

        case QTY_CART:
            const adjustQuantity= state.cart.map(item=>item.id===action.payload.id? {...item, qty:action.payload.qty}: item)
            return{
                cart: [...adjustQuantity]
            }

        default:
            return state;
    }
}

export default reducer;