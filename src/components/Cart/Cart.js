import React from "react";
import styles from "./Cart.module.css"
import ShoppingCart from "../UI/ShoppingCart";


const Cart = (props) =>{
    const cartItem = <ul>{[{id: "c1", name: "sufle", amount: 2, price: 33.66}].map(item => (<li>{item.name}</li>))}</ul>
    return(
        <ShoppingCart onClose={props.onCloseCart}>
            <div className={styles["cart-items"]}>
                {cartItem}
            
                <div className={styles.total}>
                    <span>Total Amount</span>
                    <span>44.66</span>
                </div>
                <div className={styles.actions}>
                    <button onClick={props.onCloseCart}>Close</button>
                    <button>Order</button>

                </div>
            </div>
        </ShoppingCart>
    )
}

export default Cart;