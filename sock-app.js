const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const customRouter = function (req) {
  return 'http://192.168.23.8:8000'; // protocol + host
};

const options = {
  target: 'http://localhost:80',
  router: customRouter,
};

const myProxy = createProxyMiddleware(options);

const app = express();
app.use(myProxy); // add the proxy to express

app.listen(80);