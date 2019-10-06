import React from 'react'
import { ButtonStyled, kinds } from './styles'

interface ButtonProps {
    handleButtonClick: () => void,
    textLabel: string,
    kind?: kinds
}

export const Button = ({handleButtonClick, textLabel, kind}:ButtonProps) => {
    return (
        <ButtonStyled
            kind={kind}
            onClick={handleButtonClick}
            type="submit">
            {textLabel}
        </ButtonStyled>
    )
}
