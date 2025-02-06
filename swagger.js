const router = require('express').Router();
const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'TOTK API',
        description: 'API to manage a database of "The Legend of Zelda: Tears of the Kingdom" Shrines and Skyview Towers'
    },
    host: 'cse341-ryan.onrender.com',
    schemes: ['https'],
    basePath: '/'
};

const outputFile = './swagger.json';
const routes = ['./routes/shrines.js', './routes/towers.js'];

swaggerAutogen(outputFile, routes, doc);

