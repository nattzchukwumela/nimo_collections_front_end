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
          {data?.name}
          <br />
          {data?.price}
          <br />
          {data?.quantity}
          <br />
          {data?.id}
          <br />
          {data?.description}
          <br />
          {data?.category}
          <br />
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
