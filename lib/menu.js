const moment = require("moment-timezone")
const config = require("../setting/config.json")
const { dateNameDay, ucapan, fullDate } = require("./tools/date")
const f = require("../package.json")
well = config.namebot
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

┌─❑「 CREATOR MENU 」
│◦ ${prefix}meme
│◦ ${prefix}sticker
│◦ ${prefix}stickerwm
│◦ ${prefix}ttp
│◦ ${prefix}attp
│◦ ${prefix}colong
│◦ ${prefix}triggered
│
├❑「 CONVERT MENU 」
│
│◦ ${prefix}toimg
│◦ ${prefix}togif
│◦ ${prefix}tomp3
│◦ ${prefix}blown
│◦ ${prefix}deep
│◦ ${prefix}earrape
│◦ ${prefix}fast
│◦ ${prefix}fat
│◦ ${prefix}nightcore
│◦ ${prefix}reverse
│◦ ${prefix}robot
│◦ ${prefix}slow
│◦ ${prefix}smooth
│◦ ${prefix}tupai
│◦ ${prefix}squirrel
│◦ ${prefix}chipmunk
│◦ ${prefix}tourl
│
├❑「 DOWNLOAD MENU 」
│
│◦ ${prefix}play query
│◦ ${prefix}playmp4 query
│◦ ${prefix}video query
│◦ ${prefix}ytmp3 link
│◦ ${prefix}ytmp4 link
│◦ ${prefix}ig link
│◦ ${prefix}tiktok link
│◦ ${prefix}tiktoknowm link
│◦ ${prefix}character query|1-20
│
├❑「 FUN MENU 」
│
│◦ ${prefix}fitnah
│◦ ${prefix}kontak
│
├❑「 OTHER MENU 」

│◦ ${prefix}ping
│◦ ${prefix}get link
│◦ ${prefix}getpp @user
│◦ ${prefix}getbio @user
│◦ ${prefix}tagall
│◦ ${prefix}listadmin
│◦ ${prefix}tagme
│◦ ${prefix}profile
│◦ ${prefix}addcmd
│◦ ${prefix}delcmd
│◦ ${prefix}listcmd
│
├❑「 OWNER MENU 」
│
│◦ ${prefix}addsewa
│◦ ${prefix}delsewa
│◦ ${prefix}listsewa
│◦ ${prefix}addpremium
│◦ ${prefix}setrole
│◦ ${prefix}editrole
│◦ ${prefix}editname
│◦ ${prefix}editnotice
│◦ ${prefix}editgender
│◦ ${prefix}addbutton (list)
│◦ ${prefix}delbutton 
│◦ ${prefix}addbuttons (hydra)
│◦ ${prefix}delbuttons
│◦ ${prefix}multiprefix
│◦ ${prefix}noprefix
│◦ ${prefix}singleprefix
│◦ ${prefix}setprefix
│◦ ${prefix}setimagereply
│◦ ${prefix}settypereply
│◦ ${prefix}setcatalog
│◦ ${prefix}settextreply
│◦ ${prefix}setreply
│◦ ${prefix}exif
│◦ ${prefix}public
│◦ ${prefix}speed
│◦ ${prefix}self
│◦ => or > code
│
├❑「 ADMIN  MENU 」 
│
│◦ ${prefix}antidelete
│◦ ${prefix}antibadword
│◦ ${prefix}listbadword
│◦ ${prefix}addbadword
│◦ ${prefix}delbadword
│◦ ${prefix}clearbadword
│◦ ${prefix}antilink
│◦ ${prefix}welcome 
│◦ ${prefix}delete
│◦ ${prefix}add 
│◦ ${prefix}kick
│◦ ${prefix}demote 
│◦ ${prefix}promote
│◦ ${prefix}open
│◦ ${prefix}close
│◦ ${prefix}leave
│◦ ${prefix}setdesc
│◦ ${prefix}setwelcome
│◦ ${prefix}setleave
│◦ ${prefix}setdemote
│◦ ${prefix}setpromote
│◦ 
│◦
├❑「 GROUP MENU 」
│◦ 
│◦ ${prefix}listadmin
│◦ ${prefix}sider
│◦ ${prefix}inspect
│◦ ${prefix}linkgroup
│◦ ${prefix}quoted
│◦ ${prefix}jadibot
│◦ ${prefix}stopjadibot
│◦ ${prefix}listbot
│◦ ${prefix}speed
│◦ ${prefix}profile
│
└─❑「 MENU BOT 」

