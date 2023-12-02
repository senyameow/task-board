import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';
import { Layout } from 'lucide-react';
import Link from 'next/link'

export type Organization = {
    id: string;
    slug: string;
    imageUrl: string;
    name: string;
}

interface NavItemProps {
    isActive: boolean;
    isExpanded: boolean;
    organization: Organization;
    onExpand: (id: string) => void;

}

const NavItem = ({ isActive, isExpanded, onExpand, organization }: NavItemProps) => {

    const routes = [
        {
            label: 'Boards',
            icon: <Layout className='h-4 w-4 mr-2' />,
            href: `/organization/${organization.id}`
        },
        {
            label: 'Boards',
            icon: <Layout className='h-4 w-4 mr-2' />,
            href: `/organization/${organization.id}`
        },
        {
            label: 'Boards',
            icon: <Layout className='h-4 w-4 mr-2' />,
            href: `/organization/${organization.id}`
        },
    ]

    return (
        <AccordionItem value={organization.id} className='border-none'>
            <AccordionTrigger className={cn(`hover:bg-gray-200 px-4 p-2 rounded-lg border-none`, isActive && !isExpanded && 'bg-sky-200/80 hover:bg-sky-200/60')}>
                <div className='flex items-center gap-2 '>
                    <Image src={organization.imageUrl} alt='org-logo' width={30} height={30} className='rounded-lg aspect-square' />
                    <span className=''>{organization.name}</span>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                {routes.map(r => (
                    <Link href={r.href} className='p-2' >
                        <div className={cn(`flex items-center gap-2 pl-6`,)}>
                            {r.icon}
                            {r.label}
                        </div>
                    </Link>
                ))}
            </AccordionContent>
        </AccordionItem>
    )
}

export default NavItem