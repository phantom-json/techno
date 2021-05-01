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

        var XPUser = {};
        if (fs.existsSync('noxpuser.json')) {
            XPUser = jsonfile.readFileSync('noxpuser.json');
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

            if (message.guild.id in XPUser === false) {
                XPUser[message.guild.id] = {};
            }
            const UserID = XPUser[message.guild.id];
            if (message.author.id in UserID) {
                return;
            }

            if (Date.now() - userStats.last_message > 1000) {
                userStats.xp += random.int(15, 25);
                userStats.last_message = Date.now();

                const xpToNextLevel = 5 * Math.pow(userStats.level, 2) + 50 * userStats.level + 100;
                if (userStats.xp >= xpToNextLevel) {
                    userStats.level++;

                    const iron = message.guild.roles.cache.find(role => role.name === 'iron');
                    const bronse = message.guild.roles.cache.find(role => role.name === 'bronse');
                    const silver = message.guild.roles.cache.find(role => role.name === 'silver');
                    const gold = message.guild.roles.cache.find(role => role.name === 'gold');
                    const plat = message.guild.roles.cache.find(role => role.name === 'platinum');
                    const diamond = message.guild.roles.cache.find(role => role.name === 'diamond');
                    const imortal = message.guild.roles.cache.find(role => role.name === 'imortal');

                    if (userStats.level >= 5) {
                        member.roles.add(iron);
                    }
                    if (userStats.level >= 10) {
                        console.log(bronse);
                        member.roles.remove(iron);
                        member.roles.add(bronse);
                    }
                    if (userStats.level >= 15) {
                        member.roles.remove(bronse);
                        member.roles.add(silver);
                    }
                    if (userStats.level >= 20) {
                        member.roles.remove(silver);
                        member.roles.add(gold);
                    }
                    if (userStats.level >= 25) {
                        member.roles.remove(gold);
                        member.roles.add(plat);
                    }
                    if (userStats.level >= 30) {
                        member.roles.remove(plat);
                        member.roles.add(diamond);
                    }
                    if (userStats.level >= 35) {
                        member.roles.remove(diamond);
                        member.roles.add(imortal);
                    }
                    userStats.xp = userStats.xp - xpToNextLevel;
                    const sendChannel = client.channels.cache.find(channel => channel.name == 'leveling');

                    if (message.member.roles.cache.has('838069712436199467')) {
                        sendChannel.send(`<@${message.author.id}> has reached level ${userStats.level}`);
                    } else {
                        sendChannel.send(`${message.author.username} has reached level ${userStats.level}`);
                    }
                }

                jsonfile.writeFileSync('xp.json', stats);
                // console.log(message.author.username + ' now has ' + userStats.xp);
                // console.log(xpToNextLevel + ' XP needed for next level.');
            }
        });
    },
};
