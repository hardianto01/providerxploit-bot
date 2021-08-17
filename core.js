 const {WAConnection: _WAConnection} = require("@adiwajshing/baileys")
const simple = require("./lib/simple")
const MessageType = require('@adiwajshing/baileys')
const WAConnection = simple.WAConnection(_WAConnection)
const tprovider = new WAConnection()

// REQUIRE
const fs = require("fs")
const qrcode = require("qrcode-terminal")
const figlet = require("figlet")
const { color } = require("./lib/warna")
const config = require("./setting/config.json")

// mengconnect
async function starting() {
    tprovider.on('qr', qr => {
    qrcode.generate(qr, { small: true })
    console.log(color('>[ SCAN ]<', 'yellow') + color(' Scan Di WA web kalian'))
    })
tprovider.on('open', () => {
    console.log(color(">> [ ProviderXploit ] <<", "red") + color("\n Sukses Terhubung Ke Server"))
        console.log(tprovider.user)
})
    
await tprovider.connect()
fs.writeFileSync('./ruangAdmin/'+config.session, JSON.stringify(tprovider.base64EncodedAuthInfo(), null, '\t'))
}
fs.existsSync('./ruangAdmin/'+config.session) && tprovider.loadAuthInfo('./ruangAdmin/'+config.session)
require('./lib/tools/router.js')(tprovider)

	  tprovider.on('connecting', () => {
      console.log(color(figlet.textSync('ProviderXploit', {
            font: 'Standard',
            horizontalLayout: 'default',
            vertivalLayout: 'default',
            width: 80,
            whitespaceBreak: false

        }), 'cyan'))
    
    })
    tprovider.on("chat-update", async (tpx) => {
        tpx = simple.smsg(tprovider, tpx)
        require("./ruangAdmin/handler")(tprovider, tpx)
    })
    

starting()
