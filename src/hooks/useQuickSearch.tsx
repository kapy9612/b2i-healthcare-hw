import { useQuery } from '@tanstack/react-query';

import { getRequest } from '@utils/requests.ts';

type Element = {
  id: string;
};

type Acceptability = {
  [key: string]: string;
};

export type PtItem = {
  id: string;
  term: string;
  concept: Element;
  type: Element;
  typeId: string;
  conceptId: string;
  acceptability: Acceptability;
};

type QuickSearchItem = {
  id: string;
  released: boolean;
  active: boolean;
  effectiveTime: string;
  moduleId: string;
  iconId: string;
  score: number;
  memberOf: string[];
  activeMemberOf: string[];
  definitionStatus: Element;
  subclassDefinitionStatus: string;
  pt: PtItem;
  ancestorIds: string[];
  parentIds: string[];
  statedAncestorIds: string[];
  statedParentIds: string[];
  definitionStatusId: string;
};

const useQuickSearch = (searchString: string, limit: number = 10) => {
  return useQuery({
    queryKey: ['quickSearch', searchString, limit],
    queryFn: () =>
      getRequest<QuickSearchItem[]>({
        url: '/snomedct/SNOMEDCT/concepts',
        config: {
          params: {
            term: searchString,
            limit: limit,
            expand: 'pt()',
          },
        },
      }),
    select: res => res?.data.items,
    enabled: searchString !== '' && searchString.length > 1,
  });
};

export default useQuickSearch;
