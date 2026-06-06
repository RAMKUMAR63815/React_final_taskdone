import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='navigation'>
        <Link className="smartjob" to="/">Smart Job Portal</Link>
        <div>
            <Link className='Home_link' to="/">Home</Link>
            <Link className='Job_link' to="/job">Job</Link>
            <Link className='About_link' to="/about" >About</Link>
            <Link className='Contact_link' to="/contact">Contact</Link>
            <Link className='Dashboard_link' to="/dashboard">Dashboard</Link>
        </div>

    </nav>
  )
}
