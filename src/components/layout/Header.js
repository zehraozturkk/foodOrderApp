import React from "react";
import styles from "./Header.module.css";
import img from "../../assets/desert.jpeg"
import HeaderCartButton from "./HeaderCartButton";

const Header = () =>{
    return(
    <>
        <header className={styles.header}>
            <h1>ReactDeserts</h1>
            <HeaderCartButton/>
        </header>
        <div className={styles['main-image']}>
            <img src={img} alt="a table of desert"></img>
        </div>
        
    </>)

}

export default Header;