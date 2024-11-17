import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Unavbar from './Unavbar';

const Uitem = () => {
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
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-white">
            <Unavbar />
            <div className="py-8 px-4">
                {item && (
                    <div>
                        <div className="flex justify-center mb-8">
                            <img
                                src={`http://localhost:4000/${item?.itemImage}`}
                                alt={`${item.itemtype} Image`}
                                className="h-96 object-contain"
                            />
                        </div>
                        <h1 className="text-center text-3xl font-bold mb-4">
                            {item.itemtype}-{item._id.slice(3, 7)}
                        </h1>
                        <div className="flex flex-col lg:flex-row justify-between gap-8">
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-gray-300 text-2xl font-semibold mb-2">Description</h2>
                                <hr className="border-t-2 border-black mb-4" />
                                <p className="text-lg">{item.description}</p>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-gray-300 text-2xl font-semibold mb-2">Info</h2>
                                <hr className="border-t-2 border-black mb-4" />
                                <p className="text-lg mb-2"><strong>Title:</strong> {item.title}</p>
                                <p className="text-lg mb-2"><strong>Author:</strong> {item.author}</p>
                                <p className="text-lg mb-2"><strong>Genre:</strong> {item.genre}</p>
                                <p className="text-lg mb-2"><strong>Price:</strong> {item.price}</p>
                                <p className="text-lg mb-2"><strong>Seller:</strong> {item.userName}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-8">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition">
                                <Link to={`/orderitem/${item._id}`} className="text-white no-underline">
                                    Buy Now
                                </Link>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Uitem;
