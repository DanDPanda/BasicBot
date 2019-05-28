const Discord = require("discord.js");
const bot = new Discord.Client();
require("dotenv").config();

try {
  bot.login(process.env.DISCORD);
} catch (e) {
  console.log("Discord is down");
}

// Message the bot displays when ready
bot.on("ready", () => {
  console.log("Bot Online");
  bot.user.setActivity("this as an absolute win", { type: 3 });
});

// This reads the message and sends the appropriate command
bot.on("message", message => {
  let commandFile = require(`./message.js`);
  commandFile.run(message);
});
