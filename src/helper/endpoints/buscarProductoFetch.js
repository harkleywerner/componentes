

export const buscarProductoFetch = async ({ producto, seccion }) => {

    try {

        const apiResponse = await fetch(`/buscarProductos/${seccion}`)

    } catch (error) {
        console.log(error)
    }

}