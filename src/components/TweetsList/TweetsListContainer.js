import React from 'react'

import {connect} from 'react-redux'

import {TweetsList} from './TweetsList';

import {makeTweetsSelector} from "../../selectors/tweetsSelector";

const makeMapStateToProps = () => {
    const tweetsSelector = makeTweetsSelector();
    const mapStateToProps = (state, ownProps) => {
        return {
            tweets: tweetsSelector(state, ownProps), // state.get(`tweets`),
            q: ownProps.q
        }
    };
    return mapStateToProps;
};

export const TweetsListContainer = connect(
    makeMapStateToProps
)(TweetsList);