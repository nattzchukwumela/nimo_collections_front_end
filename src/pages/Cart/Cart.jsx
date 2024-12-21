import { Link } from 'react-router-dom';
import { Footer } from '../../component/Footer/Footer';
import { Navbar } from '../../component/Navbar/Navbar';
import './cart.css';
import cartCartoon from '../../assets/cart/cart.jpeg';
import { useDocumentTitle } from '../../utility/hooks/useDocumentTitle';
import { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';

export function Cart() {
    useDocumentTitle('Cart - Nimo Collections');
    const { cart, removeFromCart, updateCart, cartValues } = useContext(CartContext);
    const cartItems = cartValues.filter((item) => item.quantity > 0);
    console.log(cartItems, 'from cart page');
    
    return (
        <>
            <Navbar />
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-container">
                        <div className="cart-image">
                            <img src={item.img} alt={item.name} height={"100%"} width={"100%"} />
                        </div>
                        <div className="cart-details">
                            <h2>{item.name}</h2>
                            <p>£{item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button type="button" onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                        <div className="cart-quantity">
                            <button type="button" onClick={() => updateCart(item.quantity - 1, item.id)}>-</button>
                            <p>{item.quantity}</p>
                            <button type="button" onClick={() => updateCart(item.quantity + 1, item.id)}>+</button>
                        </div>
                    </div>
                ))
            ) : (
                <section className="cart-container">
                    <div className="cart-image">
                        <img src={cartCartoon} alt="cart img" height={"100%"} width={"100%"} />
                    </div>
                    <h2>Your cart is empty</h2>
                    <p>Explore our collections and uncover amazing offers!</p>

                    <button type="button" className="btn">
                        <Link to="/shop">Start Shopping</Link>
                    </button>
                </section>
            )}
            <Footer />
        </>
    );
}
