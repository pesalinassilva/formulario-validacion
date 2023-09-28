import { useState } from "react"

const Formulario = ({mostrarMensaje}) => {
    //Declaración de estados de cada campo del formulario.
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [confContrasena, setConfContrasena] = useState('')

    //función para validar formulario si es que estan llenos todos los campos, validación de correo y si contraseñas son iguales.
    const validarForm = (e) => {
        e.preventDefault()
        if (nombre == '' || email == '' || contrasena == '' || confContrasena == ''){
            mostrarMensaje({
                msg:'Debes llenar todos los campos',
                color:'primary'
            })
            return
        }else if (email !== '' && contrasena !== '' && confContrasena !== ''){
            if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email)) {
                mostrarMensaje({
                    msg:'El correo no es válido',
                    color:'danger'
                })
                return
            }else if(contrasena !== confContrasena){
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
        setContrasena('')
        setConfContrasena('')
    }

    return (
        <>
            <p>O usa tu Email para registrarte</p>
            <form onSubmit={validarForm} className="text-start">
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
                    name="contrasena"
                    type="password"
                    onChange={(e) => setContrasena(e.target.value)}
                    value={contrasena}
                    ></input>
                </div>
                <div className="form-group mb-3">
                    <label>Confirmar Contraseña</label>
                    <input
                    className="form-control"
                    name="conf-contrasena"
                    type="password"
                    onChange={(e) => setConfContrasena(e.target.value)}
                    value={confContrasena}
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