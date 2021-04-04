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
            const msg = message.channel;

            if (args == 0 && command == 'help') {
                try {
                    const helpEmbed = new Discord.MessageEmbed()
                        .setColor('#c43333')
                        .setTitle('Help commands')
                        .setDescription('!help <command> \n\n popular help commands include,\n`!help`\n`!help codes`\n`!help commands`\n`!help setup`');
                    try {
                        message.channel.send(helpEmbed);
                    } catch (e) {
                        return '';
                    }
                } catch (e) {
                    console.log(e);
                    return 'There has been an error! please try again.';
                }

            } else if(args[0] == 'codes' && command == 'help') {
                try {
                    const codesEmbed = new Discord.MessageEmbed()
                    .setColor('#c43333')
                    .setTitle('Help codes')
                    .setDescription('1: `i can not send messages in this channel please check my permissions`');
                message.channel.send(codesEmbed);
                } catch (e) {
                    console.log(e);
                    return 'oops there was an error, please try again';
                }

            } else if (args[0] == 'jokes' && command == 'help') {
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

            } else if (args[0] == 'weather' && command == 'help') {
                try {
                    const weatherEmbed = new Discord.MessageEmbed()
                    .setColor('#c43333')
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

            } else if (args[0] == 'suggestion' && command == 'help') {
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

            } else if (args[0] == 'setup' && command == 'help') {
                try {
                    const setupEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setTitle()
                    .setDescription();
                    try {
                        message.channel.send(setupEmbed);
                    } catch (e) {
                         'oops there was an error, please try again';
                    }
                } catch (e) {
                    return 'oops there was an error, please try again';
                }
            } else if (args[0] == 'commands' && command == 'help') {
                try {
                    const commandEmbed = new Discord.MessageEmbed
                        .setColor('#c43333')
                        .setTitle('A list of all the bots commands')
                        .setDescription('!help \n !suggest \n !weather \n !time \n !joke \n !bread \n !momma \n !spank \n !water \n !wolfsleep');
                    msg.send(commandEmbed);
                } catch (e) {
                    message.channel.send();
                }
            }

        });
    },
};