export const PropsApp = ({string, numero, arreglo, object, date}) => {
  arreglo.forEach((num) => console.log(num));
  return (
    <>
      <h1>PROPS</h1>
      <p>{string}</p>
      <p>{numero}</p>
      <p>{arreglo[2]}</p>
      <p>{object.nombre}</p>
      <p>{JSON.stringify(date)}</p>
    </>
  );
};
