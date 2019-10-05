import React from 'react'

interface ButtonProps {
    handleButtonClick: () => void,
    textLabel: string
}

export const Button = ({handleButtonClick, textLabel}:ButtonProps) => {
    return (
        <button
            onClick={handleButtonClick}
            type="submit">
            {textLabel}
        </button>
    )
}
