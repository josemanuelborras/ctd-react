import { useState } from "react";

export const AddTask = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputValue === "") return;
    addTask(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Agregar una tarea"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
};
