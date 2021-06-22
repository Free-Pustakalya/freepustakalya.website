
import "./style.css";
import React from "react";

function DonateNow() {
  return (
    <div className="DonateNow">
      <div className="center-content">
        <p className="description">
          Free Pustakalya is open for donations, Feel free to contribute
        </p>
        <button style={{
          display: 'block',
          borderRadius: '6px',
          padding: '0.3em',
          border: '1px solid white',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color: 'white',
          marginLeft: '4px',
        }}>
          Donate Now
        </button>
      </div>
    </div>
  )
}

export default DonateNow;