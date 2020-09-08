console.log()

const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const fs = require('fs');

client.commands = new Discord.Collection();


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
            client.commands.set(props.config.name, props);
        });
    });
});


client.once('ready', () => {
    console.log('Ready.');
});

client.on('message', async (msg) => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command) {
        try {
        run(client, msg, args);
        } catch (e) {
            msg.channel.send(`That command threw an error: \`\`\`${e}\`\`\`\``)
        }
    }
});


client.login(token);