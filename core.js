const {WAConnection: _WAConnection} = require("@adiwajshing/baileys")
const simple = require("./lib/simple")
const WAConnection = simple.WAConnection(_WAConnection)
const tprovider = new WAConnection()

// REQUIRE
const fs = require("fs")
const qrcode = require("qrcode-terminal")
const figlet = require("figlet")
const { color } = require("./lib/warna")
const config = require("./setting/config.json")

// Locale Db
const welcome = JSON.parse(fs.readFileSync("./database/enable.json"))
// mengconnect
async function starting() {
    tprovider.on('qr', qr => {
    qrcode.generate(qr, { small: true })
    console.log(color('>[ SCAN ]<', 'yellow') + color(' Scan Di WA web kalian'))
    })
tprovider.on('open', () => {
    console.log(color(">> [ ANTO ] <<", "blue") + color(" Sukses Terhubung Ke Server"))
    console.log(tprovider.user)
    
})
    
await tprovider.connect()
fs.writeFileSync('./'+config.session, JSON.stringify(tprovider.base64EncodedAuthInfo(), null, '\t'))
}
fs.existsSync('./'+config.session) && tprovider.loadAuthInfo('./'+config.session)
	  tprovider.on('connecting', () => {
      console.log(color(figlet.textSync('ProviderXploit', {
            font: 'Standard',
            horizontalLayout: 'default',
            vertivalLayout: 'default',
            width: 80,
            whitespaceBreak: false

        }), 'cyan'))
    
    })
    
    // okeh
    tprovider.on("chat-update", async (tpx) => {
        require("./ruangAdmin/handler")(tprovider, tpx, welcome)
              })
    tprovider.on('group-participants-update', async (tpx) => {
            require('./ruangAdmin/chats-function/welcome')(tpx, welcome)
              })
    tprovider.on('group-update', async (tpx) => {
            require('./ruangAdmin/chats-function/group-detect')(tpx, welcome)
              })
    
starting()