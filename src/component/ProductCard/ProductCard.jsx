import PropTypes from "prop-types"

export const ProductCard = ({ image, name, price, description }) => {
    return (
        <div className='men-section-container-item'>
            <img src={image} alt={name} />
            <h3 className="product-name">{name}</h3>
            <p className='product-price'>£{price}</p>
            <p>{description}</p>
            <button>Add to cart</button>
        </div>
    )
}
{/* <div className='men-section-container-item'>
<img src={shots} alt="" />
<h3 className="product-name">Hoodie</h3>
<p className='product-price'>£400</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
<button>Add to cart</button>
</div>   */}
//   onClick={() => handleAddToCart()}

ProductCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
}