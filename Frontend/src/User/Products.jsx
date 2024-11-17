import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Unavbar from './Unavbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Lists.css'; // Assuming you have the CSS file for shared styles
import Footer from '../Componenets/Footer';

function Products() {
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Fetch all items
    axios
      .get(`http://localhost:4000/item`)
      .then((response) => {
        const taskData = response.data;
        setItems(taskData);
      })
      .catch((error) => {
        console.error('Error fetching tasks: ', error);
      });

    // Fetch wishlist items
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios.get(`http://localhost:4000/wishlist/${user.id}`)
        .then((response) => {
          const wishlistData = response.data;
          setWishlist(wishlistData);
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  const addToWishlist = async (itemId) => {
    try {
      // Find the selected item by itemId
      const selectedItem = items.find((item) => item._id === itemId);
      if (!selectedItem) throw new Error('Selected item not found');
      
      const { title, itemImage, _id: itemId2 } = selectedItem;
      const userId = JSON.parse(localStorage.getItem('user')).id;
      const userName = JSON.parse(localStorage.getItem('user')).name;

      await axios.post(`http://localhost:4000/wishlist/add`, { itemId: itemId2, title, itemImage, userId, userName });
      
      // Refresh wishlist items
      const response = await axios.get(`http://localhost:4000/wishlist/${userId}`);
      setWishlist(response.data);
    } catch (error) {
      console.error('Error adding item to wishlist: ', error);
    }
  };

  const removeFromWishlist = async (itemId) => {
    try {
      await axios.post(`http://localhost:4000/wishlist/remove`, { itemId });
      
      // Refresh wishlist items
      const userId = JSON.parse(localStorage.getItem('user')).id;
      const response = await axios.get(`http://localhost:4000/wishlist/${userId}`);
      setWishlist(response.data);
    } catch (error) {
      console.error('Error removing item from wishlist: ', error);
    }
  };

  const isItemInWishlist = (itemId) => {
    return wishlist.some((item) => item.itemId === itemId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Unavbar />
      <div className="container p-8 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold text-center text-white">Books List</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item._id} className="p-4 transition-transform bg-white rounded-lg shadow-lg hover:scale-105">
              <img
                src={`http://localhost:4000/${item.itemImage}`}
                alt="Item Image"
                className="rounded-t-lg"
                style={{ height: '350px', width: '500px', objectFit: 'cover' }}
              />
              <div className="p-4">
                <p className="mb-2 text-xl font-bold text-gray-800">{item.title}</p>
                <p className="mb-2 text-gray-700">Author: {item.author}</p>
                <p className="mb-2 text-gray-700">Genre: {item.genre}</p>
                <p className="font-bold text-blue-500">Price: ${item.price}</p>

                {isItemInWishlist(item._id) ? (
                  <Button
                    style={{ backgroundColor: 'red', border: 'none', width: '100%' }}
                    onClick={() => removeFromWishlist(item._id)}
                  >
                    Remove from Wishlist
                  </Button>
                ) : (
                  <Button
                    style={{ backgroundColor: 'rebeccapurple', border: 'none', width: '100%' }}
                    onClick={() => addToWishlist(item._id)}
                  >
                    Add to Wishlist
                  </Button>
                )}

                <div className="mt-4">
                  <Button style={{ backgroundColor: 'rebeccapurple', border: 'none', width: '100%' }}>
                    <Link to={`/uitem/${item._id}`} style={{ color: 'white', textDecoration: 'none' }}>
                      View
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Products;
