import React from 'react'

interface FieldProps {
    inputValue: string,
    handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export const Field = ({inputValue, handleInputChange}:FieldProps) => {
    return (
        <input 
            value={inputValue} 
            onChange={handleInputChange}
            type="text"
        />
    )
}
