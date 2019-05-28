const Discord = require("discord.js");
const bot = new Discord.Client();
require('dotenv').config();

try {
  bot.login(process.env.DISCORD);
} catch {
  console.log("Discord is down");
}
