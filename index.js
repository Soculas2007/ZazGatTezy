const Discord = require("discord.js)
const client = new Discord.Client({partials: ['GUILDS',
'GUILD_MESSAGE_REACTIONS',
'GUILD_MESSAGES',
'GUILD_INVITES',
'GUILD_VOICE_STATES',
'GUILD_MEMBERS',
'GUILD_PRESENCES'], intents: 32767});

client.login(process.env.token)
client.on("ready", () =>{
  console.log("onnnn")
})
