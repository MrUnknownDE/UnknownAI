const Discord = require('discord.js');
const config = require('../../configs/config.json');
const { embedcolor } = require('../../configs/config.json')


module.exports = {
    config: {
        name: 'eval',
        description: 'Eval',
        aliases: [""],
        usage: '<user>',
        accessableby: "not you",
    },
    run: async (client, message, args) => {
     
       let array = config.dev
  
  if(!array.includes(message.author.id.toString())) {
    return message.channel.send("Only Developers can execute this command")
  }
  
        const content = message.content.split(" ").slice(1).join(" ");
        const result = new Promise((resolve, reject) => resolve(eval(content)));
        
        return result.then((output) => {
            if(typeof output !== "string"){
                output = require("util").inspect(output, { depth: 0 });
            }
            if(output.includes(client.token)){
                output = output.replace(message.client.token, "T0K3N");
            }
            message.channel.send({embed:{
              title: "EVAL",
              description: `\`\`\`js\n${output}\`\`\``,
              color: embedcolor
            }});  
        }).catch((err) => {
            err = err.toString();
            if(err.includes(message.client.token)){
                err = err.replace(message.client.token, "T0K3N");
            }
            message.channel.send(err, {
                code: "js"
            });
        });
      
    }