import React from 'react';
import './MyHeader.css';

export default function MyHeader() {
  console.log("In header component function");

  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">FIT TRACK</h1>
      </div>
    </header>
  );
}
