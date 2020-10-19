const request = require('superagent');
const Discord = require('discord.js')

module.exports = {
    name: "advice",
    description: "Gets much needed life advice",
    execute: async function(client, message, args) {
        request
        .get('http://api.adviceslip.com/advice')
        .end((err, res) => {
            if (!err && res.status === 200) {
                try {
                    JSON.parse(res.text)
                } catch (e) {
                    return message.reply(', an api error occurred.');
                }
                const advice = JSON.parse(res.text)
                return message.channel.send(advice.slip.advice)
            } else {
            console.error(`REST call failed: ${err}, status code: ${res.status}`)
            }
        });
    }
}