// import React from 'react'
// import { useState,useEffect} from 'react'
// import { useNavigate,useLocation} from 'react-router-dom';
// import PackageService from '../service/PackageService';
// export default function PackageEditPage() {

//     const [pkgformdetails,setpkgformdetails]=useState({price:'',description:'',packageType:'',packageDuration:''});
//     const navigate=useNavigate();
//     const addpackage=()=>{
//      if(pkgformdetails.price===""||pkgformdetails.description===""||pkgformdetails.packageType===""||pkgformdetails.packageDuration===""){
//         alert("Please fill details");
//      }else{
//         let pkg={price:parseInt(pkgformdetails.price),description:pkgformdetails.description,packageType:pkgformdetails.packageType,packageDuration:parseInt(pkgformdetails.packageDuration)};
//         PackageService.addNewPackage(pkg)
//         .then(()=>{
//             navigate("/getAllPackages");
//         })
//         .catch((err)=>{
//          console.log(err);
//         })
//      }

//     }
//     const handlechange=(event)=>{
//         let name=event.target.name
//         let value=event.target.value;
//         setpkgformdetails({...pkgformdetails,[name]:value})
//     }
//     useEffect(()=>{
//       setpkgformdetails({...location.state.editob});
//   },[]);
//   return (
     
//     <div>
//         <form>
//             Enter Price: <br></br> <input type="text" name="price" id="price" onChange={handlechange} value={pkgformdetails.price}></input><br></br>
//             Enter Description: <br></br><input type="text" name="description" id="description" onChange={handlechange} value={pkgformdetails.description}></input> <br></br>
//             Enter PackageType: <br></br> <input type="text" name="packageType" id="packageType" onChange={handlechange} value={pkgformdetails.package_type}></input><br></br>
//             Enter Package Duration: <br></br> <input type="text" name="packageDuration" id="packageDuration" onChange={handlechange} value={pkgformdetails.package_duration}></input><br></br>
//             <button type="button" name="btn" id="btn" onClick={addpackage}>Add Package</button>
//         </form>
//     </div>
//   )
// }

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PackageService from '../service/PackageService';
import './PackageEditPage.css';
import AdminService from '../service/AdminService';

export default function TrainerEditForm() {
 const [trainerformdetails, settrainerformdetails] = useState({
    id: 0,
     trainerName: '',
     email: '',
     phone: '',
     expertise: ''
   });
 
   const navigate = useNavigate();
   const location=useLocation();
   const updateTrainer = () => {
     if (
         trainerformdetails.trainerName === '' ||
         trainerformdetails.email === '' ||
         trainerformdetails.phone === '' ||
         trainerformdetails.expertise === ''
     ) {
      alert('🚨 Please fill in all details!');
    } else {
      let trainer = {
        id:parseInt(trainerformdetails.id),
        trainerName: trainerformdetails.trainerName,
        email: trainerformdetails.email,
        phone:parseInt( trainerformdetails.phone),
        expertise: trainerformdetails.expertise
      };

      // Assuming you want to update the package here
      AdminService.updateTrainer(trainer)
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

  useEffect(() => {
    if (location.state && location.state.editob) {
        settrainerformdetails({ ...location.state.editob });
    }
  }, [location.state]);

  return (
    <div className="form-container">
      <h2>Edit Package 📦</h2>
      <form>
      <label>Enter Trainer Name:</label>
          <input type="text" name="trainerName" onChange={handlechange} value={trainerformdetails.trainerName} />

          <label>Enter Email:</label>
          <input type="text" name="email" onChange={handlechange} value={trainerformdetails.email} />

          <label>Enter the Phone Number:</label>
          <input type="number" name="phone" onChange={handlechange} value={trainerformdetails.phone} />

          <label>Expertise:</label>
          <input type="text" name="expertise" onChange={handlechange} value={trainerformdetails.expertise} />


        <button type="button" onClick={updateTrainer}>Update Trainer Details</button>
        <a href='/admin_Dash'>Go to dashboard</a>
      </form>
    </div>
  );
}


