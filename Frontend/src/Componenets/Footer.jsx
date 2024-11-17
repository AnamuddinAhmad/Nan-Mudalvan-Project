import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer 
        style={{ 
          background: 'linear-gradient(to right, #4f46e5, #8b5cf6, #ec4899)', 
          padding: '20px', 
          textAlign: 'center',
          color: 'white'
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: '10px' }}>
          <button 
            id='bt' 
            className='item-center' 
            style={{ 
              height: "50px", 
              backgroundColor: '#ffffff', 
              color: '#4f46e5', 
              border: 'none', 
              borderRadius: '5px', 
              padding: '0 20px', 
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Contact us
          </button>
        </div>
        <p style={{ marginBottom: '10px' }}>
          "Where every book opens a door to new worlds and endless possibilities."
        </p>
        <p style={{ marginBottom: '10px' }}>Call At: 133-642-652-2622</p>
        <p style={{ marginBottom: '0' }}>
          Copyright &copy; {new Date().getFullYear()} By BookStore. <br /> All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
