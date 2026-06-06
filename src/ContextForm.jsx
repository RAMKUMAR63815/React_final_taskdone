import React, { useContext } from 'react'
import { Pass } from './App'
import ContextField from './ContextField'

export default function ContextForm() {

  const { mode } = useContext(Pass)

  return (
    <div className={`container ${mode}`}>

      <h2>Context Form</h2>

      <ContextField />

    </div>
  )
}