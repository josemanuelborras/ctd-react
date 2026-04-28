import "./stylesApp.css";

export const StylesApp = () => {
    const inlineStyles = {
        color: "red",
        fontSize: "20px",
    }

    const active = true;

    const conditionalStyle = {
        color: active ? "green" : "red",
        fontSize: "20px",
    }
  return (
    <>
      <h1>Clases y estilos en React</h1>
      <h2 id="subtitulo">Subtitulo con id</h2>
      <h4 className="red">Titulo con clases</h4>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          laudantium quod eos, voluptatibus mollitia aliquam iure sed iste a
          esse eaque quas deserunt corrupti natus architecto quia molestias
          saepe reprehenderit.
        </p>
      </div>
      <p style={inlineStyles}>
        Estilo inline: Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        laudantium quod eos, voluptatibus mollitia aliquam iure sed iste a esse
        eaque quas deserunt corrupti natus architecto quia molestias saepe
        reprehenderit.
      </p>
      <h1 className={active ? 'active' : 'inactive'}>Estilo condicional</h1>
      <h1 style={conditionalStyle}>Estilo condicional en linea</h1>
    </>
  );
};
