import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg'>
        <Link to="/" className='box'>Home</Link>
        <Link to="/product" className='box'>Product</Link>
        <Link to="/login" className='box'>Login</Link>
        <Link to="/signup" className='box'>Signup</Link>
    </div>
  )
}

export default Navbar