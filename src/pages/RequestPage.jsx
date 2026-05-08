import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../components/constants/contants'
import { useDispatch, useSelector } from 'react-redux'
import {addRequest} from '../components/utils/requestSlice'
import RequestCard from '../components/RequestCard'

const RequestPage = () => {
  const dispatch = useDispatch()
  const request = useSelector(store=> store.request)
   const getRequests = async ()=>{
    const res = await axios.get(`${BASE_URL}/user/requests/recieved`, {withCredentials:true})
    console.log(res.data.data)
    dispatch(addRequest(res.data.data))
  }

  useEffect(()=>{
    getRequests()
  },[])

  return (
    <div className=''>
      <h2 className=''>Request Recieved ({request && request.length})</h2>
      <div className='p-2'>
      {
       request && request.map((req, idx)=>(
          <RequestCard key={req._id} id={req._id} user = {req.fromUserId} />
        ))
      }
      </div>
    </div>
  )
}

export default RequestPage