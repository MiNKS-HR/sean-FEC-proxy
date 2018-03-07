//proxy server

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;

const simpleProxy = require('./proxy-router.js');
const proxyRedirects = require('./proxy-redirects.js');

app.use(morgan('dev'));


app.use(bodyParser.json());//urlencoded({ extended: true }));

const sendIndex = (req, res) => (res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html')));

app.get('/', sendIndex);
app.get('/:id', sendIndex);

app.use(simpleProxy.Router(proxyRedirects));


app.listen(port, () => {
  console.log(`proxy server running at: http://localhost:${port}`)
});