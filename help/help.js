const config = new require('../../config.json');
const { MessageEmbed } = require('discord.js');


module.exports.run = async (bot, msg, args) => {
    const embed = new MessageEmbed()
    .setTitle('Help')
    .setColor('#54a2ab')
    .addField("?s", "This is just the prefix used for Shinigami's commands." )
    .addField("?s help ", "Sends this list of commands.")
    .addField("?s yeetus", "Summons the bot, doesn't really do anything special.")
    .addField("?s why", "Sends a meme just for fun.")
    .addField("?s whatmeme", "Tells you what meme you are.")

    return msg.channel.send(embed);
};

module.exports.help = {
    name: "help",
    description: "self explanatory.",
    usage: "help",
    category: "help",
};