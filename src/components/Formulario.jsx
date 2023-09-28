import { useState } from "react"

const Formulario = ({mostrarMensaje}) => {
    //Declaración de estados de cada campo del formulario.
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [confContraseña, setConfContraseña] = useState('')

    //función para validar formulario si es que estan llenos todos los campos, validación de correo y si contraseñas son iguales.
    const validarForm = (e) => {
        e.preventDefault()
        if (nombre == '' || email == '' || contraseña == '' || confContraseña == ''){
            mostrarMensaje({
                msg:'Debes llenar todos los campos',
                color:'primary'
            })
            return
        }else if (email !== '' && contraseña !== '' && confContraseña !== ''){
            if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email)) {
                mostrarMensaje({
                    msg:'El correo no es válido',
                    color:'danger'
                })
                return
            }else if(contraseña !== confContraseña){
                mostrarMensaje({
                    msg:'Las contraseñas no coinciden',
                    color:'danger'
                })
                return
            }
        }
        mostrarMensaje({
            msg:'Registrado con éxito',
            color:'success'
        })
        setNombre('')
        setEmail('')
        setContraseña('')
        setConfContraseña('')
    }

    return (
        <>
            <p>O usa tu Email para registrarte</p>
            <form onSubmit={validarForm}>
                <div className="form-group mb-3">
                    <label>Nombre</label>
                    <input
                    className="form-control"
                    name="nombre"
                    type="text"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                    ></input>
                </div>
                <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                    className="form-control"
                    name="email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    ></input>
                </div>
                <div className="form-group mb-3">
                    <label>Contraseña</label>
                    <input
                    className="form-control"
                    name="contraseña"
                    type="password"
                    onChange={(e) => setContraseña(e.target.value)}
                    value={contraseña}
                    ></input>
                </div>
                <div className="form-group mb-3">
                    <label>Confirmar Contraseña</label>
                    <input
                    className="form-control"
                    name="conf-contraseña"
                    type="password"
                    onChange={(e) => setConfContraseña(e.target.value)}
                    value={confContraseña}
                    ></input>
                </div>
                <div className="d-grid">
                    <button className="btn btn-success" type="submit">Registrarse</button>
                </div>
            </form>
        </>
    )
}

export default Formulario