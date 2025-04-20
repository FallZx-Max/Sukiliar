const fs = require("fs")
//===================[ PEMBUAT SCRIPT ]=====================\\
global.pembuat = ["ғᴀʟʟᴢx-ɪɴғɪɴɪᴛʏ"]
global.versinya = ['\`ɢᴇɴ 𝟐\`']
//===================[ OWNER ]=====================\\
global.owner = [
  "6281210169275",
  "94757188838",  
  "62881010487587",//ganti nomor owner
  "6282116483990"  //nomor owner kedua kalo ada
]
global.namaBot = ["ʜɪʟʟᴀʀʏ ᴍᴅ"]
global.botname = ["ʜɪʟʟᴀʀʏ ᴍᴅ"]
global.botnumber = ["6288-xxxxc-xxxx-xx3"]
global.websitex = ['https://myportfolio-nu-dusky.vercel.app/']
global.qris = "https://tmpfiles.org/dl/14330235/tmp.jpg"
global.packname = 'ᴍᴀᴅᴇ ᴡɪᴛʜ ʙʏ'
global.author = 'ʜɪʟʟᴀʀʏᴏᴜʀs'
global.footer = 'ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ'
global.tempatDB = 'database.json'; // Tempat Database
global.ownerNumber = '6285813708397' // Nomor Kamu
global.ownerName = 'ʜɪʟʟᴀʀʏᴏᴜʀs' // Nama Kamu
global.bot = "201123970046"
global.filename = 'ʟɪʟʏ ɢᴇɴᴇʀᴀᴛɪᴏɴ'
//===================[ GROUP AND SALURAN ]=====================\\
global.linknya = 'https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D'
global.idsaluran2 = ['120363186130999681@newsletter']
global.idsaluran = ['120363313350890859@newsletter']
global.linkgc = "https://chat.whatsapp.com/BzqEnJre7Gm6rWU1KkvHKv"
global.saluranName = 'ʟɪʟʏ ᴍᴅ ©2025' // Nama Saluran Kamu

global.ch = 'https://whatsapp.com/channel/0029ValLxIw9xVJewuwoqB1G'
global.status = true
global.pairing = "LILYGEN2"
global.setmenu = 'ButtonV2' 
global.gh = "https://github.com/FallEzz"


global.descown = "ʟɪʟʏ ɢᴇɴᴇʀᴀᴛɪᴏɴ 👑"

global.namabot = "Lily"
global.forpdf = fs.readFileSync("./urpdf.jpg")
global.forpdf2 = fs.readFileSync("./urpdf2.jpg")
//===================[ FUNCTION LAIN NYA ]=====================\\

global.welcome = true // Auto Welcome Msg
global.anticall = true // Anti Call
global.autoswview = true // Auto View Status
global.adminevent = true // Admin Event Msg
global.groupevent = true // Group Event Msg

global.fotonya2 = "https://telegra.ph/file/c5eb1485207e04371bc19.jpg"
global.thumb = "https://tmpfiles.org/dl/12668673/1726306773226.jpg"
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}


global.APIs = {
	hitori: 'https://my.hitori.pw/api',
}
global.APIKeys = {
	'https://my.hitori.pw/api': 'htrkey-awokawok',
}


//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"mylily.biz.id": {
"zone": "051bf1e51fa106f3488e9117f4f68d22", 
"apitoken": "9SI5BqXenJKXBxE9FH-hvOLlhrrga0Y3NJDiJACD"
}, 
"hillary.web.id": {
"zone": "699abbb9944ac68ad7d646dda7ee2c09", 
"apitoken": "cr-7HfDeR3caeHI-1tf4Q8j7jWjQdao2VHwvJess"
}, 
"hillaryyours.my.id": {
"zone": "9ab386c27e73fca2aa65b1acae68aa92", 
"apitoken": "N7jWvhvAHLV7Rf0s2EQfFFY2J3a7WZ0Q5x3eUdBZ"
}, 
"lily.biz.id": {
"zone": "d2f37e99836598fd50f2b8e56108f331", 
"apitoken": "iJMewPBhNuwcFVx5VCkcwCpoCBgYuyqRHMpDGybp"
}, 
"seaaveyteams.biz.id": {
"zone": "00b05ac8601e55947228c4f6cc726719", 
"apitoken": "ibxFm_9KL47V_8oGoqZZrj8catyRYkq_jIF5xM5L"
}, 
"fallzx.biz.id": {
"zone": "c17e1182791de7f2f2bfd589d4535504", 
"apitoken": "3hOXGxUCiLX7Dumabe6kMFmP_dGLUzBUzCyfMdva"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "GRe4rg-vhb4c8iSjKCALHJC0LaxkzNPgmmgcDGpm"
}
}


const patah = './src/database.json';

// Pastikan global.db sudah didefinisikan
if (!global.db) {
    global.db = {};
}

try {
    // Cek apakah file database.json ada
    if (fs.existsSync(patah)) {
        let rawData = fs.readFileSync(patah, 'utf8');
        global.db.data = JSON.parse(rawData) || {};
    } else {
        console.warn('⚠️ database.json tidak ditemukan, menggunakan struktur default.');
        global.db.data = {};
    }
} catch (err) {
    console.error('⚠️ Gagal memuat database.json, menggunakan struktur default.', err);
    global.db.data = {};
}

// Pastikan struktur data global.db.data ada
global.db.data = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    settings: {},
    groups: {},
};

global.settings = {
    autoreact: true
}

const api = {
  xterm: {
    url: "https://ai.xterm.codes",
    key: "YOUR_APIKEY"
  }
};
// Pick random emoji react status
global.emoji = [
    "🥶",
    "🙄",
    "😳",
    "😒",
    "🥰",
    "😎",
    "🫣",
    "😍",
    "😨",
    "😁",
    "👀",
    "👿",
    "🤖",
    "😮"
]

//===================[ MESS ]=====================\\
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔 ',
    owner: "*[ Akses Ditolak ]*\nFitur ini hanya untuk owner bot!",
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owne_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
    brave : '_*You are not yet registered in the database*_',
    security : '_*Kamu siapa? Bukan bagian dari Team Kami ( FallZx Infinity )_*.',
    bugrespon : '_* Parcel akan dikirim sekarang... Harap Tunggu kak_*.',
}
global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70000   
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})