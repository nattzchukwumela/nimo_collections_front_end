import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useContext, useState } from 'react';
import { CartContext } from "../../Context/cartContext";
import './productcard.css'
export const ProductCard = ({ id, image, name, price, description }) => {
const { addToCart, removeFromCart, updateCart, cart, cartValues } = useContext(CartContext)
const [isHovered, setIsHovered] = useState(false)

    return (
        <div className='men-section-container-item'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link to={`/pdp/${id}`} >
                <img src={image} alt={name} />
                <h3 className="product-name">{name}</h3>
                <p className='product-price'>£{price}</p>
                <p>{description}</p>
            </Link>
            <button
                type="button"
                className="btn-main"
                style={{ opacity: isHovered === true ? 1 : 0 }}
                onClick={() => addToCart(id)}
            >Add to cart</button>
        </div>
    )
}


ProductCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}