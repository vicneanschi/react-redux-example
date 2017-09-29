import { createReducer } from './../utility';
import { SWITCH_VIEW } from './../actions/'

export const view = createReducer(null, {
    [SWITCH_VIEW](state, action) {
        return state === 1 ? 2 : 1;
    }
});