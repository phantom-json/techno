module.exports = {
    name: 'jokes',
    description: 'jokes commands',

    execute(client) {
        const prefix = ('!');
        const Discord = require('discord.js');
        const axios = require('axios');

        client.on('message', async message => {
            if (!message.content.startsWith(prefix))return;

            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();

            if (command == 'joke') {
                try {
                    let getjoke = async () => {
                        let response = await axios.get('https://official-joke-api.appspot.com/random_joke');
                        let joke = response.data;
                        return joke;
                    };
                    let jokeValue = await getjoke();
                    const embed = new Discord.MessageEmbed()
                        .setColor('#00DBff')
                        .setDescription(`**${jokeValue.setup}** \n\n **${jokeValue.punchline}**`);
                    message.channel.send(embed);
                } catch (e) {
                    return 'oops there was a mistake, try again!';
                }
            } else if (command == 'bread') {
                try {
                    let getjoke = async () => {
                        let response = await axios.get('https://my-bao-server.herokuapp.com/api/breadpuns');
                        let joke = response.data;
                        return joke;
                    };
                    let jokeValue = await getjoke();
                    console.log(jokeValue);
                    message.reply(jokeValue);
                } catch {
                    return 'oops there was a mistake, try again!';
                }

            } else if (command == 'momma') {
                try {
                    let getjoke = async () => {
                        let response = await axios.get('https://api.yomomma.info/');
                        let joke = response.data;
                        return joke;
                    };
                    let jokeValue = await getjoke();
                    console.log(jokeValue);
                    message.reply(jokeValue.joke);
                } catch (e) {
                    return 'oops there was a mistake, try again!';
                }
            }
        });
    },
};