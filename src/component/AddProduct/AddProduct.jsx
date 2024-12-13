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
                slug: name.current.value.toLowerCase().replace(/\s+/g, '_'),
                quantity: quantity.current.value,
                brand: {
                    name: brand.current.value,
                    slug: brand.current.value.toLowerCase().replace(/\s+/g, '_'),
                    brand: 1,
                },
                brand_name: brand.current.value,
                category: {
                    name: category.current.value,
                    slug: category.current.value.toLowerCase().replace(/\s+/g, '_'),
                    category: 1,
                },
                category_name: category.current.value,
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
                setProduct(productData);
            } else {
                throw new Error(data.message || 'Failed to add product');
            }
        } catch(err) {
            setError(err.message);
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
        setDescription(value);
        console.log(product)
    }

    // const handleTextArea = (e) => {
    //     setDescription(e.target.value);
    //     console.log(description);
    // }

    return (
        <form className="add-prod" onSubmit={handleSubmit} >
            <h2>Add Product</h2>
            <div className="form-con con1">
            <input type="text" onChange={handleChange} name="name" placeholder="Name" ref={name} />
            <input type="text" onChange={handleChange} name="brand" placeholder="Brand name" ref={brand} />
            <input type="text" onChange={handleChange} name="category" placeholder="Category" ref={category} />
            </div>
            <div className="form-con con2">
            <textarea type="text" onChange={handleChange} name="description" placeholder="Description" value={description}>
            </textarea>
            </div>
            <div className="form-con con3">
            <input type="number" onChange={handleChange} name="price" placeholder="Price" ref={price} />
            <input type="number" onChange={handleChange} name="quantity" placeholder="Quantity" ref={quantity} />
            <input type="file" name="img" onChange={handleFileChange}  placeholder="Image URL" ref={img} />
            </div>
            <button className="btn-submit" type="submit">Submit</button>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
            {loading && <p>Loading...</p>}
            {success && !loading && <p>Product added successfully</p>}
        </form>
        )
}