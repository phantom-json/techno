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

            /* if (args[0] == 'jokes' && command == 'help') {
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
                } */
            if (command == 'help') {
                try {
                    msg.send('!help \n !suggest \n !weather \n !time \n !joke \n !bread \n !momma \n !spank \n !rank ');
                } catch (e) {
                    msg.send();
                }
            }
        });
    },
};