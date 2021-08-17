/*

   Bryan Ganteng
   
*/

const moment = require("moment-timezone")
const config = require("../setting/config.json")
const { dateNameDay, ucapan, fullDate } = require("../lib/tools/date")
const f = require("../package.json")
const wel = config.namebot
var gaya = '```'
end = `*ANDLINE-BOT©*`
shape = global.shape
const wib = moment().tz('Asia/Jakarta').format('HH:MM:SS')
const wita = moment().tz('Asia/Makassar').format('HH:MM:SS')
const wit = moment().tz('Asia/Jayapura').format('HH:MM:SS')

exports.menuCore = (nama, client, self, isMulti, totalchats, upspeed, prefix) => {
    const groups = totalchats.filter(v => v.jid.endsWith('g.us'))
   const groupsIn = groups.filter(v => !v.read_only)
   const used = process.memoryUsage()
 return `${gaya}
      
┌❏ INDONESIA TIME
│◦➛ WIB : ${wib}
│◦➛ WITA : ${wita}
└❏  WIT : ${wit}
                          
┌❏ TODAY
│◦➛Selamat ${ucapan()} ${nama}
│◦➛Jam : ${wib}
│◦➛Hari : ${dateNameDay()}
└❏ Tanggal : ${fullDate()}

┌❏ DEVICE
│◦➛Whatsapp : ${client.user.phone.wa_version}
│◦➛Merk HP : ${client.user.phone.device_manufacturer}
│◦➛Versi HP : ${client.user.phone.device_model}
│◦➛Versi OS : ${client.user.phone.os_version}
│◦➛Build OS : ${client.user.phone.os_build_number}
│◦➛RAM : 
│◦➛MCC : ${client.user.phone.mcc}
└❏ MNC : ${client.user.phone.mnc}

┌─❑「 BOT INFO 」
│◦➛Mode : ${self ? "SELF MODE" : "PUBLIC MODE"}
│◦➛Battery : ${client.battery.value ? `${client.battery.value}%` : '100%'}
│◦➛Charging : ${client.battery.live ? 'mode charger': 'false'}
│◦➛Prefix : ${isMulti ? "MULTI PREFIX" : prefix}
│◦➛Personal Chat : ${totalchats.length - groups.length}
│◦➛Total All Chat : ${totalchats.length}
│◦➛Group Chat : ${groups.length}
│◦➛Group Join : ${groupsIn.length}
│◦➛Number Bot : wa.me/${client.user.jid.split("@")[0]}
│◦➛Versi Bot  : ${f.version}
│◦➛Author : ${f.author}
│◦➛Server : Baileys
│◦➛Version : 3.5.1
│◦➛Runtime : ${upspeed}
└❏ 

┌─❑「 OWNERMENU 」
│◦ ${prefix}self
│◦ ${prefix}public
└❏ 

❏───「 ${config.namebot} ───❏
${gaya}`
}
exports.faq = (pushname) => {
    return  `
Halo Kak ${pushname} salam sejatera ^_^
Jika Menggunakan Bot Jangan lupa donasi jika ada rezeki dan ikuti rules bot yah kak

Rules Bot

- jangan telpon bot (malu aku tuh >//<)

- Jangan spam bot (capek aku kack (+_+))

- jangan perjual belikan bot ini (ihh kamu jangan gitu yah)

- jangan hina bot (kak jangan hina atuh owner lagi sakit sakitnya nih di ditikung teman (^_^))

- dan terakhir jangan lupa sholat (jika kamu muslim (user: bot kamu sholat? bot: aku ga sholat soal nya bukan manusia tapi owner ku orang muslim wkwkwkw))

- dan terakhir2 jangan lupa buat mantan bahagia (user: ehh kok bahagia in mantan? bot: ya ndak tau owner saya bilang gitu coba tanya aja di #owner)

NOTE
bot ini tidak memiliki semacam limit atau user premium semua gratis ya kak
bot ini masih tahap awal pengembangan jika ada error silahkan hubungin owner saya di #owner
bot ini bisa anda gunakan gratis atau bisa add ke group anda (tidak selamanya yah kak)
rules bot bisa berubah kapan saja tergantung mod owner
silahkan menggunakan bot dengan #start and happy enjoy
penutup:
jika ingin berdonasi/lapor bug/request fiture silahkan hubungi di #owner and happy using
`
}
exports.waiting = (pushname) => {
    return `
_*「  WAITING  」* Perintah Kak ${pushname} Sedang Di Proses_`
}
exports.groupOnly = (pushname) => {
    return`
*_Maaf Kak ${pushname} Perintah Ini Hanya Untuk Didalam Group_*
`
}
exports.doneOwner = (pushname) => {
    return `
_*Perintah Owner ${pushname} Sudah Di Proses*_`
}
exports.onlyOwner = (pushname) => {
    return `
_*Perintah Hanya Untuk Owner Bukan Untuk Kamu ${pushname}*_`

}
exports.botaAdmin = (pushname) => {
    return `
*_Maaf Kak ${pushname} Perintah Hanya Ketika Bot Menjadi Admin!!!_*`
}
exports.notRegister = (pushname, prefix) => {
    return `
*_「  DETECTOR REGISTER  」_*
*_Maaf Kak ${pushname} Kamu Belum Terdaftar Dalam Database Friend Paimon Untuk Jadi Temen Paimon Daftar Terlebih Dahulu Dengan Cara ${prefix}daftar ${pushname}|umurkamu Bingung?? Ketik @verify aja_*
`
}
exports.thisLimit = (pushname, prefix) => {
    return `
_*Maaf Kak ${pushname} Limit Kamu Telah Habis Mohon Untuk Membeli Premium Atau Meminta Limit Di Owner Di ${prefix}creator Gratis Kok ^_^*_`
}
exports.alReadyOn = (command, pushname) => {
return `
_*${command} sudah Aktif Sebelum Nya Happy Using  Yah Kak ${pushname} ^_^*_`
}
exports.alReadyOff = (command, pushname) => {
return `
_*${command} sudah Di non-Aktifka Sebelum Nya Happy Using ${pushname} ^_^*_`
}
exports.dontActive = (pushname, command) => {
    return `
_*Maaf Kak ${pushname} Sayang Nya ${command} Belum Di Aktifkan Di Group Ini ^_^*_`

}
exports.premiumOnly = (pushname, prefix) => {
    return `
_*Maaf Kak ${pushname} Command Ini Khusus User Premium!!
Mau Jadi User Premium Hubungi Owner Di ${prefix}creator*_`
}
exports.adminOnly = (pushname) => {
    return `
*_Maaf Kak ${pushname} Perintah Hanya Untuk Admin Group_*`
}
exports.doneRequest = (pushname) => {
  return `
*_Perintah ${pushname} Telah Di Lakukan_*`
}
exports.messageTag = () => {
    return `
_Orang Nya Mana Kok Ga Di Tag _-_`
}
exports.Donasi = (wel, config, gaya, hargaSewa, end) => {
    return `${wel}
${gaya}If you want to rent a bot, the price for renting a bot starts from 10k - 25k
What are the Benefits of Hiring a Bot?

You Can Play Games
You Can Search Songs
You Can Download Songs
You Can Also Manage Your Group
You can find references for school needs, information and other social media

Is Getting a Warranty?
Yes, Sure Can Guarantee If You Know T&C On Bot
${gaya}
Interested? To Rent?
Call Number wa.me/${config.noOwner}

PAYMENT:
GOPAY: 087724880504
DANA: 087724880504
PULSA: 087724880504

_*NOTE:*_
_*If you want to support this bot project, you can donate through the available payments_*

${end}
`
}
exports.rulesBot = (wel, end, gaya) => {
    return `${wel}
◪ *RULES THE BOT*
${gaya}
| ◪ Don't Call
| ◪ Don't Spam
| ◪ Don't Humiliate Bot
| ◪ Appreciate Bot
| ◪ Use Wisely
${gaya}
*_If Violating Will Be Blocked Forever_*
*_Thank You For Using This Bot_*
${end}
`
}
exports.sourceBot = (wel, gaya, end) => {
    return `${wel}
${gaya}
This Bot Uses Free Source Code Which You Can Access From https://github.com/BryanRfly/project-team Build With TeamProviderXploit
${gaya}
${end}`
}
exports.notArgs = (prefix, command) => {
    return `
_*Sorry, the ${prefix + command} feature cannot be empty, enter parameters*_`
}
