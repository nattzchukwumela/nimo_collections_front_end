import { X } from 'lucide-react';
import PropTypes from 'prop-types';
import './popup.css';

export const Popup = ({ isOpen, popup, data, title }) => {
  if (!isOpen) return null;
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
          <label htmlFor="name">Name:
            <input type="text" name="name" id="name" value={data?.name} />
          </label>
          <label htmlFor="category">Category:
              <input type="text" name="category" id="category" value={data?.category} />
          </label>
          <label htmlFor='brand'>Brand:
            <input type="text" name="brand" id="brand" value={data?.brand} />
          </label>
          </div>
          <div className="form-con con3">
          <label htmlFor="price">Price:
          <input type="number" name="price" id="price" value={data?.price} />
          </label>
          <label htmlFor="quantity">Quantity:
            <input type="number" name="quantity" id="quantity" value={data?.quantity} />
            </label>
            <label htmlFor="image">Image:
              <input type="file" name="image" id="image" value={data?.image} />
              </label>
          </div>
          <div className='text-field'>
          <label htmlFor="description">
            <textarea name="description" placeholder="product description" id="description" value={data?.description} />
            </label>
          </div>
            <button className="btn-submit" type="submit">Submit</button>
        </form>
        </div>
      </div>
    </div>
  )
};

Popup.propTypes = { 
  isOpen: PropTypes.bool.isRequired,
  data: PropTypes.node.isRequired,
  popup: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
