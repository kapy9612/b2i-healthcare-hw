import React from 'react';

import Image from 'next/image';

import useQuickSearch from '@hooks/useQuickSearch.tsx';

import searchIcon from '@public/search.svg';

const QuickSearch = () => {
  const [searchString, setSearchString] = React.useState('');
  const [limit, setLimit] = React.useState(10);
  const searchInput = React.useRef<HTMLInputElement>(null);
  const { data } = useQuickSearch(searchString, limit);

  return (
    <div className={'flex gap-2'}>
      <div className={'flex flex-col max-w-lg w-full'}>
        <div className={'flex w-full'}>
          <input
            ref={searchInput}
            type={'search'}
            placeholder={'Search'}
            onKeyDown={e => {
              if (e.key === 'Enter' && searchInput.current) {
                setSearchString(searchInput.current.value);
              }
            }}
            className={
              'w-full rounded-l-lg p-2 border border-gray-700 box-border outline-none hover:border-blue-400 hover:z-10'
            }
          />
          <button
            className={
              'w-10 text-center ml-[-1px] rounded-r-lg p-2 border border-gray-700 box-border bg-blue-500 hover:bg-blue-400 transition-background duration-300 active:bg-blue-200 z-1'
            }
            onClick={() => {
              if (searchInput.current) setSearchString(searchInput.current.value);
            }}
          >
            <Image src={searchIcon.src} alt={'search-icon'} width={20} height={20} />
          </button>
        </div>
        <ul className={'w-96'}>
          {data &&
            data.map(item => (
              <li key={item.pt.id} className={'line-clamp-1 p-1'}>
                {item.pt.term}
              </li>
            ))}
        </ul>
      </div>
      <input
        value={limit}
        onChange={e => setLimit(Number(e.target.value))}
        type={'number'}
        placeholder={'N'}
        className={'w-16 rounded-lg p-2 focus:outline-none border border-gray-700 h-fit'}
      />
    </div>
  );
};

export default QuickSearch;
