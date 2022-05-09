const Discord = require('discord.js');
const config = require('./src/config.json');
const fs = require('fs');
const db = require('quick.db');
const path = require('path');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const { Player } = require('discord-player');
const player = new Player(client);
client.player = player;
client.emotes = require('./configs/emotes.json')
client.filters = require('./configs/filters.json');
["aliases", "commands"].forEach(cmd => client[cmd] = new Discord.Collection());
["console", "command", "event"].forEach(events => require(`./handlers/${events}`)(client));
client.categories = fs.readdirSync('./commands');
// EVENTS
client.on('ready', async() => {
    console.log('UnknownAI Started!');
});
client.login(config.token)