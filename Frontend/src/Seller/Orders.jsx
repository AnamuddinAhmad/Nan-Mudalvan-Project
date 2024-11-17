import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Snavbar from './Snavbar';

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios.get(`http://localhost:4000/getsellerorders/${user.id}`)
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          console.error('Error fetching bookings: ', error);
        });
    }
  }, []);

  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);
    return formattedDeliveryDate >= currentDate ? "ontheway" : "delivered";
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <Snavbar />
      <br />
      <div>
        <h3 className="text-3xl font-semibold mb-4 text-center text-white">Orders</h3>
        <div>
          {orders.map((item) => {
            const status = calculateStatus(item.Delivery);
            return (
              <Card
                key={item._id}
                style={{
                  width: '90%',
                  marginLeft: '65px',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  paddingTop: '15px',
                  marginBottom: '35px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <div>
                    <img src={`http://localhost:4000/${item?.itemImage}`} alt={`${item.itemtype} Image`} style={{ height: "80px" }} />
                  </div>
                  <div>
                    <p>ProductName:</p>
                    <p>{item.itemname}</p>
                  </div>
                  <div>
                    <p>Orderid:</p>
                    <p>{item._id.slice(0, 10)}</p>
                  </div>
                  <div>
                    <p>Customer Name</p>
                    <p>{item.userName}</p>
                  </div>
                  <div>
                    <p>Address:</p>
                    {item.flatno},<br />{item.city},({item.pincode}),<br />{item.state}.
                  </div>
                  <div>
                    <p>BookingDate</p>
                    <p>{item.BookingDate}</p>
                  </div>
                  <div>
                    <p>Delivery By</p>
                    <p>{item.Delivery}</p>
                  </div>
                  <div>
                    <p>Warranty</p>
                    <p>1 year</p>
                  </div>
                  <div>
                    <p>Price</p>
                    <p>{item.totalamount}</p>
                  </div>
                  <div>
                    <p>Status</p>
                    <p>{status}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <br />
      {/* Additional spacing */}
    </div>
  );
}

export default Orders;