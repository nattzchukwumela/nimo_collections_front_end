import search from '../../assets/icons/search-outline.svg'
import heart from '../../assets/icons/heart-outline.svg'
import cart from '../../assets/icons/cart-outline.svg'
import './navbar.css'
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <header role="banner">
            <div className="logo">
                <h2>Nimo-Collections</h2>
            </div>
            <nav role="navigation" aria-label="Main navigation">
                <ul>
                    <li><Link to='/' aria-current="page">Home</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/about-us'>About Us</Link></li>
                    <li><Link to='/latest'>Latest & Trending</Link></li>
                </ul>
            </nav>
            <div className='search-section'>
                <label>
                    <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder='Search'
                        aria-label="Search products"
                    />
                    <button
                        type="submit"
                        aria-label="Submit search"
                    >
                        <img src={search} alt="" role="presentation" width="25px" />
                    </button>
                </label>
                <button className='nav-btn' aria-label="Favorites">
                    <img src={heart} alt="" role="presentation" width="25px" />
                </button>
                <button className='nav-btn'>
                    <Link to="/cart" aria-label="Shopping cart">
                        <img src={cart} alt="" role="presentation" width="25px" />
                    </Link>
                </button>
            </div>
        </header>
    )
}