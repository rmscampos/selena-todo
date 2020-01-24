const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');
const todosRouter = require('./routes/api/todos');


require('dotenv').config();
require('./config/database');


const app = express();

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// api routes must be before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/todos', todosRouter);

app.use(require('./config/auth'));


// "catch all" route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});