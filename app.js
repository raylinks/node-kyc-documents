const express = require('express');
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { sequelize } = require('./models/index');
const config =require('./config/config');
const app = express();
const server = http.createServer(app);

sequelize.sync()
    .then(() => {
        server.listen(config.port)
        console.log(` Server started at ${config.port}`)
});
