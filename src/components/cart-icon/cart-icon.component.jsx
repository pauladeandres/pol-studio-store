import { ReactComponent as ShoppingBag } from '../../assets/icons/bag.svg'

import './cart-icon.styles.scss'

const CartIcon = () => {
    return (
        <div className='cart-icon'>
            <ShoppingBag ></ShoppingBag>
            <span className='cart-quantity'>20</span>
        </div>
    )
}

export default CartIcon