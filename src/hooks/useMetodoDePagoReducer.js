import { useCallback, useReducer } from "react";
import shortid from 'shortid';


const validarTarifaDelMetodoInicial = (state, tipoDeTarifa) => state.some(i => {
    return i.tipoDeTarifa == tipoDeTarifa
})


const eliminarRestoDelMetodo = (estado, pago) => {

    return [...estado.metodosDePago.filter(({ id }) => id !== pago.id)]

}


const reducer = (state, action) => {

    const { metodosDePago, type } = action

    const { tipoDeTarifa, pago } = metodosDePago

    if (validarTarifaDelMetodoInicial(state, tipoDeTarifa) == false) return [...state, { tipoDeTarifa, metodosDePago: [pago] }]

    return state.map(estado => {

        if (estado.tipoDeTarifa !== metodosDePago.tipoDeTarifa) return estado

        switch (type) {

            case "Agregar":
                return {
                    tipoDeTarifa,
                    metodosDePago: [...estado.metodosDePago, { ...pago, id: shortid.generate() }]

                }

            case "Modificar":
                return {

                }

            case "Eliminar":
                return {
                    tipoDeTarifa,
                    metodosDePago: eliminarRestoDelMetodo(estado, pago)
                }

        }
    })
}




export const useMetodoDePagoReducer = () => {

    const [listaDeRestos, dispatch] = useReducer(reducer, [])




    const agregarResto = useCallback((metodosDePago) => {

        dispatch({ type: "Agregar", metodosDePago })
    }, [])

    const modificarResto = useCallback((metodosDePago) => {
        dispatch({ type: "Modificar", metodosDePago })
    }, [])

    const eliminarResto = useCallback((metodosDePago) => {

        dispatch({ type: "Eliminar", metodosDePago })
    }, [])



    return {
        listaDeRestos,
        agregarResto,
        modificarResto,
        eliminarResto
    }

};