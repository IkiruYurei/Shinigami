const Discord = require('discord.js')

const client = new Discord.Client({disableEveryone: true});

module.exports.run = async (client, msg, args) => {
    msg.reply('I have been summoned.');
};
  
  module.exports.config = {
    name: "yeetus",
    description: "Summon the bot.",
    usage: "yeetus",
    category: "messages",
};