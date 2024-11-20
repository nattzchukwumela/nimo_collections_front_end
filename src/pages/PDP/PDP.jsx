import { useParams } from "react-router-dom"
import { CLOTHS_DATA } from "../../db/CLOTHS_DATA";
import { Navbar } from '../../component/Navbar/Navbar';
import { Footer } from "../../component/Footer/Footer";
import './pdp.css'

export function PDP() {

    const { id } = useParams();

    const product = CLOTHS_DATA.men.find(item => item.id === id);

    return (<>
        <Navbar />
        <div className="pdp-container">
            <div className="grid">
                <section className="pdp-image">
                    <img src={product.image} alt="" />
                </section>
                <section className="item-details">
                    <div className="one">
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                    </div>
                    <div className="two">
                        <span id="item_price">{product.price}</span>
                        <div className="btn-con">
                            <button className="btn buy-now">Buy Now</button>
                            <button className="btn add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <Footer />
    </>)
}