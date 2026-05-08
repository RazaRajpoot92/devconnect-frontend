import axios from 'axios';
import React from 'react'
import { BASE_URL } from './constants/contants';
import { useDispatch } from 'react-redux';
import { removeRequest } from './utils/requestSlice';

const RequestCard = ({user, id}) => {
    const dispatch = useDispatch()
    
    const handleRequest = async(status, id)=>{
        try{
           await axios.post(`${BASE_URL}/request/review/${status}/${id}`, {},{withCredentials:true})
            
            dispatch(removeRequest(id))

        }catch(error){
            console.log(error.message)
        }
    }
  
    return (
     
      <div className="w-full max-w-md bg-neutral-800 border border-gray-700 rounded-3xl shadow-2xl p-2 flex gap-3 items-center">
  
  {/* Left Image */}
  <div className="shrink-0">
    <img
      src={user.photoUrl}
      alt={user.firstName}
      className="w-26 h-32 object-cover rounded-2xl"
    />
  </div>

  {/* Right Content */}
  <div className="flex-1">
    
    {/* Top Info */}
    <div className='flex gap-2'>
      <h2 className="text-lg font-bold text-white tracking-tight">
      {user.firstName + ' ' + user.lastName}
    </h2>

    <p className="text-neutral-400 mt-1 text-sm">
      {user.gender} • {user.age} years old
    </p>
    </div>
  

    {/* About */}
    <div className="mt-2">
     

      <p className="text-neutral-400 leading-relaxed text-xs line-clamp-3">
        {user.about}
      </p>
    </div>

    {/* Buttons */}
    <div className="flex gap-3 mt-4">
      <button onClick={()=>handleRequest("rejected",id)} className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium transition-all duration-300 hover:bg-red-500 hover:text-white">
        Reject
      </button>

      <button onClick={()=>handleRequest("accepted",id)} className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-sm font-medium transition-all duration-300 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20">
        Accept
      </button>
    </div>
  </div>
</div>
  
  );
}

export default RequestCard
