module.exports = {
    name: 'gencmds',
    description: 'general commands',

    execute(client) {
        const prefix = ('!');
        const Discord = require('discord.js');
        client.on('message', async message => {
            if (!message.content.startsWith(prefix)) return;

            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();

            if (command == 'water') {
                message.channel.send({ files: ['./audio.mp3'] });

            } else if (command == 'wolfslep') {
                message.channel.send({ files: ['./sleeping_wolf.png'] });

            } else if (command == 'porky') {
                let embed = new Discord.MessageEmbed()
                    .setColor('#f6a91c')
                    .setTitle('🎉HAPPY BRITHDAY🎉')
                    .setDescription('a very merry birthday to our good friend <@708256904065056850>')
                    .setImage('http://happybirthdaytime.com/wp-content/uploads/2020/03/Happy-Birthday-Gif-9.gif');
                message.channel.send(embed);

            } else if (command == 'peposadge') {
                message.channel.send('sadge');
            } else if (command == 'pepohey') {
                message.channel.send('hey');
            } else if (command == 'pepolul') {
                message.channel.send('lul');
            } else if (command == 'pepoyikes') {
                message.channel.send('yike');
            }
        });
    },
};