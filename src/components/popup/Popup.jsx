import React from 'react'
import "./popup.css"

const Popup = ({text, closePopup}) => {
  return (
    <div className="popup-container">
      <div className="popup-body">
        <h1>{text}</h1>
                    <img
              src="https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
        
        <button onClick={closePopup}>Close X</button>
      </div>
    </div>
  );
}

export default Popup