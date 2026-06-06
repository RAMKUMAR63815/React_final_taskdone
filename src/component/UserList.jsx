import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./User.css"

export default function UserList() {

    const [users, setUsers] = useState([])

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
            })

    }, [])

    return (

        <div className="container">

            <h1>User List</h1>

            <div className="card-container">

                {users.map((person) => (

                    <div className="card" key={person.id}>

                        <h2>{person.name}</h2>

                        <Link to={`/user/${person.id}`}>
                            <button>View Details</button>
                        </Link>

                    </div>

                ))}

            </div>

        </div>
    )
}