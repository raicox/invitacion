import segundaFoto from '../../assets/segundaFoto.jpg'
import './thirdFondo.css'

const ThirdFondo = () => {

    return (

        <section className='main-thirdFondo'>

            <div className='main-thirdFondo-container'>
                <h1>Nuestro</h1>
                <h1 className='third-titulo'>Celebración</h1>

                <p>Esperamos contar con su presencia para hacer <br /> de este día aún más especial.</p>

                <h2>DRESS CODE</h2>
                <span><b>Formal.</b></span>
                <span>No usar blanco ni azul.</span>

                <div className='imagen-third'>
                    <img src={segundaFoto} alt="" />
                </div>

                <p className='hora-text-third'>Para confirmar tu asistencia, por favor compártenos tu número de documento. Agradecemos de antemano tu participación y esperamos ansiosos este día tan significativo.</p>
            </div>


        </section>

    )

}

export default ThirdFondo