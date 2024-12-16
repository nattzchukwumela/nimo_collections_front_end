import { useEffect, useState } from "react";
import { AddProduct } from "../AddProduct/AddProduct";
import "./product.css";

// Products Component
export const Products = () => {

    const [items, setItems] = useState([])
    const productApi = import.meta.env.VITE_API_GET_ALL_PRODUCTS
    const deleteApi = import.meta.env.VITE_API_DELETE_PRODUCT
    useEffect(() => {
        fetch(productApi)
        .then(res => res.json())
        .then(data => setItems(data))
        .catch(err => console.log(err))
        }, [items, productApi])

    const [addProd, setAddProd] = useState(null)
    
    const handleDelete = (id) => {
        fetch(`${deleteApi + id}/`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
    
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
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
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
