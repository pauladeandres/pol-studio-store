import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
    const { imgUrl , title } = category
    return (
        <div className="category-container">
            <div className="category-background-image" style={{
                backgroundImage: `url(${imgUrl})`
            }}></div>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p className='category-button'>Shop now</p>
            </div>
        </div>
    )
}

export default CategoryItem