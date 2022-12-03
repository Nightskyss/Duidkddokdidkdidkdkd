const client = require('../bleed')

client.on("ready", () => {
  console.log(`${client.user.username} is now up and running!`);
  client.user.setActivity(`clear`, {
    type: "PLAYING",
    url: "https://www.twitch.tv/discord"
  })
})