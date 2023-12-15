'use client'
import React, { forwardRef } from 'react'
import { useFormStatus } from 'react-dom';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import { FormErrors } from './FormErrors';

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
    defaultVal,
    onBlur
}, ref) => {

    const { pending, data, method, action } = useFormStatus()

    return (
        <div className='space-y-2'>
            <div className='space-y-1'>
                {label ? (
                    <Label className='text-xs font-semibold text-gray-600' htmlFor={id}>
                        {label}
                    </Label>
                ) : null}
                <Input
                    type={type}
                    disabled={disabled}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    id={id}
                    required={requiered}
                    ref={ref}
                    defaultValue={defaultVal}
                    className={cn(`text-sm px-2 py-1 h-7`, className)}
                    aria-describedby={`${id}-errors`}
                />
                <FormErrors errors={errors} id={id} />
            </div>
        </div>
    )

})

FormInput.displayName = 'FormInput'