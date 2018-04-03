const server = require('../dev.js');
const jsonServer = require('json-server');

server.use('/json',jsonServer.router('db/db.json'));