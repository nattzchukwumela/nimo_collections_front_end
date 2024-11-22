import { useParams } from "react-router-dom"
import { CLOTHS_DATA } from "../../db/CLOTHS_DATA";
import { Navbar } from '../../component/Navbar/Navbar';
import { Footer } from "../../component/Footer/Footer";
import './pdp.css'
import { useMemo } from "react";
import { useDocumentTitle } from "../../utility/hooks/useDocumentTitle";

export function PDP() {

    const { id } = useParams();

    const product = useMemo(() => {
        return CLOTHS_DATA.men.find(item => item.id === id);
    }, [id])

    useDocumentTitle(`${product?.name} - Nimo Collections`);

    if (!product) {
        return (<>
            <h1>Product not found</h1>
        </>)
    }
    else if (product) {
        return (<>
            <Navbar />
            <div className="pdp-container">
                <div className="grid">
                    <section className="pdp-image">
                        <img src={product.image} alt="" />
                    </section>
                    <section className="item-details">
                        <div className="one">
                            <h1 aria-label={`Product Name: ${product.name}`}>{product.name}</h1>
                            <p aria-describedby="product-description">{product.description}</p>
                        </div>
                        <div className="two">
                            <span
                                id="item_price"
                                aria-label={`Price: ${product.price}`}
                            >
                                ${product.price.toFixed(2)}
                            </span>
                            <div className="btn-con">
                                <button
                                    type="button"
                                    className="btn buy-now"
                                    aria-label="Purchase this item immediately"
                                >
                                    Buy Now
                                </button>
                                <button
                                    type="button"
                                    className="btn add-to-cart"
                                    aria-label="Add item to shopping cart"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>)
    }
}