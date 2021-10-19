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

    xp: {
        xp: reqNum,
        rank: reqNum,
    },

    coins: {
        coins: reqNum,
        bank: reqNum,
    },

    avatar: {
        name: reqString,
        age: reqNum,
        // DoB: reqString, - non functional|returns null
        sex: reqString,
        powers: {
            mainpower: {
                type: String,
            },
            secondarypower: {
                type: String,
            },
            finisher: {
                type: String
            }

        }
    }
})

const name = 'user-profiles'
export default mongoose.models[name] || mongoose.model(name, profileSchema, name)