const Item = ({ name, isDone }) => {
  return (
    <li>
      {name} - {isDone ? "👌" : "🚫"} - {isDone && "Hecho"}
    </li>
  );
};

export const TodoApp = ({ cantidad }) => {
  return (
    <>
      {cantidad > 0 && <p>Hay {cantidad} tareas pendientes</p>}
      <ul>
        <Item name={"Maquetacion Web"} isDone={true} />
        <Item name={"Progeamacion Imperativa"} isDone={true} />
        <Item name={"Javascript"} isDone={true} />
        <Item name={"React"} isDone={false} />
      </ul>
    </>
  );
};
