import { useState, useEffect } from "react";
import FetchList from "./components/FetchList";


export const UserApp = () => {
  const [endpoint, setEndpoint] = useState('users')

  return (
    <>
      <h1>Listado:</h1>
      <FetchList endpoint={endpoint}/>
      <button onClick={() => setEndpoint('comments')}>Cambiar endpoint</button>
    </>
  );
};
