import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg'>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Navbar