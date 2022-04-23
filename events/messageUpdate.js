const db = require("quick.db");

module.exports = async (client, message, newMessage, oldMessage) => {
    if(message.author.bot) return;
    if(message.content.includes("https://")) return;

    ``

    if(message.content) {
        db.set(`oldMsg_${message.channel.id}`, message.content)
        db.set(`newMsg_${message.channel.id}`, newMessage.content)
    }
    else {
        db.delete(`oldMsg_${message.channel.id}`)
    }

    db.set(`author_${message.channel.id}`, `${message.author.tag}`)
    db.set(`timestamp_${message.channel.id}`, `${new Date()}`)
    db.set(`authorAv_${message.channel.id}`, message.author.avatarURL())
}