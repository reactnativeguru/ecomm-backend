// create our graphql server
require('dotenv').config({path: 'variables.env'});
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// express to handle cookies JWT

//express to handle user auth

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    },
},
 details => {
        console.log(`Server running on port, 
        http://localhost:${details.port}`)
    }
    );