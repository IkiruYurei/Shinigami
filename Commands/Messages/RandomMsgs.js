
client.on('message', msg => {
    if (msg.author.id === client.user.id)
        return;

    if (msg.content === '?s yeetus') {
        msg.reply('I have been summoned.');
    }

    if (msg.content === 'im in the ghetto') {
        msg.channel.send('ratatata');
    }
});

module.exports.help = {
    name: "RandomMsgs",
    description: "Random responses to set trigger words.",
    usage: "None.",
    category: "Messages",
};