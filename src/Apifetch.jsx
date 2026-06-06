import React, { useEffect, useState } from 'react'

export default function Apifetch() 
{
    const [user,setuser] = useState([]);
    const [loading,setloading]=useState(false);
    const [error,seterror] = useState(null);

    useEffect(()=>{
        async function fetuser() {
            try {
                setloading(true)
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok){
                    throw new Error ("failed to fetch data")
                }
                 const data = await response.json()
                setuser(data)
            }
            catch (error) {
                seterror(error.message);
                
            }
            finally{
                setloading(false)

            }
            
        }
        fetuser();
    },[])
    if(loading) return <p>Loading......</p>
    if (error) return <p style={{color:"red"}}>{error}</p>

  return (
    <div>
        {user.map((person)=>(
            <div key={person.id} style={{border:"2px solid black",padding:"20px",margin:"30px"}}>
                <h2>{person.name}</h2>
                <h2>{person.phone}</h2>
                <h2>{person.email}</h2>
                </div>
        ))}

    </div>
  )
}
