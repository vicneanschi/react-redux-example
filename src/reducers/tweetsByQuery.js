import {createReducer} from './../utility';
import {RECEIVE_TWEET} from './../actions/'

import {
    fromJS
} from 'immutable';

export const tweetsByQuery = createReducer(null, {
    [RECEIVE_TWEET](state, action) {
        const tweet = action.tweet;
        const tweets = state.get(tweet.q.toString());
        const newState = state.set(tweet.q.toString(), tweets.push(fromJS(tweet)).takeLast(15));
        return newState;
    }
});