❏───「 ${config.namebot} ───❏
${gaya}`
}

exports.makerMenu = (prefix) => {
    return `

${wel}
*${shape} ${prefix}toxic*
*${shape} ${prefix}strawberry*
*${shape} ${prefix}box3d*
*${shape} ${prefix}roadwarning*
*${shape} ${prefix}breakwall*
*${shape} ${prefix}icecold*
*${shape} ${prefix}luxury*
*${shape} ${prefix}cloud*
*${shape} ${prefix}summersand*
*${shape} ${prefix}horrorblood*
*${shape} ${prefix}thunder*
*${shape} ${prefix}christmas*
*${shape} ${prefix}wetglass*
*${shape} ${prefix}multicolor3d*
*${shape} ${prefix}watercolor*
*${shape} ${prefix}luxurygold*
*${shape} ${prefix}galaxywallpaper*
*${shape} ${prefix}lighttext*
*${shape} ${prefix}beautifulflower*
*${shape} ${prefix}puppycute*
*${shape} ${prefix}royaltext*
*${shape} ${prefix}heartshaped*
*${shape} ${prefix}birthdaycake*
*${shape} ${prefix}galaxystyle*
*${shape} ${prefix}hologram3d*
*${shape} ${prefix}greenneon*
*${shape} ${prefix}glossychrome*
*${shape} ${prefix}greenbush*
*${shape} ${prefix}metallogo*
*${shape} ${prefix}noeltext*
*${shape} ${prefix}glittergold*
*${shape} ${prefix}textcake*
*${shape} ${prefix}starsnight*
*${shape} ${prefix}wooden3d*
*${shape} ${prefix}textbyname*
*${shape} ${prefix}writegalacy*
*${shape} ${prefix}galaxybat*
*${shape} ${prefix}snow3d*
*${shape} ${prefix}birthdayday*
*${shape} ${prefix}goldplaybutton*
*${shape} ${prefix}silverplaybutton*
*${shape} ${prefix}freefire*
*${shape} ${prefix}shadow*
*${shape} ${prefix}cup*
*${shape} ${prefix}cup1*
*${shape} ${prefix}romance*
*${shape} ${prefix}smoke*
*${shape} ${prefix}burnpaper*
*${shape} ${prefix}lovemessage*
*${shape} ${prefix}undergrass*
*${shape} ${prefix}love*
*${shape} ${prefix}coffe*
*${shape} ${prefix}woodheart*
*${shape} ${prefix}flowerheart*
*${shape} ${prefix}woodenboard*
*${shape} ${prefix}summer3d*
*${shape} ${prefix}wolfmetal*
*${shape} ${prefix}nature3d*
*${shape} ${prefix}underwater*
*${shape} ${prefix}golderrose*
*${shape} ${prefix}summernature*
*${shape} ${prefix}letterleaves*
*${shape} ${prefix}glowingneon*
*${shape} ${prefix}fallleaves*
*${shape} ${prefix}flamming*
*${shape} ${prefix}harrypotter*  
*${shape} ${prefix}pornhub [ Text1 Text2 ]*
*${shape} ${prefix}glitch [ Text1 Text2 ]*
*${shape} ${prefix}avenger [ Text1 Text2 ]*
*${shape} ${prefix}space [ Text1 Text2 ]*
*${shape} ${prefix}ninjalogo [ Text1 Text2 ]*
*${shape} ${prefix}marvelstudio [ Text1 Text2 ]*
*${shape} ${prefix}lionlogo [ Text1 Text2 ]*
*${shape} ${prefix}wolflogo [ Text1 Text2 ]*
*${shape} ${prefix}steel3d [ Text1 Text2 ]*
*${shape} ${prefix}wallgravity [ Text1 Text2 ]*  

${end}`
}
exports.groupMenu = (prefix, logoBiasa) => {
    return `
*${logoBiasa} ${prefix}listadmin*
*${logoBiasa} ${prefix}sider*
*${logoBiasa} ${prefix}inspect* 
*${logoBiasa} ${prefix}linkgroup*
*${logoBiasa} ${prefix}listbadword*`
}
exports.gameMenu = (prefix) => {
    return `
${wel}
    
