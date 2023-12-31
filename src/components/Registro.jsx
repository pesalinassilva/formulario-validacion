import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import Alert from "./Alert"

const Registro = ({validacion,mensaje}) => {
    //Se importan los componentes SocialButton, Formulario y Alert.
    return(
        <>
            <div className="bg-light formulario p-4 rounded-5">
                <h1 className="fs-1">Crea una cuenta</h1>
                <SocialButton
                    rrss1 = 'facebook'
                    rrss2 = 'github'
                    rrss3 = 'linkedin-in'
                />
                <Formulario mostrarMensaje={validacion}/>
                <Alert 
                    mensaje = {mensaje.msg}
                    color = {mensaje.color} 
                />
            </div>
        </>
    )
}

export default Registro