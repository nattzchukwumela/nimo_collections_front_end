import { useState, useRef } from "react";
import './addproduct.css'

export function AddProduct() {
    const name = useRef('');
    const price = useRef('');
    const [description, setDescription] = useState('');
    const img = useRef('');
    const category = useRef('');
    const quantity = useRef('');
    const brand = useRef('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const addProduct = import.meta.env.VITE_API_ADD_NEW_PRODUCT

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };

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
        setError(null);
        setSuccess(null);
    
        try {
            const productData = {
                name: name.current.value,
                price: price.current.value,
                description: description,
                img: selectedFile,
                slug: name.current.value.toLowerCase().replace(/\s+/g, '-'),
                quantity: quantity.current.value,
                brand: brand.current.value,
                category: category.current.value,
            };
    
            const formData = new FormData();
            console.log(productData);
            Object.keys(productData).forEach(key => {
                formData.append(key, productData[key]);
            });
            setProduct(productData);
            const response = await fetch(addProduct, {
                method: 'POST',
                body: formData
            });
    
            const data = await response.json();
            
            if (response.ok) {
                setSuccess(data);
                console.log(data);
            } else {
                throw new Error(data.message || 'Failed to add product');
            }
        } catch(err) {
            setError(err.message);
        } finally {
            setLoading(false);

        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }


   const handleTextArea = (e) => {
        setDescription(e.target.value);
        console.log(description);
    }

 
    return (
        <form className="add-prod" onSubmit={handleSubmit} >
            <h2>Add Product</h2>
            <div className="form-con con1">
            <label htmlFor="name">
            <input id="name" type="text" onChange={handleChange} name="name" placeholder="Name" ref={name} />
            </label>
            <label htmlFor="brand">
            <input type="text" id="brand" onChange={handleChange} name="brand" placeholder="Brand name" ref={brand} />
            </label>
            <label htmlFor="category">
            <input id="category" type="text" onChange={handleChange} name="category" placeholder="Category" ref={category} />
            </label>
            </div>
            <div className="form-con con2">
            <textarea type="text" onChange={handleTextArea} name="description" placeholder="Description" value={description}>
            </textarea>
            </div>
            <div className="form-con con3">
                <label htmlFor="price">
            <input id="price" type="number" onChange={handleChange} name="price" placeholder="Price" ref={price} />
            </label>
            <label htmlFor="quantity">
            <input type="number" onChange={handleChange} name="quantity" placeholder="Quantity" ref={quantity} />
            </label>
            <label htmlFor="img-file">
            <input type="file" id="img-file" name="img-file" onChange={handleFileChange}  placeholder="Image URL" ref={img} />
            </label>
            </div>
            <button className="btn-submit" type="submit">Add Item +</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {success && <p style={{color: 'green'}}>{success.name}</p>}
            {loading && <p style={{color: 'yellow'}}>Loading...</p>}
            {success && !loading && <p>Product added successfully</p>}
        </form>
        )
}