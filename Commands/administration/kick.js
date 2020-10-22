const Discord = require("discord.js");
const config = new require('../../config.json');

module.exports.run = function (bot, msg, args) {
    if (!msg.guild) return;
    if (!msg.author.id == config.adminIDs) return;

    const user = msg.mentions.users.first();
    if (user) {
        const member = msg.guild.member(user);
        if (member) {

            member
            .kick()
            .then(() => {
                msg.channel.send("<@" + user.id + "> has been yeeted by " + "<@" + msg.author.id + ">, F.");
            })
            .catch(err => {
                msg.reply('nice try but no.');
                console.error(err);
            });
        } else {
            msg.reply("either that user was already yeeted, or you're bad at typing.");
        }
    } else {
        msg.channel.send("You have to mention a user first.");
    }
};

//msg.reply("either that user was already yeeted, or you're bad at typing."); doesn't work, but command is still functional,
//pls fix



module.exports.help = {
    name: "yeet",
    description: "Yeets (kicks) people.",
    usage: "yeet",
    category: "administration",
};