const express = require('express');
const validateZip = require('./middleware/validateZip');
const getZoos = require('./utils/getZoos');

const app = express();

app.get('/check/:zip', validateZip, (req, res) => {
    try {    
        const zip = req.params.zip;
        const zoos = getZoos(zip);

        if (zoos !== undefined) {
            if (zoos.length > 0) {
            res.send(`${zip} exists in our records.`);
            } else {
            res.send(`${zip} does not exist in our records.`);
            }
        } else {
            res.send(`${zip} does not exist in our records.`);
        }
    } catch(error) {
        next(error);
    }
});

app.get('/zoos/:zip', validateZip, (req,res) => {
    try {
        const zip = req.params.zip;
        const zoos = getZoos(zip);


            if (zoos.length > 0) {
                res.json(zoos);
            } else {
                res.send(`${zip} has no zoos.`)
            }
    } catch {

    }
    });

app.get('/zoos/all', (req, res) => {
    try {
        const { admin } = req.query;

        if (admin === 'true') {
            const allZoos = getZoos();
            const allZoosList = Object.values(allZoos).flat().join('; ');
            res.send(`All zoos: ${allZoosList}`);
        } else {
            res.send('You do not have access to that route.')
        }
    } catch {
        
    }
});

// Error handler middleware
app.use((req, res, next) => {
    res.status(404).send('That route could not be found!'); //punctuation check
});

// Not Found error handler middleware
app.use((err, req, res, next) => {
    res.status(500).send('There was an internal server error.');
});

module.exports = app;