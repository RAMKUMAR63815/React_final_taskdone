import React, { useState, useEffect } from "react";

export default function FormData() {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

      .then((res) => res.json())

      .then((user) => {
        setData(user);
      })

      .catch((error) => {
        console.log("Error Fetching Data:", error);
      });

  }, []);

  console.log(data);

  return (
    <div>

      <h2>API Fetch</h2>

      {data.map((user) => (

        <div key={user.id}>

          <h3>{user.name}</h3>

          <h3>{user.email}</h3>

          <h3>{user.phone}</h3>

          <h3>{user.address.city}</h3>

          <hr />

        </div>

      ))}

    </div>
  );
}