import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Font from 'next/font/local'
import { cn } from '@/lib/utils'

const font = Font({
    src: '../public/fonts/font.woff2'
})

const Logo = () => {
    return (
        <Link href={'/'}>
            <div className='hidden md:flex items-center gap-2 hover:opacity-80'>
                <Image src={'/logo.jpg'} alt='logo' className='rounded object-cover aspect-square' width={30} height={30} />
                <p className={cn(`text-sm`, font.className)}>Freello</p>
            </div>
        </Link>
    )
}

export default Logo