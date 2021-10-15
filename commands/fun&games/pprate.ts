import { ICommand } from "wokcommands";
import { Message, MessageEmbed } from "discord.js";

export default {
    category: 'Fun & Games',
    description: 'A fun way to check that all important pp size',

    maxArgs: 1,
    expectedArgs: '<user>',
    expectedArgsTypes: ['USER'],

    testOnly: true,
    slash: 'both',

    callback: ({message, interaction, args}) => {
        async function PPrate() {
            const mentioned = message ? message.mentions.users.first() : interaction.options.getUser('user')
            if (mentioned == null) { const mentioned = message ? message.author.id : interaction.user.id }

            const items = ['=', '==', '===', '====', '=====', '======', '=======', '']

            const trueORfalse = Math.floor((Math.random() * items.length));

            const mainEmbed = new MessageEmbed()
                .setTitle('PP rating machine')
                .setColor('#e91e63')

            console.log(trueORfalse)
            if (items[trueORfalse] === '=') {
                return 
            }
        }

        if (message) {
            PPrate();
        } else if (interaction) {
        
        }
    }
} as ICommand