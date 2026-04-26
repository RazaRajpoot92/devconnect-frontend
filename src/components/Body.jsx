
import axios from 'axios'
import Footer from './Footer'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { BASE_URL } from './constants/contants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from './utils/userSlice'
import { ToastContainer, toast } from 'react-toastify'

const Body = () => {

  const dispatch = useDispatch()

  const fetchUser = async()=>{
    try{
      const user = await axios.get(`${BASE_URL}/profile/view`, {withCredentials:true})
      console.log(user.data.userData)
      dispatch(addUser(user.data.userData))
    }catch(err){
      console.log(err)
      toast.error("Something went wrong")
    }
  
  }

  useEffect(()=>{
    fetchUser()
  },[])


  return (
    <div>
      <ToastContainer />
        <NavBar />
        
        <Outlet />
        <Footer />
    </div>
  )
}

export default Body