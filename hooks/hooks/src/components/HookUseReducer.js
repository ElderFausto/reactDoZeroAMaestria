import React, { useReducer, useState } from "react";

const HookUseReducer = () => {
  // 1 - começando com o useReducer
  
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // 2 - avançando com useReducer

  const initialTask = [
    { id: 1, text: "jantar" },
    { id: 2, text: "almoçar" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };
        setTaskText("");

        return [...state, newTask];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTask);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id: id });
  };

  return (
    <div>
      <h2>UseReducer</h2>
      <p>Numero: {number}</p>
      <button onClick={dispatch}>Alterar numero!</button>
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
          {task.text}
        </li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
