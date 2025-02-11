import React from 'react';
import './MyFooter.css';

export default function MyFooter() {
  console.log("In footer component function");

  return (
    <footer className="footer-container">
      <p className="footer-text">
        &copy; 2025 FitTrack | All Rights Reserved
      </p>
    </footer>
  );
}
