const express = require('express');
const validateZip = require('./middleware/validateZip');
const getZoos = require('./utils/getZoos');

const app = express();



// Error handler middleware

// Not Found error handler middleware

module.exports = app;