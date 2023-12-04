'use client'

import { useMobileSidebar } from '@/hooks/useMobileSidebar'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import Sidebar from '@/app/(dashboard)/_components/Sidebar'

const MobileSidebar = () => {

    const pathname = usePathname()
    const [isMounted, setIsMounted] = useState(false)

    const { isOpen, onClose, onOpen } = useMobileSidebar()

    useEffect(() => {
        setIsMounted(true)
    })

    if (!isMounted) return null

    return (
        <>
            <Button onClick={onOpen} className='block md:hidden' variant={'ghost'} size={'sm'}>
                <Menu />
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent side={'left'} className='p-2 pt-10'>
                    <Sidebar storageKey='sidebar-mobile-state' />
                </SheetContent>
            </Sheet>
        </>
    )
}

export default MobileSidebar