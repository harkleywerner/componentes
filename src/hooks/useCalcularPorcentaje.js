import { useContext } from "react"
import { TarifaContex } from "../context/Contextos"




export const useCalculadoraPorcenje = (precio) => {

    const { tarifaActual } = useContext(TarifaContex)

    return (tarifaActual.porcentaje / 100) * precio

}