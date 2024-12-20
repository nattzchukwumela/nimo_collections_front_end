import { useParams } from "react-router-dom"
import { Navbar } from '../../component/Navbar/Navbar';
import { Footer } from "../../component/Footer/Footer";
import './pdp.css'
import { useState, useEffect } from "react";
import { useDocumentTitle } from "../../utility/hooks/useDocumentTitle";

export function PDP() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const item = import.meta.env.VITE_API_GET_PRODUCT_BY_ID
    const { id } = useParams();

     useEffect(() => {
                const fetchData = async () => {
                  try {
                    const response = await fetch(`${item + id}`);
                    if (!response.ok) {
                      throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const items = await response.json();
                    setData(items);
                  } catch (error) {
                    setError(error);
                  } finally {
                    setLoading(false);
                  }
                };
            
                fetchData();
              }, [data, id, item]); // The empty array ensures this runs only once on mount
            
    useDocumentTitle(`${data?.name} | Nimo Collections`);

    if (!data) {
        return (<>
            <h1>Product not found</h1>
        </>)
    }
    else if (data) {
        return (<>
            <Navbar />
            <div className="pdp-container">
                <div className="grid">
                    <section className="pdp-image">
                        <img src={data.img} alt="" />
                    </section>
                    <section className="item-details">
                        <div className="one">
                            <h1 aria-label={`Product Name: ${data.name}`}>{data.name}</h1>
                            <p aria-describedby="product-description">{data.description}</p>
                        </div>
                        <div className="two">
                            <span
                                id="item_price"
                                aria-label={`Price: ${data.price}`}
                            >
                                ${data.price}
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