import primeraFoto from '../../assets/primeraFoto.jpg'
import './secondFondo.css'

const SecondFondo = () => {

    return (

        <section className='main-secondFondo'>

            <div className='main-secondFondo-container'>
                <h1>Nuestro</h1>
                <h1 className='segundo-titulo'>Matrimonio</h1>
                <h2>¡QUERIDOS AMIGOS Y FAMILIARES!</h2>
                <p>Es un placer para nosotros invitarlos a la <br /> celebración de nuestro matrimonio, un <br /> momento lleno de amor y felicidad que <br /> queremos compartir con todos ustedes.</p>

                <div className='imagen'>
                    <img src={primeraFoto} alt="" />
                </div>

                <h3>LUGAR</h3>
                <p className='hora-text'>Parcela 39 globo 2 <br /> Un dulce Cielo, <br /> VEREDA PARCELAS <br /></p>
                <p className='hora-titulo'>3:00 PM</p>
                <p className='puntuliadad'>contamos con tu puntualidad</p>
            </div>


        </section>
    )

}

export default SecondFondo