import { Link } from 'react-router-dom';
import { Footer } from '../../component/Footer/Footer';
import { Navbar } from '../../component/Navbar/Navbar';
import './cart.css';
import cartCartoon from '../../assets/cart/cart.jpeg';
import { useDocumentTitle } from '../../utility/hooks/useDocumentTitle';
import { useContext, useState } from 'react';
import { CartContext } from '../../Context/cartContext';

export function Cart() {
    useDocumentTitle('Cart - Nimo Collections');
    const { removeFromCart, updateCart, cartValues } = useContext(CartContext);
    const cartItems = cartValues.filter((item) => item.quantity > 0);
    // const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    // const [inputValue, setInputValue] = useState(1);
    console.log(cartItems, 'from cart page');
    
    const handleChange = (e, item) => {
        const newQuantity = parseInt(e.target.value, 10);
        updateCart(newQuantity, item.id);
    };

    return (
        <>
            <Navbar />
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-container" style={{ display: 'flex', gap: '1rem' }}>
                        <div className="cart-image">
                            <img src={item.img} alt={item.name} height={"100%"} width={"100%"} />
                        </div>
                        <div className="cart-details">
                            <h2>{item.name}</h2>
                            <p>£{item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button type="button" onClick={() => removeFromCart(item.id)}>Remove</button>

                            <div className="cart-quantity">
                            <button className='btn-cart' type="button" onClick={() => updateCart(item.quantity - 1, item.id)}>-</button>
                            <label htmlFor="cart-quantity">
                                <input type="number" onChange={(e) => handleChange(e, item)}  value={item.quantity} id='update-quantity' />
                            </label>
                            <button className='btn-cart' type="button" onClick={() => updateCart(item.quantity + 1, item.id)}>+</button>
                        </div>
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
