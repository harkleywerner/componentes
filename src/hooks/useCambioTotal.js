
import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "@/context/Contextos";
import { useBuscarMetodosDePago } from "./useBuscarMetodosDePago";


const calcularCambio = (metodoEncontrado, calculoConTarifa) => {

    const cambio = metodoEncontrado.metodosDePago.reduce((acc, current) => (acc + current.resto), 0)

    const resultado = cambio - calculoConTarifa

    if (Math.sign(calculoConTarifa) == -1) return 0
    else if (cambio > calculoConTarifa) return resultado
    else return 0

}

export const useCambioTotal = () => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { listaDeRestos } = useContext(restoDelPagoContext)

    const { calculoConTarifa } = precioFinal

    const metodoEncontrado = useBuscarMetodosDePago()


    const cambioTotal = useMemo(() => {

        return calcularCambio(metodoEncontrado, calculoConTarifa)

    }, [calculoConTarifa, listaDeRestos])

    return { cambioTotal }

}