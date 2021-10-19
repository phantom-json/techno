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

    callback: async ({ member, client, user}) => {
        client.emit('guildMemberAdd', member)

        const data = await profileSchema.findById({
            _id: user.id
        })
        if (data) {
            console.log(data)
        }
    
        userProfileAdd(user)
        
    }

} as ICommand