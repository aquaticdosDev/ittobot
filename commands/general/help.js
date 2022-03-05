const discord = require("discord.js");

exports.run = async (client, message, args) => {
    let generalCateg = ["```├ a.help - You are currently using this command\n└ a.ping - The latency of the bot```"]
    let funCateg = ["```├ a.snipe - snipe someone's messages\n└ a.pfp - Steal someone's profile picture```"]
    

    let embed = new discord.MessageEmbed()
    .setTitle("Command List - [soon]")
    .setDescription("The list of commands that [undefined] has to offer.")
    .setColor(0x39417c)
    .addField("General Category", `${generalCateg}`, false)
    .addField("Fun Category", `${funCateg}`, false)
    .setFooter({text: "soon:tm:"})
    .setTimestamp(new Date());
    message.channel.send({embeds: [embed]})

}


exports.help = {
    name: "help"
}

exports.conf = {
    aliases: ["help"]
}