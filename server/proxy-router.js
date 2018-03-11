const express = require('express');
const router = require('express-router'); 
const axios = require('axios');
const request = require('request');
const _ = require('lodash');


const proxyAxiosReroute = (ip, url, port, secure) => {

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

    //console.log('routing', req.method, 'request to ', ip + ':' + port + req.url);
    //console.log('req.params', req.body);

    let http = secure ? 'https://' : 'http://';
    let portURL = port !== null ? ':' + port : '';
    console.log('routing', req.method, 'request to ', ip + portURL + req.url);
    //console.log('req.params', req.body);
    console.log('portURL', portURL);
    axiosRequest(http + ip + portURL + req.url, req.body)
    .then((response) => {
      //console.log(response.data);
      if (typeof response.data === 'object') {
        console.log('relaying data as json');
        res.json(response.data);
      } else {
        console.log('relaying data');
        res.end(response.data);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(501);
      res.end('proxy redirect Error');
    });
  }

}

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

   

    let http = secure ? 'https://' : 'http://';
    let portURL = port !== null ? ':' + port : '';

     console.log('pipe routing', req.method, 'request to '+ portURL + req.url);

    req.pipe(request(http + ip + portURL + req.url, req.body))
    .on('error', (err) => {
      console.log(err);
      res.status(501);
      res.end('proxy redirect Error');
    }).pipe(res)
    .on('error', (err) => {
      console.log(err);
      res.status(501);
      res.end('proxy redirect Error');
    });
  }

}


const proxyRouter = (redirects, redirectsMethod) => {
  let router = express.Router();

  let proxyHandler = proxyReroute;

  if(redirectsMethod === 'axios') {
    proxyHandler = proxyAxiosReroute;
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