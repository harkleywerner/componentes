
import { useCallback, useState } from "react"

export const useEventoMostrar = () => {

    const [mostrar, setMostrar] = useState(false)

    const alternarMostrar = useCallback(() => {
       
        setMostrar(prevMostrar => !prevMostrar);
    }, []);


    return {
        mostrar,
        alternarMostrar,
    }
}