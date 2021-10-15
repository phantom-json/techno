import { ICommand } from "wokcommands";
import DiscordJS, { GuildMember } from "discord.js"
import profileSchema from "../../models/profileSchema";

export default {
    category: 'Moderation',
    description: 'create a new user profile tagged user',

    minArgs: 1,
    expectedArgs: '<user>',
    expectedArgsTypes: ['USER'],

    slash: true,
    testOnly: true,

    options: [
        {
            name: 'user',
            description: 'The user you want to create a profile for',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.USER
        }
    ],
    
    callback: async ({ interaction, guild}) => {
        var userID = interaction.options.getUser('user')
        if (!userID) return;

        console.log(typeof(userID))

        await profileSchema.insertMany({
            _id: userID.id,
            userID: userID.id,
            xp: 0,
            level: 0,
            coins: 0,
            bank: 0
        })

        return 'New user profile set'
    }
} as ICommand

