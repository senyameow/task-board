import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <nav className='fixed bottom-0 w-full p-4 h-14 border-t-black/10 border-t shadow-sm flex items-center bg-slate-50 opacity-90'>
            <div className='px-4 mx-auto flex items-center justify-between w-full'>
                <Logo />
                <div className='flex items-center gap-2'>
                    <Button variant={'ghost'} >
                        Privacy and Policy
                    </Button>
                    <Button variant={'ghost'} >
                        Terms and conditions
                    </Button>
                </div>
            </div>
        </nav>
    )
}
