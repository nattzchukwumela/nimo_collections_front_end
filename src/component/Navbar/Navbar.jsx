

import search from '../../assets/icons/search-outline.svg'
import heart from '../../assets/icons/heart-outline.svg'
import cart from '../../assets/icons/cart-outline.svg'
import './navbar.css'
import { Link } from 'react-router-dom';


export function Navbar() {
    return (
        <header>
            <div className="logo">
                <h2>Nimo-Collections</h2>
            </div>
            <nav>
                <ul>
                    <li><Link to='/men'>Men</Link></li>
                    <li><Link to='/women'>Women</Link></li>
                    <li><Link to='/children'>Children</Link></li>
                    <li><Link to='/latest'>Latest & Trending</Link></li>
                </ul>
            </nav>
            <div className='search-section'>
                <label>
                    <input type="search" name="search" id="search" placeholder='Search' />
                    <button type="submit" title='submit button'>
                        <img src={search} alt="" width="25px" />
                    </button>
                </label>
                <button className='nav-btn'>
                    <img src={heart} alt="" width="25px" />
                </button>
                <button className='nav-btn'>
                    <img src={cart} alt="" width="25px" />
                </button>
            </div>
        </header>
    )
}
