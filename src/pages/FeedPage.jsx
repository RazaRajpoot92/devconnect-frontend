import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../components/constants/contants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../components/utils/feedSlice'
import UserCard from '../components/UserCard'

const FeedPage = () => {

    const feed = useSelector((store)=>store.feed)
    const dispatch = useDispatch()
    const getFeedData = async()=>{
    
    try{
        const feedData = await axios.get(`${BASE_URL}/user/feed`, {withCredentials:true})
        dispatch(addFeed(feedData.data.data))
        
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    if(feed) return

    getFeedData()
  }, [])

//  console.log(feed)

  return (
    <div className='flex justify-center my-5'>
        {feed && <UserCard feed = {feed[5]} />}
    </div>)
  
}

export default FeedPage