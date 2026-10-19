import { useState } from "react";

export const AddTask = () => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
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
