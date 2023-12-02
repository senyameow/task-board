import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react'
import Image from 'next/image'

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
    return (
        <AccordionItem value={organization.id}>
            <AccordionTrigger className=''>
                <div className='flex items-center gap-2 '>
                    <Image src={organization.imageUrl} alt='org-logo' width={40} height={40} className='rounded-lg' />
                </div>
            </AccordionTrigger>
            <AccordionContent>
                { }
            </AccordionContent>
        </AccordionItem>
    )
}

export default NavItem