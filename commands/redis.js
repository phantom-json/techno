const redis = require('redis');
const redisPath = require('../config.json');

module.exports = async () => {
    return await new Promise((resolve, reject) => {
        const client = redis.createClient({
            url: redisPath,
        });

        client.on('error', (err) => {
            console.error('redis error:', err);
            client.quit();
            reject(err);
        });

        client.on('ready', () => {
            resolve(client);
        });
    });
};


// wU0nsOVnO8B22ZC7vKiUfzdKwQZZz5jx
// redis-16073.c99.us-east-1-4.ec2.cloud.redislabs.com:16073