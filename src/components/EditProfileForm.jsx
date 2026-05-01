import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from './constants/contants'

const EditProfileForm = ({user, methods}) => {
 
  
  const updateProfile = async()=>{
    try {
       const res = axios.patch(`${BASE_URL}/profile/edit`, {
          firstName,
          lastName,
          photoUrl,
          about,
          age,
        }, {withCredentials:true})

        console.log(res.data)

    } catch (error) {
      
    }
  }

  return (
    <div className="card card-border bg-base-100 w-96  border border-black">
      <div className="card-body  text-center">
      <h2 className="font-bold text-2xl text-center text-gray-300 ">Edit Profile</h2>

      <fieldset className="fieldset">
      
        <input onChange={(e)=>methods.setFirstName(e.target.value)} value={user.firstName} type="text" className="input outline-none focus:border-primary" placeholder="Enter your first name" />
        
      </fieldset>
      <fieldset className="fieldset">
      
        <input onChange={(e)=>methods.setLastName(e.target.value)} value={user.lastName}  type="text" className="input outline-none focus:border-primary" placeholder="Enter your last name" />
        
      </fieldset>
      <fieldset className="fieldset">
      
        <input onChange={(e)=>methods.setPhotoUrl(e.target.value)} value={user.photoUrl} type="text " className="input outline-none focus:border-primary" placeholder="Enter your photo url" />
        
      </fieldset>

      <fieldset className="fieldset">
      
        <textarea onChange={(e)=>methods.setAbout(e.target.value)} value={user.about} className="textarea outline-none focus:border-primary" placeholder="Bio"></textarea>
        
      </fieldset>

      <div className='flex items-center gap-2 '>
        <fieldset className="fieldset w-1/2">

        <input
          type="number"
          onChange={(e)=>methods.setAge(e.target.value)} value={user.age}
          className="input w-full outline-none focus:border-primary "
          required
          placeholder="Enter your age"
          min="18"
          max="100"
          title="Must be between be 1 to 10"
        />
        
      </fieldset>
      
          
        <select 
        onChange={(e)=>methods.setGender(e.target.value)}
        defaultValue={user.gender} className="select w-1/2 mr-4 outline-none focus:border-primary">
          <option disabled={true}>{user.gender}</option>
          <option>male</option>
          <option>female</option>
          <option>others</option>
        </select>
      </div>



      <div className="card-actions justify-center">
        <button onClick={updateProfile} className="btn btn-primary w-50">Save Changes</button>
      </div>
      </div>
    </div>
  )
}

export default EditProfileForm