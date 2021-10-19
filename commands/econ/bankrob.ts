import { ICommand } from "wokcommands";
import { Interaction, Message, MessageEmbed } from "discord.js";
import random from "random";

export default {
    category: 'Economy',
    description: 'Take a chance to rob a bank and see what you get!',

    guildOnly: true,
    testOnly: true,
    slash: true,

    cooldown: '7d',

    callback: ({ interaction, message, args }) => {
        const chance = random.int(0, 50)
        console.log(chance)

        if (chance <= 1) {
            const coins = random.int(1000, 10000)

            return `You got lucky! the bank hasn't emptied the vault yet\nYou got: $${coins}`
        } else {
            const coins = random.int(50, 100)
            const answers = random.int(1, 4)
    
            const embed = new MessageEmbed()
                .setTitle('Bank Rob')
                .setColor('GREEN')
    
            const description = [
                `Its a shame really, the bank emptied the vault that morning\nYou grabbed $${coins} from the managers wallet`,
                `There was a complication with the plan and you had to leave early\nOn the way out you grabbed $${coins} from an old lady walking her dog.`,
                `You role up to the bank only to realise you picked up the guns but no bullets, using what you have you managed to grab $${coins} from a terrified cashier`,
                `Luck really wasn't on your side today, you try robbing the bank only to find another crew walking out with your funds, you grabbed $${coins} from the ground and run before you are spotted`,
                `Today you realized you sucked at your job, after robbing the bank you crashed head first into a police station escaping with only $${coins}`,
            ]
            embed.setDescription(`${description}`[answers - 1])

            return embed
        }
    }

} as ICommand