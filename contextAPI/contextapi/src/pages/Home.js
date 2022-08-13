import React from "react";
// import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
// import { CounterContext } from "../context/CounterContext";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - context mais complexo
import {useTitleColorContext} from '../hooks/useTitleColorContext'

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const {counter} = useCounterContext();

  // 5 - contexto mais complexo
  const {color, dispatch} = useTitleColorContext();

  console.log(color);

  // 6 - alterando state complexo

  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (
    <div style={{color: color}}>
      <h1>Home</h1>
      <p>valor do contador: {counter}</p>
      {/* 3- alterando valor contexto */}
      <ChangeCounter />
      {/* 6 - gerando contexto */}
      <div>
        <button onClick={() => setTitleColor("PURPLE")}>PURPLE</button>
        <button onClick={() => setTitleColor("BLUE")}>BLUE</button>
      </div>
    </div>
  );
};

export default Home;
