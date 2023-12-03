'use client'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import React from 'react'
import { OrganizationSwitcher, UserButton, useAuth, useUser } from '@clerk/nextjs'
import { Skeleton } from '@/components/ui/skeleton'

const Navbar = () => {

    const { isLoaded } = useUser()

    return (
        <nav className='fixed top-0 w-full h-16 border-b-black shadow-sm flex items-center bg-white opacity-90'>

            <div className='pr-4 md:px-6 flex items-center justify-between w-full'>
                <div className='flex items-center gap-6'>
                    <Logo />
                    <Button>Create</Button>
                </div>
                <div className='flex items-center gap-2'>
                    {isLoaded ? <OrganizationSwitcher /> : <Skeleton className="h-[32px] w-[170px] rounded-sm bg-gray-200" />}
                    {isLoaded ? <UserButton afterSignOutUrl='/' /> : <Skeleton className="h-[40px] w-[40px] rounded-full bg-gray-200" />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar