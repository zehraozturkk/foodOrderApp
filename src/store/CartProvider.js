import {useReducer } from "react";
import CartContext from "./cart-context";

//with an initial state for the cart
const defaultCartState = {
    items: [],
    totalAmount: 0
};


//state: representing the current state of the cart
//action: representing the action dispatched to update the cart state
const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    
    return defaultCartState;
};

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) =>{
        dispatchCartAction({type: 'ADD_ITEM', item: item});
    };
    const removeItemToCartHandler = (id) =>{
        dispatchCartAction({type: 'REMOVE_ITEM', id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}

export default CartProvider;