import React from 'react'
import { TweetsListItem } from './TweetsListItem'

export const TweetsList = ({ tweets, q }) => (
    <div>
        <div>
            <h3>Tweets {q}</h3>
        </div>

        {tweets.map(tweet => (
            <TweetsListItem key={tweet.get('id_str')}
                tweet={tweet.toJS()}
            />
        ))}

    </div>
);