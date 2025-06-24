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
  const query = searchParams.get('subject') || "all";
  const router = useRouter()

  const [selectedSubject, setSelectedSubject] = useState(query);

  useEffect(() => {
    if (selectedSubject === query) return; // ✅ prevent unnecessary push

    let newUrl = "";
    if (selectedSubject === "all") {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: selectedSubject,
      });
    }
    router.push(newUrl, { scroll: false });
  }, [selectedSubject, query, router, searchParams]);

  return (
    <div className='px-2 py-1'>
      <Select
        onValueChange={setSelectedSubject}
        value={selectedSubject}
      >
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
