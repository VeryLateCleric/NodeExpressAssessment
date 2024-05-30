const express = require('express');
const validateZip = require('./middleware/validateZip');
const getZoos = require('./utils/getZoos');

const app = express();

app.get('/check/:zip', validateZip, (req, res) => {
    // add if else for zoo exists
});

// Error handler middleware
app.use((req, res, next) => {
    res.status(404).send('That route could not be found');
});

// Not Found error handler middleware
app.use((err, req, res, next) => {
    res.status(500).send('There was an internal server error.');
});

module.exports = app;