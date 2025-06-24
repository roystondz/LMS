'use client'

import React, { useEffect, useState } from 'react'
import { subjects } from '@/constants'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useRouter, useSearchParams } from 'next/navigation'
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils'


const SubjectFilter = () => {
  
    const searchParams = useSearchParams();
    const query = searchParams.get('subject') || "";
    const router = useRouter()

    const [selectedSubject ,setSelectedSubject] = useState(query);

    useEffect(()=>{
        let newUrl = "";
        if(selectedSubject === "all"){
            newUrl=removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["subject"],
              });
              
              
        }else{
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "subject",
                value: selectedSubject,
              });
              
        }
        router.push(newUrl,{scroll:false});
    },[selectedSubject])
    return (
    <div >
    <Select onValueChange={setSelectedSubject} value={selectedSubject} defaultValue={selectedSubject}>
        <SelectTrigger className="input capitalize">
                        <SelectValue placeholder="Select the subject" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="all">
        All Subjects
    </SelectItem>
    {subjects.map((subject) => (
        <SelectItem key={subject} value={subject} className="capitalize">
            {subject}
        </SelectItem>
    ))}

  </SelectContent>
</Select>
</div>
          )
        }
        
  

export default SubjectFilter