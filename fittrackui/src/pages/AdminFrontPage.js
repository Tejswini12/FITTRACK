import React from 'react'
import { Button, Container } from "react";
import { useNavigate } from "react-router-dom";
export default function AdminFrontPage() {
    const userName = localStorage.getItem("userName");
    const navigate = useNavigate();
  
    const handleLogout = () => {
      localStorage.removeItem("userName"); // Clear user data
      navigate("/users/signin"); // Redirect to login
    };
  
    return (
      <Container className="vh-100 d-flex align-items-center justify-content-center flex-column">
        <h1>Welcome, {userName ? userName : "User"}!</h1>
        <Button variant="danger" className="mt-4" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    );
}
