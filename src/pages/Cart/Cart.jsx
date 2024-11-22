import { Link } from 'react-router-dom';
import { Footer } from '../../component/Footer/Footer';
import { Navbar } from '../../component/Navbar/Navbar';
import './cart.css'
import cart from '../../assets/cart/cart.jpeg'

export function Cart() {
    return (<>
        <Navbar />
        <section className="cart-container">
            <div className="cart-image">
                <img src={cart} alt="cart img" height={"100%"} width={"100%"} />
            </div>
            <h2>Your cart is empty</h2>
            <p>Explore our collections and uncover amazing offers!</p>

            <button type="button" className="btn">
                <Link to="/shop">Start Shopping</Link>
            </button>
        </section>
        <Footer />
    </>)
}