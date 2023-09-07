
export const compararDatoSeleccionado = (seleccionado, actual) => {
    if (seleccionado == actual) {
        return {
            background: "#88dc65",
            color: "white"
        }
    } else return {}
}
