
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import PackageService from '../service/PackageService';

import AdminService from '../service/AdminService';

export default function PackagesPage() { 
  const [trainerarr,settrainerarr]=useState([])
  const [searcharr,setsearcharr]=useState([]);
  const [searchtxt,setsearchtext]=useState("");
  useEffect(()=>{
    fetchdata();
  },[]);

  useEffect(()=>{
    if(searchtxt===""){
      setsearcharr([...trainerarr])
    }else{
      let trainer=trainerarr.filter(t=>t.name.includes(searchtxt));
      setsearcharr(trainer);
    }
  },[trainerarr,searchtxt])
  

  const fetchdata=()=>{
   AdminService.getAllTrainers()
    .then((response)=>{
      console.log(response);
      settrainerarr([...response.data]);
    }).catch((err)=>{
      console.log(err);
    })
  }
  const changesearchtxt=(event)=>{
    setsearchtext(event.target.value);
  }
  const deleteteam=(id)=>{
      AdminService.deleteById(id)
      .then(()=>{
        fetchdata();
      })
      .catch((err)=>{
console.log(err);
      })
  }
  return (

    <div>
        <Link  to="/trainerform">
        <button type="button" name="add" id="add" className="btn btn-primary">Add New Trainer</button>
        </Link>
        Search:<input type="text" name="search" id="search" onChange={changesearchtxt} value={searchtxt}></input>
      <table  className="table table-dark">
        <thead>
          <tr>
          <th>Trainer Id</th>
          <th>Trainer Details created On</th>
          <th>Trainer Details Updated On</th>
          <th>Trainer Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Expertise</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {searcharr.map(trainer=>(<tr key={trainer.id}>
            <td scope='row'>{trainer.id}</td>
            <td>{trainer.createdOn}</td>
            <td>{trainer.updatedOn}</td>
            <td>{trainer.trainerName}</td>
            <td>{trainer.email}</td>
            <td>{trainer.phone}</td>
            <td>{trainer.expertise}</td>
            <td>
       
              <Link to={`/updatetrainer/${trainer.id}`} state={{editob:trainer}}>
              <button type="button" name="edit" id="edit" value="edit">Edit</button>
              </Link>
              <Link>
              <button type="button" name="delete" id="delete" value="delete" onClick={()=>{deleteteam(trainer.id)}}>Delete</button>
              </Link>
              <Link to={`/trainers/view/${trainer.id}`}>
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
