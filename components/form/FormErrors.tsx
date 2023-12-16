import { XCircle } from 'lucide-react'
import React from 'react'

interface FormErrorsProps {
    errors?: Record<string, string[] | undefined>
    id: string
}

export const FormErrors = ({ errors, id }: FormErrorsProps) => {
    if (!errors) return null
    return (
        <div id={`${id}-error`} className='mt-2 text-rose-500 text-sm'>
            {errors?.[id]?.map((error: string) => (
                <div key={error} className='flex items-center font-medium border-rose-500 border rounded-sm'>
                    <XCircle className='w-4 h-4 mr-2' />
                    {error}
                </div>
            ))}
        </div>
    )
}
