import { useState } from 'react';

export const ContadorApp = ({ init }) => {

  const [counter, setCounter] = useState(init)

  const handleClick = () => {
    // Forma #1
    setCounter(count => count += 1)
    // Forma #2
    // const num = counter + 1;
    // setCounter(num);
  }
  return (
    <>
     <p>El contador es: {counter}</p>
      <button onClick={handleClick}>Agregar 1</button>
    </>
  )
}
