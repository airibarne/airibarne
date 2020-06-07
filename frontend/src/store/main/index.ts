import { MainState } from '@/store/main/state';
import { mutations } from '@/store/main/mutations';
import { getters } from '@/store/main/getters';

const defaultState: MainState = {
  navOpen: false,
};

export const mainModule = {
  state: defaultState,
  mutations,
  getters,
};
