
// import shots from '../../assets/products/men/hood.jpg';
import './main.css'
import { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { ProductCard } from '../ProductCard/ProductCard';
import { useDocumentTitle } from '../../utility/hooks/useDocumentTitle';

export const Main = () => {

    const items = import.meta.env.VITE_API_GET_ALL_PRODUCTS

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useDocumentTitle('Home - Nimo Collections');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(items);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            setData(json);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []); // The empty array ensures this runs only once on mount
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    
      if (!data) {
        return null; // Or a message like "No data available"
      }

    return (<>
        <Navbar />
        <main>
            <section className='product-row men-section'>

                <div className='men-section-container'>
                    {data?.map(item => {
                        return <ProductCard
                            key={item.id}
                            image={item.img}
                            name={item.name}
                            price={item.price}
                            path={item.id}
                            description={item.description}
                        />
                    })}
                </div>
            </section>
        </main>
        <Footer />
    </>
    )
}
