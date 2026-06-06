import React, { useId } from 'react'

export default function Idname() {
    const id = useId();
    const email = useId();
    console.log(id,email)

    return (
        <div>
            <nav>
                <label htmlFor={id}>Name</label>
                <input type='text' id={id} />
            </nav>
            <nav>
                <label htmlFor={email}>Email</label>
                <input type='text' id={email} />
            </nav>
        </div>
    )
}