const config = new require('../../config.json');
const { MessageAttachment } = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    const attachment = new MessageAttachment('./ETC/why-r-u-gae.mp4');
    msg.channel.send(attachment);
};


module.exports.help = {
    name: "why",
    description: "sends mp4 file of why r u gae meme",
    usage: "memes",
    category: "cursed",
};