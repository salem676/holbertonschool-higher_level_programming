#!/usr/bin/node

const request = require('request');
const let url = 'http://swapi.co/api/films/';
const let episode = process.argv[2];

request(url + episode, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    let jsonobj = JSON.parse(body);
    console.log(jsonobj.title);
  } else {
    console.log('An error occured. Status code: ' + response.statusCode);
  }
});
