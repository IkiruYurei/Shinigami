

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * 201) - 100;
}

client.on('message', msg => {
    if (msg.author.id === client.user.id)
        return;

    if (msg.content === '?s simpcalc') {
        var msg1 = Array(11);
        msg1[1] = "Stay back thot!";
        msg1[2] = "You would totally buy gamer girl bath water, if you weren't broke.";
        msg1[3] = "You definitely believe that 2D > 3D (AKA you're a weeb and simp for anime).";
        msg1[4] = "Congrats'nt, you're a simp, now get yeeted";
        msg1[5] = "You just want food.";
        msg1[6] = "Congrats, you're not a simp :partying_face:";
        msg1[7] = "You just want to commit oof.";
        msg1[8] = "You're most likely too confused by everthing to be a simp.";
        msg1[9] = "You probably don't even know what a simp is";
        msg1[10] = "Either you're too cool to simp, or you're an Anti-simp :sunglasses:";
        msg1[11] = "Congrats, You are the Ultimate Anti-simp. (Simps beware)";
        var x = getRandomInt(-100, 100);
        if (x <= 100) {
            if (x >= 75) {
                msg.channel.send(msg1[1]);
            }
        }
        if (x <= 74) {
            if (x >= 60) {
                msg.channel.send(msg1[2]);
            }
        }
        if (x <= 59) {
            if (x >= 40) {
                msg.channel.send(msg1[3]);
            }
        }
        if (x <= 39) {
            if (x >= 25) {
                msg.channel.send(msg1[4]);
            }
        }
        if (x <= 24) {
            if (x >= 10) {
                msg.channel.send(msg1[5]);
            }
        }
        if (x <= 9) {
            if (x <= -10) {
                msg.channel.send(msg1[6]);
            }
        }
        if (x >= -11) {
            if (x <= -25) {
                msg.channel.send(msg1[7]);
            }
        }
        if (x >= -26) {
            if (x <= -40) {
                msg.channel.send(msg1[8]);
            }
        }
        if (x >= -41) {
            if (x <= -65) {
                msg.channel.send(msg1[9]);
            }
        }
        if (x >= -66) {
            if (x <= -80) {
                msg.channel.send(msg1[10]);
            }
        }
        if (x >= -81) {
            if (x <= -100) {
                msg.channel.send(msg1[11]);
            }
        }
    }
});


module.exports.help = {
    name: "simpcalc",
    description: "A command that calculates how much of a simp someone is.",
    usage: "Useless dumb command, idk why I made it.",
    category: "Fun",
};










