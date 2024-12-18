import { useEffect, useState } from "react";
import { AddProduct } from "../AddProduct/AddProduct";
import { Popup } from "./Popup";
import "./product.css";

// Products Component
export const Products = () => {

    const [items, setItems] = useState([])
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [editId, setEditId] = useState(null)
    const productApi = import.meta.env.VITE_API_GET_ALL_PRODUCTS
    const deleteApi = import.meta.env.VITE_API_DELETE_PRODUCT
    const updateApi = import.meta.env.VITE_API_GET_PRODUCT_BY_ID
    
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
    
    

    const handleEdit = (id) => {
        fetch(`${updateApi + id}/`)
        .then(res => res.json())
        .then(data => setEditId(data))
        .catch(err => console.log(err))
        setIsPopupOpen(!isPopupOpen)
    }
   
    const handlePopup = () => setIsPopupOpen(!isPopupOpen);

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
                                <button className="edit-btn" onClick={()=> handleEdit(item.id)}>Edit</button>
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
        <div>
            <Popup
                isOpen={isPopupOpen}
                popup={handlePopup}
                title={`Edit Item`}
                data={editId}
            />
        </div>
        </>
    );
};
