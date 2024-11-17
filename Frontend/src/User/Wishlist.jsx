import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Unavbar from './Unavbar';
import Footer from '../Componenets/Footer';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:4000/wishlist/${user.id}`)
        .then((response) => {
          setWishlist(response.data);
        })
        .catch((error) => {
          console.error('Error fetching wishlist items: ', error);
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  const removeFromWishlist = async (itemId) => {
    try {
      await axios.post(`http://localhost:4000/wishlist/remove`, { itemId });
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        const response = await axios.get(`http://localhost:4000/wishlist/${user.id}`);
        setWishlist(response.data);
      } else {
        console.log('ERROR');
      }
    } catch (error) {
      console.error('Error removing item from wishlist: ', error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <Unavbar />
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Wishlist</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <div key={item._id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img
                  src={`http://localhost:4000/${item.itemImage}`}
                  alt="Item Image"
                  className="w-full h-48 object-cover sm:h-56 lg:h-64"
                />
                <div className="p-4">
                  <p className="text-xl font-bold mb-2">{item.title}</p>
                  <p className="text-gray-700 mb-2">Author: {item.author}</p>
                  <p className="text-gray-700 mb-2">Genre: {item.genre}</p>
                  <p className="text-blue-500 font-bold mb-4">Price: ${item.price}</p>
                  <div className="flex justify-between">
                    <button
                      onClick={() => removeFromWishlist(item.itemId)}
                      className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                    <Link
                      to={`/uitem/${item.itemId}`}
                      className="bg-purple-600 text-white px-3 py-2 rounded hover:bg-purple-700 transition"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white col-span-full">No items in your wishlist</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Wishlist;
