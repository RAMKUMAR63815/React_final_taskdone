import React from 'react'
import Seocnd from './Seocnd'

export default function First(user1) {
  return (
    <div style={{ padding: "20px", border: "2px solid #333" }}>
        <h2>Component 1--{user1}</h2>
        <Seocnd user1={user1} />
    </div>
  )
}


