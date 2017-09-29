import { tweetsByQuery } from './tweetsByQuery';
import { view } from './view';

import { combineReducers } from './../combineReducers';

export const reducer = combineReducers({
    tweetsByQuery,
    view
});