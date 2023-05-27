import React from "react";
import Card from "../UI/Card";
import styles from "./Menu.module.css"
import MealItem from "./mealItem/MealItem";

const Menu = () =>{
    const foods = [
        {
            id: "d1",
            name: "Sushi",
            description: "fish and cucumber",
            price: 22.99
        },
        {
            id: "d2",
            name: "Chicken",
            description: "kekis",
            price: 40.99

        },
        {
            id: "d3",
            name: "Chicken",
            description: "kekis",
            price: 40.99
        }
]
    return(
        
        <section className={styles.meals}>
        <Card>
            <ul>
                {foods.map((food => (
                    <MealItem
                        id ={food.id} 
                        key = {food.id}
                        name= {food.name}
                        description= {food.description}
                        price= {food.price}
                    />               
                )))}
            </ul>
            
        </Card>
        </section>
    )

}

export default Menu;