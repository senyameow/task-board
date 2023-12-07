import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';
import { Activity, CreditCard, Layout, Settings } from 'lucide-react';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button';
import { useMobileSidebar } from '@/hooks/useMobileSidebar';
import { Skeleton } from '@/components/ui/skeleton';

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

    const pathname = usePathname()
    const router = useRouter()

    const { onClose } = useMobileSidebar()

    const onRedirect = (href: string) => {
        router.push(href)
        onClose()
    }

    const routes = [
        {
            label: 'Boards',
            icon: <Layout className='h-4 w-4 mr-2' />,
            href: `/organization/${organization.id}`
        },
        {
            label: 'Activity',
            icon: <Activity className='h-4 w-4 mr-2' />,
            href: `/organization/${organization.id}/activity`
        },
        {
            label: 'Settings',
            icon: <Settings className='h-4 w-4 mr-2' />,
            href: `/organization/${organization.id}/settings`
        },
        {
            label: 'Billing',
            icon: <CreditCard className='h-4 w-4 mr-2' />,
            href: `/organization/${organization.id}/billing`
        },
    ]

    return (
        <AccordionItem value={organization.id} className='border-none'>
            <AccordionTrigger onClick={() => onExpand(organization.id)} className={cn(`hover:bg-gray-200 px-4 p-2 rounded-lg border-none`, (isActive && !isExpanded) && 'bg-sky-200/80 hover:bg-sky-200/60')}>
                <div className='flex items-center gap-2 '>
                    <Image src={organization.imageUrl} alt='org-logo' width={30} height={30} className='rounded-lg aspect-square' />
                    <span className=''>{organization.name}</span>
                </div>
            </AccordionTrigger>
            <AccordionContent className='text-neutal-700'>
                {routes.map(r => (
                    <Button className={cn(`w-full font-normal pl-10 mb-1 my-1 justify-start`, pathname === r.href && 'bg-sky-200/80 hover:bg-sky-200/60')} variant={'ghost'} size={'sm'} key={r.href} onClick={() => onRedirect(r.href)} >
                        <div className={cn(`flex items-center gap-2 `,)}>
                            {r.icon}
                            {r.label}
                        </div>
                    </Button>
                ))}
            </AccordionContent>
        </AccordionItem>
    )
}

NavItem.Skeleton = function NavItemSkeleton() {
    return (
        <div className='flex items-center gap-2'>
            <Skeleton className='rounded-lg aspect-square w-[30px] h-[30px]' />
            <Skeleton className='h-6 w-full' />
        </div>
    )
}

export default NavItem