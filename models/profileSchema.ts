import { Guild } from 'discord.js';
import mongoose, { Schema } from 'mongoose';

const reqString = {
    type: String,
    required: true,
}
const reqNum = {
    type: Number,
    required: true,
}

const profileSchema = new Schema({
    _id: reqString,
    userID: reqString,
    xp: reqNum,
    level: reqNum,
    coins: reqNum,
    bank: reqNum
})

const name = 'user-profiles'
export default mongoose.models[name] || mongoose.model(name, profileSchema, name)