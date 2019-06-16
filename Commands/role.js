// This is what is run when the this function is called
exports.run = async message => {
  if (
    message.content.split(" ")[0].toLowerCase() === "!role" &&
    message.content.split(" ").length === 2
  ) {
    const target = message.content.split(" ")[1];
    if (message.member.roles.some(r => [target].includes(r.name))) {
      message.channel.send("True");
    } else {
      message.channel.send("False");
    }
  }
};
