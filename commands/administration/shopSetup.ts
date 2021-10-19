import { ICommand } from "wokcommands";#
import shopSchema from "../../models/shopSchema";
    
export default {
    category: 'Configuration',
    description: 'Set the price and description of the bot item',

    minArgs: 3,
    expectedArgs: '<item> <price> <description>',
    slash: 'both',
    testOnly: true,
    requireRoles: true,
    options: [
        {
            name: 'item',
            description: 'The item you wish to edit',
            required: true,
            type: 'STRING',
        },
        {
            name: 'price',
            description: 'The price of the item',
            required: true,
            type: 'NUMBER'
        },
        {
            name: 'description',
            description: 'The description of the item',
            required: false,
            type: 'STRING',
        },
    ],

    callback: async ({ message, interaction, args, guild}) => {
        const item = message ? args[0] : interaction.options.getString('item')
        const price = message ? args[1] : interaction.options.getNumber('price')
        const description = message ? args[2] : interaction.options.getString('description')   
    }

} as ICommand