module.exports = {
    name: 'counting',
    description: 'counting bot',

    execute(client) {
        let count = 0;
        let timeout;
        const chanID = ('763735137396588555');

        client.on('message', ({ channel, content, member }) => {
            if (channel.id === chanID) {
                if (member.user.bot);
                if (Number(content) === count + 1) {
                    count++;

                    if (timeout) client.clearTimeout(timeout);
                    timeout = client.setTimeout(
                        () => channel.send(++count).catch(console.error),
                        30000,
                    );

                } else if (member.id !== client.user.id) {
                    channel.send(`${member} messed up!, wumpus`).catch(console.error);
                    count = 0;
                    if (timeout) client.clearTimeout(timeout);
                }
            }
        });
    },
};