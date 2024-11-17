import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-b-2">
        <Navbar
          expand="lg"
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
        >
          <Container>
            <Navbar.Brand>
              <Link to="/" className="text-white text-3xl font-extrabold no-underline">
                BookStore
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link
                  to="/"
                  className="px-4 py-2 mx-2 border-1 text-white no-underline transition-all duration-300 hover:bg-gradient-to-r to-indigo-500 via-purple-900 from-pink-900  hover:text-yellow-300 rounded-lg shadow-lg transform hover:scale-105"
                >
                  User
                </Link>
                <Link
                  to="/slogin"
                  className="px-4 py-2 mx-2 border-1 text-white no-underline transition-all duration-300 hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-900 hover:text-yellow-300 rounded-lg shadow-lg transform hover:scale-105"
                >
                  Seller
                </Link>
                <Link
                  to="/alogin"
                  className="px-4 py-2 mx-2 border-1 text-white no-underline transition-all duration-300 hover:bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-900  hover:text-yellow-300 rounded-lg shadow-lg transform hover:scale-105"
                >
                  Admin
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Home;
