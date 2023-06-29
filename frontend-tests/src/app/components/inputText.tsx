'use client'
import { TextField } from "@mui/material"

interface inputTextType {
    label: string
    placeholder: string
    value: string | number
    onChange: (event: { target: { value: string } }) => void
    name: string
}

const InputText = ({
    label,
    placeholder,
    value,
    name,
    onChange
}: inputTextType) => {
    return (
        <TextField
            label={label || 'Mensagem'}
            placeholder={placeholder || "Insira sua mensagem"}
            value={value}
            onChange={onChange}
            size="small"
            name={name}
        />
    )
}

export default InputText