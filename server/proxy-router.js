const express = require('express');
const router = require('express-router'); 
const axios = require('axios');
const _ = require('lodash');


const proxyReroute = (ip, url, port, secure) => {

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
    let portURL = port !== null ? ':' + port : '';
    console.log('routing', req.method, 'request to ', ip + portURL + req.url);
    //console.log('req.params', req.body);
    console.log('portURL', portURL);
    axiosRequest(http + ip + portURL + req.url, req.body)
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

const proxyPipeReroute = (ip, url, port, secure) => {

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

    req.pipe(axiosRequest(http + ip + ':' + port + req.url, req.body).pipe(res))
    .catch((err) => {
      console.log(err);
      res.status(501);
      res.end('proxy redirect Error');
    });
  }

}


const proxyRouter = (redirects, redirectsMethod) => {
  let router = express.Router();

  let proxyHandler = proxyReroute;

  if(redirectsMethod === 'pipeRerout') {
    proxyHandler = proxyPipeReroute;
  }
  if(redirectsMethod === 'forward') {
    proxyHandler = proxyReroute; //TODO implement request forwarding method;
  }

  for (var key in redirects) {
    router.get(redirects[key].url, proxyHandler(redirects[key].redirectIP, redirects[key].url, redirects[key].redirectPort));
    router.post(redirects[key].url, proxyHandler(redirects[key].redirectIP, redirects[key].url, redirects[key].redirectPort));
  }

  return router;
}

module.exports.Reroute = proxyReroute;
module.exports.Router = proxyRouter;