'use client'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { useAuth } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'



export const Navbar = () => {
    const { isSignedIn, isLoaded } = useAuth()
    return (
        <nav className='fixed top-0 w-full px-4 h-14 border-b-black shadow-sm flex items-center bg-white opacity-90'>
            <div className='md:max-w-4xl mx-auto flex items-center justify-between w-full'>
                <Logo />
                <div className='flex items-center gap-2'>
                    {isSignedIn && isLoaded ? <UserButton afterSignOutUrl='/' /> : <Button variant={'default'} asChild>
                        <Link href={'/sign-up'}>
                            Login
                        </Link>
                    </Button>}
                </div>
            </div>
        </nav>
    )
}
