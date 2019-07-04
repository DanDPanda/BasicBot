// This is what is run when the this function is called
exports.run = async (client, message) => {
  const command = message.content.split(" ")[0];
  const question = message.content.split(`"`)[1];
  if (message.channel.type === "dm") {
    return;
  }
  if (
    command.toLowerCase() === "!poll" &&
    message.content.split(`"`).length === 3
  ) {
    message.channel
      .send(question)
      .then(async mess => {
        try {
          await mess.react(`✅`);
          await mess.react(`⛔`);
        } catch (e) {
          console.log("Bad");
        }
      })
      .catch(() => {
        console.log("Error");
      });
  }
};
