
let db = require("quick.db");

module.exports = async (client,message) => {
    if(message.author.bot) return;
    
    if(message.attachments.first()) {
        if(message.attachments.first().url.includes(".mp4")) {
            db.delete(`attachment_${message.channel.id}`)
        } else {
            db.set(`attachment_${message.channel.id}`, message.attachments.first().url)
        }
    } else {
        db.delete(`attachment_${message.channel.id}`)
    }
    if(message.content) {
        db.set(`msg_${message.channel.id}`, message.content)
    } else {
        db.delete(`msg_${message.channel.id}`)
    }
    db.set(`author_${message.channel.id}`, `${message.author.tag}`)
    db.set(`timestamp_${message.channel.id}`, `${new Date()}`)
    db.set(`authorAv_${message.channel.id}`, message.author.avatarURL())
};