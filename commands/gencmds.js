module.exports = {
    name: 'gencmds',
    description: 'general commands',

    execute(client) {
        const prefix = ('!');
        const Discord = require('discord.js');
        const axios = require('axios');
        client.on('message', async message => {
            if (!message.content.startsWith(prefix)) return;

            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();

            if (command == 'cat') {
                
            }

        });
    },
};