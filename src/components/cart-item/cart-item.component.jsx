import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {

    const { name, quantity, imageUrl } = cartItem

    return(
        <>
        <div className='cart-item'>
            <div className='cart-image-container'>
                    <img src={`${imageUrl}`}></img>
            </div>
            <div className='cart-product-info'>
                    <div>{name}</div>
                    <div>Quantity: <span>-</span>{quantity}<span>+</span></div>
                    <div>Size:</div>
                    <div>Color:</div>
                    <div>Eliminar</div>
            </div>
        </div>
        </>
    )
}

export default CartItem