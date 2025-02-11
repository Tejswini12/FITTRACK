// ProfilePage.js
import React, { useState } from "react";
import "./ProfilePage.css"; // Import your CSS for the profile page
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
  const navigate=useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track the login state

  const handleLogin = () => {
   navigate("/users/signin");
  };

  const handleSignUp = () => {
    // Here, you would integrate your sign-up logic
   navigate("/users/signup")
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Welcome to Our Platform!</h1>
        <p>Please sign in to view your profile.</p>
      </div>

      <div className="profile-content">
        {isLoggedIn ? (
          <div>
            <h2>Your Profile</h2>
            <p>Welcome back, User!</p>
            {/* You can add more profile content here once the user is logged in */}
          </div>
        ) : (
          <div className="auth-buttons">
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
            <button className="signup-btn" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
