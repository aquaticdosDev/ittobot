const discord = require("discord.js");

const token = process.env.BOT_TOKEN;

const clientInit = require("./handler/client");

const client = new clientInit({ intents: new discord.Intents(32767) });

const config = require("./config.json");

require("./handler/module")(client);
require("./handler/event")(client);


client.on("warn", console.warn);
client.on("error", console.error);
client.login(token)
