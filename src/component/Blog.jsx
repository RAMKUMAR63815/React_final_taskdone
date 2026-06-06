import React from 'react'
import { useParams } from 'react-router-dom'

export default function Blog() {
    const { id } = useParams();
  return (
    <div>
        <h1>Blog_Details---{ id }</h1>
    </div>
  )
}
