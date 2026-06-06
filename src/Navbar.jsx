import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        TechNova
      </div>

      <div className="nav-menu">

        <NavLink to="/">Dashboard</NavLink>

        <NavLink to="/team">Team</NavLink>

        <NavLink to="/solutions">Solutions</NavLink>

        <NavLink to="/contact">Contact</NavLink>

        <NavLink to="/account">Account</NavLink>

      </div>

    </nav>
  )
}