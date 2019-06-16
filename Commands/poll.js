// This is what is run when the this function is called
exports.run = async (client, message) => {
  if (message.channel.type === "dm") {
    return;
  }
  if (
    message.content.split(" ")[0].toLowerCase() === "!poll" &&
    message.content.split(`"`).length === 3
  ) {
    message.channel
      .send(message.content.split(`"`)[1])
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
