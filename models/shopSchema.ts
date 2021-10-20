import mongoose, { Schema } from 'mongoose';

const reqString = {
    type:String,
    required: true
}

const reqNumber = {
    type:Number,
    required: true,
}

const reqBool = {
    type: Boolean,
    required: true,
}

const shopSchema = new Schema({
    ItemName: reqString,
    item: {
        name: reqString,
        description: reqString,
        price: reqString,
        enabled: reqBool,
    }
})

const name = 'guild-shop'
export default mongoose.models[name] || mongoose.model(name, shopSchema, name)