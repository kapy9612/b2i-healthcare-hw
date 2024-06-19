'use client';

import Image from 'next/image';

import SectionLayout from '@components/SectionLayout/SectionLayout.tsx';

import searchIcon from '@public/search.svg';

export default function Page() {
  return (
    <SectionLayout>
      <div>
        <h1 className={'text-2xl font-semibold text-gray-800'}>B2i Healthcare Homework</h1>
        <h2 className={'text-sm text-gray-800'}>SNOMED CT Quick Search Component</h2>
      </div>
      <div className={'flex gap-2'}>
        <div className={'flex'}>
          <input
            type={'search'}
            placeholder={'Search'}
            className={'max-w-64 w-full rounded-l-lg p-2 border-b border-t border-l box-border focus:outline-none'}
          />
          <button
            className={
              'text-center rounded-r-lg p-2 border-b border-t border-r box-border bg-blue-500 hover:bg-blue-400 transition-background duration-300'
            }
          >
            <Image src={searchIcon.src} alt={'search-icon'} width={20} height={20} />
          </button>
        </div>
        <input
          defaultValue={10}
          type={'number'}
          placeholder={'N'}
          className={'w-16 rounded-lg p-2 focus:outline-none'}
        />
      </div>
    </SectionLayout>
  );
}
