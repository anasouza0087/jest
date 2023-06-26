"use client"
import { Button } from "@mui/material"

interface ButtonSearchType {
    variant: any
    color: any
    title: any
    size: any
    onClick: any
}

const ButtonSearch = ({
    variant,
    color,
    title,
    size,
    onClick
}: ButtonSearchType) => {
    return (
        <Button
            variant={variant || 'contained'}
            color={color || 'secondary'}
            size={size || 'medium'}
            onClick={onClick}
        >
            {title}
        </Button>
    )
}

export default ButtonSearch