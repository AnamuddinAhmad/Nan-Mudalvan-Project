import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Seller/List.css';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Unavbar from './Unavbar';
import Footer from '../Componenets/Footer';

function Myorders() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:4000/getorders/${user.id}`)
        .then((response) => {
          const taskData = response.data;
          setCars(taskData);
          console.log(taskData);
        })
        .catch((error) => {
          console.error('Error fetching tasks: ', error);
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  // Function to calculate the status based on the delivery date
  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);

    if (formattedDeliveryDate >= currentDate) {
      return "ontheway";
    } else {
      return "delivered";
    }
  };

  return (
    <div style={{ background: 'linear-gradient(to right, #4f46e5, #8b5cf6, #ec4899)', minHeight: '100vh', padding: '20px 0' }}>
      <Unavbar />
      <div>
        <h1 className='text-center' style={{ color: 'white', marginBottom: '20px' }}>My Orders</h1>
        <div>
          {cars.map((item) => {
            const status = calculateStatus(item.Delivery);

            return (
              <Card
                key={item._id}
                style={{
                  width: '90%',
                  margin: '0 auto 35px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  borderRadius: '12px',
                  padding: '15px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                  <div>
                    <img src={`http://localhost:4000/${item.itemImage}`} alt={`${item.itemtype} Image`} style={{ height: "80px", borderRadius: '8px' }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold' }}>ProductName:</p>
                    <p>{item.itemname} - {item._id.slice(3, 7)}</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold' }}>Order ID:</p>
                    <p>{item._id.slice(0, 10)}</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold' }}>Address:</p>
                    <p>{item.flatno}, {item.city} ({item.pincode}), {item.state}.</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold' }}>Seller:</p>
                    <p>{item.seller}</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold' }}>Booking Date:</p>
                    <p>{item.BookingDate}</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold' }}>Delivery By:</p>
                    <p>{item.Delivery}</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold' }}>Price:</p>
                    <p>${item.totalamount}</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold' }}>Status:</p>
                    <p>{status}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Myorders;
