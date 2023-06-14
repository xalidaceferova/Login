import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Home = () => {
  const location=useLocation()
  return (
    <div>
<h1>Hello {location.state.id}</h1>
<Link to="/about">About</Link>
<Link to="/admin">Admin</Link>
    </div>
  )
}

export default Home