'use client'
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import NavItem, { Organization } from './NavItem';

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
            <div>
                <div className='flex items-center w-full justify-between gap-2'>
                    <Skeleton className='w-[100px] h-[16px] bg-gray-300' />
                    <Skeleton className='w-[30px] h-[30px] rounded-lg bg-gray-300' />
                </div>
                <div className='space-y-2'>
                    <NavItem.Skeleton />
                    <NavItem.Skeleton />
                    <NavItem.Skeleton />
                </div>
            </div>
        </>
    )

    return (
        <div className=''>
            <div className='flex items-center w-full justify-between gap-2'>
                <span>Workspaces</span>
                <Button asChild type='button' variant={'ghost'} className='ml-auto'>
                    <Link href="/select-org">
                        <Plus className='w-4 h-4' />
                    </Link>
                </Button>
            </div>
            <Accordion
                type='multiple'
                defaultValue={defaultAccordionValue}
                className='space-y-2'
            >
                {userMemberships.data.map(({ organization }) => (
                    <NavItem
                        key={organization.id}
                        isActive={activeOrganization?.id === organization.id}
                        isExpanded={expanded[organization.id]}
                        organization={organization as Organization}
                        onExpand={onExpand}
                    />
                ))}
            </Accordion>
        </div>
    )
}

export default Sidebar