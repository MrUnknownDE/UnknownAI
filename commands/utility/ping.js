const Discord = require('discord.js');
const config = require('../../configs/config.json');
module.exports = {
    config: {
        name: 'Ping',
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        const latency = `\`\`\`ini\n[ ${bot.ws.ping}ms ]\`\`\``;
        embed.setTitle(`Pong!`)
          .setColor(embedcolor)
          .addField('Latency', latency, true)
          .setTimestamp();
        message.channel.send(embed);

    }
}