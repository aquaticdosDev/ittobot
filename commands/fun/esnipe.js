const discord = require("discord.js");
const db = require("quick.db")


exports.run = async (client, message, args) => {let data;
    if(!db.get(`oldMsg_${message.channel.id}`)) {
        return message.reply("There's no message to snipe\nIf this keeps occuring after deleting a message, contact aeroplaneticdos#0399")
    }
    try {
        let unparsedData = fs.readFileSync(`./commands/general/assets/esnipe/${message.channel.id}.json`, 'utf-8')
        let jsondata = JSON.parse(unparsedData)
        data = jsondata
    } catch (error) {
        console.log(error)
    }
    if(new Date() - Number(data.timestamp) > 14400){ 
        let msg = await message.reply("There is no message to snipe\nIf this message persist after deleting a message, contact **aeroplaneticdos#0399**")
        setInterval(() => msg.delete(), 5000);
        return;
    }

    let embed = new discord.MessageEmbed()
        .setAuthor({name: `${db.get(`author_${message.channel.id}`)}`, iconURL: `${db.get(`authorAv_${message.channel.id}`)}`})
        .setColor('RANDOM')
        .setFooter({text: `Requested by ${message.author.tag}`})
        .setTimestamp(new Date(db.get(`timestamp_${message.channel.id}`)))
        .addField("Old content:", `${db.get(`oldMsg_${message.channel.id}`)}`, false)
        .addField("New content:", `${db.get(`newMsg_${message.channel.id}`)}`, false)
        
        
    message.channel.send({embeds: [embed]})
}

exports.help = {
    name: "esnipe"
}

exports.conf = {
    aliases: ["esnipe", "es"],
    cooldown: 1
}
