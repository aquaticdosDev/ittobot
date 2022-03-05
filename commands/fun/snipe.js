const discord = require("discord.js");
const fs = require("fs");


exports.run = async (client, message, args) => {let data;
    
    if(fs.existsSync(`./commands/general/assets/snipe/${message.channel.id}.json`)){
    } else {
        message.reply("There is no message to snipe (no file exists for this channel)")
        return;
    }
    try {
        let unparsedData = fs.readFileSync(`./commands/general/assets/snipe/${message.channel.id}.json`, 'utf-8')
        let jsondata = JSON.parse(unparsedData)
        data = jsondata
    } catch (error) {
        console.log(error)
    }
        

    let embed = new discord.MessageEmbed()
    .setAuthor({name: `${data.author}`, iconURL: `${data.avatar}`, url: `${data.avatar}`})
    .setColor('RANDOM')
    .setDescription(`${data.msgContent}`)
    .setFooter({text: `requested by ${message.author.tag}   `, iconURL: `${message.author.avatarURL()}`})
    .setTimestamp(new Date())
    message.channel.send({embeds: [embed]})
}

exports.help = {
    name: "snipe"
}

exports.conf = {
    aliases: ["snipe"]
}