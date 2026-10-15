import { useState } from "react";

const Item = ({ id, name, isDone }) => {
  return (
    <li>
      {id}. {name} - {isDone ? "👌" : "🚫"}
    </li>
  );
};

export const ArraysApp = () => {
  const [array, setArray] = useState([
    { id: 1, name: "Introduccion a React", isDone: false },
    { id: 2, name: "Javascript", isDone: true },
    { id: 3, name: "Html", isDone: true },
    { id: 4, name: "Css", isDone: true },
    { id: 5, name: "Programacion imperativa", isDone: true },
    { id: 6, name: "Fragment", isDone: true },
    { id: 7, name: "jsx", isDone: true },
  ]);

  const [id, setId] = useState(array.length + 1);

  const handleClick = () => {
    setId(id + 1);
    setArray([...array, {id: id, name: 'otra tarea', isDone: false}])
  };

  return (
    <ul>
      <p>{array.length}</p>
      <button onClick={handleClick}>Agregar Tarea</button>
      {array.map((item) => (
        <Item key={item.id} id={item.id} name={item.name} isDone={item.isDone} />
      ))}
    </ul>
  );
};
