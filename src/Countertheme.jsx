import React,{useState} from 'react'
import "./Countertheme.css"

export default function Countertheme() {
    const [count,setcount] = useState(0);
    const [darkmode, setdarkmode] = useState(false);
  


  return (
    <div className='container'>
        <h1>Counter Functionality</h1>
        <h2>Count : {count}</h2>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        <button onClick={()=>setcount(count-1)}>Decrement</button>
        <button onClick={()=>setcount(0)}>Reset</button>

        {
          <div className='card'
            style={{
                backgroundColor: darkmode ? "#333" : "#fff",
                color: darkmode ? "#fff" : "#333",
                padding: "20px"
            }}
        >
            <h2>
                You are in {darkmode ? "Dark 🌙" : "Light ☀️"} Mode
            </h2>
            <button
                onClick={() => setdarkmode(!darkmode)}
            >

                Switch to {darkmode ? "Light" : "Dark"} Mode

            </button>

            

        </div>
        }
        
       
        
    </div>
  )
}
