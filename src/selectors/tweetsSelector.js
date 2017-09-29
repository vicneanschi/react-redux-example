import {createSelector} from 'reselect';

const getTweets = (state, props) => {
    // console.log('state.get(tweets) returned', state.get(`tweets`))
    // console.log('props.q=', typeof props.q)
    const tweets = state.get('tweetsByQuery').get(props.q.toString());
    console.log('getTweets returned', tweets);
    return tweets;
};
export const makeTweetsSelector = () => createSelector(
    [getTweets],
    (tweets) => tweets
);