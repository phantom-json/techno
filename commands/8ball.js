const Discord = require('discord.js');

module.exports = {
    name: '8_ball',
    description: '8ball rand answers',

    execute(client, message) {
        let replies = ['yes.', 'No.', 'I don`t know.', 'Ask again later'];
        let result = Math.floor((Math.random() * replies.length));

        message.channel.send(replies[result]);
    },
};