'use client';

import Image from 'next/image';

import { useSearchContext } from '@providers/SearchContext/SearchContext.tsx';

import QuickSearch from '@components/QuickSearch/QuickSearch.tsx';
import SectionLayout from '@components/SectionLayout/SectionLayout.tsx';

import logo from '@public/logo-white.svg';

export default function Page() {
  const { selectedItem } = useSearchContext();

  return (
    <SectionLayout>
      <div className={'flex gap-4'}>
        <Image src={logo.src} alt={'b2i-logo'} width={128} height={100} />
        <div className={'items-center'}>
          <h1 className={'text-2xl font-semibold text-gray-800'}>Homework</h1>
          <h2 className={'text-sm text-gray-800'}>SNOMED CT Quick Search Component</h2>
        </div>
      </div>
      <QuickSearch />
      <div>
        <h3 className={'text-lg font-semibold text-gray-800'}>Globally stored item:</h3>
        {selectedItem ? (
          <span className={'text-gray-800'}>
            {selectedItem?.id} |{selectedItem?.term}|
          </span>
        ) : (
          <>-</>
        )}
      </div>
    </SectionLayout>
  );
}
