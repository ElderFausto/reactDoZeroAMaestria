import React from "react";
import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "elder";
  const [name, setName] = useState("fausto");

  const handleChangeName = () => {
    userName = "silva";

    setName("do nascimento");
  };

  // 2 - useState e input
  const [age, setAge] = useState(26);
  const handleSubmit = (e) => {
    e.preventDefault()

    //envio a uma API
    console.table(age)
  }

  return (
    <div>
      {/* 1 - useState*/}
      <h2>UseState</h2>
      <p>Variavel: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={handleChangeName}>Mudar Nomes!</button>
      {/* 2 - useState e input */}
      <p>Digite a sua idade!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value='enviar'/>
      </form>
      <p>Você tem {age} anos!</p>
      <hr />
    </div>
  );
};

export default HookUseState;
