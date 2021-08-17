///// REQUIRE /////

const {
  WAConnection: _WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  WA_MESSAGE_STUB_TYPE,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  WAMessageProto, 
  prepareMessageFromContent, 
  listMessage,
  buttonsMessage,
  relayWAMessage,
  processTime
} = require('@adiwajshing/baileys')
const simple = require('../lib/simple.js')
const fs = require('fs')
const os = require('os');
const util = require('util')
const axios = require("axios")
const speed = require('performance-now')
const qrcodes = require("qrcode")
const qrcode = require("qrcode-terminal")
const request = require('request')
const requests = require("node-fetch")
const moment = require('moment-timezone')
const { spawn, exec, execSync } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('../lib/functions')
const { color, bgcolor } = require('../lib/color')
const { id } = require('../language/id')
const { en } = require('../language/en')
const lang = 'en'
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')



///// COSTUMABLE /////

let multi = true
let nopref = false
let single = false
public = false
let prefa = '#'
shp = '🌹'
fake = 'TeamProviderXploit'
fakeimage = fs.readFileSync(`./ruangAdmin/provider.jpeg`)

///// VCARD /////

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN: TeamProviderXploit\n'
            + 'ORG Helloworld;\n'
            + 'TEL;type=CELL;type=VOICE;waid=628983583288:+62 898-3583-288\n'
            + 'END:VCARD'
    
///// FUNCTION BEFORE CONNECTION /////

// Monospace
function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        
// Serial Number Generator
function GenerateRandomNumber(min,max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
            
///// CONNECTION /////

module.exports = async (tprovider, tpx) => {
    try {
  if (!tpx.hasNewMessage) return
    tpx = tpx.messages.all()[0]
			if (!tpx.message) return
			if (tpx.key && tpx.key.remoteJid == 'status@broadcast')
    		global.prefix
        global.blocked
        m = simple.smsg(tprovider, tpx)
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
        var pes = (type === 'conversation' && tpx.message.conversation) ? tpx.message.conversation : (type == 'imageMessage') && tpx.message.imageMessage.caption ? tpx.message.imageMessage.caption : (type == 'videoMessage') && tpx.message.videoMessage.caption ? tpx.message.videoMessage.caption : (type == 'extendedTextMessage') && tpx.message.extendedTextMessage.text ? tpx.message.extendedTextMessage.text : ''
	     	const messagesC = pes.slice(0).trim()
        const cmd = (type === 'conversation' && tpx.message.conversation) ? tpx.message.conversation : (type == 'imageMessage') && tpx.message.imageMessage.caption ? tpx.message.imageMessage.caption : (type == 'videoMessage') && tpx.message.videoMessage.caption ? tpx.message.videoMessage.caption : (type == 'extendedTextMessage') && tpx.message.extendedTextMessage.text ? tpx.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multi){
        var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^?]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
        } else {
        if (nopref){
        prefix = ''
        } else {
        if(single){
        prefix = prefa
        }
        }
        }
        
        body = (type === 'conversation' && tpx.message.conversation.startsWith(prefix)) ? tpx.message.conversation : (type == 'imageMessage') && tpx.message.imageMessage.caption.startsWith(prefix) ? tpx.message.imageMessage.caption : (type == 'videoMessage') && tpx.message.videoMessage.caption.startsWith(prefix) ? tpx.message.videoMessage.caption : (type == 'extendedTextMessage') && tpx.message.extendedTextMessage.text.startsWith(prefix) ? tpx.message.extendedTextMessage.text : ""
          budy = (type === 'conversation') ? tpx.message.conversation : (type === 'extendedTextMessage') ? tpx.message.extendedTextMessage.text : ''
          const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		     	const args = body.trim().split(/ +/).slice(1)
		    	const isCmd = body.startsWith(prefix)
	    		chats = (type === 'conversation') ? tpx.message.conversation : (type === 'extendedTextMessage') ? tpx.message.extendedTextMessage.text : ''
	       	const arg = chats.slice(command.length + 2, chats.length)

	    		mess = {
		  		wait: '🌹 _Proses Kak_ 🌹',
		  		success: '[ √ ] 𝚂𝚞𝚌𝚌𝚎𝚜𝚜...',
          prem: `_Maaf Fitur Ini Khusus User Premium, Silahkan Hubungi Owner Untuk Menjadi User Premium!_`,
		  		error: {
					stick: 'Error su :v',
					Iv: 'Link nya mokad :v',
					api: '_Api Invalid !_'
		  		},
	  			only: {
					group: '*Pakainya Only Group Mhank!*',
					ownerB: '_Lu Siapa?_',
					admin: '*Lu Bukan Admin, Jadi Gausah Nyuruh Gua Su!*',
					Badmin: '*Gabisa cokk!! Jadiin gua admin dulu..*'
		  		}
	    		}
	    		
	    		const totalchat = await tprovider.chats.all()
		    	const botNumber = tprovider.user.jid
	    		const ownerNumber = ["628983583288@s.whatsapp.net"]
          const isGroup = from.endsWith('@g.us')
		    	const sender = tpx.key.fromMe ? tprovider.user.jid : isGroup ? tpx.participant : tpx.key.remoteJid
	    		const groupMetadata = isGroup ? await tprovider.groupMetadata(from) : ''
	    		const groupName = isGroup ? groupMetadata.subject : ''
    			const groupId = isGroup ? groupMetadata.jid : ''
    			const groupMembers = isGroup ? groupMetadata.participants : ''
		    	const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	    		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	    		const isGroupAdmins = groupAdmins.includes(sender) || false
	    		const groupDesc = isGroup ? groupMetadata.desc : ''
	    		const itsMe = sender == botNumber ? true : false
          const isOwner = ownerNumber.includes(sender)
		    	const q = args.join(' ')
          conts = tpx.key.fromMe ? tprovider.user.jid : tprovider.contacts[sender] || { notify: jid.replace(/@.+/, '') }
          const pushname = tpx.key.fromMe ? tprovider.user.name : conts.notify || conts.vname || conts.name || '-'
	    	  const senderNumber = sender.split("@")[0]
	    	  const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
		    	}
		    	
		    	const costum = (pesan, tipe, target, target2) => {
	    		tprovider.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
		     	}
			
		      const sendPtt = (teks) => {
		      tprovider.sendMessage(from, audio, mp3, {quoted:tpx})
		      }
			
		    	const reply = (teks) => {
	  			tprovider.sendMessage(from, teks, MessageType.text, {quoted: tpx})
     			}
     			
     			const sendMess = (hehe, teks) => {
		  		tprovider.sendMessage(hehe, teks, text,{quoted : tpx})
	    		}
        
          async function sendMediaURL(from, url, text=``) {
            let mime = '';
            let res = await axios.head(url)
            snmed = await getBuffer(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return tprovider.sendMessage(from, snmed, type, {caption: text, quoted: tpx, mimetype: mime})
            }
            
            const mentions = (teks, memberr, id) => {
			     	(id == null || id == undefined || id == false) ? tprovider.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : tprovider.sendMessage(from, teks.trim(), extendedText, {quoted: tpx, contextInfo: {"mentionedJid": memberr}})
	        	}
	        		
	          async function sendFileFromUrl(from, url, tpx, msg, tpx) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return tprovider.sendMessage(from, await getBuffer(url), type, {caption: msg, quoted: tpx, mimetype: mime, contextInfo: {"mentionedJid": tpx ? tpx : []}})
            }
            
            const fakethumb = (teks, yes) => {
            tprovider.sendMessage(from, teks, image, {thumbnail : fakeimage,quoted:tpx ,caption:yes})
            }
            
