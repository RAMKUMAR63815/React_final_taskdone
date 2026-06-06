import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./User.css"

export default function UserDetails() {

    const { id } = useParams()

    const [user, setUser] = useState([])

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data)
            })

    }, [id])

    // if (!user) {
    //     return <h1>Loading...</h1>
    // }

    return (

        <div className="details-container">

            <div className="details-card">

                <h1>User Details</h1>

                <h2>{user.name}</h2>

                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Username: {user.username}</p>
                <p>Website: {user.website}</p>

            </div>

        </div>
    )
}