*${shape} ${prefix}tictactoe [Tag Mem]*
*${shape} ${prefix}delttc*
*${shape} ${prefix}suit* 
*${shape} ${prefix}slot*
*${shape} ${prefix}tebakgambar*
*${shape} ${prefix}canceltebakgambar*
*${shape} ${prefix}sambungkata [cicak]*
*${shape} ${prefix}cancelsambungkata*
*${shape} ${prefix}transfer jumlah <Tag Mem>*
*${shape} ${prefix}level*
*${shape} ${prefix}setbackground*

${end}`
}
exports.funMenu = (prefix) => {
    return `
${wel}

*${shape} ${prefix}getpic*
*${shape} ${prefix}kontak*
*${shape} ${prefix}hidetag*
*${shape} ${prefix}imgtag <Reply>*
*${shape} ${prefix}stickertag <Reply>*
*${shape} ${prefix}fitnah <@tag|fitnah|kata lu>*
*${shape} ${prefix}fakedeface <img|title|desc>*
*${shape} ${prefix}wiki [Query]*
*${shape} ${prefix}jadwalsholat [Wilayah]*
*${shape} ${prefix}jagokata [Query]*
*${shape} ${prefix}cerpen*
*${shape} ${prefix}ceritahoror*
*${shape} ${prefix}drakorongoing*
*${shape} ${prefix}asupan*
*${shape} ${prefix}wancak*
*${shape} ${prefix}sambungkata*
*${shape} ${prefix}cancelsambungkata*
*${shape} ${prefix}igstalk*
*${shape} ${prefix}stalkgithub*
*${shape} ${prefix}stalktwitter*
*${shape} ${prefix}stalktiktok*
*${shape} ${prefix}ssweb*
*${shape} ${prefix}ssweb2*
*${shape} ${prefix}shortlink*
*${shape} ${prefix}spamsms*
*${shape} ${prefix}ssweb*
*${shape} ${prefix}ssweb*

${end}`
}

exports.storageMenu = (prefix) => {
    return`
${wel}

*${shape} ${prefix}addimage*
*${shape} ${prefix}listimage*
*${shape} ${prefix}getimage*
*${shape} ${prefix}addsticker*
*${shape} ${prefix}liststicker*
*${shape} ${prefix}getsticker*
*${shape} ${prefix}addvn*
*${shape} ${prefix}listvn*
*${shape} ${prefix}getvn*
*${shape} ${prefix}addvideo*
*${shape} ${prefix}getvideo*
*${shape} ${prefix}listvideo*

${end}`
}
exports.ownerMenu = (prefix, logoOwner) => {
    return `
*${logoOwner} ${prefix}multiprefix*
*${logoOwner} ${prefix}noprefix*
*${logoOwner} ${prefix}singleprefix*
*${logoOwner} ${prefix}setprefix*
*${logoOwner} ${prefix}setimagereply*
*${logoOwner} ${prefix}settypereply*
*${logoOwner} ${prefix}setcatalog*
*${logoOwner} ${prefix}settextreply*
*${logoOwner} ${prefix}setreply*
*${logoOwner} ${prefix}exif*
*${logoOwner} ${prefix}public*
*${logoOwner} ${prefix}self*
`
}
exports.tutorialCreator = (prefix) => {
return `
jika ingin membuat sticker dari image/video silahkan menggunakan ${prefix}sticker & ${prefix}stickerwm
contoh 
${prefix}sticker [Reply Image/caption]
${prefix}stickerwm [Reply Image/caption] jikan ingin sticker dengan wartermark anda
jika belum paham silahkan buka link example dibawah 

jika ingin membuat sticker dari Text silahkan menggunakan ${prefix}attp atau ${prefix}ttp
contoh
${prefix}attp [Text]
${prefix}ttp [Text]

jika ingin Membuat Sticker effect triggered silahkan menggunakan ${prefix}triggered
contoh
${prefix}triggered [Reply Image]

jika ingin membuat Image/video dari sticker silahkan menggunakan ${prefix}toimg atau toimage
contoh
${prefix}toimg [Reply Sticker]
atau
${prefix}togif [Reply Sticker] untuk animated sticker

jika ingin upscale atau mengupgrade photo silahkan menggunakan ${prefix}tohd
contoh
${prefix}tohd [Reply Image]

Example:
 
sticker gif
https://ibb.co/0M1r7Yw
 
sticker image
https://ibb.co/bwfx3mv

sticker take
https://ibb.co/x5zMVsk //stept 1
https://ibb.co/C1jyDhr //stept 2
https://ibb.co/DR5Wv8Y //stept 3
 
