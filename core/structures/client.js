const { Client, Intents, Collection } = require("discord.js");

class Bot extends Client {
  
  constructor() {
    super({ ws: { intents: Intents.NON_PRIVILEGED } });
    
    this.config = require("../../config/config");
    this.commands = new Collection();
    this.aliases = new Collection();
    
  };
  
  run() {
    
   ["eventLoader", "commandLoader"].forEach(loader => {
     require(`../../handlers/${loader}`)(this);
   })
    
    this.login(this.config.token).catch(console.log);
    
  };
  
};

module.exports = Bot;
