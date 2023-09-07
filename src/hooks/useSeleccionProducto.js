
import { useState, useEffect, useCallback } from "react"

export const useSeleccionProducto = (listaProducto = []) => {



    const [seleccion, setSeleccion] = useState({})


    const seleccionarProducto = useCallback((producto) => {

        setSeleccion(producto)

    },[])

    const borrarSeleccion = useCallback(() => {

        setSeleccion({})

    },[])

    useEffect(() => {

        if (listaProducto.length > 0) {

            const largo = listaProducto.length - 1

            setSeleccion(listaProducto[largo])

        }

    }, [listaProducto.length])

    return {
        seleccion,
        seleccionarProducto,
        borrarSeleccion
    }
}