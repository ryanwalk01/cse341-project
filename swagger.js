const router = require('express').Router();
const swaggerAutogen = require('swagger-autogen')();

const host = process.env.HOST || 'localhost:8080';

const doc = {
    info: {
        title: 'TOTK API',
        description: 'API to manage a database of "The Legend of Zelda: Tears of the Kingdom" Shrines and Skyview Towers'
    },
    host: host,
    schemes: ['http'],
    basePath: '/'
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);

