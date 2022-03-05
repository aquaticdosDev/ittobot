const discord = require("discord.js");

exports.run = async( client, message, args ) => {
    if(!client.config.owners.includes(message.author.id)){
        return;
    }
    if(!args[0]) {
        return message.reply("what do you want to change?\nusername or avatar? (use the cmd again)");
    }
    switch(args[0]) {
        case "username":
            if(!args[1]) {
                return message.reply("what do you want to change the username to? (use the cmd again)");
            }
            client.user.setUsername(`${args[1]}`);
        break;
        case "avatar":
            if(!args[1]) {
                return message.reply("what do you want to change the avatar to? (use the cmd again)");
            }

            client.user.setAvatar(`${args[1]}`);
        break;
        case "status":
            if(!args[1]) {
                return message.reply("what do you want to change the status to? (use the cmd again)");
            }
            client.user.setActivity(`${args.slice(1).join(" ")}`);
    }
    
}

exports.help = {
    name: "change",
    description: "changes the bot's username or avatar"
}

exports.conf = {
    aliases: ["chg"],
}