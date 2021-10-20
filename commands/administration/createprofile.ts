import { ICommand } from "wokcommands";
import DiscordJS, { GuildMember } from "discord.js"
import profileSchema from "../../models/profileSchema";
import { userProfileAdd } from "../../functions";

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
        var user = interaction.options.getUser('user')
        if (!user) return;
        if (!guild) return;

        userProfileAdd(user, guild)

        return 'New user profile set'
    }
} as ICommand

