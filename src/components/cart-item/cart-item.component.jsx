
import './cart-item.styles.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CartItem = ({ cartItem }) => {

    const { name, quantity, imageUrl } = cartItem

    const { removeItemFromCart, increaseItemQuantityInCart, decreaseItemQuantityInCart } = useContext(CartContext);

    return(
        <>
        <div className='cart-item'>
            <div className='cart-image-container'>
                    <img src={`${imageUrl}`}></img>
            </div>
            <div className='cart-product-info'>
                <div className='cart-product-details'>
                        <div className='cart-item-title'>{name}</div>
                        <div>
                            Quantity: 
                            <span className='quantity-button' onClick={() => decreaseItemQuantityInCart(cartItem)}>-</span>
                            {quantity}
                            <span className='quantity-button'  onClick={() => increaseItemQuantityInCart(cartItem)}>+</span>
                        </div>
                        <div>Size:</div>
                        <div>Color:</div>
                </div>
                    <Button text='Eliminar' buttonType={'text'} onClick={() => removeItemFromCart(cartItem)}></Button>
            </div>
        </div>
        </>
    )
}

export default CartItem