text to sticker
https://ibb.co/0BfWJtF
 
text to animated
https://ibb.co/fQ0WH6
 
triggered effect
https://ibb.co/Pw98Txs
 
sticker to image/video
https://ibb.co/X5zyFKy
 
Image upgrade quality
https://ibb.co/172LwFW
 
*_POWERED BY HARDIANTO_*
penutup:
jika ingin berdonasi/lapor bug/request fiture silahkan hubungi di ${prefix}owner and happy using
`
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
exports.adminMenu = (prefix, logoAdmin, logoBiasa) => {
    return`
*${logoAdmin} ${prefix}antibadword*
*${logoBiasa} ${prefix}listbadword*
*${logoAdmin} ${prefix}addbadword*
*${logoAdmin} ${prefix}delbadword*
*${logoAdmin} ${prefix}clearbadword*
*${logoAdmin} ${prefix}antilink*
*${logoAdmin} ${prefix}welcome* 
*${logoAdmin} ${prefix}delete*
*${logoAdmin} ${prefix}add* 
*${logoAdmin} ${prefix}kick*
*${logoAdmin} ${prefix}demote* 
*${logoAdmin} ${prefix}promote*
*${logoAdmin} ${prefix}close* 
*${logoAdmin} ${prefix}open* 
*${logoAdmin} ${prefix}setgroupname*
*${logoAdmin} ${prefix}leave*
*${logoAdmin} ${prefix}setdesc*
`}
exports.botMenu = (prefix, logoBiasa,logoPremium, logoOwner) => {
    return `
*${logoPremium} ${prefix}jadibot*
*${logoBiasa} ${prefix}stopjadibot*
*${logoBiasa} ${prefix}listbot*
*${logoBiasa} ${prefix}runtime*
*${logoBiasa} ${prefix}speed*
*${logoBiasa} ${prefix}quoted*
*${logoBiasa} ${prefix}button*
*${logoOwner} => Eval 1*
*${logoOwner} => Eval 2*`

}
exports.downloaderMenu = (prefix) => {
    return `
${wel}

*${shape} ${prefix}play [Query]*
*${shape} ${prefix}playv [Query]*
*${shape} ${prefix}playv2 [Query]*
*${shape} ${prefix}playdl [Query]*
*${shape} ${prefix}playdl2 [Query]*
*${shape} ${prefix}ytmp4 [Link]*
*${shape} ${prefix}ytmp42 [Link]*
*${shape} ${prefix}ytmp3 [Link]*
*${shape} ${prefix}ytmp32 [Link]*
*${shape} ${prefix}ytdlmp4 [Link]*
*${shape} ${prefix}ytdlmp3 [Link]*
*${shape} ${prefix}ytsearch [Link]*
*${shape} ${prefix}ig [Link]*
*${shape} ${prefix}image [Query]*
*${shape} ${prefix}brainly [Query]*
*${shape} ${prefix}pinterest [Query]*
*${shape} ${prefix}ighig [Query]*
*${shape} ${prefix}igstory [Query]*
*${shape} ${prefix}tiktokwm [Link]*
*${shape} ${prefix}tiktoknowm [Link]*
*${shape} ${prefix}tiktokmusic [Link]*
*${shape} ${prefix}facebook [Link]*
*${shape} ${prefix}music [Query]*
*${shape} ${prefix}video [Query]*
*${shape} ${prefix}needmusic [Query]*
*${shape} ${prefix}needvideo [Query]*
*${shape} ${prefix}lirik [Query]*

${end}`
}

exports.wibuEkki = (prefix, logoBiasa) => {
    return `*${logoBiasa} ${prefix}loli*
*${logoBiasa} ${prefix}waifu*
*${logoBiasa} ${prefix}kusonime*
*${logoBiasa} ${prefix}manga*
*${logoBiasa} ${prefix}character*`
}

exports.soundMaker = (prefix) => {
    return `

${wel}

*${shape} ${prefix}nightcore [Reply Audio]*
*${shape} ${prefix}gemuk [Reply Audio]*
*${shape} ${prefix}ghost [Reply Audio]*
*${shape} ${prefix}tupai [Reply Audio]*
*${shape} ${prefix}bass [Reply Audio]*
*${shape} ${prefix}slow [Reply Audio]*
*${shape} ${prefix}blub [Reply Audio]*
*${shape} ${prefix}hode [Reply Audio]*
*${shape} ${prefix}tomp3 [Reply Audio]*
*${shape} ${prefix}robot [Reply Audio]*
*${shape} ${prefix}toptt [Reply Audio]*
*${shape} ${prefix}slowvid [Reply Video]*
*${shape} ${prefix}*${shape} ${prefix}lreverse [Reply Video]*
*${shape} ${prefix}fast [Reply Video]*

