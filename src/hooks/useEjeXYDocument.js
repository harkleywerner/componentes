import { useEffect, useState } from "react"



export const useEjeXYDocument = (ejeLimitacion) => {


    const [clientX, setClientX] = useState(false)

    const [clientY, setClientY] = useState(false)

    const [movimiento, setMovimiento] = useState(false)



    useEffect(() => {

        const mouseMoveHandler = (e) => {
    

            if (e.clientX <= ejeLimitacion.minimoX || e.clientX >= ejeLimitacion.maximoX) return

            cambiarEjeX(e.clientX)

            cambiarEjeY(e.clientY)

        };


        if (movimiento === true) {
            document.addEventListener("mousemove", mouseMoveHandler);
        }

        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);

        };

    }, [movimiento]);



    const cambiarEjeX = (valor) => {

        setClientX(valor)

    }

    const cambiarEjeY = (valor) => {
        setClientY(valor)
    }

    const esteblecerEstadoDeMovimiento = () => {

        setMovimiento(!movimiento)

    }


    return {
        clientX,
        clientY,
        cambiarEjeX,
        cambiarEjeY,
        esteblecerEstadoDeMovimiento
    }

}