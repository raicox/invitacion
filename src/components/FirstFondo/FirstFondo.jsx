import { useState, useEffect } from 'react';
import './firstFondo.css';

const FirstFondo = () => {
    // Fecha objetivo (14 de marzo de 2024)
    const targetDate = new Date('2024-03-14T00:00:00');

    // Estado para almacenar el tiempo restante
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // Función para calcular el tiempo restante
    function calculateTimeLeft() {
        const difference = targetDate - new Date();
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
    }

    // Actualiza el tiempo restante cada segundo
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    },);

    return (
        <section className='main-firstFondo'>
            <div className='main-firstFondo-container'>
                <h1>Gustavo</h1>
                <h1>&</h1>
                <h1>Natalí</h1>
                <h2>14.03.24</h2>
                <h2>
                    {timeLeft.days} D - {timeLeft.hours} H - {timeLeft.minutes} M - {timeLeft.seconds} S
                </h2>
                <p>¡GRACIAS POR SER PARTE DE NUESTRA HISTORIA!</p>
            </div>
        </section>
    );
};

export default FirstFondo;