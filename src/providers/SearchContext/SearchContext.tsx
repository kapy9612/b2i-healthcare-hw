import React, { Dispatch, PropsWithChildren, createContext, useContext, useState } from 'react';

import { PtItem } from '@hooks/useQuickSearch.tsx';

type SearchContextState = {
  selectedItem: PtItem | null;
  setSelectedItem: Dispatch<React.SetStateAction<PtItem | null>>;
};

const SearchContext = createContext<SearchContextState | undefined>(undefined);

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [selectedItem, setSelectedItem] = useState<PtItem | null>(null);

  return <SearchContext.Provider value={{ selectedItem, setSelectedItem }}>{children}</SearchContext.Provider>;
};

export const useSearchContext = (): SearchContextState => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};
