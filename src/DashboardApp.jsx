const UsuarioLogueado = () => {
    return (
        <div>
            <h1>Bienvenido</h1>
            <p>Usuario logueado</p>
        </div>
    )
}

const UsuarioNoLogueado = () => {
    return (
        <div>
            <h1>Por favor Loguearse</h1>
            <p>Para ingresar debe loguearse</p>
        </div>
    )
}

export const DashboardApp = ({isLogged}) => {
    // Con if/else
    // if(isLogged) return <UsuarioLogueado />
    // else return <UsuarioNoLogueado />

    // Con operador ternario
    return isLogged ? <UsuarioLogueado /> : <UsuarioNoLogueado />
}
