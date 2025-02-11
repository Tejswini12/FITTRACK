
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";
// import "./LoginComponent.css";

// export default function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [captchaToken, setCaptchaToken] = useState(null);
//   const navigate = useNavigate();

//   // Handle reCAPTCHA
//   const handleCaptcha = (token) => {
//     setCaptchaToken(token);
//   };

//   // Handle Login
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!captchaToken) {
//       alert("Please verify reCAPTCHA!");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8080/users/signin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password, captchaToken }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem("token", data.jwt);
//         localStorage.setItem("userName", data.firstName);
//         localStorage.setItem("role", data.role);
//         alert("Login Successful!");

//         // Redirect based on role
//         if (data.role === "ADMIN") {
//           navigate("/admin_Dash");
//         } else if (data.role === "CUSTOMER") {
//           navigate("/member_dash");
//         } else {
//           alert("Invalid Role");
//         }
//       } else {
//         alert("Invalid credentials or reCAPTCHA verification failed!");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       alert("An error occurred.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2 className="login-header">Sign In</h2>

//         <form className="login-form" onSubmit={handleLogin}>
//           <div className="input-group">
//             <label>Email</label>
//             <input
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label>Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {/* Google reCAPTCHA */}
//           <div className="captcha-container">
//             <ReCAPTCHA
//               sitekey="6LefwMsqAAAAAHZdVKb5e2c7OU4D84TmScRh0Nil"
//               onChange={handleCaptcha}
//             />
//           </div>

//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>

//         <p className="login-links">
//           <Link to="/forgot-password">Forgot Password?</Link> |{" "}
//           <Link to="/reset-password">Reset Password</Link>
//         </p>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import "./LoginComponent.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);
  const navigate = useNavigate();

  // Handle reCAPTCHA
  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please verify reCAPTCHA!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/users/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, captchaToken }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.jwt);
        localStorage.setItem("userName", data.firstName);
        localStorage.setItem("role", data.role);
        alert("Login Successful!");

        // Redirect based on role
        if (data.role === "ADMIN") {
          navigate("/admin_Dash");
        } else if (data.role === "CUSTOMER") {
          navigate("/member_dash");
        } else {
          alert("Invalid Role");
        }
      } else {
        alert("Invalid credentials or reCAPTCHA verification failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="login-container">
      <div className="background-overlay"></div>
      <div className="login-card">
        <h2 className="login-header">Sign In</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Google reCAPTCHA */}
          <div className="captcha-container">
            <ReCAPTCHA
              sitekey="6LefwMsqAAAAAHZdVKb5e2c7OU4D84TmScRh0Nil"
              onChange={handleCaptcha}
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="login-links">
          <Link to="/forgot-password">Forgot Password?</Link> |{" "}
          <Link to="/reset-password">Reset Password</Link>
        </p>
      </div>
    </div>
  );
}
