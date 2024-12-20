import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import PropTypes from 'prop-types';
import './popup.css';

export const Popup = ({ isOpen, popup, data, title }) => {
  const [newData, setNewData] = useState({ 
    name: '',
    price: '',
    brand: '',
    quantity: '',
    category: '',
    description: '',
    img: ''
  });
  
  const [description, setDescription] = useState('');
  const [err, setErr] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  useEffect(() => {
    if (data) {
      setNewData({
        name: data?.name,
        price: data?.price,
        brand: data?.brand,
        quantity: data?.quantity,
        category: data?.category,
        description: data?.description,
        img: data?.img,
      });
      setDescription(data?.description);
    }
  }, [data]);

  if (!isOpen) return null;
  
  const updateItem = import.meta.env.VITE_API_UPDATE_ITEM;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  };
  

  const handleTextArea = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setNewData((prevData) => ({ ...prevData, img: file }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
        // If you're handling file upload, you'd typically use FormData
        const formData = new FormData();
    
        // Append all text fields
        Object.keys(newData).forEach(key => {
          if (key !== 'img') {
            formData.append(key, newData[key]);
          }
        });
        
        // Append image file if exists
        if (imageFile) {
          formData.append('img', imageFile);
        }
        // Append description if exists
        if (description) {
          formData.append('description', description);
        }
    
    
    fetch(`${updateItem}${data?.id}/`, {
      method: 'PUT',
      body: formData,
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
     
    })
    .catch(err => setErr(err.message));

    console.log(formData);
  };

  
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button 
            onClick={popup} 
            className="popup-close-btn"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4">
          <form className="edit-form">
            <div className="form-con con1">
              <label htmlFor="name">
                Name:
                <input 
                  type="text" 
                  onChange={handleChange} 
                  name="name" 
                  id="name" 
                  value={newData.name} 
                />
              </label>
              <label htmlFor="category">
                Category:
                <input 
                  type="text" 
                  onChange={handleChange} 
                  name="category" 
                  id="category" 
                  value={newData.category} 
                />
              </label>
              <label htmlFor="brand">
                Brand:
                <input 
                  type="text" 
                  onChange={handleChange} 
                  name="brand" 
                  id="brand" 
                  value={newData.brand} 
                />
              </label>
            </div>
            <div className="form-con con3">
              <label htmlFor="price">
                Price:
                <input 
                  type="number" 
                  onChange={handleChange} 
                  name="price" 
                  id="price" 
                  value={newData.price} 
                />
              </label>
              <label htmlFor="quantity">
                Quantity:
                <input 
                  type="number" 
                  onChange={handleChange} 
                  placeholder="product stock" 
                  name="quantity" 
                  id="quantity" 
                  value={newData.quantity} 
                />
              </label>
              <label htmlFor="image">
                Image:
                <input 
                  type="file" 
                  name="image" 
                  id="image"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <div className="text-field">
              <label htmlFor="description">
                <textarea 
                  name="description" 
                  onChange={handleTextArea} 
                  placeholder="product description" 
                  id="description" 
                  value={description} 
                />
              </label>
            </div>
            {err && <p style={{ color: 'red' }}>{err}</p>}
            <button 
              onClick={handleUpdate} 
              className="btn-submit" 
              type="submit"

            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    brand: PropTypes.string,
    quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    category: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string
  }).isRequired,
  popup: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
