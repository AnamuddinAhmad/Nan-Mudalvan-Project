import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Anavbar from "./Anavbar";

function Ahome() {
  const [users, setUsers] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch user data
    axios
      .get(`http://localhost:4000/users`)
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users: ", error));

    // Fetch vendors data
    axios
      .get(`http://localhost:4000/sellers`)
      .then((response) => setVendors(response.data))
      .catch((error) => console.error("Error fetching vendors: ", error));

    // Fetch items data
    axios
      .get(`http://localhost:4000/item`)
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching items: ", error));

    // Fetch orders data
    axios
      .get(`http://localhost:4000/orders`)
      .then((response) => setOrders(response.data))
      .catch((error) => console.error("Error fetching orders: ", error));
  }, []);

  const colors = ["#2B124C", "#AE4451", "#F39F5A", "orange"];

  // Calculate the number of users, vendors, items, and orders
  const totalUsers = users.length;
  const totalVendors = vendors.length;
  const totalItems = items.length;
  const totalOrders = orders.length;

  // Define data for the bar chart
  const data = [
    { name: "Users", value: totalUsers, fill: "#2B124C" },
    { name: "Vendors", value: totalVendors, fill: "cyan" },
    { name: "Items", value: totalItems, fill: "blue" },
    { name: "Orders", value: totalOrders, fill: "orange" },
  ];

  // Reusable card component for statistics
  const StatCard = ({ to, bgColor, title, value }) => (
    <Link to={to} style={{ textDecoration: "none" }}>
      <div
        className={`${bgColor} w-64 h-32 rounded-lg shadow-lg flex flex-col justify-center items-center text-xl font-bold bg-zinc-600 text-gray-100 text-center`}
      >
        {title} <br /> <br /> {value}
      </div>
    </Link>
  );

  return (
    <div className="w-full min-h-screen">
      <Anavbar />
      <h3 className="py-4 mb-0 text-3xl font-extrabold text-center text-gray-100 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        Dashboard
      </h3>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 ">
        <div className="p-8 bg-white rounded-lg shadow-xl ">
          <div className="flex items-center justify-around space-x-4">
            <StatCard
              to="/users"
              bgColor="bg-red-500"
              title="Users"
              value={totalUsers}
            />
            <StatCard
              to="/sellers"
              bgColor="bg-blue-500"
              title="Vendors"
              value={totalVendors}
            />
            <StatCard
              to="/items"
              bgColor="bg-green-500"
              title="Items"
              value={totalItems}
            />
            <StatCard
              to="/orders"
              bgColor="bg-yellow-500"
              title="Total Orders"
              value={totalOrders}
            />
          </div>

          <div className="flex justify-center mt-8">
            <BarChart width={500} height={300} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" barSize={50} />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ahome;
