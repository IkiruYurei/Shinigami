const Discord = require('discord.js');

client.on('message', msg => {
    if (msg.author.id === client.user.id)
        return;

    else if (msg.content === `?s my info`) {
        const UserInfo = {
            "color": "AQUA",
            "title": "User Info",
            "thumbnail": {
                "proxy_url": "https://cdn.discordapp.com/embed/avatars/.png",
            },
            "author": {
                "name": "hyhhhhh",
            },
        };
        msg.channel.send({ embed: UserInfo });
    }
});



    
