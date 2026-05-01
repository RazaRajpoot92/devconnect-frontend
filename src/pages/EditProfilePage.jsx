import React, { useState } from 'react'
import EditProfileForm from '../components/EditProfileForm'
import { useSelector } from 'react-redux'
import UserCard from '../components/UserCard'

const EditProfilePage = () => {

  const user = useSelector((store)=>store.user)
  

  const [firstName, setFirstName] = useState(user?.firstName || "")
  const [lastName, setLastName] = useState(user?.lastName || "")
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "" )
  const [about, setAbout] = useState(user?.about || "")
  const [age, setAge] = useState(user?.age || "")
  const [gender, setGender] = useState(user?.gender || "")

  const currUser= {
    firstName,lastName,photoUrl,about,age,gender
  }
  const userMethods ={
    setFirstName,
    setLastName,
    setAbout,
    setAge,
    setPhotoUrl,
    setGender
  }
 // console.log(user)
  
  return (
    !user?<p>Loading...</p>:<div className='my-10'>
        
    <h1>Edit Profile</h1>

    <br />
    <div className='flex justify-around items-center'>
      <EditProfileForm user={currUser} methods={userMethods} />
      <UserCard feed={currUser} />
    </div>
    
    </div>
  )
}

export default EditProfilePage