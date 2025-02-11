// import React from 'react';
// import './AboutUs.css';
// import { useNavigate } from "react-router-dom";

// export default function AboutUs() {
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const moveTo = () => {
//     navigate("/users/signup"); // Navigate to the signup page
//   };

//   return (
//     <div className="about-container">
//       <div className="about-header">
//         <h1>About <span className="highlight">FitTrack</span></h1>
//         <p>Your Ultimate Fitness Partner</p>
//       </div>

//       <div className="about-content">
//         <p>
//           At <strong>FitTrack</strong>, we believe that fitness is not just about lifting weights—it's a lifestyle!  
//           Our goal is to empower individuals to achieve their health and fitness aspirations through  
//           structured training, personalized programs, and a supportive community.
//         </p>
        
//         <h2>🏋️ What We Offer</h2>
//         <ul>
//           <li>💪 Customized Workout Plans</li>
//           <li>🥗 Personalized Diet & Nutrition Guidance</li>
//           <li>🏆 Progress Tracking with AI Insights</li>
//           <li>🤝 Community & Group Workouts</li>
//           <li>🎯 Goal-Oriented Fitness Challenges</li>
//         </ul>

//         <h2>🔗 Why Choose FitTrack?</h2>
//         <p>
//           Our platform integrates cutting-edge technology with professional training  
//           to help you stay on track with your fitness goals. Whether you're a beginner  
//           or an advanced athlete, FitTrack adapts to your needs and keeps you  
//           motivated every step of the way!
//         </p>
        
//         <div className="about-cta">
//           <h3>Ready to Transform Your Fitness Journey? 🚀</h3>
//           <button className="join-now-btn" onClick={moveTo}>Join Now</button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import './AboutUs.css';
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Adjust this to show multiple items per page

  const navigate = useNavigate(); // Initialize useNavigate hook

  const moveTo = () => {
    navigate("/users/signup"); // Navigate to the signup page
  };

  // Content for the pages
  const content = [
    {
      title: "What We Offer",
      description: (
        <>
          <ul>
            <li>💪 Customized Workout Plans</li>
            <li>🥗 Personalized Diet & Nutrition Guidance</li>
            <li>🏆 Progress Tracking with AI Insights</li>
            <li>🤝 Community & Group Workouts</li>
            <li>🎯 Goal-Oriented Fitness Challenges</li>
          </ul>
        </>
      ),
    },
    {
      title: "Why Choose FitTrack?",
      description: (
        <>
          <p>
            Our platform integrates cutting-edge technology with professional training to help you stay on track with your fitness goals. Whether you're a beginner or an advanced athlete, FitTrack adapts to your needs and keeps you motivated every step of the way!
          </p>
        </>
      ),
    },
  ];

  const totalPages = Math.ceil(content.length / itemsPerPage);
  const currentContent = content.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About <span className="highlight">FitTrack</span></h1>
        <p>Your Ultimate Fitness Partner</p>
      </div>

      <div className="about-content">
        <p>
          At <strong>FitTrack</strong>, we believe that fitness is not just about lifting weights—it's a lifestyle! Our goal is to empower individuals to achieve their health and fitness aspirations through structured training, personalized programs, and a supportive community.
        </p>

        {/* Loop through and display current content based on page */}
        {currentContent.map((section, index) => (
          <div key={index}>
            <h2>{section.title}</h2>
            {section.description}
          </div>
        ))}

        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="page-number">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        <div className="about-cta">
          <h3>Ready to Transform Your Fitness Journey? 🚀</h3>
          <button className="join-now-btn" onClick={moveTo}>Join Now</button>
        </div>
      </div>
    </div>
  );
}
