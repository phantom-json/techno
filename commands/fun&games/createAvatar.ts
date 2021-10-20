import { ICommand } from "wokcommands";
import profileSchema from "../../models/profileSchema";

export default {
    category: 'Fun & Games',
    description: 'Create a custom character that best represents you.',

    slash: true,
    testOnly: true,

    expectedArgs: '<name> <age> <birthday> <sex> <main_power> <secondary_power> <finisher>',
    options: [
        {
            name: 'name',
            description: 'The name of your avatar',
            required: true,
            type: 'STRING'
        },
        {
            name: 'age',
            description: 'The age of your avatar',
            required: true,
            type: 'NUMBER'
        }, 
        // {
        //     name: 'DoB',
        //     description: 'Your avatars Birthday',
        //     required: true,
        //     type: 'STRING'
        // },
        {
            name: 'sex',
            description: 'The birth sex of your avatar',
            required: true,
            type: 'STRING'
        },
        {
            name: 'main_power',
            description: 'Your avatars main power',
            required: false,
            type: 'STRING'
        },
        {
            name: 'secondary_power',
            description: 'Your avatars secondary power',
            required: false,
            type: 'STRING'
        },
        {
            name: 'finisher',
            description: 'Your avatars finishing move',
            required: false,
            type: 'STRING'
        },
    ],

    callback: async ({ interaction, guild, user}) => {
        if (!guild) return

        await profileSchema.findOneAndUpdate({
            userID: user.id,
            guildID: guild.id
        }, {
            avatar: {
                name: interaction.options.getString('name'),
                age: interaction.options.getNumber('age'),
                // DoB: interaction.options.getString('DoB'),
                sex: interaction.options.getString('sex'),
                powers: {
                    mainpower: interaction.options.getString('main_power'),
                    secondarypower: interaction.options.getString('secondary_power'),
                    finisher: interaction.options.getString('finisher')
                }
            }
        })
        
        return 'Created avatar!'
    }
} as ICommand