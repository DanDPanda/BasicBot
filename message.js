// This is what is run when the this function is called
exports.run = async message => {
  if (message.content.split(" ")[0][0] === "!") {
    try {
      let commandFile = require(`./Commands/${message.content
        .split(" ")[0]
        .slice(1)}`);
      commandFile.run(message);
    } catch (e) {
      conosle.error("Command doesn't exist.");
    }
  }
};
