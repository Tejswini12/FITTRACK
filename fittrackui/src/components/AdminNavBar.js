import React from 'react'
import { Link } from "react-router-dom"; 
import { Navbar, Nav } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
export default function 
() {
  return (
    <div>
         {/* <Navbar bg="success" expand="lg"> */}
         <Navbar bg="success" expand="lg">
      <Navbar.Brand href="#home">Member Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/admin_Dash">Dashboard</Link>
          <Link className="nav-link" to="/adminDisplay">Admin Display</Link>
          <Link className="nav-link" to="/SignIn">Logout</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

