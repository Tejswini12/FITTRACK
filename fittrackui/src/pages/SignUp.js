import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";  // Import Link from React Router
import "./RegistrationForm.css";

const SignUp = () => {
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8080/users/signup", data);
      alert("Signup successful!");
      console.log(response.data);
      navigate("/users/signin")
      //navigate("/otpverification")

    } catch (error) {
      alert("Signup failed! Check console for details.");
      console.error(error);

    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create an Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input {...register("firstName", { required: true })} placeholder="First Name" />
            {errors.firstName && <span className="error">First Name is required</span>}
          </div>

          <div className="form-group">
            <input {...register("lastName", { required: true })} placeholder="Last Name" />
            {errors.lastName && <span className="error">Last Name is required</span>}
          </div>

          <div className="form-group">
            <input {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} placeholder="Email" />
            {errors.email && <span className="error">Valid Email is required</span>}
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <div className="radio-group">
              <label>
                <input type="radio" value="MALE" {...register("gender", { required: true })} /> Male
              </label>
              <label>
                <input type="radio" value="FEMALE" {...register("gender", { required: true })} /> Female
              </label>
            </div>
            {errors.gender && <span className="error">Gender is required</span>}
          </div>

          <div className="form-group">
            <input {...register("contactNumber", { required: true })} placeholder="Contact Number" />
            {errors.contactNumber && <span className="error">Contact Number is required</span>}
          </div>

          <div className="form-group">
            <input type="date" {...register("dateOfBirth", { required: true })} />
            {errors.dateOfBirth && <span className="error">Date of Birth is required</span>}
          </div>

          <div className="form-group">
            <input type="number" {...register("age", { required: true, min: 1 })} placeholder="Age" />
            {errors.age && <span className="error">Valid Age is required</span>}
          </div>

          <div className="form-group">
            <input {...register("address", { required: true })} placeholder="Address" />
            {errors.address && <span className="error">Address is required</span>}
          </div>

          <div className="form-group">
            <select {...register("userType", { required: true })}>
              <option value="">Select User Type</option>
              <option value="CUSTOMER">CUSTOMER</option>
            </select>
            {errors.userType && <span className="error">User Type is required</span>}
          </div>

          <div className="form-group">
            <input type="password" {...register("password", { required: true, minLength: 6 })} placeholder="Password" />
            {errors.password && <span className="error">Password must be at least 6 characters</span>}
          </div>

          <button type="submit" className="submit-btn">Sign Up</button>
        </form>

        <div className="already-signed-in">
          <p>Already have an account? <Link to="/users/signin">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;




// import React from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import "./RegistrationForm.css"

// const SignUp = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post("http://localhost:8080/users/signup", data);
//       alert("Signup successful!");
//       console.log(response.data);
//     } catch (error) {
//       alert("Signup failed! Check console for details.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-group">
//           <input {...register("firstName", { required: true })} placeholder="First Name" />
//           {errors.firstName && <span className="error">First Name is required</span>}
//         </div>

//         <div className="form-group">
//           <input {...register("lastName", { required: true })} placeholder="Last Name" />
//           {errors.lastName && <span className="error">Last Name is required</span>}
//         </div>

//         <div className="form-group">
//           <input {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} placeholder="Email" />
//           {errors.email && <span className="error">Valid Email is required</span>}
//         </div>

//         <div className="form-group">
//           <label>Gender:</label>
//           <div className="radio-group">
//             <label>
//               <input type="radio" value="MALE" {...register("gender", { required: true })} /> Male
//             </label>
//             <label>
//               <input type="radio" value="FEMALE" {...register("gender", { required: true })} /> Female
//             </label>
//           </div>
//           {errors.gender && <span className="error">Gender is required</span>}
//         </div>

//         <div className="form-group">
//           <input {...register("contactNumber", { required: true })} placeholder="Contact Number" />
//           {errors.contactNumber && <span className="error">Contact Number is required</span>}
//         </div>

//         <div className="form-group">
//           <input type="date" {...register("dateOfBirth", { required: true })} />
//           {errors.dateOfBirth && <span className="error">Date of Birth is required</span>}
//         </div>

//         <div className="form-group">
//           <input type="number" {...register("age", { required: true, min: 1 })} placeholder="Age" />
//           {errors.age && <span className="error">Valid Age is required</span>}
//         </div>

//         <div className="form-group">
//           <input {...register("address", { required: true })} placeholder="Address" />
//           {errors.address && <span className="error">Address is required</span>}
//         </div>

//         <div className="form-group">
//           <select {...register("userType", { required: true })}>
//             <option value="">Select User Type</option>
//             <option value="CUSTOMER">CUSTOMER</option>
//           </select>
//           {errors.userType && <span className="error">User Type is required</span>}
//         </div>

//         <div className="form-group">
//           <input type="password" {...register("password", { required: true, minLength: 6 })} placeholder="Password" />
//           {errors.password && <span className="error">Password must be at least 6 characters</span>}
//         </div>

//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
