import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PackageService from '../service/PackageService';
import './AddNewPackagePage.css'; // Import CSS file
import AdminService from '../service/AdminService';

export default function AddNewTrainer() {
  const [trainerformdetails, settrainerformdetails] = useState({
    trainerName: '',
    email: '',
    phone: '',
    expertise: ''
  });

  const navigate = useNavigate();

  const addtrainer = () => {
    if (
        trainerformdetails.trainerName === '' ||
        trainerformdetails.email === '' ||
        trainerformdetails.phone === '' ||
        trainerformdetails.expertise === ''
    ) {
      alert('🚨 Please fill in all details!');
    } else {
      let trainer = {
        trainerName: trainerformdetails.trainerName,
        email: trainerformdetails.email,
        phone: parseInt(trainerformdetails.phone),
        expertise: trainerformdetails.expertise
      };

      AdminService.addNewTrainer(trainer)
        .then(() => {
          navigate('/getAllTrainers');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handlechange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    settrainerformdetails({ ...trainerformdetails, [name]: value });
  };

  return (
    <div className="add-package-container">
      <div className="form-box">
        <h2>Add a New Trainer </h2>
        <form>

        <label>Enter Trainer Name:</label>
          <input type="text" name="trainerName" onChange={handlechange} value={trainerformdetails.trainerName} />

          
          <label>Enter Email:</label>
          <input type="text" name="email" onChange={handlechange} value={trainerformdetails.email} />

          <label>Enter the Phone Number:</label>
          <input type="number" name="phone" onChange={handlechange} value={trainerformdetails.phone} />

          <label>Expertise:</label>
          <input type="text" name="expertise" onChange={handlechange} value={trainerformdetails.expertise} />

          <button type="button" onClick={addtrainer}>🚀 Add Trainer</button>
          <a href='/getAllTrainers'>Go back to Trainers</a>
        </form>
      </div>
    </div>
  );
}
