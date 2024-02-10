import { SiWaze } from "react-icons/si";
import mapa from '../../assets/mapa.png'

import { FaEnvelope } from "react-icons/fa";
import './fourthFondo.css'

const FourthFondo = () => {

    return (
        <section className='main-fourthFondo'>
        <div className='main-fourthFondo-container'>
            <h1>GUSTAVO & NATALÍ</h1>

            <a href="https://www.waze.com/es/live-map/directions?from=place.w.187367472.1873478109.17030959" className="contenedor-mapa-enlace">

                <img src={mapa} alt="" className="mapa"/>
                
                <div className="contenedor-mapa">

                    <SiWaze size="2rem"/>
                    <h2>Ir a la ubicación</h2>

                </div>
            </a>

            <p className="parcela">PARCELA 39 GLOBO 2 UN DULCE CIELO <br /> VEREDA PARCELAS</p>
            <h2>14.03.24</h2>

            <div className="lluvia">
                <FaEnvelope />
                <h2>Lluvia de sobres</h2>
            </div>
            <p className='thanks'>¡GRACIAS POR SER PARTE <br /> DE NUESTRA HISTORIA!</p>
        </div>
    </section>
    )

}

export default FourthFondo