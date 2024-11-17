import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Anavbar = () => {
  const get = localStorage.getItem('user');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-b-2">
      <Navbar
        expand="lg"
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        <Container>
          <Navbar.Brand>
            <Link to='/shome' className="text-white text-3xl font-extrabold no-underline">
              BookStore (Admin)
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="/ahome"
                className="px-4 py-2 mx-2 border-1 text-white no-underline transition-all duration-300 hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-900 hover:text-yellow-300 rounded-lg shadow-lg transform hover:scale-105"
              >
                Home
              </Link>
              <Link
                to="/users"
                className="px-4 py-2 mx-2 border-1 text-white no-underline transition-all duration-300 hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-900 hover:text-yellow-300 rounded-lg shadow-lg transform hover:scale-105"
              >
                Users
              </Link>
              <Link
                to="/sellers"
                className="px-4 py-2 mx-2 border-1 text-white no-underline transition-all duration-300 hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-900 hover:text-yellow-300 rounded-lg shadow-lg transform hover:scale-105"
              >
                Sellers
              </Link>
              <Link
                to="/"
                onClick={handleLogout}
                className="px-4 py-2 mx-2 border-1 text-white no-underline transition-all duration-300 hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-900 hover:text-yellow-300 rounded-lg shadow-lg transform hover:scale-105"
              >
                Logout
              </Link>
              {get && (
                <h4 className="text-white" style={{ paddingTop: "0px" }}>
                  ({JSON.parse(get).name})
                </h4>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Anavbar;
