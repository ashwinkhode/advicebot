console.log('Starting bot');

const fetch = require('node-fetch');
const Twit = require('twit');
const discord = require('discord.js')
const client = new discord.Client()

const config = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret
}

const discordConfig = {
    id: process.env.did,
    clikey: process.env.clikey,
    key: process.env.key,
    token: process.env.token
}

var T = new Twit(config);

client.on('message', msg => {

    T.post('statuses/update', {status: msg.content}, function (err, data, res) {
        console.log(data)
    })

})

client.login(discordConfig.token)

function getAdvice() {
    console.log('running')
}
