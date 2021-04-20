module.exports = async(client, message) => {

  if(message.author.bot || !message.guild) {
    return;
  }

  if(!message.content.startsWith(client.config.prefix)) {
    return;
  };

  let args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();
  let command = await client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  if(command) {
    try {
      command.run(client, message, args);
    }
    catch(e) {
      return console.log(`[CommandLog Error]: ${e}`);
    }
  };

};
