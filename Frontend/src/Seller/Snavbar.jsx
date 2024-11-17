import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Snavbar = () => {
  const get = localStorage.getItem('user');

  return (
    <Navbar expand="lg" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Container>
        <Navbar.Brand>
          <Link to='/shome' className="text-3xl font-extrabold text-white no-underline">
            BookStore (Seller)
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/shome" className="px-4 py-2 mx-2 text-white no-underline transition-all duration-300 transform rounded-lg shadow-lg hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-900 hover:text-yellow-300 hover:scale-105">
              Home
            </Link>
            <Link to="/myproducts" className="px-4 py-2 mx-2 text-white no-underline transition-all duration-300 transform rounded-lg shadow-lg hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-900 hover:text-yellow-300 hover:scale-105">
              My Products
            </Link>
            <Link to="/addbook" className="px-4 py-2 mx-2 text-white no-underline transition-all duration-300 transform rounded-lg shadow-lg hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-900 hover:text-yellow-300 hover:scale-105">
              Add Books
            </Link>
            <Link to="/orders" className="px-4 py-2 mx-2 text-white no-underline transition-all duration-300 transform rounded-lg shadow-lg hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-900 hover:text-yellow-300 hover:scale-105">
              Orders
            </Link>
            <Link to="/" className="px-4 py-2 mx-2 text-white no-underline transition-all duration-300 transform rounded-lg shadow-lg hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-900 hover:text-yellow-300 hover:scale-105">
              Logout
            </Link>
            {get && (
              <h4 className="pt-0 text-white">
                ({JSON.parse(get).name})
              </h4>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Snavbar;
