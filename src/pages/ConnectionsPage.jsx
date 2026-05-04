import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../components/constants/contants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnection } from '../components/utils/connectionSlice'
import ConnectionCard from '../components/ConnectionCard'

const ConnectionsPage = () => {
    const dispatch = useDispatch()
    const connections = useSelector((store)=> store.connections)

    const getConnections = async ()=>{
        const res = await axios.get(`${BASE_URL}/user/connections`, {withCredentials:true})
        
        console.log(res.data)
        dispatch(addConnection(res.data.data))
    }

    useEffect(()=>{
        getConnections()
    }, [])
  
    if(!connections) return <p>Loading....</p>
  return (
    <div className='my-4 px-2'>
        <h1 className='text-2xl'>Connections ({connections.length})</h1>
         
         <div className='mt-5 flex flex-col gap-2'>
                {
                connections.map((connection, idx)=>( 
                    <ConnectionCard key={connection._id} connection={connection} />  
                ))
                } 
         </div>
         
    </div>
  )
}

export default ConnectionsPage