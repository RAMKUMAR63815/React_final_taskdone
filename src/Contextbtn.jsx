import React, { useContext } from 'react'
import {Pass} from './App'

export default function Contextbtn() {
    const {mode,setmode} = useContext(Pass)
  return (
    
    <div className='theme'><button  onClick={()=>setmode(mode==="light"?"black":"light")}>Theme {mode}</button></div>
  )
}
