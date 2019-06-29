// This is what is run when the this function is called
exports.run = async (client, message) => {
  const icons = [
    `\u0031\u20E3`,
    `\u0032\u20E3`,
    `\u0033\u20E3`,
    "\u0034\u20E3",
    "\u0035\u20E3",
    "\u0036\u20E3",
    "\u0037\u20E3",
    "\u0038\u20E3",
    "\u0039\u20E3",
    "🔟"
  ];

  if (message.channel.type === "dm") {
    return;
  }
  if (
    message.content.split(" ")[0].toLowerCase() === "!vote" &&
    message.content.split(`"`).length === 3 &&
    message.content.split(`"`)[2].split(` `).length > 1 &&
    message.content.split(`"`)[2].split(` `).length <= 10
  ) {
    let combinedMessage = "```";
    combinedMessage += message.content.split(`"`)[1] + "\n";
    for (
      let i = 0;
      i < message.content.split(`"`)[2].split(` `).length - 1;
      i++
    ) {
      combinedMessage += `${icons[i]}: ${
        message.content.split(`"`)[2].split(` `)[i + 1]
      }\n`;
    }
    combinedMessage += "```";
    message.channel
      .send(combinedMessage)
      .then(async mess => {
        try {
          for (
            let i = 0;
            i < message.content.split(`"`)[2].split(` `).length - 1;
            i++
          ) {
            await mess.react(icons[i]);
          }
        } catch (e) {
          console.log("Bad usage of the vote");
        }
      })
      .catch(() => {
        console.log("Error");
      });
  }
};
