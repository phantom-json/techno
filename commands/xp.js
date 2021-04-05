module.exports = {
    name: 'xp',
    description: 'xp',

    execute(client) {
        // const Discord = require('discord.js');
        const random = require('random');
        const fs = require('fs');
        const jsonfile = require('jsonfile');

        var stats = {};
        if (fs.existsSync('xp.json')) {
            stats = jsonfile.readFileSync('xp.json');
        }
        var XPRole = {};
        if (fs.existsSync('noxprole.json')) {
            XPRole = jsonfile.readFileSync('noxprole.json');
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
            const userStats = guildStats[message.author.id];

            if (message.guild.id in XPChannel === false) {
                XPChannel[message.guild.id] = {};
            }
            const ChannelID = XPChannel[message.guild.id];
            if (message.channel.id in ChannelID) {
                return;
            }

            const roles = message.member.roles.cache;
            const memberRoleID = roles.map((role) => role.id);

            if (message.guild.id in XPRole === false) {
                XPRole[message.guild.id] = {};
            }
            const RoleID = XPRole[message.guild.id];
            if (memberRoleID.some((id) => id in RoleID)) {
                return;
            }

            if (Date.now() - userStats.last_message > 1000) {
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
        });
    },
};
