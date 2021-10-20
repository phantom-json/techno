import { ICommand } from "wokcommands";
import { randID } from "../../functions";
import shopSchema from "../../models/shopSchema";

export default {
    category: 'Configuration',
    description: 'Create a new item in the shop',

    ownerOnly: true,
    testOnly: true,
    slash: true,
    hidden: true,
    
    expectedArgs: '<name> <price> <description>',
    expectedArgsTypes: ['STRING', 'STRING', 'STRING'],

    callback: async ({ interaction }) => {
        const name = interaction.options.getString('name')
        const price = interaction.options.getString('price')
        const description = interaction.options.getString('description')
        const ItemName = name?.split(' ').join('_')
        await shopSchema.findOneAndUpdate({
            ItemName,
        }, {
            ItemName,
            item: {
                name: name,
                description: description,
                price: price,
                enabled: true, 
            }
            
        }, {
            upsert: true,
        })

        return {
            custom: true,
            content: `added ${name} to the store for $${price}, to see this item use /shop`,
            ephemeral: true
        }
    }

} as ICommand