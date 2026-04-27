const string = "Hola Mundo comillas simples";
const string2 = "Hola Mundo comillas dobles";
const string3 = `Hola Mundo template strings con la variable string: ${string}`;
const number = 42;
const decimal = 3.14;
const array = ["HTML", "CSS", "JavaScript", "React"];
const boolean = true;
const foo = () => "return de una función";
const object = { name: "Juan", age: 30, city: "Madrid" };
const set = new Set([1, 2, 3, 4]);
const date = new Date();

export const VariablesApp = () => {
  return (
    <div>
      <p>- string: {string}</p>
      <p>- string2: {string2}</p>
      <p>- string3: {string3}</p>
      <p>- number: {number}</p>
      <p>- decimal: {decimal}</p>
      <p>- array: {array}</p>
      <p>- boolean: {boolean}</p>
      <p>- foo: {foo()}</p>
      <p>- object: {JSON.stringify(object)}</p>
      <p>- set: {set}</p>
      <p>- date: {JSON.stringify(date)}</p>
    </div>
  );
};
