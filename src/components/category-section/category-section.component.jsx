import './category-section.styles.scss'
import CategoryItem from '../category-item/category-item.component'
import categoryImage from './categories.png'

const categories = [
    {
        id: 1,
        title: 'Shirts',
        imgUrl: categoryImage,
        link: '/shirts'
    },
    {
        id: 2,
        title: 'Dresses',
        imgUrl: categoryImage,
        link: '/dresses'
    },
    {
        id: 3,
        title: 'Kids',
        imgUrl: categoryImage,
        link: '/kids'
    },
    {
        id: 4,
        title: 'Shoes',
        imgUrl: categoryImage,
        link: '/shoes'
    }
]

const CategorySection = () => {
    return (
        <div className="home-categories-section">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default CategorySection