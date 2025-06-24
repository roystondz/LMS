import { getCompanion } from '@/lib/actions/companion.actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

interface CompanionSessionPageProps{
  params:{id:string}
}
const CompanionSession = async ({params}:CompanionSessionPageProps) => {
  
  const {id} =  await params;
  
  const companion = await getCompanion(id);

  const user = await currentUser();

  if(!user){
    redirect('/sign-in');
  }

  if(!companion){
    redirect('/companions');
  }



  return (
    <main>
      
    </main>
  )
}

export default CompanionSession