import { fromJS } from 'immutable'

export const getDefaultState = ()=>{

    const defaultState = {
        view: 1,
        tweetsByQuery: {
            "1": [],
            "2": []
        }
    };

    return fromJS(defaultState);
};