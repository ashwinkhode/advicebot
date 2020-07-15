console.log('Starting bot');

const fetch = require('node-fetch');
const Twit = require('twit');
const config = require('./config');

var T = new Twit(config);
const timeout = Math.floor((Math.random())*50000000)

function getAdvice() {
    const url = 'https://api.adviceslip.com/advice';
    fetch(url)
    .then((response) => response.json()
    .catch((err) => console.log(err)))
    .then(function(response) {
        T.post('statuses/update', { status: `Free Advice : ${response.slip.advice} #free #advice` }, function(err, data, res) {
        console.log(err);
})})
}

setInterval(getAdvice, timeout)