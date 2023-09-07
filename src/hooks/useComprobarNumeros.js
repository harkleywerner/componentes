import { useEffect, useState } from "react"


export const useComprobarNumeros = (form) => {


    const [validarNumero, setValidarNumero] = useState(false)

    useEffect(() => {
        const n = Object.entries(form).map(([key, value]) => isNaN(value) || value.length == 0)
        if (n.includes(true)) setValidarNumero(false)
        else setValidarNumero(true)

    }, [form])

    return {
        validarNumero
    }

}
