import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Vnavbar from './Snavbar';

const Book = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/item/${id}`)
      .then((resp) => {
        console.log(resp);
        setItem(resp.data);
      })
      .catch(() => {
        console.log("Did not get data");
      });
  }, [id]);

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <Vnavbar />
      <div className="container mx-auto py-8 px-4">
        {item && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-6">
              <img
                src={`http://localhost:4000/${item?.itemImage}`}
                alt={`${item.itemtype} Image`}
                className="rounded-lg object-cover"
                style={{ height: '450px', maxWidth: '100%' }}
              />
            </div>
            <h1 className="text-center text-3xl font-bold mb-4">{item.itemtype} - {item._id.slice(3, 7)}</h1>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="lg:w-5/12 mb-6 lg:mb-0">
                <h2 className="text-gray-700 font-semibold text-xl">Description</h2>
                <hr className="my-2 h-1 bg-black" />
                <p className="text-lg">{item.description}</p>
              </div>
              <div className="lg:w-4/12">
                <h2 className="text-gray-700 font-semibold text-xl">Info</h2>
                <hr className="my-2 h-1 bg-black" />
                <p className="text-lg">Price: {item.price}</p>
                <p className="text-lg">Warranty: 1 year</p>
                <p className="text-lg">Seller: {item.userName}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
