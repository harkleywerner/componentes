import { useState } from "react"



export const useColumna = (ESTADO_INICIAL = 0) => {
    const [columna, setColumna] = useState(ESTADO_INICIAL)

    const calcularColumna = (ejes = {}) => {

        if (!ejes.XY.clientX || !ejes.ejeLimitacion.inicialX) return

        const { XY, ejeLimitacion } = ejes

        const { clientX } = XY

        const { inicialX } = ejeLimitacion

        const nuevoEjeX = Math.round((clientX / inicialX))


        setColumna(nuevoEjeX)

    }



    return {
        calcularColumna,
        columna
    }

}