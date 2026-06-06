import React, { useEffect, useState } from "react";
import "./Crud.css";

export default function Crud() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  // READ (GET)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // CREATE (POST)
  const addUser = () => {
    if (!name.trim() || !email.trim()) return;

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUser = {
          ...data,
          id: users.length + 1,
        };

        setUsers([...users, newUser]);
        setName("");
        setEmail("");
      });
  };

  // DELETE
  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  // EDIT
  const editUser = (user) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  // UPDATE (PUT)
  const updateUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: editId,
        name,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedUsers = users.map((user) =>
          user.id === editId ? { ...user, ...data } : user
        );

        setUsers(updatedUsers);
        setEditId(null);
        setName("");
        setEmail("");
      });
  };

  return (
    <div className="container">
      <h2>CRUD Operations with API</h2>

 
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => editUser(user)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
           <div className="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {editId ? (
          <button onClick={updateUser}>Update</button>
        ) : (
          <button onClick={addUser}>Add</button>
        )}
      </div>

    </div>
  );
}