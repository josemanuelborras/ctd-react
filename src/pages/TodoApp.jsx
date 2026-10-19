import {useState} from "react";
import { Task } from "../Task";
import { AddTask } from "../AddTask";

export const TodoApp = () => {
   const [array, setArray] = useState([
    { id: 1, name: "Introduccion a React", isDone: false },
    { id: 2, name: "Javascript", isDone: true },
    { id: 3, name: "Html", isDone: true },
    { id: 4, name: "Css", isDone: true },
    { id: 5, name: "Programacion imperativa", isDone: true },
    { id: 6, name: "Fragment", isDone: true },
    { id: 7, name: "jsx", isDone: true },
  ]);

  return (
    <>
      {array.length > 0 && <p>Hay {array.length} tareas pendientes</p>}
      <AddTask />
      <ul>
        {array.map(item => <Task key={item.id} name={item.name} isDone={item.isDone} />)}
        
      </ul>
    </>
  );
};
