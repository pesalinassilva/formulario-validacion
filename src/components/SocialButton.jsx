const SocialButton = ({rrss1, rrss2, rrss3}) => {
    //Componente recibe props desde el componente registro para mostrar la red social.
    const rrssCircle = 'fa-2xl d-flex align-items-center m-2 border border-black rounded-circle'
    return(
        <>
            <div className="d-flex justify-content-around">
                <button className={`btn btn-light fa-brands fa-${rrss1} ${rrssCircle}`} type="submit"></button>
                <button className={`btn btn-light fa-brands fa-${rrss2} ${rrssCircle}`} type="submit"></button>
                <button className={`btn btn-light fa-brands fa-${rrss3} ${rrssCircle}`} type="submit"></button>
            </div>
        </>
    )
}

export default SocialButton