'use client'
import { Skeleton } from '@/components/ui/skeleton';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';
import React, { useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

interface SidebarProps {
    storageKey?: string;
}

const Sidebar = ({ storageKey = 'sidebar-state' }: SidebarProps) => {
    const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(storageKey, {}) // to understand which one accordion is open

    const { organization: activeOrganization, isLoaded: isLoadedOrg } = useOrganization({
        memberships: {
            infinite: true
        }
    })

    const { isLoaded, setActive, userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true
        }
    })

    const defaultAccordionValue: string[] = Object.keys(expanded)
        .reduce((acc: string[], key: string) => {
            if (expanded[key]) {
                acc.push(key)
            }
            return acc
        }, [])

    const onExpand = (id: string) => {
        setExpanded(cur => ({
            ...cur,// все остаются одинаковыми
            [id]: !expanded[id]  // текущий меняется на противоположный
        }))
    }

    if (!isLoaded || !isLoadedOrg || userMemberships.isLoading) return (
        <>
            <Skeleton className='' />
        </>
    )

    return (
        <div>
            qwe
        </div>
    )
}

export default Sidebar