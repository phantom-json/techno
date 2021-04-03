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
            let msg = message.channel;

            if (command == 'weather') {
                try {
                    const area = args.join(' ');
                    const response = await axios(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${encodeURIComponent(area)}`);
                    console.log(response);

                    const loc = response.data.location;
                    const curr = response.data.current;

                    let local = loc.name;
                    let country = loc.country;
                    let time = loc.localtime.slice(11, 16);

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
                        msg.send(WeatherEmbed);
                    } catch (e) {
                        msg.send('oops there was an error please try again \n Error Code: 1');
                    }
                } catch (e) {
                    console.log(e);
                    msg.send('oops an error has occured, please try again');
                }

            } else if (command == 'time') {
                try {
                    const area = args.join(' ');
                    const response = await axios (`http://worldtimeapi.org/api/timezone/${encodeURIComponent(area)}`);

                    console.log(args);
                    let apiData = response.data;

                    let zone = apiData.abbreviation;
                    let time = apiData.datetime.slice(11, 16);
                    let dow = apiData.day_of_week;
                    let doy = apiData.day_of_year;
                    let weekNum = apiData.week_number;
                    let offset = apiData.utc_offset;

                    const timeEmbed = new Discord.MessageEmbed()
                        .setColor('#03a9fc')
                        .setThumbnail('https://images-na.ssl-images-amazon.com/images/I/71XU41H4yuL.png')
                        .setURL('')
                        .setTitle(`time data for ${area}`)
                        .addFields(
                            { name: 'time', value: time, inline: true },
                            { name: 'time zone', value: zone, inline: true },
                            { name: 'offset', value: `UTC ${offset}` },
                            { name: 'day of the week', value: dow, inline: false },
                            { name: 'week number', value: weekNum, inline: false },
                            { name: 'day of the year', value: doy, inline: false },
                        );

                    msg.send(timeEmbed);
                } catch (e) {
                    console.log(e);
                    msg.send('oops there was an error');
                }
            }
        });
    },
};


// base url http://api.weatherapi.com/v1
// docks https://www.weatherapi.com/docs/
// google https://www.google.com/maps/place/

// time api http://worldtimeapi.org/