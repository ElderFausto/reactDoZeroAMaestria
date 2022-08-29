import React, { useState } from 'react'
import { useEffect } from 'react';

const HookUseEffect = () => {

  //1 - useEffect, sem dependencias

  useEffect(() => {
    console.log('estou sendo executado');
  });
  
  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  }


  //2- array de dependencia vazio

  useEffect(() => {
    console.log('serei executado apenas uma vez');
  }, [])

  // 3 - array de dependencias

  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if(anotherNumber > 0) {
      console.log('executado apenas quando o anotherNumber muda!');
    }
    
  }, [anotherNumber])

  // 4 - limpeza useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('ola mundo');
    }, 2000);

    return () => clearTimeout(timer);
  }, [anotherNumber])

  return (
    <div>
      <h2>UseEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>another number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar anotherNumber
      </button>
      <hr />
    </div>
  )
}

export default HookUseEffect