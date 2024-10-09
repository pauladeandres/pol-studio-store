import './product-card.styles.scss'

import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg'

import Button from '../button/button.component'

const ProductCard = ( { product } ) => {
    return(
        <div className='product-card'>
            <div className='collection-img-container'>
                <div className='product-img' style={{ backgroundImage: `url(${ product.imageUrl })`}}></div>
                <div className='product-img-background'>
                    <div>{product.name} img2</div>
                </div>
                <Button text='Add to cart'></Button>
            </div>
            <div className='product-info'>
                <div>
                    <div className='product-name'>{product.name}</div>
                    <div className='product-price'>{product.price}</div>
                </div>
                <div className='product-wishlist-icon'>
                    <HeartIcon></HeartIcon>
                </div>
            </div>
        </div>
    )
}
export default ProductCard