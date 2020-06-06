import { MainState } from '@/store/main/state';
import { getters } from '@/store/main/getters';

const defaultState: MainState = {
  navOpen: false,
};

export const mainModule = {
  state: defaultState,
  getters,
};
