import { useContext, useMemo } from "react";
import { usePrecioFinalDeLosProductos } from "./usePrecioFinalDeLosProductos";
import { restoDelPagoContext } from "@/context/Contextos";
import { useBuscarMetodosDePago } from "./useBuscarMetodosDePago";
import { useCambioTotal } from "./useCambioTotal";



const calcularRestosTotales = (calculoConTarifa, metodoEncontrado) => {

    return metodoEncontrado.metodosDePago.reduce((acc, current) => acc - current.resto, calculoConTarifa)

}

export const useRestanteTotal = () => {

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const { listaDeRestos } = useContext(restoDelPagoContext)

    const { calculoConTarifa } = precioFinal

    const metodoEncontrado = useBuscarMetodosDePago()

    const { cambioTotal } = useCambioTotal()

    const restosTotales = useMemo(() => {

        if (cambioTotal > 0) return 0

        return calcularRestosTotales(calculoConTarifa, metodoEncontrado)
    }, [calculoConTarifa, listaDeRestos])

    return { restosTotales }

}