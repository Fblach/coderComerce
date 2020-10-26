import React from 'react';
import cart from '../images/cart.png'
import Image from 'react-bootstrap/Image'

function CartIcon(){

    return(
        <Image src={cart} width="30" height="30" alt="" className="mr-3" />
    )}
export default CartIcon;