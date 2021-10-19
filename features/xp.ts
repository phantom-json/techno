import { Client, Message, TextChannel, User } from "discord.js";
import { userAddRandxp, userProfileAdd } from "../functions";


const xpData = {} as {
    // userID: [xp]
    [key: string]: [number]
}

export default (client: Client, user: User) => {
    client.on('messageCreate', async message => {
        
        if (message.author.bot) {
            return
        }
        
        const user = message.author
        userAddRandxp(user)

        console.log(`added xp to ${user.tag}`)
    })
} 

export const config = {
    displayName: 'message xp',
    dbName: 'MESSAGE_XP'
}