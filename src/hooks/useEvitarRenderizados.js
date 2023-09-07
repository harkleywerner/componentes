import { useCallback, useState } from "react";


export const useEvitarRenderizados = (RENDERIZADO_LIMITE = Infinity) => {

    const [conteoRenderizados, setConteoRenderizados] = useState(0)

    const registrarConteo = useCallback(() => {

        if (conteoRenderizados <= RENDERIZADO_LIMITE) {

            setConteoRenderizados(prevConteo => prevConteo + 1)

        } else {

            setConteoRenderizados(NaN)
        }


    }, [conteoRenderizados])

    return {
        registrarConteo,
        conteoRenderizados
    }

};