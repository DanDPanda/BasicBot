const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

try {
  client.login(process.env.DISCORD);
} catch (e) {
  console.log("Discord is down");
}

// Message the client displays when ready
client.on("ready", () => {
  console.log("Bot Online");
  client.user.setActivity("this as an absolute win", { type: 3 });
});

// This reads the message and sends the appropriate command
client.on("message", message => {
  let commandFile = require(`./message.js`);
  commandFile.run(client, message);
});
