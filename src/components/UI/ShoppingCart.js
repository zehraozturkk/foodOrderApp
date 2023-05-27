import React from 'react'
import ReactDOM from 'react-dom'

import styles from "./ShoppingCart.module.css"


const Backdrop = props =>{
  return <div className={styles.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = (props) =>{
  return(
    <div className={styles.modal}>
      <div className={styles.content}> {props.children}</div>
    </div>

  )

}

//bu kısmı kullanıp creatPortal() kısmında 2. alacğaı değer yerine direkt portalElement yazıp görünümü güzelleştirebilriz
//const portalElement = document.getElementById('overlays');

//this is our main componenet
const ShoppingCart = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('overlays') )}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
    </>
  )
}

export default ShoppingCart;
