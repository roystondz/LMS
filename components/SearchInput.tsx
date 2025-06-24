'use client'

import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input';
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';

const SearchInput = () => {
  
  const pathName = usePathname();

  const router = useRouter();

  const searchParams = useSearchParams();

  const query = searchParams.get('topic') || ''

  const [searchQuery,setSearchQuery] = useState('');

  useEffect(()=>{
    const delay = setTimeout(
        ()=>{
            if(searchQuery){
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "topic",
                    value: searchQuery,
                  });
                  
                  router.push(newUrl,{scroll:false});
            }else{
                if(pathName === '/companions'){
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ['topic'],
                      });
                      
                      router.push(newUrl, { scroll: false });
                }
            }
        }
        ,500);


  },[searchQuery,router,searchParams,pathName]);



    return (
    <div className='relative border rounded-lg border-black items-center flex gap-2 px-2 py-1'>
        <Image src="/icons/search.svg" alt="search" width={15} height={15}/>
        <Input className='outline-none border-none' value={searchQuery} placeholder='Search for companions' onChange={(e)=>setSearchQuery(e.target.value)}/>
    </div>
  )
}

export default SearchInput