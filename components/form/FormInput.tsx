'use client'
import React from 'react'

interface FormInputProps {
    id: string;
    label?: string;
    type?: string;
    placeholder?: string;
    requiered?: boolean;
    disabled?: boolean;
    errors?: Record<string, string[]> | undefined
}

const FormInput = () => {
    return (
        <div>FormInput</div>
    )
}

export default FormInput