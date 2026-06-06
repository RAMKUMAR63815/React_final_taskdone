// import React from 'react'
// import { useSearchParams } from 'react-router-dom'

// export default function UseSerachParam()
//  {
//     const [searchParam,setsearchParam] = useSearchParams();
//     const handlechange = ()=>{
//         setsearchParam({category:"phone",price:"5000"})
//     }
//   return (
//     <div>UseSerachParam
//         <h2>UseSearchParam</h2>
//         <button onClick={handlechange}>NAvigate</button>
//     </div>
//   )
// }


import React from "react";
import { useSearchParams } from "react-router-dom";
import "./App.css";

export default function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 5;

  const users = [
    { id: 1, name: "Ram", email: "ram@gmail.com", role: "Developer", location: "Pondy" },
    { id: 2, name: "Suriya", email: "suriya@gmail.com", role: "Tester", location: "Chennai" },
    { id: 3, name: "Venkat", email: "venkat@gmail.com", role: "UI Dev", location: "Bangalore" },
    { id: 4, name: "Ganesh", email: "ganesh@gmail.com", role: "Support", location: "Pondy" },
    { id: 5, name: "Swetha", email: "swetha@gmail.com", role: "HR", location: "Madurai" },
    { id: 6, name: "Ajay", email: "ajay@gmail.com", role: "Developer", location: "Coimbatore" },
    { id: 7, name: "Vijay", email: "vijay@gmail.com", role: "Tester", location: "Trichy" },
    { id: 8, name: "Arun", email: "arun@gmail.com", role: "Manager", location: "Salem" },
    { id: 9, name: "Kumar", email: "kumar@gmail.com", role: "Developer", location: "Erode" },
    { id: 10, name: "Raja", email: "raja@gmail.com", role: "Designer", location: "Chennai" },
    { id: 11, name: "Karthik", email: "karthik@gmail.com", role: "Tester", location: "Pondy" },
    { id: 12, name: "Mohan", email: "mohan@gmail.com", role: "HR", location: "Madurai" },
    { id: 13, name: "Deepak", email: "deepak@gmail.com", role: "Developer", location: "Vellore" },
    { id: 14, name: "Hari", email: "hari@gmail.com", role: "Support", location: "Tirunelveli" },
    { id: 15, name: "Praveen", email: "praveen@gmail.com", role: "Manager", location: "Chennai" },
    { id: 16, name: "Sanjay", email: "sanjay@gmail.com", role: "UI Dev", location: "Pondy" },
    { id: 17, name: "Dinesh", email: "dinesh@gmail.com", role: "Developer", location: "Salem" },
    { id: 18, name: "Bala", email: "bala@gmail.com", role: "Tester", location: "Trichy" },
    { id: 19, name: "Ravi", email: "ravi@gmail.com", role: "Support", location: "Chennai" },
    { id: 20, name: "Mani", email: "mani@gmail.com", role: "HR", location: "Pondy" },
  ];

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = users.slice(startIndex,endIndex);

  const goToPage = (page) => {
    setSearchParams({ page: page });
  };

  return (
    <div className="container">
      <h1>User Pagination</h1>

      <table>
       <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Location</th>
        </tr>
       </thead>

        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.location}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          Previous
        </button>

        {Array.from(
          { length: totalPages },
          (_, i) => i + 1
        ).map((page) => (
          <button
            key={page}
            className={currentPage === page ? "active" : ""}
            onClick={() => goToPage(page)}
          >
            {page}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}