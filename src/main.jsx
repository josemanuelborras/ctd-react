import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PorfolioApp } from "./PorfolioApp";
import { VariablesApp } from "./VariablesApp";
import { FragmentApp } from "./FragmentApp";
import { StylesApp } from "./StylesApp";
import { PropsApp } from "./PropsApp";
import ClassComponent from "./ClassComponent";

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
    <VariablesApp titulo='TITULO' subtitulo='SUBTITULO'/>
  </StrictMode>,
);
