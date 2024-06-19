import React, { useEffect, useRef } from 'react';

import Image from 'next/image';

import classNames from 'classnames';

import { useSearchContext } from '@providers/SearchContext/SearchContext.tsx';

import useQuickSearch from '@hooks/useQuickSearch.tsx';

import highlightText from '@utils/highlightText.ts';

import loadingIcon from '@public/loading.svg';
import searchIcon from '@public/search.svg';

const QuickSearch = () => {
  const [open, setOpen] = React.useState(false);
  const [searchString, setSearchString] = React.useState('');
  const [limit, setLimit] = React.useState(10);
  const searchInput = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, isError } = useQuickSearch(searchString, limit);
  const { setSelectedItem } = useSearchContext();

  useEffect(() => {
    if (searchString === '') {
      setOpen(false);
    }
  }, [searchString]);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className={'flex gap-2 items-start'}>
      <div className={'flex flex-col relative'} ref={dropdownRef}>
        <div className={'flex w-full sm:w-96'}>
          <input
            ref={searchInput}
            type={'search'}
            placeholder={'Search'}
            onKeyDown={e => {
              if (e.key === 'Enter' && searchInput.current) {
                setSearchString(searchInput.current.value);
                setOpen(true);
              }
            }}
            onClick={() => searchString && setOpen(true)}
            className={classNames(
              'min-w-40 h-10 w-full rounded-l-lg p-2 border border-gray-700 box-border outline-none hover:border-blue-400 hover:z-10',
              { '!rounded-b-none': open }
            )}
          />
          <button
            className={classNames(
              'w-10 h-10 text-center ml-[-1px] rounded-r-lg p-2 border border-gray-700 box-border bg-blue-500 hover:bg-blue-400 transition-background duration-300 active:bg-blue-200 z-1',
              { '!rounded-b-none': open }
            )}
            onClick={() => {
              if (searchInput.current) setSearchString(searchInput.current.value);
              setOpen(true);
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <Image src={loadingIcon.src} alt={'loading-icon'} width={20} height={20} className={'animate-spin'} />
            ) : (
              <Image src={searchIcon.src} alt={'search-icon'} width={20} height={20} />
            )}
          </button>
        </div>
        <ul
          className={classNames(
            'h-0 absolute top-10 w-full sm:w-96 bg-white border border-gray-700 box-border rounded-b-lg overflow-y-auto scrollbar-thin',
            { '!h-48': open }
          )}
        >
          {data?.length === 0 && <p className={'text-center mt-20'}>No data.</p>}
          {data &&
            !isLoading &&
            !isError &&
            data.map(item => (
              <li
                key={item.pt.id}
                className={'truncate p-[2px] leading-normal hover:bg-blue-200 cursor-pointer'}
                onClick={() => setSelectedItem(item.pt)}
              >
                <span dangerouslySetInnerHTML={{ __html: highlightText(item.pt.term, searchString) }} />
              </li>
            ))}
        </ul>
        {isError && <p className={'text-red-600'}>An error occurred.</p>}
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
