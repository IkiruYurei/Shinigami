const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const fs = require('fs');

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const modules = ['Administration', 'Currency', 'Cursed', 'CustomCommands', 'Fun', 'Help', 'LevelingSystem', 'Messages', 'Misc', 'Moderation', 'Partner', 'REI', 'Searches', 'Staff'];


modules.forEach(c => {
    fs.readdir(`C:/Users/kawai/Documents/Shinigami/Commands/${c}/`, (err, files) => {
        if (err) throw err;
        console.log(`[Commandlogs] Loaded ${files.length} commands of module ${c}`);
        files.forEach(f => {
            const props = require(`./Commands/${c}/${f}`);
            client.commands.set(props.help.name, props);
        });
    });
});


client.once('ready', () => {
  console.log('Ready.');
});

client.login(config.token);