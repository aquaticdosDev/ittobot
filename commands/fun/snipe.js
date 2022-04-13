const discord = require("discord.js");
const fs = require("fs");


exports.run = async (client, message, args) => {let data;
    
    if(fs.existsSync(`./commands/general/assets/snipe/${message.channel.id}.json`)){
    } else {
        let msg = message.reply("There is no message to snipe\nIf this message persist after deleting a message, contact **aeroplaneticdos#0399**")
            setInterval(() => msg.delete(), 5000)
        return;
    }
    try {
        let unparsedData = fs.readFileSync(`./commands/general/assets/snipe/${message.channel.id}.json`, 'utf-8')
        let jsondata = JSON.parse(unparsedData)
        data = jsondata
    } catch (error) {
        console.log(error)
    }
    if(new Date() - Number(data.timestamp) > 1000){ 
        let msg = await message.reply("There is no message to snipe\nIf this message persist after deleting a message, contact **aeroplaneticdos#0399**")
        setInterval(() => msg.delete(), 5000);
        return;
    }
    let embed = new discord.MessageEmbed()
        .setAuthor({name: `${data.author}`, iconURL: `${data.avatar}`, url: `${data.avatar}`})
        .setColor('RANDOM')
        .setDescription(`${data.msgContent}`)
        .setFooter({text: `requested by ${message.author.tag}`})
        .setTimestamp(Number(data.timestamp))
    message.channel.send({embeds: [embed]})
}

exports.help = {
    name: "snipe"
}

exports.conf = {
    aliases: ["snipe", "s"],
    cooldown: 1000
}