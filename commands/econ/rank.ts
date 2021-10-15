import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import xpSchema from "../../models/profileSchema";

export default {
    category: 'Economy',
    description: 'A balance command',
    aliases: ['bal'],

    maxArgs: 0,
    testOnly: true,
    slash: true,
    guildOnly: true,

    callback: async ({ message, interaction, args, guild}) => {
        const userID = message ? message.author.id : interaction.user.id

        const data = await xpSchema.findOne({
            userID,
        })

        // const Embed = new MessageEmbed()
        //     .setTitle('')

        if (!data) {
            console.log('ERROR: user not assigned profile on guild join \n COMMAND: balance.ts'); 
            return 'There was an error please contact the bot owner'
        }

        console.log(data)
    }
} as ICommand