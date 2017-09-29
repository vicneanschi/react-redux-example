import http from 'http';
import express from 'express';
import cors from 'cors';
import webpack from 'webpack';
import webpackConfig from './../webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware';
import socketIO from 'socket.io'

const compiler = webpack(webpackConfig);
import webpackHotMiddleware from "webpack-hot-middleware";
import {handleRender} from './serverRenderMiddleware'

let app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors());
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler, {
    'log': false,
    'path': '/__webpack_hmr',
    'heartbeat': 10 * 1000
}));

import {subscribeToTweets} from './twitterAPI';


app.use((req, res, next) => {
    const delay = 297;
    setTimeout(next, delay);
});

export const createTweet = (tweet) => {
    io.emit("NEW_TWEET", tweet);
};

app.use(express.static('public/css'));

import {
    getDefaultState
} from './getDefaultState'

app.use('/', handleRender(() => getDefaultState()));

const port = 9000;
server.listen(port, () => {
    console.info(`Redux Twitter is listening on port ${port}.`);
});

subscribeToTweets('Donald Trump', 1);
subscribeToTweets('Hillary Clinton', 2);