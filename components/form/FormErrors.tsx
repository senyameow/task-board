import React from 'react'

interface FormErrorsProps {
    errors?: Record<string, string[] | undefined>
    id: string
}

export const FormErrors = ({ errors, id }: FormErrorsProps) => {
    return (
        <div>FormErrors</div>
    )
}
