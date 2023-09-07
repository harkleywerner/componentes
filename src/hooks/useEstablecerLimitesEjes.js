import { useState } from "react"

export const useEstablecerLimitesEjes = () => {

    const [ejeLimitacion, setEjeLimitacion] = useState({})

    const establecerLimiteIncialDocumento = () => {

        const documentWidth = document.documentElement.clientWidth

        const documentHight = document.documentElement.clientHeight

        const valorIncialWidth = documentWidth / 12
        const valorInicialHight = documentHight / 12

        const ejeY = {
            inicialY: valorInicialHight,
            maximoY: documentHight,
            minimoY: (documentHight / 12)
        }
        const ejeX = {
            inicialX: valorIncialWidth,
            maximoX: (valorIncialWidth * 10),
            minimoX: (valorIncialWidth * 3)
        }

        setEjeLimitacion({ ...ejeX, ...ejeY })
    }


    const establecerLimiteIncialElemento = (e) => {

        // const x = e.clientX
        // const y = e.clientY


        // const ejeY = {
        //     inicialY: valorInicialHight,
        //     maximoY: documentHight,
        //     minimoY: (documentHight / 12)
        // }
        // const ejeX = {
        //     inicialX: valorIncialWidth,
        //     maximoX: (valorIncialWidth * 10),
        //     minimoX: (valorIncialWidth * 3)
        // }



    }


    return {
        ejeLimitacion,
        establecerLimiteIncialDocumento,
        establecerLimiteIncialElemento
    }


}