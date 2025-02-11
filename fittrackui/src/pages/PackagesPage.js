
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import PackageService from '../service/PackageService';

export default function PackagesPage() { 
  const [packagearr,setpackagearr]=useState([])
  const [searcharr,setsearcharr]=useState([]);
  const [searchtxt,setsearchtext]=useState("");
  useEffect(()=>{
    fetchdata();
  },[]);

  useEffect(()=>{
    if(searchtxt===""){
      setsearcharr([...packagearr])
    }else{
      let pkg=packagearr.filter(t=>t.name.includes(searchtxt));
      setsearcharr(pkg);
    }
  },[packagearr,searchtxt])
  

  const fetchdata=()=>{
   PackageService.getAllPackages()
    .then((response)=>{
      console.log(response);
      setpackagearr([...response.data]);
    }).catch((err)=>{
      console.log(err);
    })
  }
  const changesearchtxt=(event)=>{
    setsearchtext(event.target.value);
  }
  const deleteteam=(id)=>{
      PackageService.deleteById(id)
      .then(()=>{
        fetchdata();
      })
      .catch((err)=>{
console.log(err);
      })
  }
  return (

    <div>
        <Link  to="/packageform">
        <button type="button" name="add" id="add" className="btn btn-primary">Add Package</button>
        </Link>
        Search:<input type="text" name="search" id="search" onChange={changesearchtxt} value={searchtxt}></input>
      <table border={2}>
        <thead>
          <tr>
          <th>Package Id</th>
          <th>Package created On</th>
          <th>Package Updated On</th>
          <th>Price</th>
          <th>Description</th>
          <th>Package Type</th>
          <th>Package Duration</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {searcharr.map(pkg=>(<tr key={pkg.id}>
            <td scope='row'>{pkg.id}</td>
            <td>{pkg.createdOn}</td>
            <td>{pkg.updatedOn}</td>
            <td>{pkg.price}</td>
            <td>{pkg.description}</td>
            <td>{pkg.packageType}</td>
            <td>{pkg.packageDuration}</td>
            <td>
       
              <Link to={`/packages/${pkg.id}`} state={{editob:pkg}}>
              <button type="button" name="edit" id="edit" value="edit">Edit</button>

              </Link>
              <Link>
              <button type="button" name="delete" id="delete" value="delete" onClick={()=>{deleteteam(pkg.id)}}>Delete</button>
              </Link>
              <Link to={`/packages/view/${pkg.id}`}>
              <button type="button" name="view" id="view" value="view">View</button>
              </Link>
            </td>
          </tr>))

          }
        </tbody>
        
      </table>
    </div>
    
  )
}

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import PackageService from "../service/PackageService";
// import "./PackagesPage.css"; // Import CSS file

// export default function PackagesPage() {
//   const [packagearr, setpackagearr] = useState([]);
//   const [searcharr, setsearcharr] = useState([]);
//   const [searchtxt, setsearchtext] = useState("");

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   useEffect(() => {
//     if (searchtxt === "") {
//       setsearcharr([...packagearr]);
//     } else {
//       let pkg = packagearr.filter((t) => t.name.includes(searchtxt));
//       setsearcharr(pkg);
//     }
//   }, [packagearr, searchtxt]);

//   const fetchdata = () => {
//     PackageService.getAllPackages()
//       .then((response) => {
//         setpackagearr([...response.data]);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const changesearchtxt = (event) => {
//     setsearchtext(event.target.value);
//   };

//   const deleteteam = (id) => {
//     PackageService.deleteById(id)
//       .then(() => {
//         fetchdata();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="container packages-container">
//       <div className="header">
//         <Link to="/packageform">
//           <button className="btn btn-primary">Add Package</button>
//         </Link>
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search package..."
//             onChange={changesearchtxt}
//             value={searchtxt}
//             className="search-input"
//           />
//         </div>
//       </div>

//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Package Id</th>
//             <th>Created On</th>
//             <th>Updated On</th>
//             <th>Price</th>
//             <th>Description</th>
//             <th>Type</th>
//             <th>Duration</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {searcharr.map((pkg) => (
//             <tr key={pkg.id}>
//               <td>{pkg.id}</td>
//               <td>{pkg.createdOn}</td>
//               <td>{pkg.updatedOn}</td>
//               <td>${pkg.price}</td>
//               <td>{pkg.description}</td>
//               <td>{pkg.packageType}</td>
//               <td>{pkg.packageDuration}</td>
//               <td>
//                 <Link to={`/packages/${pkg.id}`} state={{ editob: pkg }}>
//                   <button className="btn btn-warning">Edit</button>
//                 </Link>
//                 <button className="btn btn-danger" onClick={() => deleteteam(pkg.id)}>
//                   Delete
//                 </button>
//                 <Link to={`/packages/view/${pkg.id}`}>
//                   <button className="btn btn-info">View</button>
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// import { Button } from 'bootstrap';
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import PackageService from '../service/PackageService';

// export default function PackagesPage() {
//   const [packagearr, setpackagearr] = useState([]);
//   const [searcharr, setsearcharr] = useState([]);
//   const [searchtxt, setsearchtext] = useState("");

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   useEffect(() => {
//     if (searchtxt === "") {
//       setsearcharr([...packagearr]);
//     } else {
//       // Ensure that the search is case-insensitive and checks the correct field
//       let pkg = packagearr.filter(t => t.name.toLowerCase().includes(searchtxt.toLowerCase()));
//       setsearcharr(pkg);
//     }
//   }, [packagearr, searchtxt]);

//   const fetchdata = () => {
//     PackageService.getAllPackages()
//       .then((response) => {
//         console.log(response);
//         setpackagearr([...response.data]);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   const changesearchtxt = (event) => {
//     setsearchtext(event.target.value);
//   }

//   const deleteteam = (id) => {
//     PackageService.deleteById(id)
//       .then(() => {
//         fetchdata();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   return (
//     <div>
//       <Link to="/packageform">
//         <button type="button" name="add" id="add" className="btn btn-primary">Add Package</button>
//       </Link>
//       Search:<input type="text" name="search" id="search" onChange={changesearchtxt} value={searchtxt}></input>
//       <table border={2}>
//         <thead>
//           <tr>
//             <th>Package Id</th>
//             <th>Package created On</th>
//             <th>Package Updated On</th>
//             <th>Price</th>
//             <th>Description</th>
//             <th>Package Type</th>
//             <th>Package Duration</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {searcharr.map(pkg => (
//             <tr key={pkg.id}>
//               <td scope='row'>{pkg.id}</td>
//               <td>{pkg.createdOn}</td>
//               <td>{pkg.updatedOn}</td>
//               <td>{pkg.price}</td>
//               <td>{pkg.description}</td>
//               <td>{pkg.packageType}</td>
//               <td>{pkg.packageDuration}</td>
//               <td>
//                 <Link to={`/packages/${pkg.id}`} state={{ editob: pkg }}>
//                   <button type="button" name="edit" id="edit" value="edit">Edit</button>
//                 </Link>
//                 <Link>
//                   <button type="button" name="delete" id="delete" value="delete" onClick={() => { deleteteam(pkg.id) }}>Delete</button>
//                 </Link>
//                 <Link to={`/packages/view/${pkg.id}`}>
//                   <button type="button" name="view" id="view" value="view">View</button>
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }
