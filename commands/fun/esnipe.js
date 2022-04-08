const discord = require("discord.js");
const fs = require("fs");


exports.run = async (client, message, args) => {let data;
    
    if(fs.existsSync(`./commands/general/assets/esnipe/${message.channel.id}.json`)){
    } else {
        message.reply("There is no message to snipe (no file exists for this channel)")
        return;
    }
    try {
        let unparsedData = fs.readFileSync(`./commands/general/assets/esnipe/${message.channel.id}.json`, 'utf-8')
        let jsondata = JSON.parse(unparsedData)
        data = jsondata
    } catch (error) {
        console.log(error)
    }
        

    let embed = new discord.MessageEmbed()
    .setAuthor({name: `${data.author}`, iconURL: `${data.avatar}`, url: `${data.avatar}`})
    .setColor('RANDOM')
    .addField("Old message:",`${data.oldContent}`, false)
    .addField("New message:",`${data.newContent}`, false)
    .setTimestamp(new Date(data.timestamp))
    .setFooter({text: `requested by ${message.author.tag}   `, iconURL: `${message.author.avatarURL()}`})
    message.channel.send({embeds: [embed]})
}

exports.help = {
    name: "esnipe"
}

exports.conf = {
    aliases: ["esnipe"]
}
