import {useState} from "react";
import { Task } from "../Task";
import { AddTask } from "../AddTask";

export const TodoApp = () => {
   const [array, setArray] = useState([
    { name: "Introduccion a React", isDone: false },
    { name: "Javascript", isDone: true },
    { name: "Html", isDone: true },
    { name: "Css", isDone: true },
    { name: "Programacion imperativa", isDone: true },
    { name: "Fragment", isDone: true },
    { name: "jsx", isDone: true },
  ]);

  return (
    <>
      {array.length > 0 && <p>Hay {array.length} tareas pendientes</p>}
      <AddTask addTask={setArray}/>
      <ul>
        {array.map(item => <Task key={item.name} name={item.name} isDone={item.isDone} />)}
        
      </ul>
    </>
  );
};
