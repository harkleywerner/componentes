
import { useState } from "react"

const seccionesProductos = [
    {
        "nombre": "Panaderia"
    },
    {
        "nombre": "Kiosco"
    },
    {
        "nombre": "Helados"
    },
    {
        "nombre" : "Rotiseria"
    },
    {
        "nombre" : "Peteracos"
    }
]

//Aca se realizaria una llamada a la base de datos que va a pedir toda las secciones disponibles

export const useSeccion = () => {

    const [seccion, setSeccion] = useState("Home")

    const elegirSeccion = (nombre) => {
        setSeccion(nombre)
    }

    return {
        elegirSeccion,
        seccion,
        seccionesProductos
    }

}