module.exports = {
    name: 'xp_commands',
    description: 'all commands for the xp app',

    execute(client) {
        const fs = require('fs');
        const jsonfile = require('jsonfile');
        const { prefix } = require('../config.json');
        const discord = require('discord.js');

        client.on('message', async (message) => {
            if (!message.content.startsWith(prefix) || message.author.bot) return;

            const args = message.content.slice(prefix.length).split(/ +/);
            let command = args.shift().toLowerCase();

            // set xp role and channel var
            var XPRole = {};
            if (fs.existsSync('noxprole.json')) {
                XPRole = jsonfile.readFileSync('noxprole.json');
            }
            var XPChannel = {};
            if (fs.existsSync('noxpchannel.json')) {
                XPChannel = jsonfile.readFileSync('noxpchannel.json');
            }

            // if guild id in file do xyz
            if (message.guild.id in XPChannel === false) {
                XPChannel[message.guild.id] = {};
            } const ChannelID = XPChannel[message.guild.id];

            if (message.guild.id in XPRole === false) {
                XPRole[message.guild.id] = {};
            } const RoleID = XPRole[message.guild.id];

            // cmds
            if (command == 'xp' && args[0] == 'addchannel') {
                if (message.member.hasPermission('BAN_MEMBERS')) {
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
                                if (channel in ChannelID) {
                                    message.reply('that channel is already being ignored');
                                    setTimeout(async function() {
                                        await message.channel.messages.fetch({ limit: 3 }).then(messages => {
                                            message.channel.bulkDelete(messages);
                                         });
                                    }, 3000);
                                    return;
                                }
                                ChannelID[channel] = {};
                                jsonfile.writeFileSync('noxpchannel.json', XPChannel);
                                message.reply(`you will no longer get xp from typing in <#${channel}>`);
                                setTimeout(async function() {
                                    await message.channel.messages.fetch({ limit: 3 }).then(messages => {
                                        message.channel.bulkDelete(messages);
                                     });
                                }, 3000);
                                return;
                            } else if (reacton.emoji.name === '👎') {
                                message.reply('ok we have cancled that request.');
                                setTimeout(async function() {
                                    await message.channel.messages.fetch({ limit: 3 }).then(messages => {
                                       message.channel.bulkDelete(messages);
                                    });
                                }, 5000);
                                return;
                            }
                        }
                    });
                } else {
                    return message.reply('ah dang u cant use that');
                }
            } else if (command == 'xp' && args[0] == 'addrole') {
                if (message.member.hasPermission('BAN_MEMBERS')) {
                    const role = args[1];
                    if (isNaN(role)) return console.log(role);

                    let confirm = await message.channel.send(`are you sure you dont people with the role <@&${role}> to be able to gain xp> `);
                    confirm.react('👍');
                    confirm.react('👎');

                    client.on('messageReactionAdd', async (reacton, user) => {
                        if (reacton.message.partial) await reacton.message.fetch();
                        if (reacton.partial) await reacton.fetch();
                        if (user.bot) return;
                        if (!reacton.message.guild) return;

                        if (reacton.message.channel.id == message.channel.id) {
                            if (reacton.emoji.name === '👍') {
                                    RoleID[role] = {};
                                    jsonfile.writeFileSync('noxprole.json', XPRole);
                            } else if (reacton.emoji.name === '👎') {
                                message.reply('ok we have cancled that request.');
                                setTimeout(async function() {
                                    await message.channel.messages.fetch({ limit: 3 }).then(messages => {
                                        message.channel.bulkDelete(messages);
                                    });
                                }, 5000);
                                return;
                            }
                        }
                    });
                } else {
                    return message.reply('ah dang u cant use that');
                }
            } else if (command == 'rank') {
                if (!fs.existsSync('xp.json')) {
                    message.reply('we couldnt find any data, sorry. try talking a bit first');
                }
                const file = jsonfile.readFileSync('xp.json');
                const guilddata = file[message.guild.id];
                const userdata = guilddata[message.author.id];
                const author = message.author.username;
                const xpToNextLevel = 5 * Math.pow(userdata.level, 2) + 50 * userdata.level + 100;
                const xpneeded = xpToNextLevel - userdata.xp;

                const embed = new discord.MessageEmbed()
                    .setColor('#2fde86')
                    .setThumbnail('https://str.com/sites/default/files/styles/laptop/public/2019-05/trend-reports_2.png?itok=h4adEYIx')
                    .setTitle(`__ranking data for ${author}__`)
                    .addFields(
                        { name: 'level xp', value: userdata.xp, inline: false },
                        { name: 'level', value: userdata.level, inline: false },
                        { name: 'xp to next level', value: xpneeded, inline: false },
                    );
                message.channel.send(embed);
            }
        });
    },
};