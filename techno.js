const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { prefix, token } = require('./config.json');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('techno is online');
    // client.commands.get('welcome').execute(client);
        // console.log('join msg active');
    client.commands.get('counting').execute(client);
        console.log('counting active');
    client.commands.get('gencmds').execute(client);
        console.log('gen cmds active');
    client.commands.get('jokes').execute(client);
        console.log('jokes is active');
    client.commands.get('weather').execute(client);
        console.log('weather is active');
    // client.commands.get('help').execute(client);
        // console.log('help is active');
    client.commands.get('xp').execute(client);
        console.log('xp is active');
    client.commands.get('xp_commands').execute(client);
        console.log('xp commands is active');
    // client.commands.get('coins').execute(client);
        // console.log('coins is active');

});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

    if (command == 'spank') {
        client.commands.get('spank').execute(message, client);

    } else if (command == 'suggest') {
        client.commands.get('suggestions').execute(message, client);

    } else if (command == 'ball') {
        console.log('8ball');
        client.commands.get('8_ball').execute(message, client);

    } else if (command == 'help') {
        try {
            message.channel.send('!help \n !suggest \n !weather \n !time \n !joke \n !bread \n !momma \n !spank \n !rank ');
        } catch (e) {
            message.channel.send();
        }
    }

    /* } else if (command == 'pings') {
        console.log('yes');
        message.reply('yes');
        setTimeout(async function() {
            await message.channel.messages.fetch({ limit: 2 }).then(messages => {
               message.channel.bulkDelete(messages);
            });
        }, 5000);*/
});


client.login(token);

// working on admin and suggestions, as well as info message for joining (ether through website or embed)