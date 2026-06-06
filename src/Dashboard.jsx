import React from 'react'

export default function Dashboard() {
  return (
    <div className="page">

      <h1>Welcome to TechNova</h1>

      <p >
        We provide modern cloud solutions,
        AI automation, and cybersecurity services
        for businesses worldwide.
      </p>

      <div className="card-container">

        <div className="card">
          <h3>Cloud Storage</h3>
          <p style={{color:"black"}}>Secure and scalable cloud services.</p>
        </div>

        <div className="card">
          <h3>AI Analytics</h3>
          <p style={{color:"black"}}>Smart business insights using AI.</p>
        </div>

        <div className="card">
          <h3>Cyber Protection</h3>
          <p style={{color:"black"}}>Advanced security for digital systems.</p>
        </div>

      </div>

    </div>
  )
}