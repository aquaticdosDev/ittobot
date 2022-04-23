const discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {
    
    if(!db.get(`msg_${message.channel.id}`) && !db.get(`attachment_${message.channel.id}`)) {
        return message.reply("There's no message to snipe\nIf this keeps occuring after deleting a message, contact aeroplaneticdos#0399")
    }
    
    let embed = new discord.MessageEmbed()
        .setAuthor({name: `${db.get(`author_${message.channel.id}`)}`, iconURL: `${db.get(`authorAv_${message.channel.id}`)}`})
        .setColor('RANDOM')
        .setFooter({text: `requested by ${message.author.tag}`})
        .setTimestamp(new Date(db.get(`timestamp_${message.channel.id}`)))
        if(db.get(`msg_${message.channel.id}`)){
            embed.setDescription(`${db.get(`msg_${message.channel.id}`)}`)
        }
        if(db.get(`attachment_${message.channel.id}`)){
            embed.setImage(db.get(`attachment_${message.channel.id}`))
        }
    message.channel.send({embeds: [embed]})

}

exports.help = {
    name: "snipe"
}

exports.conf = {
    aliases: ["snipe", "s"],
    cooldown: 1
}