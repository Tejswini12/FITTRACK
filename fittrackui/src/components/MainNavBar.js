// import React from 'react'
// import {NavLink} from 'react-router-dom'

// export default function MainNavBar() {
//   return (
//     <div >
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <NavLink className="navbar-brand" to="/home">Home</NavLink>
//               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//   <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="navbar-nav">
//       <li className="nav-item active">
//         <NavLink className="nav-link" to="/users/signin">SignIn <span className="sr-only">(current)</span></NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="/users/signup">Signup</NavLink>
//       </li>
//       {/* <li className="nav-item">
//         <NavLink className="nav-link" to="/form">productform</NavLink>
//       </li> */}
//       <li className="nav-item">
//         <NavLink className="nav-link" to="/aboutus" >About Us</NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="/bmicalculator" > Calculate BMI</NavLink>
//       </li>
//     </ul>
//   </div>
// </nav>
//     </div>
//   )
// }
import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavBar.css'; // Ensure this file is included
import GymLogo from '../images/logo.png'

export default function MainNavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand logo" to="/home">
          <img src={GymLogo} alt="Logo" className="logo-img" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/users/signin">SignIn <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/users/signup">Signup</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/bmicalculator">Calculate BMI</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">Our Products</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/gymproduct">Dummy</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link profile-icon" to="/profile">
                <i className="fa fa-user-circle" aria-hidden="true"></i> Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

