module.exports = {
    name: 'spank',
    description: 'funny lil spank',

    execute(message) {
        const m = Math.floor(Math.random() * 10000);
        const mention = message.mentions.users.first();

        if (mention == undefined) {
            message.reply('please tag a user to spank');
        } else if (mention !== undefined) {
            if (mention.bot == true) {
                const mention = message.author;
                message.channel.send(`hahaha, Thought you could touch me? \n Techno yeeted ${mention} into the stratasphere`);
                return;
            }
            const rand = Math.floor(Math.random() * 100);
            console.log(rand);
            if (rand === 0) {
                message.channel.send(`⏁⊑⟒ ⌿⍜⏁⏃⏁⍜ ☌⍜⎅⌇ ⊑⏃⎐⟒ ⏚⌰⟒⌇⌇⟒⎅ ⊬⍜⎍ ⍙⟟⏁⊑ **${m}** ⌇⌿⏃⋏☍⌇`);
            } else if (rand >= 1 && rand <= 20) {
                message.channel.send(`${mention} was spanked ${m} times`);
            } else if (rand >= 21 && rand <= 40) {
                message.channel.send(`tysm Techno for the ${m} spanks of ${mention}'s ass`);
            } else if (rand >= 41 && rand <= 60) {
                message.channel.send(`BONK ${mention} has been sentanced to horny jail for ${m} years`);
            } else if (rand >= 61 && rand <= 80) {
                message.channel.send(`${mention} was blown up by ${m} creapers, GG`);
            } else if (rand >= 81 && rand <= 94) {
                message.channel.send(`${mention} applied to much fake tan and is now ${m} shades of orange`);
            } else if (rand >= 95 && rand <= 100) {
                message.channel.send(`AHA ${mention} has used uno reverse prepair to die mortal scum.`);
            }
        }
    },
};