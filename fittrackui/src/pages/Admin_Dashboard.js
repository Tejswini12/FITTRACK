// // import React from 'react'
// // import { Button, Container } from "react";
// // import { useNavigate } from "react-router-dom";
// // export default function Admin_Dashboard() {

// //     const userName = localStorage.getItem("userName");
// //     const navigate = useNavigate();
  
// //     const handleLogout = () => {
// //       localStorage.removeItem("userName"); // Clear user data
// //       navigate("/SignIn"); // Redirect to login
// //     };
  
// //     return (
// //       <Container className="vh-100 d-flex align-items-center justify-content-center flex-column">
// //         <h1>Welcome, {userName ? userName : "User"}!</h1>
// //         <Button variant="danger" className="mt-4" onClick={handleLogout}>
// //           Logout
// //         </Button>
// //       </Container>

// //   )
// // }



// import React from 'react';
// import { Button, Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// export default function Admin_Dashboard() {
//   const userName = localStorage.getItem("userName");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("userName"); // Clear user data
//     navigate("/users/signin"); // Redirect to login
//   };

//   return (
    

   
//     <Container className="vh-100 d-flex align-items-center justify-content-center flex-column">
      
//       <h1>Welcome, {userName ? userName : "User"}!</h1>
//       <Button variant="danger" className="mt-4" onClick={handleLogout}>
//         Logout
//       </Button>
//      <a href="/getAllMembers">Show All Member</a> 
//      <a href="/getAllPackages">Display All Packages</a>
//      <a href="/getAllTrainers">All Trainers</a>
//     </Container>
//   );
// }

// import React from 'react';
// import { Button, Container, Card } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// export default function Admin_Dashboard() {
//   const userName = localStorage.getItem("userName");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("userName"); // Clear user data
//     navigate("/users/signin"); // Redirect to login
//   };

//   return (
//     <div className="admin-dashboard">
//       <Container className="d-flex justify-content-center align-items-center vh-100">
//         <Card className="dashboard-card text-center">
//           <Card.Body>
//             <h2 className="mb-4">Welcome, {userName ? userName : "Admin"}!</h2>

//             <div className="dashboard-links">
//               <Button variant="primary" className="mb-3" href="/getAllMembers">
//                 Show All Members
//               </Button>
//               <Button variant="success" className="mb-3" href="/getAllPackages">
//                 Display All Packages
//               </Button>
//               <Button variant="info" className="mb-3" href="/getAllTrainers">
//                 View All Trainers
//               </Button>
//             </div>

//             <Button variant="danger" onClick={handleLogout}>
//               Logout
//             </Button>
//           </Card.Body>
//         </Card>
//       </Container>
//     </div>
//   );
// }


import React from 'react';
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Admin_Dashboard() {
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear() // Clear user data
    navigate("/users/signin"); // Redirect to login
  };

  return (
    <div className="admin-dashboard">
      <Container className="d-flex flex-column align-items-center vh-100">
        <h2 className="dashboard-title">Welcome, {userName ? userName : "Admin"}!</h2>

        <Row className="dashboard-row">
          <Col md={4}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Manage Members</Card.Title>
                <Card.Text>View and manage all gym members.</Card.Text>
                <Button variant="primary" href="/getAllMembers">
                  Show All Members
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Manage Packages</Card.Title>
                <Card.Text>View and update all gym membership packages.</Card.Text>
                <Button variant="success" href="/getAllPackages">
                  Display All Packages
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Manage Trainers</Card.Title>
                <Card.Text>Check all available trainers.</Card.Text>
                <Button variant="info" href="/getAllTrainers">
                  View All Trainers
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Button variant="danger" className="logout-btn mt-4" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </div>
  );
}
