
import { Navbar } from "../../component/Navbar/Navbar";
import { Footer } from "../../component/Footer/Footer";
import { Aside } from "../../component/Aside/Aside";
// import { CLOTHS_DATA } from "../../db/CLOTHS_DATA";
import { ProductCard } from "../../component/ProductCard/ProductCard";
import '../index_page.css';
import { useDocumentTitle } from "../../utility/hooks/useDocumentTitle";
import { useEffect, useState } from "react";

export function Shop() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const productapiurl = import.meta.env.VITE_API_GET_ALL_PRODUCTS
    useDocumentTitle('Shop - Nimo Collections');

    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await fetch(productapiurl);
        const data = await response.json();
        setData(data);
        }
        catch (err) {
            setError(err);
        }
    }
    fetchData()
    },[])
    

    return (<>
        <Navbar />
        <main className="main-men-section">
            <Aside />
            <section className='items-section'>
                <section className='product-row sports-section'>
                    <h2>Mens wear</h2>
                    <div className='men-section-container'>
                        {data.map(item => {
                            return <ProductCard
                                key={item.id}
                                path={item.id}
                                image={item.img}
                                name={item.name}
                                price={item.price}
                                description={item.description} />
                        })}
                    </div>
                </section>
            </section>
        </main>
        <Footer />
    </>)
}
