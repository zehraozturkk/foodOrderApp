import React, { useRef, useState } from 'react';
import Input from "../../UI/Input";
import styles from "./MealForm.module.css"

const MealForm = (props) =>{

    const [amountisValid, setAmountisValid]= useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;//that value always a string, even if the input type of number
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber>5){
           setAmountisValid(false);

            return;
        }
        
        props.onAddToCart(enteredAmountNumber);
    }

    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <Input 
                ref = {amountInputRef}
                title = "Amount" 
                input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button >+ Add</button>
            {!amountisValid && <p>Please enter a valid amount</p>}
        </form>

    )
}

export default MealForm;