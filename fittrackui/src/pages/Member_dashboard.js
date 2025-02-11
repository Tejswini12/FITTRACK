import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import './MemberDashboard.css';
export default function MemberDashboard() {

  const userName = localStorage.getItem("userName");
      const navigate = useNavigate();
    
      const handleLogout = () => {
        localStorage.clear(); // Clear user data
        navigate("/users/signin"); // Redirect to login
      };
    

  return (
    <Container className="py-5">
      
      <Card className="text-center p-4 shadow-lg border-0">
        <h2 className="mb-3 text-primary">Welcome to Your Fitness Dashboard</h2>
        <p className="text-muted">
          Track your health, improve your fitness, and achieve your goals!
        </p>

        <Row className="my-4">
          <Col md={6} className="mb-3">
            <Button variant="success" size="lg" block onClick={() => navigate('/getMemberShip')}>
              Take A Membership
            </Button>
          </Col>
          <Col md={6} className="mb-3">
            <Button variant="success" size="lg" block onClick={() => navigate('/memberProfile')}>
           Already Have a Membership
            </Button>
          </Col>
          <Col md={6} className="mb-3">
            <Button variant="info" size="lg" block onClick={() => navigate('/bmicalculator')}>
              Check My BMI
            </Button>
          </Col>
        </Row>
      </Card>

      {/* BMI Information */}
      <Card className="mt-4 p-4 shadow-sm border-0">
        <h3 className="text-center text-secondary">Understanding BMI</h3>
        <p className="text-muted text-center">
          Body Mass Index (BMI) is a simple calculation using height and weight. It helps determine whether you are underweight, normal weight, overweight, or obese.
        </p>
        <ul className="text-muted">
          <li><strong>Underweight:</strong> BMI less than 18.5</li>
          <li><strong>Normal weight:</strong> BMI 18.5 - 24.9</li>
          <li><strong>Overweight:</strong> BMI 25 - 29.9</li>
          <li><strong>Obese:</strong> BMI 30 or greater</li>
        </ul>
      </Card>

      {/* Gym Activities */}
      <Card className="mt-4 p-4 shadow-sm border-0">
        <h3 className="text-center text-secondary">Types of Gym Activities</h3>
        <Row className="text-center">
          <Col md={4}>
            <h5>🏋️‍♂️ Strength Training</h5>
            <p>Focus on lifting weights to build muscle and strength.</p>
          </Col>
          <Col md={4}>
            <h5>🚴 Cardio</h5>
            <p>Running, cycling, or rowing to improve heart health.</p>
          </Col>
          <Col md={4}>
            <h5>🧘 Flexibility & Mobility</h5>
            <p>Yoga, stretching, and mobility exercises to prevent injury.</p>
          </Col>
        </Row>
      </Card>

      {/* Basic Diet Plan */}
      <Card className="mt-4 p-4 shadow-sm border-0">
        <h3 className="text-center text-secondary">Basic Diet Plan</h3>
        <p className="text-muted text-center">
          A well-balanced diet is essential for achieving fitness goals. Here’s a basic guide:
        </p>
        <Row>
          <Col md={4}>
            <h6>🍳 Breakfast</h6>
            <p>Oats, eggs, fruit, or a protein shake.</p>
          </Col>
          <Col md={4}>
            <h6>🥗 Lunch</h6>
            <p>Grilled chicken, brown rice, and vegetables.</p>
          </Col>
          <Col md={4}>
            <h6>🥩 Dinner</h6>
            <p>Lean meat, quinoa, and steamed veggies.</p>
          </Col>
        </Row>

      </Card>
      <Button variant="danger" className="mt-4" onClick={handleLogout}>
                Logout
       </Button>
    </Container>
  );
}
