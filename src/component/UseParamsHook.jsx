import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function UseParamsHook() {
    const [user,setuser]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>{
            setuser(data)
        })


    },[])
  return (
    <div><h1>UseParamsHook</h1>
    <h2>User details</h2>
    <ul>{user.map((person)=>(<li key={person.id}><Link to={`/blog/:${person.email}`}>{person.name}</Link></li>))}</ul>
   

    </div>
  )
}
