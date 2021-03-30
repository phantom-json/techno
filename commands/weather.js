module.exports = {
    name: 'weather',
    description: 'weather commands',

    execute(client) {
        const Discord = require('discord.js');
        const axios = require('axios');
        const { apikey, prefix } = require('../config.json');
        client.on('message', async message => {
            if (!message.content.startsWith(prefix))return;

            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();

            if (command == 'weather') {
                try {
                    const area = args.join(' ');
                    const response = await axios(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${encodeURIComponent(area)}`);

                    const loc = response.data.location;
                    const curr = response.data.current;

                    let local = loc.name;
                    let country = loc.country;
                    let time = loc.localtime;

                    let temp = curr.temp_c;
                    let windspeed = curr.wind_mph;
                    let winddeg = curr.wind_degree;
                    let winddir = curr.wind_dir;
                    let rain = curr.precip_mm;
                    let humidity = curr.humidity;
                    let feels = curr.feelslike_c;
                    let ghust = curr.ghust_mph;

                    const WeatherEmbed = new Discord.MessageEmbed()
                        .setColor('#03a9fc')
                        .setThumbnail('https://s3.amazonaws.com/ionic-marketplace/api-weather-app/icon.png')
                        .setURL(`https://www.google.com/maps/place/${encodeURIComponent(local)}`)
                        .setTitle(`Weather data for ${local} - ${country}`)
                        .setDescription(`**${time}**`)
                        .addFields(
                            { name:'tempurature', value:`${temp}°C`, inline: false },
                            { name:'wind speed', value:`${windspeed}mph`, inline: true },
                            { name:'wind direction', value: winddir, inline: true },
                            { name:'rain', value:`${rain}mm`, inline: false },
                            { name:'humidity', value:`${humidity}%`, inline: false },
                        );
                    try {
                        message.channel.send(WeatherEmbed);
                    } catch (e) {
                        return 'oops there was an error please try again \n Error Code: 1';
                    }
                } catch (e) {
                    console.log(e);
                    return 'oops an error has occured, please try again';
                }

            } else if (command == 'time') {
                try {
                    const content = message.content.split(/ +/);
                    var area = content[1].toUpperCase();
                    const response = await axios(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${area}`);

                    const loc = response.data.location;

                    let local = loc.name;
                    let time = loc.localtime;

                    try {
                        message.channel.send(`The current time in ${local} is \n ${time}`);
                    } catch(e) {
                        return 'oops there was an error please try again \n Error Code: 1';
                    }
                } catch (e) {
                    console.log(e);
                    return 'oops an error has occured, please try again';
                }
            }
        });
    },
};


// base url http://api.weatherapi.com/v1
// docks https://www.weatherapi.com/docs/
// google https://www.google.com/maps/place/