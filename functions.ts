import { Interaction, User, Message, Guild } from "discord.js";
import profileSchema from "./models/profileSchema";
import random from "random"
import shopSchema from "./models/shopSchema";


export async function userProfileAdd(user: User, guild: Guild) {
    await profileSchema.insertMany({
        userID: user.id,
        guildID: guild.id,
        
        inventory: {
            xp: 0,
            rank: 0,
            coins: 0,
            bank: 0,
            // items: {},
        },
        
        avatar: {
            name: 'null',
            age: 0,
            sex: 'null',
            powers: {
                mainpower: null,
                secondarypower: null,
                finisher: null,
            }
        }
    })
}

export async function userAddRandxp(user: User, guild: Guild) {
    let xp = random.int(15, 30)
    
    await profileSchema.findOneAndUpdate({
        userID: user.id,
        guildID: guild.id,
    }, {
        userID: user.id,
        guildID: guild.id,
        $inc: {
            xp,
        },
        level: 0,
        coins: 0,
        bank: 0,
    }, {
        upsert: true
    })
}

export async function findUser(user:User, guild: Guild) {
    await profileSchema.findOne({
        userID: user.id,
        guildID: guild.id,
    })
}

export function randID() {

}