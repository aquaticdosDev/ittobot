const discord = require("discord.js")

exports.run = async (client, message, args) => {
    var msg = await message.channel.send("hold on")
    var time = msg.createdTimestamp - message.createdTimestamp;

    const embed = new discord.MessageEmbed()
    .setAuthor({name: "Latency - Itto", iconURL: `${client.user.displayAvatarURL()}`})
    .addField("🏓 Ping", `${time}ms`, true)
    .addField("📡 API Latency", `${Math.round(client.ws.ping)}ms`, true)
    .setTimestamp(new Date())
    .setFooter({text: `requested by ${message.author.tag}   `, iconURL: `${message.author.avatarURL({ dynamic: true})}`})
    message.reply({embeds: [embed]})
    msg.delete()
    
}

exports.help = {
    name: "ping"
}

exports.conf = {
    aliases: ["ping", "latency"]
}