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

const actual_icons = [
  "1️⃣",
  "2️⃣",
  "3️⃣",
  "4️⃣",
  "5️⃣",
  "6️⃣",
  "7️⃣",
  "8️⃣",
  "9️⃣",
  "🔟"
];

const createCombinedMessage = (question, votes) => {
  let combinedMessage = "```\n";
  combinedMessage += `${question}\n\n`;
  for (let i = 0; i < votes.length - 1; i++) {
    combinedMessage += `${actual_icons[i]}: ${votes[i + 1]}\n`;
  }
  combinedMessage += "```";
  return combinedMessage;
};

exports.run = async (client, message) => {
  if (message.channel.type === "dm") {
    return;
  }

  const command = message.content.split(" ")[0];
  const question = message.content.split(`"`)[1];
  const votes = message.content.split(`"`)[2].split(` `);

  if (
    command.toLowerCase() === "!vote" &&
    message.content.split(`"`).length === 3 &&
    votes.length > 1 &&
    votes.length <= 10
  ) {
    const combinedMessage = createCombinedMessage(question, votes);
    message.channel
      .send(combinedMessage)
      .then(async mess => {
        for (let i = 0; i < votes.length - 1; i++) {
          await mess.react(icons[i]);
        }
      })
      .catch(() => {
        console.log("Error");
      });
  }
};
