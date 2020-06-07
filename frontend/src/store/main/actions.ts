import { getStoreAccessors } from 'typesafe-vuex';
import { ActionContext } from 'vuex';
import { State } from "@/store/state";
import { MainState } from '@/store/main/state';

type MainContext = ActionContext<MainState, State>;

export const actions = {

};

const { dispatch } = getStoreAccessors<MainState | any, State>('');
