exports.run = async(client, message, args) => {
  
  let start = Date.now();
  message.channel.send("Fetching ping...").then(m => {
    let end = Date.now()
    m.edit(`API Ping: ${client.ws.ping} ms\nLatency: ${Math.round(end - start)} ms`)
  });

};

exports.config = {
  name: "ping",
  aliases: ["pong"]
};
