import React, { useState } from 'react'
import "./rendering.css"

export default function Conditionalrendering() {

    const [login,setlogin] = useState(true)
    const [show,setshow] = useState(true)
    const user = [
        {
            id:1,
            name:"Ramkumar",
            age:23,
            city:"Pondicherry"
        },
        {
            id:2,
            name:"selvaganesh",
            age:25,
            city:"Chennai"
        },
        {
            id:3,
            name:"Hari",
            age:23,
            city:"Coimbatore"
        },
        {
            id:4,
            name:"Vijay",
            age:26,
            city:"Madurai"
        },
        {   id:5,
            name:"Ajay",
            age:22,
            city:"Trichy"

        }
        
]
  return (
    <div className='main'><h1>Conditional rendering</h1>
    <div className='box' >
     <h2>Login & Logout</h2>
    {
        login ? <h3 className='success'>Login Successfull Welcome Ramkumar 👋</h3> : <h3 className='error'>Please Login ❌</h3> 


    }
    <button onClick={()=>setlogin(!login)}>
        {
            login ? "Logout" : "Login"
        }

    </button>
   
    </div>
    <div className='box'>
     <h2>Show & Hide</h2>
    {
        show && <h3 className='text'>Your seeing our React UI interactiv web page</h3>
    }
    <button onClick={()=>setshow(!show)}>
         {
        show ?  "Hide Content": "Hide Content"
    }
    </button>
   
    </div>
  
    <h1 style={{textAlign:'center'}}>List Rendering </h1>
    <div className='container'>
        {
        user.map((data)=>(
           
                <div  className='card' key={data.id}     style={{
                border:"1px solid black",
                padding:"15px",
                margin:"10px",
                borderRadius:"10px",
                // color:"white",
                // backgroundColor :"",
                boxShadow:"0 4px 10px rgba(0,0,0,0.3)"
            }}>
                    
                            
                   
                    <h2>{data.name}</h2>
                    <p>Age : {data.age}</p>
                    <p>City : {data.city}</p>
                </div>
            
        ))
    }
    </div>


    </div>
  )
}
