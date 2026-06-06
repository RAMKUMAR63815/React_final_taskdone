import React, { useState } from 'react'

export default function Chat() {
    const [message,setmessage] =useState("");
    const [store,setstore] = useState([])

    const handlesend = ()=>{
        if (message.trim() ===""){
            return;
    }
    setstore([...store,message])
    setmessage("")
    }

  return (
    <div style={{}}>
        <h1>Minichat Application</h1>
       <div style={{ display: "flex", gap: "10px" }}> <input placeholder='Enter your message' value={message} onChange={(e)=>setmessage(e.target.value)} 
        style={{
            flex : "1",
            padding: "10px",
             borderRadius: "8px",
            border: "1px solid #ccc",            
             outline: "none",
            fontSize: "14px", 
            width:"200px"         }}></input>
        <button onClick={handlesend} style={{
          padding: "10px 15px",
           border: "none",
             borderRadius: "8px",
             backgroundColor: "#4a90e2",
             color: "white",
             cursor: "pointer",
             fontWeight: "bold",
           }}>Send</button></div>
        <div> {store.length === 0? (<p>NO message yet</p>):(store.map((value,index)=>(
   <div key={index}> @ {value}</div>
)))}</div>
    </div>
  )
}
