import { AdminDetails } from "../../component/AdminDetails/AdminDetails";
import { Footer } from "../../component/Footer/Footer";
import { Navbar } from "../../component/Navbar/Navbar";
import { ProductOrder } from "../../component/ProductOrdered/ProductOrdered";
import { ProductStatus } from "../../component/ProductStatus/ProductStatus";
import './admin.css'

export function Admin() {
    return (<>
        <Navbar />
        <main>
            <AdminDetails />
            <section id="table-container">
                <ProductStatus />
                <ProductOrder />
            </section>
        </main>
        <Footer />
    </>)
}