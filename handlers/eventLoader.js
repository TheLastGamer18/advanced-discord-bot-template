const fs = require("fs");

module.exports = async(client) => {
    
  fs.readdirSync(`./events/`).forEach((dir) => {
    
    fs.readdir(`./events/${dir}/`, async (err, files) => {
        if(err) {
          console.log(`EventLoader Error: ${err}`);
        };
        
        files.forEach(f => {
          
          let eventName = f.split(".")[0];
          let event = require(`../events/${dir}/${f}`);
          
          client.on(eventName, event.bind(null, client));
         
      });
    });
  });
  
  console.log(`EventLoader: Loaded all events successfully!`);
  
};
