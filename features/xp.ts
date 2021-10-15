import { Client, Message, TextChannel, User } from "discord.js";
import profileSchema from "../models/profileSchema";
import { }

const xpData = {} as {
    // userID: [xp]
    [key: string]: [number]
}

export default (client: Client, user: User) => {
    client.on('message', async message => {
        
        let data = xpData[user.id]

        if (!data) {
            const results = await profileSchema.findById(user.id)
            if (!results) {
                
            }
        }
    })
}