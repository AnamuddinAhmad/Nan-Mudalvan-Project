import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, Card } from 'react-bootstrap';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Anavbar from './Anavbar';

const Users = () => {
  const [userbookings, setUserbookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const deleteData = (taskId) => {
    axios.delete(`http://localhost:4000/userdelete/${taskId}`);
    window.location.assign('/users');
    alert('User is deleted');
  };

  const deleteOrder = (taskId) => {
    axios.delete(`http://localhost:4000/userorderdelete/${taskId}`);
    window.location.assign('/users');
    alert('Deleted');
  };

  const fetchUserBikeData = (userId) => {
    axios.get(`http://localhost:4000/getorders/${userId}`)
      .then((response) => {
        setUserbookings(response.data);
        toggleDetails();
      })
      .catch((error) => {
        console.error('Error fetching user bike data:', error);
      });
  };

  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);

    return formattedDeliveryDate >= currentDate ? "ontheway" : "delivered";
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 min-h-screen">
      <Anavbar />
      <br />
      <h1 className="text-center text-white text-3xl font-extrabold">Users</h1>
      <br />
      <div className="flex justify-center">
        <Table striped bordered hover variant="dark" style={{ width: "70%" }}>
          <thead>
            <tr>
              <th>sl/no</th>
              <th>UserId</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button className="border-none bg-none">
                    <Link to={`/useredit/${item._id}`} className="text-blue-400 hover:text-blue-600">
                      <FaEdit />
                    </Link>
                  </button>
                  <button onClick={() => deleteData(item._id)} className="border-none text-red-500 bg-none">
                    <FaTrash />
                  </button>
                  <Button onClick={() => fetchUserBikeData(item._id)} className="mt-2">
                    View
                  </Button>
                  {showDetails && (
                    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
                      <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
                      <div className="bg-white p-6 rounded-lg shadow-lg z-10 relative max-h-4/5 overflow-y-auto">
                        <h2 className="text-center text-blue-500 font-bold mb-4">User Orders</h2>
                        {userbookings.map((item) => {
                          const status = calculateStatus(item.Delivery);
                          return (
                            <Card
                              key={item._id}
                              className="mb-6 mx-auto w-11/12 shadow-md rounded-lg p-4"
                              style={{ backgroundColor: '#f9f9f9' }}
                            >
                              <div className="flex justify-between items-center">
                                <img
                                  src={`http://localhost:4000/${item.itemImage}`}
                                  alt={`${item.itemname} Image`}
                                  className="h-20 w-32 object-cover rounded"
                                />
                                <div>
                                  <p>Product Name:</p>
                                  <p>{item.itemname}-{item._id.slice(3, 7)}</p>
                                </div>
                                <div>
                                  <p>Order ID:</p>
                                  <p>{item._id.slice(0, 10)}</p>
                                </div>
                                <div>
                                  <p>Address:</p>
                                  <p>{`${item.flatno}, ${item.city}, (${item.pincode}), ${item.state}`}</p>
                                </div>
                                <div>
                                  <p>Buyer:</p>
                                  <p>{item.userName}</p>
                                </div>
                                <div>
                                  <p>Seller:</p>
                                  <p>{item.seller}</p>
                                </div>
                                <div>
                                  <p>Booking Date:</p>
                                  <p>{item.BookingDate}</p>
                                </div>
                                <div>
                                  <p>Delivery By:</p>
                                  <p>{item.Delivery}</p>
                                </div>
                                <div>
                                  <p>Status:</p>
                                  <p>{status}</p>
                                </div>
                                <button onClick={() => deleteOrder(item._id)} className="border-none text-red-500 bg-none">
                                  <FaTrash />
                                </button>
                              </div>
                            </Card>
                          );
                        })}
                        <Button onClick={toggleDetails} className="mt-4">
                          Close
                        </Button>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
