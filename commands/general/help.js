const discord = require("discord.js");

exports.run = async (client, message, args) => {
    let generalCateg = ["```├ i!help - You are currently using this command\n└ i!ping - The latency of the bot```"]
    let funCateg = ["```├ i!snipe - snipe the most recent deleted message\n├ i!snipe - snipe the most recent edited message\n└ i!pfp - Steal someone's profile picture```"]
    if(client.config.owners.includes(message.author.id)){
        let dev = ["```├ i!change - Changes the bot's username or avatar\n└ i!eval - evaluates```"]
    }
    let embed = new discord.MessageEmbed()
    .setTitle("Command List - Itto")

    .setDescription("The list of commands that **Itto** currently has to offer.")
    .setColor(0x39417c)
    .addField("General Category", `${generalCateg}`, false)
    .addField("Fun Category", `${funCateg}`, false)
    .setFooter({text: "requested by " + message.author.tag, iconURL: message.author.avatarURL()})
    .setTimestamp(new Date());
    message.channel.send({embeds: [embed]})

}


exports.help = {
    name: "help"
}

exports.conf = {
    aliases: ["help"]
}