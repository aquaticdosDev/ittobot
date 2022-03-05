const discord = require("discord.js");

exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author
    
    let avatar = user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 });
    let embed = new discord.MessageEmbed()
        .setAuthor({name: `${user.tag}`, iconURL: `${avatar}`})
        .setColor("RANDOM")
        .setImage(avatar)
        .setFooter({text: `requested by ${message.author.tag}   `, iconURL: `${message.author.avatarURL()}`})
        .setTimestamp(new Date())
        message.channel.send({embeds: [embed]})
}

exports.conf = {
    aliases: ["pfp"]
}

exports.help = {
    name: "pfp"
}