${end}
`
}

exports.creatorMenu = (prefix, logoBiasa) => {
    return `*${logoBiasa} ${prefix}meme*
*${logoBiasa} ${prefix}sticker*
*${logoBiasa} ${prefix}stickerwm*
*${logoBiasa} ${prefix}ttp*
*${logoBiasa} ${prefix}attp*
*${logoBiasa} ${prefix}colong*
*${logoBiasa} ${prefix}triggered*
*${logoBiasa} ${prefix}toimg/tomp4/togif*
*${logoBiasa} ${prefix}tohd*
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
Bot Ini Asli Dari Github https://github.com/zennn08/BaseSelfBot
Yang Tidak Di Perjual Belikan Dan bisa di dapat di github secara FREE
Yang menggunakan atau memakai Source code Telah Lepas Dari Tanggung jawab author
NOTE:
Jangan lupa kasih credit ke aqulz
${gaya}
${end}`
}

exports.premiumMenu = (prefix, wel, end) => {
    return `${wel}
*${shape} ${prefix}swm author|pack*
*${shape} ${prefix}removebg [Reply Audio]*
*${shape} ${prefix}sendbug [Id Group]*
${end}
`
}
exports.notArgs = (prefix, command) => {
    return `
_*Maaf Di ${prefix}${command} Text Tidak Boleh Kosong*_`
}

exports.randomMenu = (prefix) => {
    return `
${wel}
*${shape} ${prefix}quotes*
*${shape} ${prefix}quotesanime*
*${shape} ${prefix}quotesdilan*
*${shape} ${prefix}quotesimage*
*${shape} ${prefix}faktaunik*
*${shape} ${prefix}katabijak*
*${shape} ${prefix}bucin*
*${shape} ${prefix}randomnama*


${end}
`
}
exports.primbonMenu = (prefix) => {
    return `
${wel}
*${shape} ${prefix}artinama*
*${shape} ${prefix}jodoh*
*${shape} ${prefix}weton*
*${shape} ${prefix}jadian*
*${shape} ${prefix}tebakumur*
*${shape} ${prefix}kapankah*
*${shape} ${prefix}apakah*


${end}`
}

exports.searchingMenu = (prefix) => {
    return `
${wel}
*${shape} ${prefix}gimage*
*${shape} ${prefix}gimage2*
*${shape} ${prefix}konachan*
*${shape} ${prefix}wallpapersearch*
*${shape} ${prefix}wallpapersearch2*
*${shape} ${prefix}playstore*
*${shape} ${prefix}shopee*
*${shape} ${prefix}google*
*${shape} ${prefix}stickerwa*


${end}
`
}
exports.islamMenu = (prefix, pushname) => {
    return `
${wel}


Assalamu'alaikum kak ${pushname}

*${shape} ${prefix}listsurah*
*${shape} ${prefix}alquran*
*${shape} ${prefix}alquranaudio*
*${shape} ${prefix}asmaulhusna*
*${shape} ${prefix}kisahnabi*
*${shape} ${prefix}jadwalsholat*

${end}`
}
exports.infoMenu = (prefix) => {
    return `
${wel}


*${shape} ${prefix}jarak*
*${shape} ${prefix}urbandictionary*
*${shape} ${prefix}chord*
*${shape} ${prefix}heroml*
*${shape} ${prefix}mlstalk*
*${shape} ${prefix}genshin*
*${shape} ${prefix}qrreader*
*${shape} ${prefix}wikipedia*
*${shape} ${prefix}translate*
*${shape} ${prefix}jadwaltv*
*${shape} ${prefix}jadwaltvnow*
*${shape} ${prefix}newsinfo*
*${shape} ${prefix}cnnindonesia*
*${shape} ${prefix}cnnnasional*
*${shape} ${prefix}cnninternasional*
*${shape} ${prefix}infogempa*
*${shape} ${prefix}lirik2*
*${shape} ${prefix}cuaca*
*${shape} ${prefix}covidindo*
*${shape} ${prefix}covidglobal*
*${shape} ${prefix}jadwalbola *
*${shape} ${prefix}indbeasiswa*
*${shape} ${prefix}kodepos*
*${shape} ${prefix}nsfwcheck*
*${shape} ${prefix}ocr*
*${shape} ${prefix}lk21*
*${shape} ${prefix}kodepos*
*${shape} ${prefix}drakorongoing*
*${shape} ${prefix}wattpad*
*${shape} ${prefix}wattpadsearch*

