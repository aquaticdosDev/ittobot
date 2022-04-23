const discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {
    
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
    if(new Date() - Number(data.timestamp) > 14400){ 
        let msg = await message.reply("There is no message to snipe\nIf this message persist after deleting a message, contact **aeroplaneticdos#0399**")
        setInterval(() => msg.delete(), 5000);
        return;
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
    cooldown: 1000
}