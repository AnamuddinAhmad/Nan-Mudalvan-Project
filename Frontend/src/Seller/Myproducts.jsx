import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Snavbar from './Snavbar';
import { FaTrash } from "react-icons/fa";
import Footer from '../Componenets/Footer';

function Myproducts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:4000/getitem/${user.id}`)
        .then((response) => {
          console.log('Response data:', response.data);
          setItems(response.data);
        })
        .catch((error) => {
          console.error('Error fetching tasks: ', error);
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  const deleteItem = (Id) => {
    axios.delete(`http://localhost:4000/itemdelete/${Id}`);
    window.location.assign('/myproducts');
    alert('Item is deleted');
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <Snavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center text-white">Books List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded shadow-lg">
              <div className="flex justify-end text-red-600">
                <button onClick={() => deleteItem(item._id)} style={{ border: 'none', background: 'none' }}>
                  <FaTrash />
                </button>
              </div>
              <img
                src={`http://localhost:4000/${item.itemImage}`}
                alt="Item Image"
                className="rounded-t-lg mb-4 object-cover"
                style={{ height: '350px', width: '100%' }}
              />
              <div>
                <p className="text-xl font-bold mb-2">{item.title}</p>
                <p className="text-gray-700 mb-2">Author: {item.author}</p>
                <p className="text-gray-700 mb-2">Genre: {item.genre}</p>
                <p className="text-blue-500 font-bold mb-2">Price: ${item.price}</p>
                <p className="text-gray-600"><strong>Description:</strong> {item.description.slice(0, 259)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Myproducts;
