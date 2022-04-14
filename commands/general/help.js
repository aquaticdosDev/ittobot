const discord = require("discord.js");

exports.run = async (client, message, args) => {
    let generalCateg = ["```├ i!help - You are currently using this command\n├ i!suggest - suggest something\n└ i!ping - The latency of the bot```"]
    let funCateg = ["```├ i!snipe - snipe the most recent deleted message\n├ i!esnipe - snipe the most recent edited message\n├ i!pfp - Steal someone's profile picture\n└ i!howgay - the command name speaks for itself```"]
    let embed = new discord.MessageEmbed()
    .setTitle("Command List - Itto")
    .setDescription("The list of commands that **Itto** currently has to offer.")
    .addField("General Category", `${generalCateg}`, false)
    .addField("Fun Category", `${funCateg}`, false)
    .setFooter({text: "requested by " + message.author.tag, iconURL: message.author.avatarURL()})
    .setColor(0x39417c)
    message.channel.send({embeds: [embed]})
}


exports.help = {
    name: "help"
}

exports.conf = {
    cooldown: 5000,
    aliases: ["help", "?"]
}