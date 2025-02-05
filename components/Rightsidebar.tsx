import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Bankcard from './Bankcard'
import { countTransactionCategories } from '@/lib/utils'
import Category from './Category'

const Rightsidebar = ({user,transactions,banks}:RightSidebarProps) => {
    const name=`${user.firstName} ${user.lastName}`
    const categories: CategoryCount[] = countTransactionCategories(transactions);
  return (
    <div>
      <aside className='right-sidebar'>
        <section className='flex flex-col pb-8'>
            <div className='profile-banner'/>
                <div className='profile'>
                    <div className='profile-img'>
                        <span className='text-5xl font-bold text-blue-500'>
                            {name[0]}
                        </span>
                    </div>
                    <div className='profile-details'>
                        <h1 className='profile-name'>
                            {name} 
                        </h1>
                        <p className='profile-email'>
                            {user.email}
                        </p>
                    </div>
                </div>
        </section>
        <section className='banks'>
            <div className='flex w-full justify-between'>
                <h2 className='header-2'>Banks</h2>
                <Link href="/" className='flex-gap-2'>
                <Image src="/icons/plus.svg" 
                width={20}
                height={20}
                alt="plus"/>
                <h2 className='text-14 font-semibold text-gray-600'>
                    Add Bank
                </h2>
                </Link>
            </div>
            {banks?.length > 0 && (
                <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
                    <div className='relative z-10'>
                        <Bankcard
                        key={banks[0].$id}
                        account={banks[0]}
                        userName={name}    
                        showBalance={false}/>
                    </div>
                    {banks[1] && (
                        <div className='absolute right-0 top-8 z-0 w-[90%]'>
                            <Bankcard 
                            key={banks[1].$id}
                            account={banks[1]}
                            userName={name}    
                            showBalance={false}/>
                        </div>
                    )}
                </div>
            )}
            <div className='mt-10 flex flex-1 flex-col gap-6'>
                <h2 className='header-2'>
                    Top categories
                </h2>
                <div className='space-y-5'>
                    {categories.map((category,index)=>(
                        <Category key={category.name} category={category}/>
                    ))}
                </div>
            </div>
        </section>
      </aside>
    </div>
  )
}

export default Rightsidebar
