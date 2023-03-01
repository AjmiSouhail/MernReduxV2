import {useParams} from 'react-router-dom'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Udp_Emp, Set_Emp } from '../action/action';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const navigate = useNavigate(); 
  const initialState = useSelector((state) => state.employe)
  let [employe, setEmploye] = useState(initialState)
  const dispatch = useDispatch();
  const params = useParams()

  return (
    <div className=' container'>
          <form onSubmit={handleSubmit}>

<h1 className="  bg-white text-center text-primary py-3 " >Modifier  Employe</h1>
<label className='text-primary'>ID Employe </label>
<input type="text" className='form-control my-2'name="id" placeholder='entrer ID' 
value={employe.id} onChange={handleChange}  />
<label className='text-primary'>First Name</label>
<input type="text" className='form-control my-2' name="firstName" placeholder='entrer First Name'
value={employe.firstName} onChange={handleChange}  />
<label className='text-primary'>Last Name</label>
<input type="text" placeholder='entrer Last Name' className='form-control my-2' name="lastName"
value={employe.lastName} onChange={handleChange}  />
<label className='text-primary'>Email</label>
<input  type="text" className='form-control my-2' name="email" placeholder='entrer Email'
value={employe.email} onChange={handleChange}  />
<label className='text-primary'>Contact Number </label>
<input  type="text" className='form-control my-2' name="contactNumber" placeholder='entrer Contact Number'
value={employe.contactNumber} onChange={handleChange}  />
<label className='text-primary'>Dob</label>
<input type="text" className='form-control my-2' name="dob" placeholder='entrer Dob'
value={employe.dob} onChange={handleChange}  />
<button  type="submit" className="btn btn-warning" >Modifier </button>
</form>
</div>    )
}

export default Edit;
