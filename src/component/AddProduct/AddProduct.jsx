import { useState, useRef } from "react";
import './addproduct.css'

export function AddProduct() {
    const name = useRef(null);
    const price = useRef(null);
    const description = useRef(null);
    const img = useRef(null);
    const category = useRef(null);
    const quantity = useRef(null);
    const brand = useRef(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);

    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
        img: "",
        slug: "",
        quantity: "",
        brand:"",
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append("name", name.current.value);
        formData.append("price", price.current.value);
        formData.append("description", description.current.value);
        formData.append("img", img.current.value);
        formData.append("category", category.current.value);
        formData.append("quantity", quantity.current.value);
        formData.append("brand", brand.current.value);
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }

    return (
        <form className="add-prod" onSubmit={handleSubmit} >
            <h2>Add Product</h2>
            <div className="form-con con1">
            <input type="text" onChange={handleChange} name="name" placeholder="Name" ref={name} />
            <input type="text" onChange={handleChange} name="brand" placeholder="Brand name" ref={brand} />
            <input type="text" onChange={handleChange} name="category" placeholder="Category" ref={category} />
            </div>
            <div className="form-con con2">
            <textarea type="text" onChange={()=>handleChange()} name="description" placeholder="Description" ref={description}>
            </textarea>
            </div>
            <div className="form-con con3">
            <input type="number" onChange={()=>handleChange()} name="price" placeholder="Price" ref={price} />
            <input type="number" onChange={()=>handleChange()} name="quantity" placeholder="Quantity" ref={quantity} />
            <input type="file" name="img" placeholder="Image URL" ref={img} />
            </div>
            <button className="btn-submit" type="submit">Submit</button>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
            {loading && <p>Loading...</p>}
            {!loading && <p>Product added successfully</p>}
        </form>
        )
}