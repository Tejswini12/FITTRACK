import React, { useState } from "react";
import axios from "axios";

const OTPVerification = () => {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const sendOTP = async () => {
    try {
      await axios.post("http://localhost:8080/api/otp/generate", null, {
        params: { phoneOrEmail }
      });
      setStep(2);
    } catch (error) {
      console.error("Error sending OTP", error);
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/otp/verify", null, {
        params: { phoneOrEmail, otp }
      });
      alert(response.data);
      setStep(1);
    } catch (error) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">OTP Verification</h1>
      {step === 1 ? (
        <div>
          <input
            type="text"
            placeholder="Enter Email or Phone"
            value={phoneOrEmail}
            onChange={(e) => setPhoneOrEmail(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button onClick={sendOTP} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Send OTP
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button onClick={verifyOTP} className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
};

export default OTPVerification;
