let fs = require("fs")

module.exports = async (client,message) => {
    if(message.author.bot) return;
    let content = { msgContent: `${message.content}`, 
        author: `${message.author.username}`, 
        avatar: `${message.author.avatarURL()}`, 
        timestamp: `${new Date}`
    }
    try{ 
    fs.writeFileSync(`./commands/general/assets/snipe/${message.channel.id}.json`, JSON.stringify(content), 'utf-8')
} catch (error) {
    console.log("write: " + error)
}
      
}