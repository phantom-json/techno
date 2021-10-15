import { ICommand } from "wokcommands";
import { userAddxp } from "../../functions";

export default {
    category: 'Testing',
    description: 'Simulate a join',

    requiredPermissions: ['ADMINISTRATOR'],

    slash: false,
    testOnly: true,

    callback: ({ member, client }) => {
        client.emit('guildMemberAdd', member)
    }

} as ICommand