let fs = require('fs')
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?
global.thumbt = global.img
global.fsx = 999999999999
global.kontak = [
['6289518030035', '*ð°ðððĄððð ÃáÖÍÃ*', 'Ar~', 'arexans@gmail.com', true],
]
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.neoxr.eu.org': 'yntkts',
  'https://api.xteam.xyz': 'apivproject',
  'https://melcanz.com': 'manHkmst',
  'https://api.lolhuman.xyz': 'Papah-Chan',
  'http://zekais-api.herokuapp.com': 'zekais',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ'
}

global.WM = 'ðīððĐðð-ðīðððð ðŦððððð ðĐð Kami-sama'
global.linkgc = 'https://chat.whatsapp.com/HAuQGhEBwqFK8CzrrYOwLq'
global.linkig = 'https://www.instagram.com/arxans_'
global.deslink = ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = '@arxans_'

global.wait = '*ðŪðĐ: TUNGGU...*\n*ðīó §ó Ēó Ĩó Ūó §ó ŋ: WAIT...*\n*ðŊðĩ: åūãĪ...**_'
global.eror = '*ðŪðĐ: MAAF, SERVER ERROR*\n*ðīó §ó Ēó Ĩó Ūó §ó ŋ: SORRY, SERVER ERROR*\n*ðŊðĩ: įģãčĻģãããūããããĩãžããžãĻãĐãž*'

//========Url Template Buttons==========//
global.dtu = 'ð­ððððð'
global.urlnya = "https://www.instagram.com/arxans_"

//============= callButtons ============//
global.dtc = 'ðððð ððððð'
global.phn = '+62 895-1803-0035'

//========== Tampilan Bot =============//
global.sa = 'â­â'
global.gx = 'ââ'
global.gy = 'ââĒ'
global.gz = 'â'
global.sb = 'â°ââââāŋ'
global.kki = 'ã'
global.kka = 'ã'
global.zt = '*'
global.zc = ''

global.thumbnailUrl = [
  'https://telegra.ph/file/29c3cd0b78021565b740f.jpg', 'https://telegra.ph/file/29c3cd0b78021565b740f.jpg',
  'https://telegra.ph/file/29c3cd0b78021565b740f.jpg', 'https://telegra.ph/file/29c3cd0b78021565b740f.jpg',
  'https://telegra.ph/file/29c3cd0b78021565b740f.jpg', 'https://telegra.ph/file/29c3cd0b78021565b740f.jpg',
  'https://telegra.ph/file/29c3cd0b78021565b740f.jpg', 'https://telegra.ph/file/29c3cd0b78021565b740f.jpg',
  'https://telegra.ph/file/29c3cd0b78021565b740f.jpg', 'https://telegra.ph/file/29c3cd0b78021565b740f.jpg'
]

//============= Games ================//
global.benar = '_*Benarâ*_'
global.salah = '_*Salahâ*_'
global.dikit = "dikit lagi, semangat ya :')"

global.multiplier = 100 // The higher, The harder levelup

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'ð§Ž',
      limit: 'ð',
      healt: 'âĪïļ',
      exp: 'âïļ',
      money: 'ðĩ',
      potion: 'ðĨĪ',
      diamond: 'ð',
      common: 'ðĶ',
      uncommon: 'ð',
      mythic: 'ðģïļ',
      legendary: 'ðïļ',
      pet: 'ð',
      sampah: 'ð',
      armor: 'ðĨž',
      fishingrod: 'ðĢ',
      pickaxe: 'âïļ',
      sword: 'âïļ',
      kayu: 'ðŠĩ',
      batu: 'ðŠĻ',
      iron: 'âïļ',
      string: 'ðļïļ',
      kuda: 'ð',
      kucing: 'ð' ,
      anjing: 'ð',
      makananpet: 'ð',
      gold: 'ð',
      emerald: 'ð'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
