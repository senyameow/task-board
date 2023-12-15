'use client'
import React from 'react'

interface FormInputProps {
    id: string;
    label?: string;
    type?: string;
    placeholder?: string;
    requiered?: boolean;
    disabled?: boolean;
    errors?: Record<string, string[] | undefined>

    className?: string;
    defaultVal?: string;
    onBlur?: () => void;
}

export const FormInput = () => {
    return (
        <div>FormInput</div>
    )
}