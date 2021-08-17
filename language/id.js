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
exports.Donasi = (wel, gaya, hargaSewa, end) => {
    return `${wel}
${gaya}Kamu bisa sewa bot Mulai Dari ${hargaSewa}/bulan Sampai 25.000/2 bulan
permanen? kami tidak menyediakan Sewa bot permanen Karna Tuntutan Harga Server Tiap Bulan
sekali lagi mohon maaf
Apasih Guna Masukin Bot Ke Group?
nah... 
Kamu Bisa Bermain Game Di Game Menu 
kamu bisa search lagu
kamu bisa search foto
kamu bisa download lagu
kamu bisa dapat informasi dari infomenu
kamu bisa jadiin bot sebagai moderator, add, kick, welcome, tutup & open groub, dan paling penting memiliki anti link menu hanya di admin menu
dan masih banyak lagi
KETENTUAN & SNK
-JANGAN TELPON BOT
-JANGAN SPAM BOT
-DUIT BOT HANYA BERUPA DUIT GAME HANYA BISA DI DALAM MENU GAME TIDAK BISA DI TARIK!!
-GUNAKAN BOT DENGAN BIJAK
${gaya}
TERTARIK ??
PEMBAYARAN BISA HUBUNGI wa.me/6287811078485

PAYMENT:
GOPAY: 087811078485
DANA: COMING SOON
PULSA:-

_*NOTE:*_
_*Jikan Ingin support creator atau donasi bebas metode dan menggunakan pembayaran tersedia_*

${end}
`
}
exports.rulesBot = (wel, end, gaya) => {
    return `${wel}
◪ *RULES THE BOT*
${gaya}
| ◪ Jangan Di Telpon
| ◪ Jangan Di Spam
| ◪ Jangan Hina Bot
| ◪ Hargai Bot
| ◪ Gunakan Dengan Bijak 
${gaya}
*_Ketahuan Langgar Di Banned Permanen_*
*_makasih sudah menggunakan paimon Bot_*
${end}
`
}
exports.sourceBot = (wel, gaya, end) => {
    return `${wel}
${gaya}
Bot Ini Menggunakan Kode Sumber Gratis Yang Dapat Anda Akses Dari https://github.com/BryanRfly/project-team Dibuat Bersama TeamProviderXploit
${gaya}
${end}`
}
exports.notArgs = (prefix, command) => {
    return `
_*Maaf Di ${prefix}${command} Text Tidak Boleh Kosong*_`
}
