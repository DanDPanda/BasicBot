require("dotenv").config();

// This is what is run when the this function is called
exports.run = async (client, message) => {
  const command = message.content.split(" ")[0];
  const target = message.content.split(" ")[1];

  if (
    command.toLowerCase() === "!role" &&
    message.content.split(" ").length === 2
  ) {
    // Prevents the bot from giving access to the these roles.
    if (target === "Admin") {
      return;
    }

    // Gets the actual role details from the server based off of the name
    let role = client.guilds
      .get(process.env.CHANNEL)
      .roles.find(r => r.name === target);

    // Searches
    try {
      client.guilds
        .get(process.env.CHANNEL)
        .fetchMember(message.author)
        .then(member => {
          if (member.roles.some(r => [target].includes(r.name))) {
            member.removeRole(role);
            message.author.send(`${target} was removed from your roles.`);
          } else {
            member.addRole(role);
            message.author.send(`${target} was added to your roles.`);
          }
        });
    } catch (e) {
      console.log("Invalid Role");
    }
  }
};
