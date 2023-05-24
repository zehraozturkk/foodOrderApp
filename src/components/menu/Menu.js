import React from "react";
import "./Menu.css"

const Menu = () =>{
    const foods = [{
        name: "Sushi",
        increment: "fish and cucumber",
        price: "$22.99"
    },
    {
        name: "Chicken",
        increment: "kekis",
        price: "$40.99"

    }
]
    return(
        <div>
            {foods.map((food => (
                food.name
            )))}
        </div>
    )

}

export default Menu;