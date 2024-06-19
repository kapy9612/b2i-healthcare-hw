'use client';

import QuickSearch from '@components/QuickSearch/QuickSearch.tsx';
import SectionLayout from '@components/SectionLayout/SectionLayout.tsx';

export default function Page() {
  return (
    <SectionLayout>
      <div>
        <h1 className={'text-2xl font-semibold text-gray-800'}>B2i Healthcare Homework</h1>
        <h2 className={'text-sm text-gray-800'}>SNOMED CT Quick Search Component</h2>
      </div>
      <QuickSearch />
    </SectionLayout>
  );
}
