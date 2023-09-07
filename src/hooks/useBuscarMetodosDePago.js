import { TarifaContex, restoDelPagoContext } from "@/context/Contextos"
import { useContext } from "react";

export const useBuscarMetodosDePago = () => {

    const { tarifaActual } = useContext(TarifaContex)

    const { listaDeRestos } = useContext(restoDelPagoContext)

    const { tipoDeTarifa } = tarifaActual

    const metodoEncontrado = listaDeRestos.find(r => r.tipoDeTarifa == tipoDeTarifa)

    return metodoEncontrado ? metodoEncontrado : { "metodosDePago": [] }

};