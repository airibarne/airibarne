import { MainState } from '@/store/main/state';
import { getStoreAccessors } from 'typesafe-vuex';
import { State } from '@/store/state';

export const getters = {
    navOpen: (state: MainState) => state.navOpen,
};

const {read} = getStoreAccessors<MainState, State>('');
export const readNavOpen = read(getters.navOpen);
