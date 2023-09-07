
export const validarUsuarioFetch = async (usuario) => {
    try {
        const body = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(usuario)
        }

        const apiResponse = await fetch("https://jsonplaceholder.typicode.com/todos/1")

        const responsee = await apiResponse.json()
        
        const response = {"error" : {"codigo" : 1}}
        return {response}

    } catch (error) {
        console.log(error)
    }

}

