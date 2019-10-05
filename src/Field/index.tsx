import React from 'react'

interface FieldProps {
    inputValue: string,
    onInputChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export const Field = ({inputValue, onInputChange}:FieldProps) => {
    return (
        <input 
            value={inputValue} 
            onChange={onInputChange}
            type="text"
        />
    )
}
