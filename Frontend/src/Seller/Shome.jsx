import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Snavbar from './Snavbar';
import Footer from '../Componenets/Footer';

function Shome() {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:4000/getitem/${user.id}`)
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.error('Error fetching tasks: ', error);
        });

      axios
        .get(`http://localhost:4000/getsellerorders/${user.id}`)
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          console.error('Error fetching bookings: ', error);
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  const totalItems = items.length;
  const totalOrders = orders.length;

  const data = [
    { name: 'Items', value: totalItems, fill: 'blue' },
    { name: 'Orders', value: totalOrders, fill: 'orange' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Snavbar />
      <br />
      <h3 className="mb-4 text-3xl font-semibold text-center text-white">DashBoard</h3>
      <Card body style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", width: "80%", marginLeft: "10%", marginTop: "20px", height: "580px" }}>
        <div className="flex items-center justify-around p-4">
          <Link to="/myproducts" style={{ textDecoration: "none" }}>
            <div className="flex flex-col items-center justify-center w-64 h-32 text-xl font-bold text-center text-gray-800 bg-green-500 rounded-lg shadow-md">
              Items <br /> <br />{totalItems}
            </div>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <div className="flex flex-col items-center justify-center w-64 h-32 text-xl font-bold text-center text-gray-800 bg-yellow-500 rounded-lg shadow-md">
              Total Orders <br /> <br />{totalOrders}
            </div>
          </Link>
        </div>
        <br />
        <br />
        <br />
        <div style={{ paddingLeft: "350px" }}>
          <BarChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" barSize={50} />
          </BarChart>
        </div>
      </Card>
      <br />
      <Footer />
    </div>
  );
}

export default Shome;
