"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import Footer from './Footer'
import PlaidLink from './PlaidLink'
import Image from 'next/image'

const Sidebar = ({user}:SiderbarProps) => {
    const pathname=usePathname();
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className='mb-12 cursor-pointer flex items-center gap-2'>
            <img src="/icons/icon.png" width={34} height={34} alt="Logo" className='size-[34px] max-al:size-14'/>
            <h1 className='sidebar-logo'>
                WeTrack
            </h1>
            </Link>
            {sidebarLinks.map((item)=>{
                const isActive = 
                pathname === item.route|| pathname.startsWith('${item.route}/') 
                return(
                    <Link href={item.route} key={item.label}
                    className={cn('sidebar-link', {'bg-bank-gradient':isActive})}>
                    <div className='relative size-6'>
                        <img src={item.imgURL}
                        alt={item.label}
                        className={cn({
                            'brightness-[3] invert-0':isActive
                        })}/>
                    </div>
                    <p className={cn('sidebar-label',{"!text-white":isActive})}>
                        {item.label}
                    </p>
                    </Link>
                )
            })}
            <PlaidLink user={user}/>
        </nav>
        <Footer user={user}/>
    </section>
  )
}
export default Sidebar
