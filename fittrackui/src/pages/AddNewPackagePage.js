// import React from 'react'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import PackageService from '../service/PackageService';
// export default function AddNewPackagePage() {

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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PackageService from '../service/PackageService';
import './AddNewPackagePage.css'; // Import CSS file

export default function AddNewPackagePage() {
  const [pkgformdetails, setpkgformdetails] = useState({
    price: '',
    description: '',
    packageType: '',
    packageDuration: ''
  });

  const navigate = useNavigate();

  const addpackage = () => {
    if (
      pkgformdetails.price === '' ||
      pkgformdetails.description === '' ||
      pkgformdetails.packageType === '' ||
      pkgformdetails.packageDuration === ''
    ) {
      alert('🚨 Please fill in all details!');
    } else {
      let pkg = {
        price: parseInt(pkgformdetails.price),
        description: pkgformdetails.description,
        packageType: pkgformdetails.packageType,
        packageDuration: parseInt(pkgformdetails.packageDuration)
      };

      PackageService.addNewPackage(pkg)
        .then(() => {
          navigate('/getAllPackages');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handlechange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setpkgformdetails({ ...pkgformdetails, [name]: value });
  };

  return (
    <div className="add-package-container">
      <div className="form-box">
        <h2>Add a New Package 📦</h2>
        <form>
          <label>Enter Price:</label>
          <input type="number" name="price" onChange={handlechange} value={pkgformdetails.price} />

          <label>Enter Description:</label>
          <input type="text" name="description" onChange={handlechange} value={pkgformdetails.description} />

          <label>Enter Package Type:</label>
          <input type="text" name="packageType" onChange={handlechange} value={pkgformdetails.packageType} />

          <label>Enter Package Duration (Days):</label>
          <input type="number" name="packageDuration" onChange={handlechange} value={pkgformdetails.packageDuration} />

          <button type="button" onClick={addpackage}>🚀 Add Package</button>
          <a href='/getAllPackages'>Go back to Packages</a>
        </form>
      </div>
    </div>
  );
}
