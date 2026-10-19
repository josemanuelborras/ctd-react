import { useState } from "react";

export const AddTask = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
        name: inputValue,
        isDone: false
    }
    console.log(event);
    addTask(tasks => [...tasks, newTask]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Agregar una tarea"
          valu={inputValue}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
};
