import { Link } from 'react-router-dom'

import './cart-drawer.styles.scss'
import { ReactComponent as CloseButton } from '../../assets/icons/close.svg'
import Button from '../button/button.component'

const CartDrawer = () => {
    return (
        <div className='cart-drawer-container'>
            <div className='cart-drawer-overlay'></div>
            <div className='cart-drawer'>
                <div className='close-cart-drawer'><CloseButton></CloseButton></div>
                <div className='cart-items-container'>
                    <div className='empty-message'>Your cart is empty</div>
                    ITEMS
                </div>
                <Link className='icon-link' to='/cart' >
                    <Button text='Go to checkout'></Button>
                </Link>
            </div>
        </div>
    )
}

export default CartDrawer