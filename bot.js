console.log('Starting bot');

const fetch = require('node-fetch');
const Twit = require('twit');
const config = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret
}

var T = new Twit(config);
//const timeout = Math.floor((Math.random())*50000000)
const timeout = 3000
console.log(timeout);
let counter = 1;

function getAdvice() {
    const url = 'https://api.adviceslip.com/advice';
    fetch(url)
        .then((response) => response.json()
            .catch((err) => console.log(err)))
        .then(function (response) {
            //T.post('statuses/update', { status: `Free Advice : ${response.slip.advice} #free #advice` }, function(err, data, res) {
            T.post('statuses/update', {status: `#100FREEiPhone12 ${counter + 1} Merry Christmas & happy new year #100FREEiPhone12 #unboxTherapy #christmas #free #apple #iphone12`}, function (err, data, res) {
                console.log(err);
            })
        })
}

setInterval(getAdvice, timeout)