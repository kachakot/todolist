import React from 'react'

interface ButtonProps {
    handleButtonClick: () => void
}

export const Button = ({handleButtonClick}:ButtonProps) => {
    return (
        <button
            onClick={handleButtonClick}
            type="submit">
            Add Task
        </button>
    )
}
