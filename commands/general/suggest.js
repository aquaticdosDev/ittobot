const discord = require("discord.js");

exports.run = async(client,message,args) => {
    let embed;
    let msgChannel;
    let suggestion = args.slice(1).join(" ")
    let attachment = message.attachments.first();
    if(!args[0]) {
        return message.reply("What kind of suggestion do you want to make?\nBot suggestion or server suggestion?")
    }

    try {
    switch(args[0]) {
        case "bot": 
            msgChannel = await client.channels.cache.get("951580343260033125")
            embed = new discord.MessageEmbed()
                .setAuthor({name: `Bot suggestion`, iconURL: `${message.author.displayAvatarURL()}`})
                .setDescription(`${suggestion}`)
                .setFooter({text: `Suggested by: ${message.author.tag}`})
                .setTimestamp(new Date())
                .setColor(0x3994d5)
            if(attachment) {
                embed.setImage(attachment.url)
            }
        break;
        case "server":
            msgChannel = await client.channels.cache.get("951580330387701780")
            embed = new discord.MessageEmbed()
                .setAuthor({name: `Server suggestion`, iconURL: `${message.author.displayAvatarURL()}`})
                .setDescription(`${suggestion}`)
                .setFooter({text: `Suggested by: ${message.author.tag}`})
                .setTimestamp(new Date())
                .setColor(0x3994d5)
                if(attachment) {
                    embed.setImage(attachment.url)
                }
        break;
    };

    
    if(!suggestion) {
        return message.channel.send("Please include a suggestion")
    }
 
    let msg = await msgChannel.send({embeds: [embed]})
    msg.react("👍")
    msg.react("❔")
    msg.react("👎")
    message.react("📩")
    } catch(error) {
        message.react("❌")  
    }
}

exports.conf = {
    aliases: [],
    cooldown: 10
}

exports.help = {
    name: "suggest"
}