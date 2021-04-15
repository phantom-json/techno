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

            /* } else if(args[0] == 'codes' && command == 'help') {
                try {
                    const codesEmbed = new Discord.MessageEmbed()
                    .setColor('#c43333')
                    .setTitle('Help codes')
                    .setDescription('1: `i can not send messages in this channel please check my permissions`');
                    try {
                        msg.send(codesEmbed);
                    } catch (e) {
                        msg.send('oops there was an error, please try again');
                    }
                } catch (e) {
                    msg.send('oops there was an error, please try again');
                } */

            if (args[0] == 'jokes' && command == 'help') {
                try {
                    const jokesEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setTitle()
                    .setDescription();
                    try {
                        msg.send(jokesEmbed);
                    } catch (e) {
                        msg.send('oops there was an error, please try again');
                    }
                } catch (e) {
                    msg.send('oops there was an error, please try again');
                }

            } else if (args[0] == 'weather' && command == 'help') {
                try {
                    const weatherEmbed = new Discord.MessageEmbed()
                    .setColor('#c43333')
                    .setTitle()
                    .setDescription();
                    try {
                        msg.send(weatherEmbed);
                    } catch (e) {
                        msg.send('oops there was an error, please try again');
                    }
                } catch (e) {
                    msg.send('oops there was an error, please try again');
                }

            } else if (args[0] == 'suggestion' && command == 'help') {
                try {
                    const suggestionEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setTitle()
                    .setDescription();
                    try {
                        msg.send(suggestionEmbed);
                    } catch (e) {
                        msg.send('oops there was an error, please try again');
                    }
                } catch (e) {
                    msg.send('oops there was an error, please try again');
                }

            } else if (args[0] == 'setup' && command == 'help') {
                try {
                    const setupEmbed = new Discord.MessageEmbed()
                    .setColor()
                    .setTitle()
                    .setDescription();
                    try {
                        msg.send(setupEmbed);
                    } catch (e) {
                        msg.send('oops there was an error, please try again');
                    }
                } catch (e) {
                    msg.send('oops there was an error, please try again');
                }
            } else if (args[0] == 'commands' || undefined && command == 'help') {
                try {
                    const commandEmbed = new Discord.MessageEmbed
                        .setColor('#c43333')
                        .setTitle('A list of all the bots commands')
                        .setDescription('!help \n !suggest \n !weather \n !time \n !joke \n !bread \n !momma \n !spank \n !rank ');
                    msg.send(commandEmbed);
                } catch (e) {
                    msg.send();
                }
            }

        });
    },
};