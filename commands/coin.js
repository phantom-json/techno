module.exports = {
    name: 'coins',
    description: 'coins commands',

    execute(client) {
        // const Discord = require('discord.js');
        const random = require('random');
        const fs = require('fs');
        const jsonfile = require('jsonfile');
        const { prefix } = require('../config.json');

        var stats = {};
        if (fs.existsSync('coins.json')) {
            stats = jsonfile.readFileSync('coins.json');
        }

        client.on('message', async (message) => {
            client.on('guildMemberAdd', (member) => {
                message.channel.send('test');
            });
            if (!message.content.startsWith(prefix) || message.author.bot) return;

            const args = message.content.slice(prefix.length).split(/ +/);
            let command = args.shift().toLowerCase();
            const msg = message.channel;

            if (command == 'daily') {
                if (message.guild.id in stats === false) {
                    stats[message.guild.id] = {};
                }
                const guildStats = stats[message.guild.id];
                if (message.author.id in guildStats === false) {
                    guildStats[message.author.id] = {
                        coins: 0,
                        last_message: 0,
                    };
                }
                const userStats = guildStats[message.author.id];
                if (Date.now() - userStats.last_message > 10000) {
                    userStats.coins += random.int(50, 100);
                    userStats.last_message = Date.now();

                jsonfile.writeFileSync('coins.json', stats);
                msg.send(`${message.author.username} now has ${userStats.coins} coins in their account`);
                }
            }
        });

    },
};