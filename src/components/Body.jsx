import axios from 'axios'
import Footer from './Footer'
import NavBar from './NavBar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { BASE_URL } from './constants/contants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from './utils/userSlice'
import { toast, ToastContainer } from 'react-toastify'

const Body = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const fetchUser = async()=>{
    try{
      const user = await axios.get(`${BASE_URL}/profile/view`, {withCredentials:true})

      dispatch(addUser(user.data.userData))
    }catch(err){
      if(err.response.status == 401){
        
        navigate("/login")
      }
      console.log(err.response)
      
      
      
    }
  
  }

  useEffect(()=>{
    if(location.pathname == "/login") return;

    fetchUser()
  },[])


  return (
    <div className="min-h-screen flex flex-col">
     
        <NavBar />
        <div className="flex-1">
             <Outlet />
        </div>
       
        <Footer />
    </div>
  )
}

export default Body