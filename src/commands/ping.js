const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "A command that gives info about the bot",
    usage: ">ping [Gets Latency]",
    execute: async function (client, message, args) {
        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓 Pong! Latency is about \`${client.ws.ping}\` ms`)
        .setTimestamp(Date.now())
        .setColor(3066993);
        message.channel.send(ping);
    }
}