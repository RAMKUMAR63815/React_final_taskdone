import React from 'react'
import Contextbtn from './Contextbtn'
import {Pass} from "./App"
import { useContext } from 'react'

export default function ContextField() {
    const {form,handler} = useContext(Pass)
  return (
    <div>
        <form className='form'>
            <input name='name' type='text' placeholder='Enter the  name' value={form.name} onChange={handler}/>
            <input name='email' type='email' placeholder='Enter the email' value={form.email} onChange={handler}/>
            <input name='phone' type='text' placeholder=' Enter the phone number' value={form.phome} onChange={handler}/>
            <input name='password' type='password' placeholder='Enter the password' value={form.password} onChange={handler}/>
            <textarea name='address' type='text' placeholder='Enter the address' value={form.address} onChange={handler}/>
            <button type='submit'>Submit</button>
            <div className='preview'>
            <h3>Preview data</h3>
            <p><b>Name:</b>{form.name}</p>
            <p><b>Email:</b>{form.email}</p>
            <p><b>Phone:</b>{form.phone}</p>
            <p><b>Password:</b>{form.pass}</p>
            <p><b>Address:</b>{form.address}</p>
            </div>
        </form>
        <Contextbtn />
    </div>
  )
}
