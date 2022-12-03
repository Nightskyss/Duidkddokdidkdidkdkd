const Discord = require('discord.js');
const { color } = require("../../config.json");

module.exports = {
  name: "faq",

  run: async (client, message, args) => {
    if (message.author.id !== '978795950682275850') return;

    const embed = new Discord.MessageEmbed()
      .setAuthor(`bleed`, message.author.avatarURL())
      .setImage('https://media.discordapp.net/attachments/1036462421457502258/1038560701972742244/Screenshot_20221105-170855_CapCut.jpg?width=700&height=427')
      .setTitle(`Getting started with Crow`)
      .setDescription(`To buy Crow bot u must go to the website https://blood-website.shamondbanks.repl.co/ and click "buy bot" join the server and listen to instructions.`)
      .addField(`**Hey There,**`, `\u3000Welcome to the support server for Crow, a multi-purpose Discord bot fitting all communities with an easy-to-use system. This is the landing page to help you get set up and explaining all the commands you need to know.`)
      .addField(`**Why Crow**`, `crow is a sophisticated bot. Unlike many bots, crow focuses on a smooth theme, with ease of access to a wide range of commands that may require multiple bots for. Some of it's notable features include Altdentifier, Autorole,  Modlogs, Custom Prefixes and Welcome Messages, also an easy-to-use embed feature. It's the ultimate all in one Discord bot for all servers.`)
      .addField(`**FAQ**`, `Please reach out to **℥ Sinn#0001** on Discord for priority replies. Additionally, you can join the [support server](https://discord.gg/6N2vRkTq6U) and send a message in the main channel which will automatically alert us.
  If you are not in the support server or would like an alternative option, you may use ,help in any guild, and crow will DM you so you can submit your request and contact the developers through the bot.
Alternatively, direct message ℥ Sinn#0001 with your request.`)
      .setColor(color)
      .setFooter('crow bot')
      .setTimestamp()
    return message.channel.send(embed)
  }
}