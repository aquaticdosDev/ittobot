let fs = require("fs")

module.exports = async (client,message, newMessage, oldMessage) => {
    if(message.author.bot) return;
    if(message.content.includes("https://")) return;
    let content = { 
        oldContent: `${message.content}`,
        newContent: `${newMessage}`, 
        author: `${message.author.username}`, 
        avatar: `${message.author.avatarURL()}`,
        timestamp: `${new Date}`
    }
    try{ 
    fs.writeFileSync(`./commands/general/assets/esnipe/${message.channel.id}.json`, JSON.stringify(content), 'utf-8')
    
} catch (error) {
    console.log("write: " + error)
}
      
}