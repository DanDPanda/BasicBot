// This is what is run when the this function is called
exports.run = async message => {
  if (
    message.content.split(" ")[0].toLowerCase() === "!role" &&
    message.content.split(" ").length === 2
  ) {
    // Gets the string of the role name
    const target = message.content.split(" ")[1];

    // Prevents the bot from giving access to the these roles.
    if (target === "Admin") {
      return;
    }

    // Gets the actual role details from the server based off of the name
    let role = message.guild.roles.find(r => r.name === target);

    // Searches
    try {
      if (message.member.roles.some(r => [target].includes(r.name))) {
        message.member.removeRole(role);
        message.author.send(`${target} was removed from your roles.`);
      } else {
        message.member.addRole(role);
        message.author.send(`${target} was added to your roles.`);
      }
    } catch (e) {
      console.log("Invalid Role");
    }
  }
};
