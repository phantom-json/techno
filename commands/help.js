module.exports = {
    name: 'help',
    description: 'help commands',

    execute(client) {
        const Discord = require('discord.js');
        const { prefix } = require('../config.json');
        client.on('message', async message => {
            if (!message.content.startsWith(prefix))return;

            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();

            if (command == 'help') {
                try {
                    const helpembed = new Discord.MessageEmbed()
                        .setColor('#c43333')
                        .setTitle('Help commands')
                        .setDescription('!help <command> \n\n popular help commands include,\n!help\n!help codes\n!help joke\n!help weather\n!help suggestions\n!help setup');
                    message.channel.send(helpembed);
                } catch (e) {
                    console.log(e);
                    return('There has been an error! please try again.');
                }
            }

        });
    },
};