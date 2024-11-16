
import { Navbar } from "../../component/Navbar/Navbar";
import { Footer } from "../../component/Footer/Footer";
import { Aside } from "../../component/Aside/Aside";
import { CLOTHS_DATA } from "../../db/data";
import { ProductCard } from "../../component/ProductCard/ProductCard";
import '../index_page.css';

export function Shop() {
    return (<>
        <Navbar />
        <main className="main-men-section">
            <Aside />
            <section className='items-section'>
                <section className='product-row sports-section'>
                    <h2>Mens wear</h2>
                    <div className='men-section-container'>
                        {CLOTHS_DATA.men.map(item => {
                            return <ProductCard
                                key={item.id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                description={item.description} />
                        })}
                    </div>
                </section>
                <section className='product-row sports-section'>
                    <h2>Womens Wear</h2>
                    <div className='men-section-container'>
                        {CLOTHS_DATA.women.map(item => {
                            return <ProductCard
                                key={item.id}
                                image={item.image}
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