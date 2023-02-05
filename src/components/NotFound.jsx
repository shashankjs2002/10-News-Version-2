import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
   const navigate= useNavigate()
   useEffect(() => {
       navigate('/in/hi/breaking-news')
   
   }, [])
   
  return (
    <div>404</div>
  )
}

export default NotFound