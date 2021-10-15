import { Client, Message, TextChannel, User } from "discord.js";
import { userAddRandxp, userProfileAdd } from "../functions";
import profileSchema from "../models/profileSchema";


const xpData = {} as {
    // userID: [xp]
    [key: string]: [number]
}

export default (client: Client, user: User) => {
    client.on('messageCreate', async message => {
        const user = message.author
        userAddRandxp(user)

        console.log(`added xp to ${user.tag}`)
    })
}