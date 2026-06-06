import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Solutions() {
  return (
    <div className="page">

      <h1>Services</h1>

      <div className="sub-menu">

        <Link to="cloud">Cloud Services</Link>

        <Link to="cybersecurity">Cyber Security</Link>

        <Link to="ai">AI Solutions</Link>

      </div>

      <div className="nested-content">
        <Outlet />
      </div>

    </div>
  )
}