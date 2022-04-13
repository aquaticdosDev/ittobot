const discord = require('discord.js');

exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author
    
    embed = new discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor({name: `${user.tag}`, iconURL: `${user.displayAvatarURL()}`})
        .setDescription(`${user} is ${Math.floor(Math.random() * 100)}% gay`)
        .setFooter({text: `requested by ${message.author.tag}`})
        .setTimestamp(new Date())
    message.channel.send({embeds: [embed]})
}

exports.help = {
    name: "howgay"
}

exports.conf = {
    aliases: ["howgay"],
    cooldown: 5000
}