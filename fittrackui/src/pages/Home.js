// import React from 'react';
// import { useNavigate } from "react-router-dom";
// import { Carousel } from 'react-bootstrap';
// import HomeImage from '../images/HomeImage.png';
// import GymImage1 from '../images/gym1.jpeg'; 
// import GymImage2 from '../images/gym2.jpeg';
// import GymImage3 from '../images/gym3.jpg';
// import './Home.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function Home() {
//   const navigate = useNavigate();  

//   const moveTo = () => {
//     navigate("/users/signup"); 
//   };

//   return (
//     <div className="home-container">
//       {/* Background Image */}
//       <img src={HomeImage} alt="Home Banner" className="home-image" />

//       {/* Overlay Section */}
//       <div className="home-overlay">
//         <h1 className="home-title">Welcome to FitTrack</h1>
//         <p className="home-subtitle">Your Journey to Fitness Starts Here</p>
//         <button className="home-btn" onClick={moveTo}>Join Now</button>
//       </div>

//       {/* Carousel Section */}
//       <div className="carousel-container">
//         <Carousel>
//           <Carousel.Item>
//             <img className="d-block w-100" src={GymImage1} alt="Gym 1" />
//             <Carousel.Caption>
//               <h3>State-of-the-Art Equipment</h3>
//               <p>Experience world-class gym facilities.</p>
//             </Carousel.Caption>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img className="d-block w-100" src={GymImage2} alt="Gym 2" />
//             <Carousel.Caption>
//               <h3>Group Training Sessions</h3>
//               <p>Join our fitness community and stay motivated.</p>
//             </Carousel.Caption>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img className="d-block w-100" src={GymImage3} alt="Gym 3" />
//             <Carousel.Caption>
//               <h3>Professional Trainers</h3>
//               <p>Get expert guidance tailored to your goals.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { useNavigate } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import HomeImage from '../images/HomeImage.png';
import GymImage1 from '../images/gym1.jpeg'; 
import GymImage2 from '../images/gym2.jpeg';
import GymImage3 from '../images/gym3.jpg';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const navigate = useNavigate();  

  const moveTo = () => {
    navigate("/users/signup"); 
  };

  return (
    <div className="home-container">
      {/* Background Image */}
      <img src={HomeImage} alt="Home Banner" className="home-image" />

      {/* Overlay Section */}
      <div className="home-overlay">
        <h1 className="home-title">Welcome to FitTrack</h1>
        <p className="home-subtitle">Your Journey to Fitness Starts Here</p>
        <button className="home-btn" onClick={moveTo}>Join Now</button>
      </div>

      {/* Carousel Section */}
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={GymImage1} alt="Gym 1" />
            <Carousel.Caption>
              <h3>State-of-the-Art Equipment</h3>
              <p>Experience world-class gym facilities.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={GymImage2} alt="Gym 2" />
            <Carousel.Caption>
              <h3>Group Training Sessions</h3>
              <p>Join our fitness community and stay motivated.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={GymImage3} alt="Gym 3" />
            <Carousel.Caption>
              <h3>Professional Trainers</h3>
              <p>Get expert guidance tailored to your goals.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Gym Services Section */}
      <div className="services-section">
        <h2 className="section-title">Our Gym Services</h2>
        <div className="services-container">
          <div className="service-item">
            <h3>Personal Training</h3>
            <p>One-on-one sessions with professional trainers to meet your specific fitness goals.</p>
          </div>
          <div className="service-item">
            <h3>Group Classes</h3>
            <p>Join group training classes for fun and motivating workout sessions.</p>
          </div>
          <div className="service-item">
            <h3>Nutrition Plans</h3>
            <p>Get customized nutrition plans that help you fuel your fitness journey.</p>
          </div>
        </div>
      </div>

      {/* Client Testimonials Section */}
      <div className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-item">
            <p>"FitTrack has transformed my fitness journey. The trainers are professional, and the gym is always clean and motivating!"</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial-item">
            <p>"I love the group classes! It’s a great way to stay accountable and push my limits."</p>
            <h4>- Jane Smith</h4>
          </div>
        </div>
      </div>

      {/* Membership Plans Section */}
      <div className="membership-plans-section">
        <h2 className="section-title">Membership Plans</h2>
        <div className="membership-container">
          <div className="membership-plan">
            <h3>Basic Plan</h3>
            <p>Rs 300/month</p>
            <p>Access to gym equipment and facilities.</p>
            <button className="plan-btn" onClick={moveTo}>Join Now</button>
          </div>
          <div className="membership-plan">
            <h3>Premium Plan</h3>
            <p>Rs 400/month</p>
            <p>Includes personal training sessions and group classes.</p>
            <button className="plan-btn" onClick={moveTo}>Join Now</button>
          </div>
          <div className="membership-plan">
            <h3>Elite Plan</h3>
            <p>Rs 500/month</p>
            <p>All-inclusive plan with custom nutrition and fitness coaching.</p>
            <button className="plan-btn" onClick={moveTo}>Join Now</button>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>Start Your Fitness Journey Today</h2>
        <button className="cta-btn" onClick={moveTo}>Get a Free Trial</button>
      </div>

      {/* Social Media Section */}
      <div className="social-media-section">
        <h3>Follow Us on Social Media</h3>
        <div className="social-media-links">
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </div>
  );
}
