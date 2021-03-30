module.exports = {
    name: 'spank',
    description: 'funny lil spank',

    execute(message) {
        const m = Math.floor(Math.random() * 10000);
        const mention = message.mentions.users.first();

        if (mention == undefined) {
            message.reply('please tag a user to spank');
        } else if (mention !== undefined) {
            message.channel.send(`${mention} was spanked ${m} times`);
        }
    },
};