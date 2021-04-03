module.exports = {
    name: 'xp',
    description: 'xp commands',

    execute(client) {
        // const Discord = require('discord.js');
        const random = require('random');
        const fs = require('fs');
        const jsonfile = require('jsonfile');
        const { prefix } = require('../config.json');

        var stats = {};
        if (fs.existsSync('xp.json')) {
            stats = jsonfile.readFileSync('xp.json');
        }
        var XPUser = {};
        if (fs.existsSync('noxpusers.json')) {
            XPUser = jsonfile.readFileSync('noxpusers.json');
        }
        var XPChannel = {};
        if (fs.existsSync('noxpchannel.json')) {
            XPChannel = jsonfile.readFileSync('noxpchannel.json');
        }

        client.on('message', async (message) => {
            const { member } = message;
            if (message.author.bot) return;

            if (message.guild.id in stats === false) {
                stats[message.guild.id] = {};
            }
            const guildStats = stats[message.guild.id];
            if (message.author.id in guildStats === false) {
                guildStats[message.author.id] = {
                    xp: 0,
                    level: 0,
                    last_message: 0,
                };
            }


            if (message.guild.id in XPChannel === false) {
                XPChannel[message.guild.id] = {};
            }
            const ChannelID = XPChannel[message.guild.id];
            if (message.channel.id in ChannelID) {
                return;
            }

            const userStats = guildStats[message.author.id];

            if (Date.now() - userStats.last_message > 1000) {
                // if (message.content.startsWith(prefix)) return;
                userStats.xp += random.int(15, 25);
                userStats.last_message = Date.now();

                const xpToNextLevel = 5 * Math.pow(userStats.level, 2) + 50 * userStats.level + 100;
                if (userStats.xp >= xpToNextLevel) {
                    userStats.level++;

                    const iron = '827589627732688896';
                    const bronse = '827589715699826760';
                    const silver = '827589830082691133';
                    const gold = '827590018423980093';
                    const plat = '827590550097756201';
                    const diamond = '827590155048976474';
                    const imortal = '827590630292324352';

                    if (userStats.level >= 1) {
                        member.roles.add(iron);
                    }
                    if (userStats.level >= 2) {
                        console.log(bronse);
                        member.roles.remove(iron);
                        member.roles.add(bronse);
                    }
                    if (userStats.level >= 3) {
                        member.roles.remove(bronse);
                        member.roles.add(silver);
                    }
                    userStats.xp = userStats.xp - xpToNextLevel;
                    message.channel.send(message.author.username + ' has reached level ' + userStats.level);
                }

                jsonfile.writeFileSync('xp.json', stats);
                console.log(message.author.username + ' now has ' + userStats.xp);
                console.log(xpToNextLevel + ' XP needed for next level.');
            }
            if (!message.content.startsWith(prefix) || message.author.bot) return;

            const args = message.content.slice(prefix.length).split(/ +/);
            let command = args.shift().toLowerCase();
            const msg = message.channel;

            if (command == 'xp' && args[0] == 'addchannel') {
                const channel = args[1];
                if (isNaN(channel)) return console.log(channel);

                let confirm = await message.channel.send(`are you sure you dont want to get xp when chatting in <#${channel}> `);
                confirm.react('👍');
                confirm.react('👎');

                client.on('messageReactionAdd', async (reacton, user) => {
                    if (reacton.message.partial) await reacton.message.fetch();
                    if (reacton.partial) await reacton.fetch();
                    if (user.bot) return;
                    if (!reacton.message.guild) return;

                    if (reacton.message.channel.id == message.channel.id) {
                        if (reacton.emoji.name === '👍') {
                           ChannelID[channel] = {};
                           jsonfile.writeFileSync('noxpchannel.json', XPChannel);
                        }
                    }
                });
            }
        });
    },
};
