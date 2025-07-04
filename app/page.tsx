import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import React from 'react';

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSession = await getRecentSessions({ limit: 10 });

  return (
    <main>
      <h1 className="text-4xl font-extrabold tracking-tight text-primary max-sm:text-2xl mb-8">
        🌟 Popular Learning Companions
      </h1>

      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <h2 className="text-3xl font-semibold mt-16 mb-6 max-sm:text-xl">
        🕓 Recently Active Sessions
      </h2>

      <section className="home-section">
        <CompanionsList
          title="Recently Interacted Companions"
          companions={recentSession}
          classNames="w-2/3 max-lg:w-full"
        />

        <CTA className="shadow-xl rounded-3xl bg-gradient-to-r from-primary to-cta text-white transition-all duration-300 hover:scale-[1.02]" />
      </section>
    </main>
  );
};

export default Page;