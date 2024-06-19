import React from 'react';

import Image from 'next/image';

import searchIcon from '@public/search.svg';

const QuickSearch = () => {
  return (
    <div className={'flex gap-2'}>
      <div className={'flex'}>
        <input
          type={'search'}
          placeholder={'Search'}
          className={'w-72 rounded-l-lg p-2 border-b border-t border-l border-gray-700 box-border focus:outline-none'}
        />
        <button
          className={
            'text-center rounded-r-lg p-2 border border-gray-700 box-border bg-blue-500 hover:bg-blue-400 transition-background duration-300'
          }
        >
          <Image src={searchIcon.src} alt={'search-icon'} width={20} height={20} />
        </button>
      </div>
      <input
        defaultValue={10}
        type={'number'}
        placeholder={'N'}
        className={'w-16 rounded-lg p-2 focus:outline-none border border-gray-700'}
      />
    </div>
  );
};

export default QuickSearch;
