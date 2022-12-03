const db = require('quick.db')
const Discord = require('discord.js');

module.exports = {
    name : 'afk',
    category: "utility",
    usage: "afk",

    run : async(client, message, args) => {
        const content = args.join(" ") ? args.join(' ') : "AFK"
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        
        const afkEmbed = new Discord.MessageEmbed()
        .setColor("#04ff00")
        .setDescription(`<:AFK:1038117236684103790> ${message.author}: You're now AFK with the status: **${content}**`)
        message.channel.send(afkEmbed)                
    }
}