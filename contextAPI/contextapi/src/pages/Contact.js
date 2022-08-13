import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Contact = () => {
  const {counter} = useContext(CounterContext);

  return (
    <div>
      <p>valor do contador: {counter}</p>
    </div>
  )
}

export default Contact