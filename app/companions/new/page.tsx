import CompanionForm from '@/components/CompanionForm'
import { newCompanionPermissions } from '@/lib/actions/companion.actions';
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const NewCompanion = async() => {

  const {userId} = await auth();

  if(!userId) {
    redirect('/sign-in');
  }

  const canCreateCompanion = await newCompanionPermissions()
  return (
    <main className='min-lg:w-1/3 min-md:w-2/3 items-center justify-center'>
      {canCreateCompanion ? (
        <article className='w-full gap-4 flex flex-col'>
        <h1>Companion builder</h1>

        <CompanionForm/>
      </article>
      ):(<article className='companion-limit'>
          <Image src="/images/limit.svg" alt='limit' width={360} height={230}/>
          <div className='cta-badge'>
            Upgrade your plan
          </div>
          <h1>YOU HAVE REACHED YOUR LIMIT</h1>
          <p>You have reached your compnion limit ,Upgrade for more features and companions</p>
          <Link href="/subscription" className='bt-primary w-full justify-center'>
          Upgrade My Plan</Link>
      </article>)}
    </main>
  )
}

export default NewCompanion