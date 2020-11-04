const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const config = require('./config/config');

const post = require('./components/post/network.post');
const errors = require('./network/error.network');

// Middlewares
app.use(bodyParser.json());

// Routes
app.use('/api/post', post);

app.use(errors);

// Starting Server
app.listen(config.api.port, () => {
    console.log("Api work! on port ", config.api.port);
});
