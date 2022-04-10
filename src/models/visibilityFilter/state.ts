import { atom } from 'recoil';
import { VisibilityFilter } from './types';

export const visibilityFilterState = atom({
  key: 'visibilityFilter',
  default: VisibilityFilter.All,
});
