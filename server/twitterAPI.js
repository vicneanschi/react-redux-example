import {
    createTweet
} from './server'

const Twit = require('twit');

const T = new Twit({
    consumer_key:         'd8G1BfInUa3yb5Kfh0gyn87SO',
    consumer_secret:      'k3v2M9N0QCEHTcArrj2uYrqc8fWOdZmJnRhDAZvdUIboBTpVlJ',
    access_token:         '15662328-bP6IJxaWBYW1Itr4qimHWe3CllrwM3JP94RazMDdr',
    access_token_secret:  'YFn9kOHiwc16dGRIgJlE2OUmTKuLSjz2KjWqbgN0sLajG',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

export function subscribeToTweets(keyword, keywordId) {
    const stream = T.stream('statuses/filter', { track: keyword });

    stream.on('tweet', function (tweet) {
        tweet['q'] = keywordId; 
        console.log('stream: ',tweet);
        createTweet(tweet);
    });

}