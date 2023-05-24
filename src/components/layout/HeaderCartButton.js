import style from "./HeaderCartButton.module.css"

const HeaderCartButton = props =>{
    return(
        <>
            <button className={style.button}>
                <span >
                    Your Cart
                </span>
                <span className={style.badge}>
                    3
                </span>

            </button>
        </>
    )

}

export default HeaderCartButton;