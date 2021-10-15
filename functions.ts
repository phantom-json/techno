import { Interaction, User, Message, } from "discord.js";
import profileSchema from "./models/profileSchema";
import random from "random"

export async function userProfileAdd(user: User) {
    await profileSchema.insertMany({
        _id: user.id,
        userID: user.tag,
        xp: 0,
        level: 0,
        coins: 0,
        bank: 0,
    })
}

export async function userAddRandxp(user: User) {
    let xp = random.int(15, 30)
    
    await profileSchema.findByIdAndUpdate({
        _id: user.id,
    }, {
        userID: user.tag,
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

export async function userAddxp(user:User, args:string[]) {
    args.shift()
    console.log(args.shift)
    const xp = parseInt(args[1])
}