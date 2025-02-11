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

export default function PackageEditPage() {
  const [pkgformdetails, setpkgformdetails] = useState({

    id:0,
    price: '',
    description: '',
    packageType: '',
    packageDuration: ''
  });

  const navigate = useNavigate();
  const location = useLocation();

  const updatePackage = () => {
    if (
      pkgformdetails.price === '' ||
      pkgformdetails.description === '' ||
      pkgformdetails.packageType === '' ||
      pkgformdetails.packageDuration === ''
    ) {
      alert('🚨 Please fill in all details!');
    } else {
      let pkg = {
        id:parseInt(pkgformdetails.id),
        price: parseInt(pkgformdetails.price),
        description: pkgformdetails.description,
        packageType: pkgformdetails.packageType,
        packageDuration: parseInt(pkgformdetails.packageDuration)
      };

      // Assuming you want to update the package here
      PackageService.updatePackage(pkg)
        .then(() => {
          navigate('/getAllPackages');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setpkgformdetails({ ...pkgformdetails, [name]: value });
  };

  useEffect(() => {
    if (location.state && location.state.editob) {
      setpkgformdetails({ ...location.state.editob });
    }
  }, [location.state]);

  return (
    <div className="form-container">
      <h2>Edit Package 📦</h2>
      <form>
        <label>Enter Price:</label>
        <input
          type="text"
          name="price"
          onChange={handleChange}
          value={pkgformdetails.price}
        />

        <label>Enter Description:</label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={pkgformdetails.description}
        />

        <label>Enter Package Type:</label>
        <input
          type="text"
          name="packageType"
          onChange={handleChange}
          value={pkgformdetails.packageType}
          readOnly
        />

        <label>Enter Package Duration (Days):</label>
        <input
          type="text"
          name="packageDuration"
          onChange={handleChange}
          value={pkgformdetails.packageDuration}
          readOnly
        />

        <button type="button" onClick={updatePackage}>Update Package</button>
        <a href='/admin_Dash'>Go to dashboard</a>
      </form>
    </div>
  );
}

