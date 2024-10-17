import { useContext } from 'react'

import { ReactComponent as ShoppingBag } from '../../assets/icons/bag.svg'

import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.scss'

const CartIcon = () => {

    const { cartQuantity } = useContext(CartContext);
    console.log('cart quantity', cartQuantity)

    return (
        <div className='cart-icon'>
            <ShoppingBag ></ShoppingBag>
            <span className='cart-quantity'>{ cartQuantity }</span>
        </div>
    )
}

export default CartIcon