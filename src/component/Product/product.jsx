import { useState } from "react";
import { AddProduct } from "../AddProduct/AddProduct";
import "./product.css";

// Products Component
export const Products = () => {
    const [products] = useState([
        { id: 1, name: 'Laptop', price: 999.99, stock: 50 },
        { id: 2, name: 'Smartphone', price: 599.99, stock: 30 },
        { id: 3, name: 'Headphones', price: 199.99, stock: 75 }
    ]);

    const [addProd, setAddProd] = useState(null)
    
    return (
        <>
        <div className="products-content">
            <div className="products-header">
                <h1>Product Management</h1>
                <button type="button"
                onClick={() => setAddProd((prevBoo) => !prevBoo)}
                className="add-product-btn">+ Add New Product</button>
            </div>
            <table className="products-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="add-product-modal" style={{ display: addProd ? 'block' : 'none'}}>
           <AddProduct />
        </div>
        </>
    );
};
