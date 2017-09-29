import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import thunk from 'redux-thunk';

import {
    fromJS
} from 'immutable';


import {
    getDefaultState,
} from './../server/getDefaultState';


import {createSocketMiddleware} from './socketMiddleware';

import {
    RECEIVE_MESSAGE,
    newTweet
} from './actions'

const io = window.io;

const socketConfigOut = {
    UPDATE_STATUS: (data) => ({
        type: "UPDATE_USER_STATUS",
        status: data
    })
};

const socketConfigIn = {
    NEW_MESSAGE: (data) => ({
        type: RECEIVE_MESSAGE,
        message: data
    }),
    NEW_TWEET: (data) => (newTweet(data))
};

const socketMiddleware = createSocketMiddleware(io)(socketConfigOut);

import {createLogger} from 'redux-logger'


import {reducer} from './reducers';

const logger = createLogger({
    stateTransformer: state => state.toJS()
});

const enhancer = compose(
    applyMiddleware(
        thunk,
        socketMiddleware,
        logger
    )
);

const defaultState = fromJS(getDefaultState());
const store = createStore(reducer, defaultState, enhancer);

const socket = io();
for (const key in socketConfigIn) {
    socket.on(key, (data) => {
        store.dispatch(socketConfigIn[key](data));
    });
}

export const getStore = () => store;