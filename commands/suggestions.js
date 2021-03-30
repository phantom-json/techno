const Discord = require('discord.js');

module.exports = {
    name: 'suggestions',
    description: 'test suggestion command',

    execute(message, client) {
    const senchannel = client.channels.cache.find(channel => channel.name === 'general');
    const tlog = client.channels.cache.find(channel => channel.name === 'techno-logs');

        if (message.channel.id == senchannel) {
            const mchannel = client.channels.cache.find(channel => channel.name === 'sugg-embeds');
            if (mchannel) {
                const mcontent = message.content.substring(8);
                const Embed = new Discord.MessageEmbed()
                .setColor('#eb016e')
                .setDescription(mcontent)
                .setAuthor(message.author.tag, message.author.displayAvatarURL());

            mchannel.send(Embed);
            // } else if (mchannel === undefined) {
                // return('You have not set a channel for me to send to, please use !suggestion setup');
            // }
        } else if (message.channel.id !== senchannel) {
            return(`oops bud, cant use that here try in ${senchannel}`);
        } // else if (senchannel == undefined) {
            // message.channel.send('oops something went wrong please try again later');
            // tlog.send('there was a faital error, the suggestion command was used and did not find a valid channel to be used in. please use !suggest setup and setup a valid command channel');
        // }
    // if (tlog == undefined) {
        // return('there was a faial error, please use !bot setup and make a logs channel');
    // }
    }
},
// find way to get channel named (suggestions) if cant find one give user option to set one by id
// impliment code for suggestions into bot commands.
// find way to create smart array to hold custom channels in new json
};