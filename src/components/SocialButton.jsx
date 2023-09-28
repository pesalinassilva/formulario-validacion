const SocialButton = ({rrss1, rrss2, rrss3}) => {
    //Componente recibe props desde el componente registro para mostrar la red social.
    return(
        <>
            <div className="d-flex justify-content-around">
                <button className={`rrss btn btn-light fa-brands fa-${rrss1} fa-2xl d-flex align-items-center`} type="submit"></button>
                <button className={`rrss btn btn-light fa-brands fa-${rrss2} fa-2xl d-flex align-items-center`} type="submit"></button>
                <button className={`rrss btn btn-light fa-brands fa-${rrss3} fa-2xl d-flex align-items-center`} type="submit"></button>
            </div>
        </>
    )
}

export default SocialButton