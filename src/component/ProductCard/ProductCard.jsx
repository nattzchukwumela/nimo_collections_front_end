import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useState } from 'react';
import './productcard.css'
export const ProductCard = ({ path, image, name, price, description }) => {

    const [isHovered, setIsHovered] = useState(false)


    // const onMouseOver = useEffect(() => {
    //     if (!mouseOver) {
    //         setMouseOver(true)
    //     } else {
    //         setMouseOver(false)
    //     }
    // }, [mouseOver])

   

    return (
        <div className='men-section-container-item'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link to={`/pdp/${path}`} >
                <img src={image} alt={name} />
                <h3 className="product-name">{name}</h3>
                <p className='product-price'>£{price}</p>
                <p>{description}</p>
            </Link>
            <button
                type="button"
                className="btn-main"
                style={{ opacity: isHovered === true ? 1 : 0 }}
            >Add to cart</button>
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
    path: PropTypes.string.isRequired,
}