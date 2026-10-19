export const Task = ({ name, isDone }) => {
  return (
    <li>
      {name} - {isDone ? "👌" : "🚫"}
    </li>
  );
};