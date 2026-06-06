import React from 'react'
import useApi from './ApiIntegration'

export default function Axios() {
    const {
        user:data,loading,error
    } = useApi("https://jsonplaceholder.typicode.com/users")
    if(loading)return<p>loading</p>
    if (error) return <p style={{color:"red"}}>{error}</p>
  return (
    <div>Axios
        {data.map((person)=>(
            <div key={person.id}>
                <h2>{person.name}</h2>
                <h2>{person.email}</h2></div>
        ))}
    </div>
  )
}
