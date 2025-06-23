import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

interface CompaionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({id,name,topic,subject,duration,color}:CompaionCardProps) => {
  return (
    <article className='companion-card' style={{backgroundColor: color}}> 
      <div className='flex justify-between items-center'>
        <div className='subject-badge'>{subject}</div>
        <button className='companion-bookmark'>
          <Image alt='bookmark' src='/icons/bookmark.svg' width={12.5} height={15} />
        </button>
      </div>
      <h2 className='text-2xl font-bold'>{name}</h2>
      <p className='text-sm'>{topic}</p>
      <div className='flex items-center gap-2'>
        <Image alt='clock' src='/icons/clock.svg' width={13} height={13} />
        <p className='text-sm'>{duration} mins duration</p>
      </div>
        <Link href={`/companions/${id}`} className='w-full'>
          <button className='btn-primary justify-center w-full'>Launch</button>
        </Link>
        
    </article>
  )
}

export default CompanionCard