# Redux Twitter
## How to start
`npm install`
`npm start`

Open http://localhost:9000/

## Hot it works
Express/Socket.io on the server. React/Redux + reselect on the client.

Server is subscribed to Twitter events API.

Websocket server is streaming all the events from Twitter to the client.

Client is subscribed to Websocket events and calls dispatch action on new message.