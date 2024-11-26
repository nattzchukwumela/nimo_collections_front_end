import PRODUCT_ORDER from "../../db/PRODUCT_ORDER";

export function ProductOrder() {
    // function getTotalPrice(array) {
    //     let totalPrice = 0;
    //     for (let i = 0; i < array.length; i++) {
    //         totalPrice += array[i].price; // Use += instead of +
    //     }
    //     return totalPrice; // Return the total price
    // }

    // console.log(product.products); // Log the products array
    // const totalPrice = getTotalPrice(product.products); // Call the getTotalPrice function
    return (
        <section className="admin-sec-2">
            <h2>Product Order</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Order Id</th>
                        <th>Price</th>
                        <th>Total Stock</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {PRODUCT_ORDER.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.customerName}</td>
                                <td>{product.orderNumber}</td>
                                <td>{product.totalAmount}</td>
                                <td> N/A</td>
                                <td>{product.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
    );
}