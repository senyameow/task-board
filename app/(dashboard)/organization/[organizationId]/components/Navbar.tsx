import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import React from 'react'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'

const Navbar = () => {
    return (
        <nav className='fixed top-0 w-full h-16 border-b-black shadow-sm flex items-center bg-white opacity-90'>
            <div className='pr-4 md:px-6 flex items-center justify-between w-full'>
                <div className='flex items-center gap-6'>
                    <Logo />
                    <Button>Create</Button>
                </div>
                <div className='flex items-center gap-2'>
                    <OrganizationSwitcher />
                    <UserButton afterSignOutUrl='/' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar