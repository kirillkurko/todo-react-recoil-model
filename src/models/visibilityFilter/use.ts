import { useRecoilState, useRecoilValue } from 'recoil';
import { visibilityFilterState } from '@models/visibilityFilter/state';
import { VisibilityFilter } from './types';

export function useSetVisibilityFilter() {
  const [, setVisibilityFilterState] = useRecoilState(visibilityFilterState);

  return (filter: VisibilityFilter) => {
    setVisibilityFilterState(filter);
  };
}

export function useVisibilityFilter() {
  return useRecoilValue(visibilityFilterState);
}
