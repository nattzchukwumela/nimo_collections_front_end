
// import shots from '../../assets/products/men/hood.jpg';
import './main.css'
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { ProductCard } from '../ProductCard/ProductCard';
import { CLOTHS_DATA } from '../../db/CLOTHS_DATA';
export const Main = () => {
    return (<>
        <Navbar />
        <main>
            <section className='product-row men-section'>
                <h2>Men</h2>
                <div className='men-section-container'>
                    {CLOTHS_DATA.men.map(item => {
                        return <ProductCard
                            key={item.id}
                            image={item.image}
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
