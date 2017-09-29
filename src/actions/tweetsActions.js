import { makeActionCreator } from './../utility';

export const RECEIVE_TWEET = `RECEIVE_TWEET`;
export const SWITCH_VIEW = 'SWITCH_VIEW';

export const newTweet = makeActionCreator(RECEIVE_TWEET, `tweet`);
export const switchView = makeActionCreator(SWITCH_VIEW);