import React from 'react'
import Third from './Third'

export default function Seocnd(user1) {
  return (
    <div style={{ padding: "20px", border: "2px solid #333" }}>
        <h2>Component 2--{user1}</h2>
        <Third user1={user1} />
       
    </div>
  )
}
