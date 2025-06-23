
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companion</h1>
      <section className='home-section'>
        <CompanionCard
          id= "123"
          name="Neura the brainy explorere"
          topic="nEURAL NETWORK OF THE BRAIN"
          subject="science"
          duration={49}
          color="#FF5733"
        />
        <CompanionCard
          id= "456"
          name="Courtsy the number wizard"
          topic="Derivatoves and Integrals"
          subject="math"
          duration={102}
          color="#33FF57"
        />
        <CompanionCard
          id= "789"
          name="vERBA THE vocabulary builder"
          topic="eNGLIDH LANGUAGE"
          subject="english"
          duration={90}
          color="#3357FF"
        />
        
      </section>
      <section className='home-section'>
        <CompanionsList
          title="Recent Companions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page