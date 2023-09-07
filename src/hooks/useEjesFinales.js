import { useEffect, useState } from "react"
import { useEjeXYDocument } from "./useEjeXYDocument"


export const useEjesFinales = (ejeLimitacion) => {


    const [ejesFinales, setEjesFinales] = useState({})

    const { clientX, clientY, esteblecerEstadoDeMovimiento, cambiarEjeX } = useEjeXYDocument(ejeLimitacion)

    const establecerEjesFinales = (e) => {
            setEjesFinales({ clientX, clientY })
            cambiarEjeX(false)
            esteblecerEstadoDeMovimiento()     
    };



    useEffect(() => {


        if (!clientX || !clientY) return



        document.addEventListener("mouseup", establecerEjesFinales)
        document.addEventListener("mousedown", establecerEjesFinales)

        return (() => {
            document.removeEventListener("mouseup", establecerEjesFinales)
            document.removeEventListener("mousedown", establecerEjesFinales)
        })

    }, [clientX, clientY])


    return {
        establecerEjesFinales,
        ejesFinales,
        clientX,
        clientY
    }

}