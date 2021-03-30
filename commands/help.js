const { ReplyError } = require('redis');

module.exports = {
    name: 'help',
    description: 'help commands',

    execute(client) {
        const Discord = require('discord.js');
        const { prefix } = require('../config.json');
        client.on('message', async message => {
            if (!message.content.startsWith(prefix))return;

            const args = message.content.slice(prefix.length).split(/ +/);
            let command = args.shift().toLowerCase();

            if (args == 0 && command == 'help') {
                try {
                    const helpEmbed = new Discord.MessageEmbed()
                        .setColor('#c43333')
                        .setTitle('Help commands')
                        .setDescription('!help <command> \n\n popular help commands include,\n!help\n!help codes\n!help joke\n!help weather\n!help suggestions\n!help setup');
                    try {
                        message.channel.send(helpEmbed);
                    } catch (e) {
                        return '';
                    }
                } catch (e) {
                    console.log(e);
                    return 'There has been an error! please try again.';
                }

            } else if(args[0] == 'codes') {
                try {
                    const codesEmbed = new Discord.MessageEmbed()
                    .setColor('#c43333')
                    .setTitle('Help codes')
                    .setDescription('for a comprehensive listing of all error codes please click above');
                message.channel.send(codesEmbed);
                } catch (e) {
                    console.log(e);
                    return 'oops there was an error, please try again';
                }

            } else if (args[0] == 'jokes') {
                try {
                    const jokesEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setTitle()
                    .setDescription();
                    try {
                        message.channel.send(jokesEmbed);
                    } catch (e) {
                        return 'oops there was an error, please try again';
                    }
                } catch (e) {
                    return 'oops there was an error, please try again';
                }

            } else if (args[0] == 'weather') {
                try {
                    const weatherEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setTitle()
                    .setDescription();
                    try {
                        message.channel.send(weatherEmbed);
                    } catch (e) {
                        return 'oops there was an error, please try again';
                    }
                } catch (e) {
                    return 'oops there was an error, please try again';
                }

            } else if (args[0] == 'suggestion') {
                try {
                    const suggestionEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setTitle()
                    .setDescription();
                    try {
                        message.channel.send(suggestionEmbed);
                    } catch (e) {
                        return 'oops there was an error, please try again';
                    }
                } catch (e) {
                    return 'oops there was an error, please try again';
                }

            } else if (args[0] == 'setup') {
                try {
                    const setupEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setTitle()
                    .setDescription();
                    try {
                        message.channel.send(setupEmbed);
                    } catch (e) {
                        return 'oops there was an error, please try again';
                    }
                } catch (e) {
                    return 'oops there was an error, please try again';
                }
            }

        });
    },
};