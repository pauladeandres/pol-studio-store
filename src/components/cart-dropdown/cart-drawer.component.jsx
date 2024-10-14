import { Link } from 'react-router-dom'
import { useContext } from 'react'

import './cart-drawer.styles.scss'

import { ReactComponent as CloseButton } from '../../assets/icons/close.svg'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { CartContext } from '../../contexts/cart.context'

const CartDrawer = ({ toggleCartDrawer }) => {

    const { cartItems } = useContext(CartContext)

    return (
        <div className='cart-drawer-container'>
            <div className='cart-drawer-overlay' onClick={toggleCartDrawer}></div>
            <div className='cart-drawer'>
                <div className='close-cart-drawer'><CloseButton onClick={toggleCartDrawer}></CloseButton></div>
                <div className='cart-items-container'>
                    <div className='cart-drawer-title'>cart</div>
                    {cartItems.map((productInfo) => <CartItem cartItem={productInfo} key={productInfo.id}></CartItem>)}
                </div>
                <Link className='icon-link' to='/cart' >
                    <Button text='Go to checkout' onClick={toggleCartDrawer}></Button>
                </Link>
            </div>
        </div>
    )
}

export default CartDrawer