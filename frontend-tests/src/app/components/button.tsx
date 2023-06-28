"use client"
import { Button } from "@mui/material"
import { useState } from "react"

interface ButtonSearchType {
    variant: any
    color: any
    size: any
    onClick: any
}

const ButtonSearch = ({
    variant,
    color,
    size,
    onClick
}: ButtonSearchType) => {
    const [updateTitle, setUpdateTitle] = useState('Ação')

    return (
        <Button
            variant={variant || 'contained'}
            color={color || 'secondary'}
            size={size || 'medium'}
            onClick={() => {
                setUpdateTitle('Buscando')
                onClick()
            }}
        >
            {updateTitle}
        </Button>
    )
}

export default ButtonSearch