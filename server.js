const express = require('express');
const bodyParser = require('body-parser');
const models = require("./models");
const mustacheExpress = require('mustache-express');
const expressValidator = require('express-validator');
const session = require('express-session');
// const routes = require('./routes.js');
const sessionConfig = require('./sessionConfig');
const path = require("path")
// const utils = require('./utils.js')

const app = express();
const port = process.env.PORT || 8080;


//viewengine
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

//middleware
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
// app.use(routes);
app.use(session(sessionConfig));

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});