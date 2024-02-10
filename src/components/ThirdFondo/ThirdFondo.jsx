import segundaFoto from '../../assets/segundaFoto.jpg'
import { FaWhatsapp } from "react-icons/fa";
import './thirdFondo.css'

const ThirdFondo = () => {

    return (

        <section className='main-thirdFondo'>

            <div className='main-thirdFondo-container'>
                <h1>Nuestra</h1>
                <h1 className='third-titulo'>Celebración</h1>

                <p>Esperamos contar con tu presencia para hacer <br /> de este día aún más especial.</p>

                <h2>DRESS CODE</h2>
                <span><b>Formal, nos importa tu comodidad y elegancia.</b></span>
                <span>No usar blanco ni azul.</span>

                <div className='imagen-third'>
                    <img src={segundaFoto} alt="" />
                </div>

                <p className='hora-text-third'>Para confirmar tu asistencia, por favor compártenos tu número de documento. Agradecemos de antemano tu participación y esperamos ansiosos este día tan significativo.</p>

                <div className="whatsapp">
                <a href="https://wa.me/573124952690">
                    <FaWhatsapp size="2rem" className="svg"/>
                    <h2>312 495 2690</h2>
                </a>
            </div>
            </div>


        </section>

    )

}

export default ThirdFondo