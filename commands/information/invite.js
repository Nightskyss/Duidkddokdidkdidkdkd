const Discord = require('discord.js');
const { color } = require("../../config.json");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  category: "information",

  run: async (client, message, args) => {

    const inviteEmbed = new Discord.MessageEmbed()
      .setTitle(`Invite ${client.user.username}`)
      .setDescription(`Want to invite ${client.user.username}? Click [__here__](https://discord.gg/jSSXbDvZwV)`)
      .setColor(color)
      .setFooter(`Default Prefix: , | Customizable`, message.author.displayAvatarURL({
        dynamic: true
    }))
    return message.channel.send(inviteEmbed)
  }
}
