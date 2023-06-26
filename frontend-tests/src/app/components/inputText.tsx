'use client'
import { TextField } from "@mui/material"

interface inputTextType {
    label: string
    placeholder: string
    value: string | number
    onChange: (event: { target: { value: string } }) => void
}

const InputText = ({
    label,
    placeholder,
    value,
    onChange
}: inputTextType) => {
    return (
        <TextField
            label={label || 'Mensagem'}
            placeholder={placeholder || "Insira sua mensagem"}
            value={value}
            onChange={onChange}
            size="small"
        />
    )
}

export default InputText