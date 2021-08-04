///// REQUIRE /////
const {
    MessageType
  } = require('@adiwajshing/baileys')
  const simple = require('../lib/simple.js')
  const fs = require('fs')
  const os = require('os');
  const util = require('util')
  const moment = require('moment-timezone')
  const tools = require('../lib/tools/tools')
  const { color, bgcolor } = require('../lib/warna')
  const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
  
  
  ///// COSTUMABLE /////
  const config = JSON.parse(fs.readFileSync("./setting/config.json"))
  let ownerNumber = config.owner
  let multi = config.multi
  let nopref = config.nopref
  let single = config.single
  public = config.public
  let prefa = config.prefa
  shp = config.shape
  fake = config.fake
  fakeimage = fs.readFileSync(`./setting/media/provider.jpeg`)

              
  ///// CONNECTION /////
  
  module.exports = async (tprovider, tpx) => {
      try {
        if (!tpx.hasNewMessage) return
        tpx = tpx.messages.all()[0]
        if (!tpx.message) return
        if (tpx.key && tpx.key.remoteJid == 'status@broadcast')
        tpx = simple.smsg(tprovider, tpx)
          global.prefix
          global.blocked
          tpx.message = (Object.keys(tpx.message)[0] === 'ephemeralMessage') ? tpx.message.ephemeralMessage.message : tpx.message
          const content = JSON.stringify(tpx.message)
          const from = tpx.key.remoteJid
          const type = Object.keys(tpx.message)[0]
          const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, caption, location, liveLocation, image, video,quotedMsgObj, sticker, document, audio, product } = MessageType
          const mentionByTag = type == "extendedTextMessage" && tpx.message.extendedTextMessage.contextInfo != null ? tpx.message.extendedTextMessage.contextInfo.mentionedJid : []
          const mentionByReply = type == "extendedTextMessage" && tpx.message.extendedTextMessage.contextInfo != null ? tpx.message.extendedTextMessage.contextInfo.participant || "" : ""
          const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
          mention != undefined ? mention.push(mentionByReply) : []
          const mentionUser = mention != undefined ? mention.filter(n => n) : []
          const cmd = (type === 'conversation' && tpx.message.conversation) ? tpx.message.conversation : (type == 'imageMessage') && tpx.message.imageMessage.caption ? tpx.message.imageMessage.caption : (type == 'videoMessage') && tpx.message.videoMessage.caption ? tpx.message.videoMessage.caption : (type == 'extendedTextMessage') && tpx.message.extendedTextMessage.text ? tpx.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
          if(multi){
          var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^?]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
          } else {
          if (nopref) {
          prefix = ''
    } else {
          if(single){
          prefix = prefa
          }
        }
    }
    body = (type === 'conversation' && tpx.message.conversation.startsWith(prefix)) ? tpx.message.conversation : (type == 'imageMessage') && tpx.message.imageMessage.caption.startsWith(prefix) ? tpx.message.imageMessage.caption : (type == 'videoMessage') && tpx.message.videoMessage.caption.startsWith(prefix) ? tpx.message.videoMessage.caption : (type == 'extendedTextMessage') && tpx.message.extendedTextMessage.text.startsWith(prefix) ? tpx.message.extendedTextMessage.text : ""
    // body = (type === 'conversation' && tpx.msg.conversation.startsWith(prefix)) ? tpx.msg.conversation : (type == 'imageMessage') && tpx.msg.imageMessage.caption.startsWith(prefix) ? tpx.msg.imageMessage.caption : (type == 'videoMessage') && tpx.msg.videoMessage.caption.startsWith(prefix) ? tpx.msg.videoMessage.caption : (type == 'extendedTextMessage') && tpx.msg.extendedTextMessage.text.startsWith(prefix) ? tpx.msg.extendedTextMessage.text : (type == "stickerMessage") && stickerdb[tpx.msg.stickerMessage.fileSha256.toString("base64")].text ? prefix + stickerdb[tpx.msg.stickerMessage.fileSha256.toString("base64")].text : ""
           budy = (type === 'conversation') ? tpx.message.conversation : (type === 'extendedTextMessage') ? tpx.message.extendedTextMessage.text : ''
           const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
           const args = body.trim().split(/ +/).slice(1)
           const isCmd = body.startsWith(prefix)
            chats = (type === 'conversation') ? tpx.message.conversation : (type === 'extendedTextMessage') ? tpx.message.extendedTextMessage.text : ''
            const arg = chats.slice(command.length + 2, chats.length)
                  const totalchat = await tprovider.chats.all()
                  const botNumber = tprovider.user.jid
                  const isGroup = from.endsWith('@g.us')
                  const sender = tpx.key.fromMe ? tprovider.user.jid : isGroup ? tpx.participant : tpx.key.remoteJid
                  const groupMetadata = isGroup ? await tprovider.groupMetadata(from) : ''
                  const groupName = isGroup ? groupMetadata.subject : ''
                  const groupId = isGroup ? groupMetadata.jid : ''
                  const groupMembers = isGroup ? groupMetadata.participants : ''
                  const groupAdmins = isGroup ? tools.getGroupAdmins(groupMembers) : ''
                  const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
                  const isGroupAdmins = groupAdmins.includes(sender) || false
                  const groupDesc = isGroup ? groupMetadata.desc : ''
                  const itsMe = sender == botNumber ? true : false
                  const isOwner = ownerNumber.includes(sender)
                  const q = args.join(' ')
            const conts = tpx.key.fromMe ? tprovider.user.jid : tprovider.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = tpx.key.fromMe ? tprovider.user.name : conts.notify || conts.vname || conts.name || '-'
            const senderNumber = sender.split("@")[0]
  ///// BATAS FUNCTION /////
              const isMedia = (type === 'imageMessage' || type === 'videoMessage')
              const isImage = (type === 'imageMessage')
              const isVideo = (type === 'videoMessage')
              const isStickers = (type == 'stickerMessage')
              const isListMsg = (type == 'listResponseMessage')
              const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
              const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
              const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
              const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
              const isQuotedlocation = type === 'extendedTextMessage' && content.includes('locationMessage')
              const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
              const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
              const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
              const isQuotedvideo = type === 'extendedTextMessage' && content.includes('videoMessage')
              const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 
              const isQuotedsticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 
              const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
              
         
              const reply = async (q) => {
                  tprovider.sendMessage(from, q, text, {quoted: tpx})
              }
  ///// BATAS 2 /////
  
  if (!public){
      if (!tpx.key.fromMe) return
     }
     
  if(tpx.key.fromMe){
  tag = tprovider.user.jid.split('@')[0]
  mjid = tprovider.user.jid
  }
  else{
  tag = sender.split('@')[0]
  mjid = sender
  }
       
              if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
              if (isGroup && !isCmd) console.log(color(time, "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
              if (!isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
              if (isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
              
              
  ///// SWITCH COMMAND /////
  
  switch(command) {
    
  ///// OWNER ONLY /////
  case 'self':
  if (!tpx.key.fromMe && !isOwner) return reply
                  public = false
                  seff = `*「 𝙈𝙊𝘿𝙀 : 𝙎𝙀𝙇𝙁 」*`
  reply(seff)
  break
  
  case 'public':
  if (!tpx.key.fromMe && !isOwner) return reply
                  public = true
                  pubb = `*「 𝙈𝙊𝘿𝙀 : 𝙋𝙐𝘽𝙇𝙄𝘾 」*`
  reply(pubb)
  break
    
  }
  
  
      } catch(e) {
          console.log(e)
      }
  }