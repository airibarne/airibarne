import { MainState } from '@/store/main/state';
import { State } from '@/store/state';

import { getStoreAccessors } from 'typesafe-vuex';

export const mutations = {
    setNavOpen(state: MainState, payload: boolean) {
        state.navOpen = payload;
    },
};

const {commit} = getStoreAccessors<MainState | any, State>('');

export const commitSetNavOpen = commit(mutations.setNavOpen);
