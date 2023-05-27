import { useContext } from "react";

import CartContext from "../../store/cart-context";
import style from "./HeaderCartButton.module.css"

const HeaderCartButton = props =>{

    const cartCtx = useContext(CartContext);//burada cartcontext içerisindeki değerlere ulaşabiliriz

    //reduce() is an array method that iterates each element"her öğe için dolaşan bir dizi metodu". 2 değer alır calback function and initial value
    const numberofCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber+item.amount;
    }, 0);


    return(
        <button onClick={props.onClick} className={style.button}>
            <span >
                Your Cart
            </span>
            <span className={style.badge}>
                {numberofCartItems}
            </span>
        </button>
    )

}

export default HeaderCartButton;