import { Mongoose } from "mongoose";
import { ICommand } from "wokcommands";
import { userProfileAdd } from "../../functions";
import profileSchema from "../../models/profileSchema";

export default {
    category: 'Testing',
    description: 'Simulate a join',

    slash: false,
    testOnly: true,
    ownerOnly: true,

    callback: async ({ member, client, user, guild}) => {
        client.emit('guildMemberAdd', member)
        if (!guild) return
        userProfileAdd(user, guild)
        
    }

} as ICommand