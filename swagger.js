const router = require('express').Router();
const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'TOTK API',
        description: 'API to manage a database of "The Legend of Zelda: Tears of the Kingdom" Shrines and Skyview Towers'
    },
    host: 'cse341-project-ryan.onrender.com',
    // host: 'localhost:8080',
    schemes: ['https'],
    basePath: '/'
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);

