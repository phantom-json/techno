import { GuildMember } from "discord.js";
import { ICommand } from "wokcommands";
import profileSchema from "../../models/profileSchema";
import { userAddRandxp } from "../../functions";

export default {
    category: 'Economy',
    description: 'Add coins to a users balance',

    minArgs: 1,
    expectedArgs: '<user> <random> <xp>',
    expectedArgsTypes: ['USER', 'BOOLEAN','NUMBER'],
    
    guildOnly: true,
    testOnly: true,
    slash: true,

    callback: async ({message, interaction, args, guild, user}) => {
        if(!guild) {
            return 'Please run this command in a server'
        }

        const userID = message ? message.mentions.members?.first() : interaction.options.getMember('user') as GuildMember 

        if (!userID) {
            return 'Pease tag someone to add coins too'
        }

        const random = message ? args[0] : interaction.options.getBoolean('random')

        if (!random) {
            return 'please follow our formatting\n"?addxp @<user> Random:<true/false> Amount:<xp>"'
        }

        if (random == true) {
            userAddRandxp(user, guild)
        }

        args.shift()
        const xp = parseInt(args[1])

        if(!xp || isNaN(xp)) {
            return 'Please set a valid xp'
        }

        await profileSchema.findOneAndUpdate({
            userID: userID.id,
            guildID: guild.id,
        }, {
            userID: user.tag,
            guildID: guild.id,
            inventory: {
                $inc: {
                    xp,
                },
                level: 0,
                coins: 0,
                bank: 0
            }
        }, {
            upsert: true
        })
        
        return `Added ${xp}xp to user <@${userID}>`
    }
} as ICommand