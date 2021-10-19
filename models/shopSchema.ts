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
    _id: reqString,
    items: {
        item: {
            enabled: reqBool,
            price: reqNumber,
            description: reqString,
        },
        // fish: {
        //     enabled: reqBool,
        //     price: reqNumber,
        //     description: reqString,
        // },
        // chains: {
        //     enabled: reqBool,
        //     price: reqNumber,
        //     description: reqString,
        // },
        // lock: {
        //     enabled: reqBool,
        //     price: reqString,
        //     description: reqString
        // },
        // fidgetSpinner: {
        //     enabled: reqBool,
        //     price: reqNumber,
        //     description: reqString,
        // },
        // alcohol: {
        //     enabled: reqBool,
        //     price: reqNumber,
        //     description: reqString,
        // },
        // technoCoin: {
        //     enabled: reqBool,
        //     price: reqNumber,
        //     description: reqString,
        // },
        // technoMedal: {
        //     enabled: reqBool,
        //     price: reqNumber,
        //     description: reqString,
        // },
        // technoCrown: {
        //     enabled: reqBool,
        //     price: reqNumber,
        //     description: reqString,
        // },
    }
})

const name = 'guild-shop'
export default mongoose.models[name] || mongoose.model(name, shopSchema, name)