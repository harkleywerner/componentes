
import { CustomError } from "./customError"


const listaDeErrores = [
    { "codigo": 1, "motivo": "Error al verificar el usuario" },

]


export const buscarCodigosDeErrores = (datos = {}) => {


    if (!datos.error) return

    const error = listaDeErrores.find((err) => err.codigo === datos.error.codigo)

    const { codigo, motivo } = error

    throw new CustomError(codigo, motivo)

}