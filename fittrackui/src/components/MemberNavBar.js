import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MemberNavBar = () => {
  return (
    <Navbar bg="success" expand="lg">
      <Navbar.Brand href="#home">Member Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/Member_dashboard">Dashboard</Link>
          <Link className="nav-link" to="/Membership">MemberShip</Link>
          <Link className="nav-link" to="/SignIn">Logout</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MemberNavBar;
