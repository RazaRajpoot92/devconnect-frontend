import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../components/constants/contants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../components/utils/feedSlice'

const FeedPage = () => {

    const feed = useSelector((store)=>store.feed)
    const dispatch = useDispatch()

    const getFeedData = async()=>{
    
    try{
        const feedData = await axios.get(`${BASE_URL}/user/feed`, {withCredentials:true})
        dispatch(addFeed(feedData.data.data))
        console.log(feedData.data)
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
    <div>
        <h1>Total Feed: {feed?feed.length:0}</h1>
        <h1>Name: {feed?feed[0].firstName:""}</h1>
    </div>
  )
}

export default FeedPage