'use client'
import React, { forwardRef } from 'react'
import { useFormStatus } from 'react-dom';

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

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
    id,
    label,
    type,
    placeholder,
    disabled,
    requiered,
    errors,
    className,
    defaulVal,
    onBlur
}, ref) => {

    const { pending, data, method, action } = useFormStatus()

})

FormInput.displayName = 'FormInput'