const Discord = require('discord.js');
const config = require('../../configs/config.json');
module.exports = {
    config: {
        name: 'Hello',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        message.channel.send("Hello <3");

    }
}