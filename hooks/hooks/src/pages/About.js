import React from 'react'

//use context
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'


const About = () => {
  const {contextValue, day} = useContext(SomeContext)

  return (
    <div>
      <p>{day}</p>
      <p>{contextValue}</p>
    </div>
    
  )
}

export default About