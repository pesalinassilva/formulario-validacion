import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import Alert from "./Alert"

const Registro = ({validacion,mensaje}) => {
    //Se importan los componentes SocialButton, Formulario y Alert.
    return(
        <>
            <div className="formulario">
            <SocialButton
                rrss1 = 'facebook'
                rrss2 = 'github'
                rrss3 = 'linkedin'
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