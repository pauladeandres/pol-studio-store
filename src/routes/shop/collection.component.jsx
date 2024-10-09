import { useContext } from "react";

import './collection.styles.scss'

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

const Collection = () => {
    const { products } = useContext(ProductsContext)
    return (
        <div className="page-template collection">
            <div className="product-grid">
                {
                    products.map((product) => {
                        return (
                            <ProductCard key={ product.id } product={product}></ProductCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Collection;