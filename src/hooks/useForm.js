import { useState } from "react"


export const useForm = (intialInput = {}) => {

    const [form, setForm] = useState(intialInput)



    const changeForm = ({ target }) => {
        const { name, value } = target

        setForm({ ...form, [name]: value })

    }

    const establecerFormulario = (inputs) => {
        setForm(inputs)
    }

    const onSubmit = (evento) => {
        evento.preventDefault()
        setForm(intialInput)
    }

    return {
        onSubmit,
        changeForm,
        form,
        establecerFormulario
    }
}