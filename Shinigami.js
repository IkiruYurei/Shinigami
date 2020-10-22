console.log()

const Discord = require('discord.js');
global.bot = new Discord.Client({ disableMentions: 'everyone' });
const { prefix, token } = require('./Privateconfig.json');
const fs = require('fs');

bot.commands = new Discord.Collection();


var modules = []
for (let dirent of fs.readdirSync(`./Commands/`, { withFileTypes: true }))
{
    if (dirent.isDirectory())
modules.push(dirent.name)
}

modules.forEach(c => {
    fs.readdir(`./Commands/${c}/`, (err, files) => {
        if (err) throw err;
        console.log(`[Commandlogs] Loaded ${files.length} commands of module ${c}`);
        files.forEach(f => {
            const props = require(`./Commands/${c}/${f}`);
            bot.commands.set(props.help.name, props);
        });
    });
});


bot.on('ready', () => require('./Events/ready')(bot));

bot.on('message', async (msg) => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    const cmd = bot.commands.get(command);
    if (!cmd) return;
    try {
        cmd.run(bot, msg, args);
    } catch (e) {
        msg.channel.send(`That command threw an error: \`\`\`${e}\`\`\`\``)
    }
});


bot.login(token);