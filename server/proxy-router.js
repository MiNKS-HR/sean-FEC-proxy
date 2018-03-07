const express = require('express');
const router = require('express-router'); 
const axios = require('axios');
const _ = require('lodash');


const proxyRedirect = (ip, url, port, secure) => {

  return (req, res) => {
    let axiosRequest;

    //console.log('req.type', req.method);

    if (req.method === 'GET') {
      axiosRequest = axios.get;
    } else if (req.method === 'POST') {
      axiosRequest = axios.post;
    } else {
      console.log('simple proxy can only hanle get and post requests');
      return
    }

    console.log('routing', req.method, 'request to ', ip + ':' + port + req.url);
    //console.log('req.params', req.body);

    let http = secure ? 'https://' : 'http://';
    axiosRequest(http + ip + ':' + port + req.url, req.body)
    .then((response) => {
      console.log(response);
      res.end(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(501);
      res.end('proxy redirect Error');
    });
  }

}


const proxyRouter = (redirects) => {
  let router = express.Router();

  for (var key in redirects) {
    router.get(redirects[key].url, proxyRedirect(redirects[key].redirectIP, redirects[key].url, redirects[key].redirectPort));
    router.post(redirects[key].url, proxyRedirect(redirects[key].redirectIP, redirects[key].url, redirects[key].redirectPort));
  }

  return router;
}

module.exports.Redirect = proxyRedirect;
module.exports.Router = proxyRouter;