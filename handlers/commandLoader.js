const fs = require("fs");

module.exports = async(client) => {
  
  fs.readdirSync("./commands/").forEach(dir => {
    
    fs.readdir(`./commands/${dir}`, (err, files) => {
      
      if(err) {
        console.log(`CommandLoader Error: ${err}`);
      };
      
      files.forEach(f => {
        
        let command = require(`../commands/${dir}/${f}`);
        
        if(command.config.name) {
          client.commands.set(command.config.name, command);
        } else {
          command.config.name = ""
        };
        
        if(command.config.aliases && Array.isArray(command.config.aliases)) {
          command.config.aliases.forEach(alias => {
            client.aliases.set(alias, command.config.name)
          })
        } else {          
          command.config.aliases = [];
        };
        
      });
    });
  });
  
  console.log(`CommandLoader: Commands loaded successfully!`)
  
};
