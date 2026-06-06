// import React,{useState, useEffect} from 'react'

// export default function Useeffect() {
//     const [data,setdata] = useState(0);
//     const [form,setform] = useState(false);
//     // useEffect (()=>{
//     //     console.log("completed");
        
//     // },[data])
//     // useEffect (()=>{
//     //     console.log(`change to ${data}  ,${form}`);
        
//     // },[data,form])
//     useEffect(()=>{
//         let interval;
//         if (form){
//             interval = setInterval(() => {
//                 setdata((prev)=>prev+1)
                
//             }, 1000);
//         }
//         return ()=>clearInterval(interval);

//     },[form])
//     const handlestart =()=>
//         setform(true)
//     {

//     }
//     const handlestop =()=>{
//         setform(false)

//     }
//     const handlereset =()=>{
//         setdata(0)
//         setform(false)
        

//     }
//   return (
//     <div>Useeffect
//          {/* <h2>Count increment:{data}, Count Decremet:{form}</h2>
//       <button onClick={() => setdata(data + 1)}>increment</button>
//       <button onClick={() => setform(form - 1)}>decrement</button> */}
//       {/* <button onClick={() => setdata(0)}>reset</button> */}
//       <h2> timer :{data}</h2>
//       <button onClick={handlestart}>Start</button>
//       <button onClick={handlestop}>Stop</button>
//       <button onClick={handlereset}>Reset</button>
//     </div>
//   )
// }
import React, { useEffect, useState } from "react";
import "./Useeffect.css";

function App() {
  // State to store users data
  const [users, setUsers] = useState([]);

  // Fetch API data when component loads
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">User Details</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;