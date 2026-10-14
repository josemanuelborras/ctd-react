import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PorfolioApp } from "./PorfolioApp";
import { VariablesApp } from "./VariablesApp";
import { FragmentApp } from "./FragmentApp";
import { StylesApp } from "./StylesApp";
import { PropsApp } from "./PropsApp";
import ClassComponent from "./ClassComponent";

import { ContadorApp } from "./ContadorApp";

import { DashboardApp } from "./DashboardApp"

import { TodoApp } from "./TodoApp"

const arrayObjetos = [
    {id: 1, name: 'Introduccion a React', isDone: false},
    {id: 2, name: 'Javascript', isDone: true},
    {id: 3, name: 'Html', isDone: true},
    {id: 4, name: 'Css', isDone: true},
    {id: 5, name: 'Programacion imperativa', isDone: true},
    {id: 6, name: 'Fragment', isDone: true},
    {id: 7, name: 'jsx', isDone: true},
  ]

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <PorfolioApp />
    <ClassComponent />
    <VariablesApp />
    <FragmentApp />
    <StylesApp /> */}
    {/* <PropsApp
      string={'prop string'}
      numero={5}
      arreglo={[1, 2, 3]}
      object={{nombre: 'Jorge', apellido: 'Mendez'}}
      date={new Date()}
    /> */}
    {/* <VariablesApp titulo='TITULO' subtitulo='SUBTITULO'/> */}
    {/* <ContadorApp init={0} /> */}
    {/* <DashboardApp isLogged={false}/> */}
    <TodoApp arrayObjetos={arrayObjetos}/>
  </StrictMode>,
);
