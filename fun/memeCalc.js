const config = new require('../../config.json');
const { MessageAttachment } = require('discord.js');

module.exports.run = async (bot, msg, args) => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * 201) - 100;
    }
    const a1 = new MessageAttachment('./ETC/MemeCalc/About to update my-.MP4');
    const a2 = new MessageAttachment('./ETC/MemeCalc/Can you tell the time.mp4');
    const a3 = new MessageAttachment('./ETC/MemeCalc/Corn is the best crop.mp4');
    const a4 = new MessageAttachment('./ETC/MemeCalc/El muchacho.MP4');
    const a5 = new MessageAttachment('./ETC/MemeCalc/I thought u were american.mp4');
    const a6 = new MessageAttachment('./ETC/MemeCalc/You look like.MP4');
    const a7 = new MessageAttachment('./ETC/MemeCalc/man im finna whip this.MP4');
    const a8 = new MessageAttachment('./ETC/MemeCalc/pickle chin ah boi.mp4');
    const a9 = new MessageAttachment('./ETC/MemeCalc/what do you have.mp4');
    const a10 = new MessageAttachment('./ETC/MemeCalc/WHO WANTS CAWFEE-.mp4');
    const a11 = new MessageAttachment('./ETC/MemeCalc/No.MP4');
    
    var msg1 = Array(2);
    msg1[1] = "You are this meme:";
    msg1[2] = "no thanks fam";
    
    var x = getRandomInt(-100, 100);
    if (x <= 100) {
        if (x >= 75) {
            msg.channel.send(msg1[1], a1)
            .then(() => {
                msg.channel.send("I don't think that's how you upgrade your hou-");
            });
        }
    }
    if (x <= 74) {
        if (x >= 60) {
            msg.channel.send(msg1[1], a2)
            .then(() => {
                msg.channel.send("ffs stop talking to clocks, they can't talk back!!!!1");
            });
        }
    }
    if (x <= 59) {
        if (x >= 40) {
            msg.channel.send(msg1[1], a3)
            .then(() => {
                msg.channel.send("You must really love corn :corn:");
            });
        }
    }
    if (x <= 39) {
        if (x >= 25) {
            msg.channel.send(msg1[1], a4)
            .then(() => {
                msg.channel.send("EL MUCHACHO DE LOS- ahem...");
            });
        }
    }
    if (x <= 24) {
        if (x >= 10) {
            msg.channel.send(msg1[1], a5)
            .then(() => {
                msg.channel.send("I thought you were american??!?!?1/");
            });
        }
    }
    if (x <= 9) {
        if (x >= -10) {
            msg.channel.send(msg1[1], a6)
            .then(() => {
                msg.channel.send("She kinda right tho");
            });
        }
    }
    if (x <= -11) {
        if (x >= -25) {
            msg.channel.send(msg1[1], a7)
            .then(() => {
                msg.channel.send("Damn kermit do be zoomin tho");
            });
        }
    }
    if (x <= -26) {
        if (x >= -40) {
            msg.channel.send(msg1[1], a8)
            .then(() => {
                msg.channel.send("You got a pickle chin, i said what i said :triumph:");
            });
        }
    }
    if (x <= -41) {
        if (x >= -65) {
            msg.channel.send(msg1[1], a9)
            .then(() => {
                msg.channel.send("AY :sound: YO :loud_sound: PUT THAT KNIFE DOWN!!");
            });
        }
    }
    if (x <= -66) {
        if (x >= -80) {
            msg.channel.send(msg1[1], a10)
            .then(() => {
                msg.channel.send("OKAY OKAY I GET IT YOU HAVE COFFEE JUST LEAVE ME ALONE :sob::sob:");
            });
        }
    }
    if (x <= -81) {
        if (x >= -100) {
            msg.channel.send(msg1[2], a11);
        }
    }
};


module.exports.help = {
    name: "whatmeme",
    description: "Calculates what meme somebody is.",
    usage: "memes",
    category: "fun",
};