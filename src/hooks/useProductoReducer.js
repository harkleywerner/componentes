
import { useCallback, useReducer } from 'react';
import { verificarPropiedadesDeUnObjecto } from '../helper/verificarPropiedadesDeUnObjecto';


const agregarNuevasPropiedades = (action) => {

    const objectoPorDefecto = {
        "editado": false,
        "cantidadSeleccionada": 1,
        "precioModificado": action.producto.precio
    }

    return { ...objectoPorDefecto, ...action.producto }
}


const validarProductoExistente = (state, action) => {

    const productoExistente = state.some(({ nombre }) => nombre == action.producto.nombre)

    return productoExistente

}

const reducer = (state, action) => {



    if (validarProductoExistente(state, action) == false) return [...state, agregarNuevasPropiedades(action)];

    const { producto } = action

    const nuevoPrecio = producto.precioModificado

    const nuevaCantidad = producto.cantidadSeleccionada

    return state.map(estado => {

        if (estado.nombre !== action.producto.nombre) return estado

        const { cantidadSeleccionada } = estado

        switch (action.type) {
            case "AGREGAR":

                return {
                    ...estado,
                    "cantidadSeleccionada": cantidadSeleccionada + 1,
                };

            case "ELIMINAR":

                return {
                    ...estado,
                    "cantidadSeleccionada": cantidadSeleccionada - 1,
                };

            case "EDITAR":
                return {
                    ...estado,
                    "cantidadSeleccionada": nuevaCantidad,
                    "precioModificado": nuevoPrecio,
                    "editado": true

                };

            case "BORRAR":

                return null

            default:
                return state


        }

    }).filter(estado => estado !== null)


}

export const productoReducer = () => {

    const [listaProducto, dispatch] = useReducer(reducer, [])



    const agregarProducto = (producto) => {

        
        dispatch({ type: "AGREGAR", producto })
    }

    const eliminarProducto = useCallback((producto) => {
        
        if (verificarPropiedadesDeUnObjecto(producto)) return

        dispatch({ type: "ELIMINAR", producto })

    },[])

    const editarProducto = (producto) => {
   
        if (!producto.nombre) return

        dispatch({ type: "EDITAR", producto })

    }

    const borrarProducto = (producto) => {

        if (verificarPropiedadesDeUnObjecto(producto)) return

        dispatch({ type: "BORRAR", producto })
    }

    return {
        agregarProducto,
        eliminarProducto,
        listaProducto,
        editarProducto,
        borrarProducto
    }
}