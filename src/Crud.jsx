import React, { useEffect, useState } from 'react'

export default function Crud() {
    const [user,setUser] = useState([]);
    const [names,setnames] = useState("");
    const [emails,setemails] = useState("")
    useEffect(()=>{
        const response =fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>{
            setUser(data)
        },)
    },[])
    const additem = ()=>{
        const Trimname = names.trim();
        const Trimemail = emails.trim();
        if(names && emails){
            fetch("https://jsonplaceholder.typicode.com/users",{
                method : "POST",
                body:JSON.stringify({
                    name:Trimname,
                    email:Trimemail,
                }),
                headers :{
                    "content-Type":"application/json;charset=UTF-8",
                },
            })
            .then((res)=>res.json())
            .then((data)=>{
                const newUser = {...data,id:user.length + 1};
                setUser([...user,newUser])
                setnames("")
                setemails("")
            })
        }
    }
    const handlechange = (id)=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:"DELETE"})
        .then((res)=>res.json())
        .then(data=>{
            setUser((user)=>{
                return user.filter((data)=>data.id!== id)
            })
        })
    }

  return (
    <div>Crud
        <h2>Crud Operation</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {user.map((person)=>(
                    <tr key={person.id}>
                        <td>{person.name}</td>
                        <td>{person.email}</td>
                        <td>
                            <button onClick={()=>handlechange(person.id)}>delete</button>
                        </td>
                      
                    </tr>
                ))}
                  <tr>
                            <td><input type='text' value={names} onChange={(e)=>setnames(e.target.value)}></input></td>
                        <td><input type='text' value={emails} onChange={(e)=>setemails(e.target.value)}></input></td>
                        <td><button onClick={additem}>add</button></td>
                        </tr>
            </tbody>

          
           
        </table>


    </div>
  )
}
