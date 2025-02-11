// import React from 'react'
// import { useState } from "react";
// export default function BmiCalculator() {

//     const [weight, setWeight] = useState("");
//     const [height, setHeight] = useState("");
//     const [bmi, setBmi] = useState(null);
//     const [status, setStatus] = useState("");
  
//     const calculateBMI = () => {
//       if (weight && height) {
//         const heightInMeters = height / 100;
//         const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
//         setBmi(bmiValue);
//         determineStatus(bmiValue);
//       }
//     };
  
//     const determineStatus = (bmiValue) => {
//       if (bmiValue < 18.5) {
//         setStatus("Underweight");
//       } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
//         setStatus("Normal weight");
//       } else if (bmiValue >= 25 && bmiValue < 29.9) {
//         setStatus("Overweight");
//       } else {
//         setStatus("Obese");
//       }
//     };
  
//     return (
//       <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
//         <h2 className="text-xl font-bold mb-4">BMI Calculator</h2>
//         <input
//           type="number"
//           placeholder="Enter weight (kg)"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
//           className="p-2 border rounded mb-2 w-full"
//         />
//         <input
//           type="number"
//           placeholder="Enter height (cm)"
//           value={height}
//           onChange={(e) => setHeight(e.target.value)}
//           className="p-2 border rounded mb-2 w-full"
//         />
//         <button
//           onClick={calculateBMI}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Calculate BMI
//         </button>
//         {bmi && (
//           <div className="mt-4 p-3 bg-white rounded shadow text-center">
//             <p className="text-lg font-semibold">Your BMI: {bmi}</p>
//             <p className={`text-sm font-medium ${status === 'Obese' ? 'text-red-500' : status === 'Overweight' ? 'text-yellow-500' : 'text-green-500'}`}>
//               Status: {status}
//             </p>
//           </div>
//         )}
//       </div>
//     );
// }


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "./BmiCalculator.css";
// export default function BmiCalculator() {
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [bmi, setBmi] = useState(null);
//   const [status, setStatus] = useState("");

//   const calculateBMI = () => {
//     if (weight && height) {
//       const heightInMeters = height / 100;
//       const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
//       setBmi(bmiValue);
//       determineStatus(bmiValue);
//     }
//   };

//   const determineStatus = (bmiValue) => {
//     if (bmiValue < 18.5) {
//       setStatus("Underweight");
//     } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
//       setStatus("Normal weight");
//     } else if (bmiValue >= 25 && bmiValue < 29.9) {
//       setStatus("Overweight");
//     } else {
//       setStatus("Obese");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-6">
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.8 }} 
//         animate={{ opacity: 1, scale: 1 }} 
//         transition={{ duration: 0.5 }}
//         className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md text-center"
//       >
//         <h2 className="text-2xl font-extrabold text-gray-800 mb-4">BMI Calculator</h2>
        
//         <input
//           type="number"
//           placeholder="Enter weight (kg)"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
//           className="p-3 border rounded-lg mb-3 w-full text-center focus:ring-2 focus:ring-blue-400"
//         />
//         <input
//           type="number"
//           placeholder="Enter height (cm)"
//           value={height}
//           onChange={(e) => setHeight(e.target.value)}
//           className="p-3 border rounded-lg mb-4 w-full text-center focus:ring-2 focus:ring-blue-400"
//         />

// <motion.button
//   whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)" }}
//   whileTap={{ scale: 0.95 }}
//   onClick={calculateBMI}
//   className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-lg text-gray-900 font-semibold rounded-lg shadow-md transition-all duration-300 border border-gray-300 hover:bg-opacity-30 hover:text-gray-800"
// >
//   Calculate BMI
// </motion.button>

//         {bmi && (
//           <motion.div 
//             initial={{ y: 20, opacity: 0 }} 
//             animate={{ y: 0, opacity: 1 }} 
//             transition={{ duration: 0.5 }} 
//             className="mt-5 p-4 rounded-lg shadow-md text-white font-bold text-lg"
//             style={{
//               backgroundColor: status === "Obese" ? "#E63946" : 
//                                status === "Overweight" ? "#F4A261" : 
//                                status === "Underweight" ? "#2A9D8F" : "#1D3557",
//             }}
//           >
//             <p>Your BMI: {bmi}</p>
//             <p>Status: {status}</p>
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./BmiCalculator.module.css"; // Import the module CSS

export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      determineStatus(bmiValue);
    }
  };

  const determineStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setStatus("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  return (
    <div className={styles.bmiPage}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.bmiContainer}
      >
        <h2 className={styles.bmiTitle}>BMI Calculator</h2>

        <input
          type="number"
          placeholder="Enter weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className={styles.bmiInput}
        />
        <input
          type="number"
          placeholder="Enter height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className={styles.bmiInput}
        />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={calculateBMI}
          className={styles.bmiButton}
        >
          Calculate BMI
        </motion.button>

        {bmi && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`${styles.bmiResult} ${
              status === "Obese"
                ? styles.bmiObese
                : status === "Overweight"
                ? styles.bmiOverweight
                : status === "Underweight"
                ? styles.bmiUnderweight
                : styles.bmiNormal
            }`}
          >
            <p>Your BMI: {bmi}</p>
            <p>Status: {status}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
