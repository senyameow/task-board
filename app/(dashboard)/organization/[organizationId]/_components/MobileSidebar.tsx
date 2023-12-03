'use client'

import { useMobileSidebar } from '@/hooks/useMobileSidebar'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const MobileSidebar = () => {

    const pathname = usePathname()
    const [isMounted, setIsMounted] = useState(false)

    const { isOpen, onClose, onOpen } = useMobileSidebar()

    useEffect(() => {
        setIsMounted(true)
    })

    if (!isMounted) return null

    return (
        <div>MobileSidebar</div>
    )
}

export default MobileSidebar