${end}
`
} 
exports.animeMenu = (prefix) => {
    return `
${wel}

*${shape} ${prefix}character*
*${shape} ${prefix}manga*
*${shape} ${prefix}anime*
*${shape} ${prefix}wait*
*${shape} ${prefix}kusonime*
*${shape} ${prefix}kusonimesearch*
*${shape} ${prefix}otakudesu*
*${shape} ${prefix}otakudesusearch*
*${shape} ${prefix}nhentai*
*${shape} ${prefix}nhentaipdf*
*${shape} ${prefix}nhentaisearch*
*${shape} ${prefix}nekopoi*
*${shape} ${prefix}nekopoisearch*
*${shape} ${prefix}otakudesu*
*${shape} ${prefix}otakudesu*

${end}`
}
exports.nsfwMenu = (prefix) => {
    return `
${wel}

*${shape} ${prefix}nhentai*
*${shape} ${prefix}nhentaipdf*
*${shape} ${prefix}nhentaisearch*
*${shape} ${prefix}nekopoi*
*${shape} ${prefix}nekopoisearch*
*${shape} ${prefix}otakudesu*
*${shape} ${prefix}otakudesu*
*${shape} ${prefix}xnxx*
*${shape} ${prefix}xnxxsearch*
*${shape} ${prefix}xhamters*
*${shape} ${prefix}chiisaihentai*
*${shape} ${prefix}trap*
*${shape} ${prefix}blowjob*
*${shape} ${prefix}yaoi*
*${shape} ${prefix}ecchi*
*${shape} ${prefix}hentai*
*${shape} ${prefix}ahegao*
*${shape} ${prefix}hololewd*
*${shape} ${prefix}sideoppai*
*${shape} ${prefix}animefeets*
*${shape} ${prefix}animebooty*
*${shape} ${prefix}animethighss*
*${shape} ${prefix}hentaiparadise*
*${shape} ${prefix}animearmpits*
*${shape} ${prefix}hentaifemdom*
*${shape} ${prefix}lewdanimegirls*
*${shape} ${prefix}biganimetiddies*
*${shape} ${prefix}animebellybutton*
*${shape} ${prefix}hentai4everyone*
*${shape} ${prefix}bj*
*${shape} ${prefix}ero*
*${shape} ${prefix}cum*
*${shape} ${prefix}feet*
*${shape} ${prefix}yuri*
*${shape} ${prefix}trap*
*${shape} ${prefix}lewd*
*${shape} ${prefix}feed*
*${shape} ${prefix}eron*
*${shape} ${prefix}solo*
*${shape} ${prefix}gasm*
*${shape} ${prefix}poke*
*${shape} ${prefix}anal*
*${shape} ${prefix}holo*
*${shape} ${prefix}tits*
*${shape} ${prefix}kuni*
*${shape} ${prefix}kiss*
*${shape} ${prefix}erok*
*${shape} ${prefix}smug*
*${shape} ${prefix}baka*
*${shape} ${prefix}solog*
*${shape} ${prefix}feetg*
*${shape} ${prefix}lewdk*
*${shape} ${prefix}waifu*
*${shape} ${prefix}pussy*
*${shape} ${prefix}femdom*
*${shape} ${prefix}cuddle*
*${shape} ${prefix}hentai*
*${shape} ${prefix}eroyuri*
*${shape} ${prefix}cum_jpg*
*${shape} ${prefix}blowjob*
*${shape} ${prefix}erofeet*
*${shape} ${prefix}holoero*
*${shape} ${prefix}classic*
*${shape} ${prefix}erokemo*
*${shape} ${prefix}fox_girl*
*${shape} ${prefix}futanari*
*${shape} ${prefix}lewdkemo*
*${shape} ${prefix}wallpaper*
*${shape} ${prefix}pussy_jpg*
*${shape} ${prefix}kemonomimi*
*${shape} ${prefix}nsfw_avatar*

${end}
`
}