import { Client, Interaction, TextChannel, User, Guild} from "discord.js";
import profileSchema from "../models/profileSchema";
import welcomeSchema from "../models/welcome-schema";
import { userProfileAdd } from "../functions"

const welcomeData = {} as {
    // guildID: [channel, message]
    [key: string]: [TextChannel, string]
}
export default (client: Client, user: User, guild: Guild) => {
    client.on('guildMemberAdd', async member => {
        const { guild, id, user} = member

        let data = welcomeData[guild.id]

        if (!data) {
            const results = await welcomeSchema.findById(guild.id)
            if (!results) {
                return
            }

            const { channelId, text } = results
            const channel = guild.channels.cache.get(channelId) as TextChannel
            data = welcomeData[guild.id] = [channel, text]
        }
        
        data[0].send({
            content: data[1].replace(/@/g, `<@${id}>`),
        })
        
        userProfileAdd(user, guild)

        
    })
}


export const config = {
    displayName: 'Welcome Channel',
    dbName: 'WELCOME_CHANNEL'
}