///// ALLFUNCTION /////

const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}

const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './temp' + names + '.png'
                    let asw = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        tprovider.sendMessage(to, media, MessageType.sticker,{quoted:tpx})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            
const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('../lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ../setting/data.exif ../setting/${asw}.webp -o ../setting/${asw}.webp`,  async (error) => {
					let media = fs.readFileSync(asw)
					tprovider.sendMessage(to, media, sticker,{quoted : tpx})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			

///// BATAS FUNCTION /////

      colors = ['red','white','black','blue','yellow','green']
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
            
      const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Selamat Pagi Kak 🌄'
        if (hour_now >= '03' && hour_now <= '08') {
          ucapanWaktu = 'Selamat Pagi Kak 🌅'
        } else if (hour_now >= '08' && hour_now <= '14') {
          ucapanWaktu = 'Selamat Siang Kak 🌞'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'Selamat Sore Kak ☀️'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Sore Kak 🌠'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Selamat Malam Kak 🌌'
        } else {
          ucapanWaktu = 'Selamat Malam Kak 🌌'
        }
        
///// BATAS 2 /////

if (!public){
    if (!tpx.key.fromMe && !isOwner) return
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
   case 'help':
     menunya = `Hai Kak ${pushname}
     
     MENU :
     ${shp} ${prefix}self
     ${shp} ${prefix}public
     
     `
     tprovider.sendMessage(from, menunya, text,{quoted: tpx})
     break

case 'ttp':                      
if (!q) return reply(`_Teksnya?_`)
buffer = `https://hardianto-chan.herokuapp.com/api/maker/ttp?text=${encodeURIComponent(q)}&apikey=hardianto`
reply(mess.wait)
			   sendStickerUrl(from, buffer)
			   break



}


    } catch(e) {
        console.log(e)
    }
}
