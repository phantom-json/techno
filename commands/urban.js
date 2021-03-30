const urban = require('urban');
const Discord = require('discord.js');
const stripIndents = require('common-tags');

module.exports = {
    name: 'urban',
    description: 'Shows the urban dictionary entry for a word or phrase',

    execute(bot, message, args) {
        if(args < 1 || !['search', 'random'].includes(args[0])) return message.channel.send('!urban <search|random> (query)');
            let image = 'https://www.educationalappstore.com/images/upload/11042-logo-urban-dictionary-1.jpg';
            let search = args[1] ? urban(args.slice(1).join(' ')) : urban.random();
                try {
                search.first(res => {
                    if (!res) return message.channel.send('No results found for this topic, sorry!');
                    let { word, definition, example, thumbs_up, thumbs_down, permalink, author } = res;

                        let embed = new Discord.MessageEmbed()
                            .setColor('#00FFFF')
                            .setAuthor(`Urban Dictionary | ${word}`, image)
                            .setThumbnail(image)
                            .setDescription(stripIndents`**Definition:** ${definition || 'No definition'}
                            **Example: ${example || 'No Example'}
                            **Upvote:** ${thumbs_up || '0'}
                            **Downvote** ${thumbs_down || '0'}
                            **link: [link to ${word}](${permalink || 'https://www.urbandictionary.com/'})`)
                            .setTimestamp()
                            .setFooter(`Written by ${author || 'unknown'}`);

                            message.channel.send(embed);

                });
            }catch(e) {
                console.log(e);
                return message.reply('looks like i`ve broken! Try again');
            }

    },
};