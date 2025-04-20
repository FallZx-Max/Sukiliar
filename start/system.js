/**
 * github : https://github.com/kiuur
 * youtube : https://youtube.com/@kyuurzy
*/

require('../settings/config');

const {
	downloadContentFromMessage,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    InteractiveMessage
} = require('@fizzxydev/baileys-pro')

const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const moment = require("moment-timezone");
const path = require("path")
const { youtube } = require("btch-downloader")
const os = require('os');
const { Client } = require('ssh2');
const search = require("yt-search");
const time = moment().format("HH:mm:ss DD/MM");
const c = '`'
const CryptoJS = require('crypto-js');
const { SnackVideo } = require('../start/lib/function/snackvideo')
const { Sticker } = require('wa-sticker-formatter')
const { Tools } = require('../start/lib/scraper/Tools.js')
const { CatBox, UploadFileUgu, fileIO, pomfCDN, webp2mp4File, webp2mp4} = require('../start/lib/uploader')
const { uploaden } = require('../start/lib/uploaden.js');
const uploadImage = require('../start/lib/uploadImage.js');
const { igdl } = require('../start/lib/scraper/scriper');
const { allDl,  Ytdl } = require('../start/lib/scraper/screapers');
const { pinterest, wallpaper, remini, wikimedia, hitamkan, yanzGpt, mediafireDl, ringtone, styletext, instagramDl, tiktokDl, facebookDl, instaStalk, telegramStalk, tiktokStalk, genshinStalk, instaStory, bk9Ai, spotifyDl, ytMp4, ytMp3, NvlGroup, quotedLyo, youSearch, gptLogic, savetube, simi, geminiAi } = require('../lib/scripers.js');
const {
    spawn, 
    exec,
    execSync 
   } = require('child_process');

const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('../start/lib/premiun')

const {
    default:
    baileys,
    getContentType, 
   } = require("@fizzxydev/baileys-pro");

module.exports = Lily = async (Lily, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.type == "audioMessage" ? m.message.audioMessage.caption:
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");
        
        const sender = m.key.fromMe ? Lily.user.id.split(":")[0] + "@s.whatsapp.net" || Lily.user.id
: m.key.participant || m.key.remoteJid;
        
        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];

        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");

        const kontributor = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'));
        const botNumber = await Lily.decodeJid(Lily.user.id);
        const Access = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        let premium = JSON.parse(fs.readFileSync('./start/database/premium.json'))
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const isCreator = ["6285813708397@s.whatsapp.net","94757188838@s.whatsapp.net","62895621672090@s.whatsapp.net", botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        const groupMetadata = isGroup ? await Lily.groupMetadata(m.chat).catch((e) => {}) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = m.isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBot = botNumber.includes(senderNumber)
        const isOwner = owner.includes(senderNumber) || isBot
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
  
        
        const Lilybum = fs.readFileSync('./start/img/Lily.jpg')
        const {
            smsg,
            fetchJson, 
            sleep,
            formatSize
            } = require('./lib/myfunction');
     
        const {
            jadibot,
	        stopjadibot,
          	listjadibot
        } = require('./jadibot')
        
        let cihuy = fs.readFileSync('./start/lib/media/rimuru.png')
       
        if (m.message) {
            console.log(chalk.green.bold("《 ") +
                        chalk.magenta.bold("Console By FallZx") +
                        chalk.green.bold(" 》 ") +
                        chalk.blue(time) +
                        " from " +
                        chalk.magenta.bold(pushname) +
                        " in " +
                        chalk.yellow.bold(groupName))
};
        
        const reaction = async (jidss, emoji) => {
            Lily.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
        
           //=================================================//
		const DBnya = 'https://raw.githubusercontent.com/FallEzz/security-Hillaryours/refs/heads/main/security.json';
           //=================================================//
		async function isBotNumberRegistered(botNumber) {
			try {
				const response = await axios.get(DBnya);
				if (!Array.isArray(response.data)) {
					console.error('Data Yang Diterima Tidak Valid: Harus Berupa Array.');
					return false;
				}
				const registeredBotNumbers = response.data;
				return registeredBotNumbers.includes(botNumber);
			} catch (error) {
				console.error('Error Fetching Registered Bot Numbers:', error.message);
				return false;
			}
        }
//=================================================/
		const isBotRegistered = await isBotNumberRegistered(botNumber);
//==================《 FUNCTION FITUR 》=====================\\
        
        const shomand = body.replace(prefix, '').trim().split(/ +/).shift().toUpperCase();
        // Array emoji alam dan hewan yang baru
const emojis = ['⚡', '🌪️', '🌊', '🫧', '💧', '🪵', '🍄', '☘️', '🍃', '🪷', '💫', '✨', '🌟', '🔥', '🪨', '🪽', '⚓', '💎', '🚀', '🛸', '✈️', '🥕', '🍓', '🐙', '🦑', '🦞', '🐣', '🐓', '🐍', '🐊', '🐉', '🐱', '🌻', '🐦‍🔥', '🐬', '🍏', '⚽', '🪀', '🔮', '🧸', '🦉', '🐾', '🦪', '🎠', '🏕️'
];

// Memilih emoji secara acak
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

// Membuat teks dengan format yang diinginkan
const formattedShomand = `${randomEmoji} ${shomand}`;

// Menyiapkan objek message untuk digunakan

async function getBuffer(url) {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(res.data);
}
        
        //==================《 FUNCTION WAKTU 》======================\\
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}
    async function HariLibur() {
  try {
    const response = await fetch("https://www.liburnasional.com/")
    const cheerio = require('cheerio')
    const html = await response.text()
    const $ = cheerio.load(html)
    const nextLibur = $("div.row.row-alert > div").text().split("Hari libur")[1]?.trim() || "Tidak ada informasi"
    const libnas_content = $("tbody > tr").map((index, element) => {
      const summary = $(element).find("span > strong > a").text() || "Tidak ada informasi"
      const days = $(element).find("div.libnas-calendar-holiday-weekday").text() || "Tidak ada informasi"
      const dateMonth = $(element).find("time.libnas-calendar-holiday-datemonth").text() || "Tidak ada informasi"
      return {
        summary: summary,
        days: days,
        dateMonth: dateMonth
      }
    }).get()

    return {
      nextLibur: nextLibur,
      libnas_content: libnas_content
    }
  } catch (error) {
    console.error("Logs:", error)
    throw error
  }
    }

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}


function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
}
        
         // Sayying time
    const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
    if(timee < "23:59:00") {
      var waktuucapan = 'Selamat Malam 🌃'
    }
    if(timee < "19:00:00") {
      var waktuucapan = 'Selamat Petang 🌆'
    }
    if(timee < "18:00:00") {
      var waktuucapan = 'Selamat Sore 🌅'
    }
    if(timee < "15:00:00") {
      var waktuucapan = 'Selamat Siang 🏙'
    }
    if(timee < "10:00:00") {
      var waktuucapan = 'Selamat Pagi 🌄'
    }
    if(timee < "05:00:00") {
      var waktuucapan = 'Selamat Subuh 🌉'
    }
    if(timee < "03:00:00") {
      var waktuucapan = 'Tengah Malam 🌌'
      }
       
        async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: Lily.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Lily.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
Lily.ev.emit('messages.upsert', msg)
}
        
    
const fsaluran = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
}
}             


let asSticker = []
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.kuismath = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let tebakkalimat = db.data.game.tebakkalimat = []
let tebaklirik = db.data.game.tebaklirik = []
let tebaktebakan = db.data.game.tebaktebakan = []
let tebakbendera = db.data.game.tebakbendera = []
let tebakbendera2 = db.data.game.tebakbendera2 = []
let tebakkimia = db.data.game.tebakkimia = []
let tebakasahotak = db.data.game.tebakasahotak = []
let tebaksiapakahaku = db.data.game.tebaksiapakahaku = []
let tebaksusunkata = db.data.game.tebaksusunkata = []
let tebaktekateki = db.data.game.tebaktekateki = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
//===================[ FUNCTION STORE]=====================\\
        try {
					ppuser = await Lily.profilePictureUrl(m.sender, 'image');
				} catch (err) {
					ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
				}	
				let fotoProfil = await getBuffer(ppuser);
        
        
        const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
    // function resize
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};
        
        async function loading() {
    return reply("Sedang memuat Wak...");
}
        
   

const replyin = (teks) => { 
Lily.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Hilarry Abigail", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D", 
"sourceUrl": "https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D" }}}, { quoted: m }) }

        
        const pluginsLoader = async (directory) => {
            let plugins = [];
            const folders = fs.readdirSync(directory);
            folders.forEach(file => {
                const filePath = path.join(directory, file);
                if (filePath.endsWith(".js")) {
                    try {
                        const resolvedPath = require.resolve(filePath);
                        if (require.cache[resolvedPath]) {
                            delete require.cache[resolvedPath];
                        }
                        const plugin = require(filePath);
                        plugins.push(plugin);
                    } catch (error) {
                        console.log(`${filePath}:`, error);
                    }
                }
            });
            return plugins;
        };
        
        const lilyfitur = () =>{
            var mytext = fs.readFileSync("./start/system.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        const LilyUp = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2029",
      thumbnail: Lilybum,
      itemCount: 1,
      status: "INQUIRY",
      surface: "CATALOG",
      message: `${m.body || m.mtype}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: m.sender.split,
    forwardingScore: 999,
    isForwarded: true
  }
};
const reply = async(teks, id = m.chat) => {
Lily.sendMessage(id, {
            document: fs.readFileSync("./package.json"),
           fileName: global.filename,
           fileLength: 99999999999999,
            mimetype: 'image/png',
           jpegThumbnail:fs.readFileSync("./start/img/doc.jpg"),
            caption: "\n" + teks,
}, { quoted:LilyUp,ephemeralExpiration: 86400});
}
        const Groq = require('groq-sdk')
        const client = new Groq({
    apiKey: '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'
});

async function DekuChat(prompt) {
    const chatCompletion = await client.chat.completions.create({
        messages: [{
                role: "system",
                content: "kamu ai deepseek mau pintar, dan tidak, bodoh dan kamu bisa niruin ai deepseek, dan bisa emoticon"
            },
            {
                role: "assistant",
                content: "baiklah"
            },
            {
                role: "user",
                content: prompt
            }
        ],
        model: 'llama-3.3-70b-versatile'
    });
    let hasil = chatCompletion.choices[0].message.content
    return hasil
}

        
        async function downloadyt(urlnyu, mpbrp) {
//  try {
    
    if (mpbrp === "mp3") {
    try {
   
        try {
                
                console.log("Mengunduh audio dari URL:", convert.url);

                audioUrl = await youtube(urlnyu);
            } catch (e) {
              
                console.error("Error saat mengunduh, mencoba kembali...", e);
                reply('Please wait...');
                audioUrl = await youtube(urlnyu);
            }

            console.log("URL yang berhasil diunduh:", audioUrl);
    let doc = {
        audio: {
            url: audioUrl.mp3
        },
        mimetype: 'audio/mp4',
        fileName: "yang lu donlot tadi, "+hariini 
    };

    return Lily.sendMessage(m.chat, doc, { quoted: m });
      } catch {
        var wvhfy6tfe = await fetchJson("https://api.siputzx.my.id/api/d/ytmp3?url="+urlnyu)
        
            let doc = {
        audio: {
            url: wvhfy6tfe.result.mp3
        },
        mimetype: 'audio/mp4',
        fileName: "yang lu donlot tadi, "+hariini 
    };

    return Lily.sendMessage(m.chat, doc, { quoted: m });
     }
    } else if (mpbrp === "mp4") {
    
    try {
    
         try {
                    console.log("Mengunduh audio dari URL:", convert.url);

                vidUrl = await youtube(urlnyu);
            } catch (e) {
              
                console.error("Error saat mengunduh, mencoba kembali...", e);
                reply('Please wait...');
                vidUrl = await youtube(urlnyu);
            }

            console.log("URL yang berhasil diunduh:", vidUrl);
            
return Lily.sendMessage(m.chat, {
video: { url: vidUrl.mp4 },
 caption: `Done`, 
 }, {quoted: m })

} catch {
   var wvhfy6tc76gfe = await fetchJson("https://api.siputzx.my.id/api/d/ytmp4?url="+urlnyu)
   
 return Lily.sendMessage(m.chat, {
video: { url: wvhfy6tc76gfe.mp4 },
 caption: `Done`, 
 }, {quoted: m })
}
    } else {
      reply("Format tidak didukung.");
    }
        }
        //📄 SOURCE CODE/SCAPER
async function Upscale(imageBuffer) {
    try {
        const response = await fetch("https://lexica.qewertyy.dev/upscale", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image_data: imageBuffer.toString("base64"), 
                format: "binary",
            }),
        })

        return Buffer.from(await response.arrayBuffer())
    } catch {
        return null
    }
}

        async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
    }
        const pluginsDisable = true;
        const plugins = await pluginsLoader(path.resolve(__dirname, "../command"));
        const plug = { Lily, prefix, command, reply, text, Access, reaction, isGroup: m.isGroup, isPrivate: !m.isGroup, pushname, mime, quoted };

        for (let plugin of plugins) {
            if (plugin.command.find(e => e == command.toLowerCase())) {
                if (plugin.owner && !Access) {
                    return reply(mess.owner);
                }
                
                if (plugin.group && !plug.isGroup) {
                    return reply(mess.group);
                }
                
                if (plugin.private && !plug.isPrivate) {
                    return reply(mess.private);
                }

                if (typeof plugin !== "function") return;
                await plugin(m, plug);
            }
        }
        
const antiTagSWPath = path.join(__dirname, '../start/database/antitagsw.json') //isi {}
const loadAntiTagSW = () => {
    if (fs.existsSync(antiTagSWPath)) {
        return JSON.parse(fs.readFileSync(antiTagSWPath, 'utf-8'))
    }
    return {};
};
const saveAntiTagSW = (data) => {
    fs.writeFileSync(antiTagSWPath, JSON.stringify(data, null, 4), 'utf-8')
};
let antiTagSWGroup = loadAntiTagSW()
if (antiTagSWGroup[m.chat] && m.isGroup) {
if (m.message.groupStatusMentionMessage) {
const groupId = m.key.remoteJid;
const senderId = m.key.participant || m.key.remoteJid;
const groupMetadata = await Lily.groupMetadata(groupId);
const isBotAdmin = groupMetadata.participants.some(p => p.id === botNumber && p.admin)
if (!isBotAdmin) {
console.log("Bot bukan admin, tidak bisa menghapus pesan")
 return
      }
   await Lily.sendMessage(groupId, { delete: m.key }) //WM: KHAERUL, jangan hapus wm dong biar kaya orang lain😭
        await Lily.groupParticipantsUpdate(groupId, [senderId], "remove");
        console.log(`✅ Pengguna ${senderId} dikeluarkan dari grup ${groupId} karena menyebut grup di status.`);
    }
}
//~~~~~~~~~~ Thumbnail Setting ~~~~~~~~~//        
const thumbFolder2 = './src/thum2/'; // Lokasi folder untuk menyimpan thumbnail
const defaultThumbnailPath2 = './src/thum2/sho.jpg'; // Lokasi thumbnail default (file lokal)

// Membuat folder jika belum ada
if (!fs.existsSync(thumbFolder2)) {
  fs.mkdirSync(thumbFolder2, { recursive: true });
}

// Pastikan default thumbnail ada
if (!fs.existsSync(defaultThumbnailPath2)) {
  // Jika tidak ada default, Anda bisa menambahkan file default manual atau secara otomatis.
  const defaultImage2 = Buffer.from('Default Thumbnail'); // Placeholder default thumbnail
  fs.writeFileSync(defaultThumbnailPath2, defaultImage2);
}

// **Fungsi: Membaca semua thumbnail di folder**
const readThumbList2 = () => {
  const files2 = fs.readdirSync(thumbFolder2).filter(file => file.endsWith('.jpg'));
  return files2.map(file => ({
    name: path.parse(file).name, // Nama file tanpa ekstensi
    path: path.join(thumbFolder2, file), // Lokasi file lengkap
  }));
};

// **Fungsi: Menambahkan thumbnail**
const addThumb2 = async (nama2, quoted2, mime2) => {
  if (!/image/.test(mime2)) return 'Kirim/Reply Image dengan Caption untuk menambahkan thumbnail.';

  const fileName2 = `${thumbFolder2}${nama2}.jpg`;
  if (fs.existsSync(fileName2)) return 'Thumbnail dengan nama tersebut sudah ada.';

  const media2 = await quoted2.download(); // Unduh file media dari pesan
  fs.writeFileSync(fileName2, media2);
  return `Thumbnail dengan nama "${nama2}" berhasil ditambahkan.`;
};

// **Fungsi: Menghapus thumbnail**
const delThumb2 = (nama2) => {
  const fileName2 = `${thumbFolder2}${nama2}.jpg`;
  if (!fs.existsSync(fileName2)) return 'Thumbnail dengan nama tersebut tidak ditemukan.';

  fs.unlinkSync(fileName2);
  return `Thumbnail dengan nama "${nama2}" berhasil dihapus.`;
};

// **Fungsi: Menampilkan daftar thumbnail**
const listThumb2 = () => {
  const thumbList2 = readThumbList2();
  if (thumbList2.length === 0) return 'Tidak ada thumbnail yang tersimpan.';
  return thumbList2.map(thumb => `Nama: ${thumb.name}`).join('\n');
};

// **Fungsi: Mengambil thumbnail secara acak**
const getRandomThumb2 = () => {
  const thumbList2 = readThumbList2();
  if (thumbList2.length === 0) {
    // Jika folder kosong, gunakan default thumbnail
    return fs.readFileSync(defaultThumbnailPath2);
  }
  const randomFile2 = thumbList2[Math.floor(Math.random() * thumbList2.length)];
  return fs.readFileSync(randomFile2.path); // Return Buffer thumbnail
};
        const thumbFolder3 = './src/thum3/';
// Lokasi default thumbnail untuk versi 3
const defaultThumbnailPath3 = './src/thum3/sho.jpg';

// Membuat folder jika belum ada
if (!fs.existsSync(thumbFolder3)) {
  fs.mkdirSync(thumbFolder3, { recursive: true });
}

// Pastikan default thumbnail ada
if (!fs.existsSync(defaultThumbnailPath3)) {
  const defaultImage3 = Buffer.from('Default Thumbnail Version 3');
  fs.writeFileSync(defaultThumbnailPath3, defaultImage3);
}

// **Fungsi: Membaca semua thumbnail di folder**
const readThumbList3 = () => {
  const files3 = fs.readdirSync(thumbFolder3).filter(file => file.toLowerCase().endsWith('.jpg'));
  return files3.map(file => ({
    name: path.parse(file).name, // Nama file tanpa ekstensi
    path: path.join(thumbFolder3, file), // Lokasi file lengkap
  }));
};

// **Fungsi: Menambahkan thumbnail**
const addThumb3 = async (nama3, quoted3, mime3) => {
  if (!/image/.test(mime3)) return 'Kirim/Reply Image dengan Caption untuk menambahkan thumbnail.';

  const fileName3 = `${thumbFolder3}${nama3}.jpg`;
  if (fs.existsSync(fileName3)) return 'Thumbnail dengan nama tersebut sudah ada.';

  const media3 = await quoted3.download(); // Unduh file media dari pesan
  fs.writeFileSync(fileName3, media3);
  return `Thumbnail dengan nama "${nama3}" berhasil ditambahkan.`;
};

// **Fungsi: Menghapus thumbnail**
const delThumb3 = (nama3) => {
  const fileName3 = `${thumbFolder3}${nama3}.jpg`;
  if (!fs.existsSync(fileName3)) return 'Thumbnail dengan nama tersebut tidak ditemukan.';

  fs.unlinkSync(fileName3);
  return `Thumbnail dengan nama "${nama3}" berhasil dihapus.`;
};

// **Fungsi: Menampilkan daftar thumbnail**
const listThumb3 = () => {
  const thumbList3 = readThumbList3();
  if (thumbList3.length === 0) return 'Tidak ada thumbnail yang tersimpan.';
  return thumbList3.map(thumb => `Nama: ${thumb.name}`).join('\n');
};

// **Fungsi: Mengambil thumbnail secara acak**
const getRandomThumb3 = () => {
  const thumbList3 = readThumbList3();
  if (thumbList3.length === 0) {
    // Jika folder kosong, gunakan default thumbnail
    console.log('Tidak ada thumbnail, menggunakan default');
    return fs.readFileSync(defaultThumbnailPath3);
  }
  const randomFile3 = thumbList3[Math.floor(Math.random() * thumbList3.length)];
  console.log(`Memilih thumbnail acak: ${randomFile3.name}`);
  return fs.readFileSync(randomFile3.path); // Return Buffer thumbnail
};
        
        try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!('hitcmd' in user)) user.hitcmd = 0
} else global.db.data.users[m.sender] = {
hitcmd: 0,
}

 let chats = global.db.data.chats[m.chat]
 if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
 if (chats) {
 if (!('isBanned' in chat)) chat.isBanned = false
 } else global.db.data.chats[m.chat] = {
 isBanned: false,
}

let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = false
} else global.db.data.settings[botNumber] = {
 autoread: false,
}
} catch (err) {
}
const userdb = global.db.data.users[m.sender]
const settingdb = global.db.data.settings[botNumber]
const chatdb = global.db.data.chats[m.chat]

//===================《 FITUR TEBAK 》=====================\\        
 Lily.tebakkata = Lily.tebakkata ? Lily.tebakkata : {}  
if (from in Lily.tebakkata) {
let similarity = require('similarity');
let threshold = 0.72; // semakin tinggi nilai, semakin mirip
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(Lily.tebakkata[id][1]))
kuis = true
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 users.money += 10000
 var teks = `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\nHadiah : 10.000 money\n`
 reply(`${teks}`)
 clearTimeout(Lily.tebakkata[id][2])
 delete Lily.tebakkata[id]
} else console.log('*Jawaban Salah!*')
}
    if (userdb) {
  if (budy) {
    if (userdb.tebakgambar === true) {
        kuis = true;
        let jawaban = userdb.jawaban
        let userJawaban = m.text.toUpperCase();
        if (m.text == "nyerah") {
userdb.game = false
            await reply('*Anda Telah menyerah*');
            delete tebakgambar[m.sender.split('@')[0]];
            userdb.tebakgambar = false;
        } else if (userJawaban === jawaban) {
            await Lily.sendText(m.chat, '*`[ Tebak Gambar ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
            delete tebakgambar[m.sender.split('@')[0]];
            userdb.bits += 143
            userdb.tebakgambar = false;
        } else {
        if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
            reply('*Jawaban Salah!*');
        }
    }
      else if (userdb.tebakkata === true) {
    kuis = true;
  jawaban = userdb.jawaban
  jawabres = m.text.toUpperCase();
 if (m.text == "nyerah") {
userdb.game = false
await reply('*Anda Telah menyerah*')
userdb.tebakkata = false
delete tebakkata[m.sender.split('@')[0]]
} else if (jawabres === jawaban) {
await Lily.sendText(m.chat, '*`[ Tebak Kata ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebakkata = false
userdb.bits += 143
delete tebakkata[m.sender.split('@')[0]]
} else {
if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
reply('*Jawaban Salah!*')
}
    } else if (userdb.tebakkalimat === true) {
 kuis = true;
  jawaban = userdb.jawaban
 jawabres = m.text
 if (m.text == "nyerah") {
userdb.game = false
await reply('*Anda Telah menyerah*')
userdb.tebakkalimat = false
delete tebakkalimat[m.sender.split('@')[0]]
} else if (jawabres === jawaban) {
await Lily.sendText(m.chat, '*`[ Tebak Kalimat ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebakkalimat = false
userdb.bits += 143
delete tebakkalimat[m.sender.split('@')[0]]
} else {
if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
reply('*Jawaban Salah!*')
}
    } else if (userdb.tebaklagu === true) {
        kuis = true;
        let similarity = require('similarity');
        let threshold = 0.72; // semakin tinggi nilai, semakin mirip
        let jawaban = userdb.jawaban
        let userJawaban = m.text.toUpperCase();
        if (m.text == "nyerah") {
userdb.game = false
            await reply('*Anda Telah menyerah*');
            delete tebaklagu[m.sender.split('@')[0]];
            userdb.tebaklagu = false;
        } else if (userJawaban === jawaban) {
            await Lily.sendText(m.chat, '*`[ Tebak Gambar ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
            delete tebaklagu[m.sender.split('@')[0]];
            userdb.bits += 143
            userdb.tebaklagu = false;
        } else {
        if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
            reply('*Jawaban Salah!*');
        }
    } else if (userdb.tebaklirik === true) {
         kuis = true;
     jawabanban = userdb.jawaban
 jawabresres = m.text.charAt(0).toUpperCase() + m.text.slice(1);
   if (m.text == "nyerah") {
userdb.game = false
await reply('*Anda Telah menyerah*')
userdb.tebaklirik = false
delete tebaklirik[m.sender.split('@')[0]]
} else if (jawabresres === jawabanban) {
await Lily.sendText(m.chat, '*`[ Tebak Lirik ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebaklirik = false
userdb.bits += 143
delete tebaklirik[m.sender.split('@')[0]]
} else {
if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
reply('*Jawaban Salah!*')
}

} else if (userdb.tebaktebakan === true) {
try {
         kuis = true;
     jawabanya = userdb.jawaban
 jawabresya = m.text
   if (m.text == "nyerah") {
userdb.game = false
await reply('*Anda Telah menyerah*')
userdb.tebaktebakan = false
delete tebaktebakan[m.sender.split('@')[0]]
} else if (jawabresya === jawabanya) {
await Lily.sendText(m.chat, '*`[ Tebak Tebakan ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebaktebakan = false
userdb.bits += 143
delete tebaktebakan[m.sender.split('@')[0]]
} else {
if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
reply('*Jawaban Salah!*')
}
} catch (e) {
reply(util.format(e))
}
    } else if (userdb.tebakbendera === true) {
    kuis = true;
     jawabanyaa = userdb.jawaban
 jawabresyaa = m.text
   if (m.text == "nyerah") {
userdb.game = false
await reply('*Anda Telah menyerah*')
userdb.tebakbendera = false
delete tebakbendera[m.sender.split('@')[0]]
} else if (jawabresyaa === jawabanyaa) {
await Lily.sendText(m.chat, '*`[ Tebak Bendera ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebakbendera = false
userdb.bits += 143
delete tebakbendera[m.sender.split('@')[0]]
} else {
if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
reply('*Jawaban Salah!*')
}
    } else if (userdb.tebakkimia === true) {
    kuis = true;
     jawabanyaaa = userdb.jawaban
 jawabresyaaa = m.text
   if (m.text == "nyerah") {
userdb.game = false
await reply('*Anda Telah menyerah*')
userdb.tebakkimia = false
delete tebakkimia[m.sender.split('@')[0]]
} else if (jawabresyaaa === jawabanyaaa) {
await Lily.sendText(m.chat, '*`[ Tebak Kimia ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebakkimia = false
userdb.bits += 143
delete tebakkimia[m.sender.split('@')[0]]
} else {
if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
reply('*Jawaban Salah!*')
}
    
   } else if (userdb.tebaktekateki === true) {
   if (m.text == "nyerah") {
userdb.game = false
await reply('*Anda Telah menyerah*')
userdb.tebaktekateki = false
delete tebaktekateki[m.sender.split('@')[0]]
} else if (m.text === userdb.jawaban) {
await Lily.sendText(m.chat, '*`[ Tebak Teka-Teki ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebaktekateki = false
userdb.bits += 143
delete tebaktekateki[m.sender.split('@')[0]]
} else {
if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
reply('*Jawaban Salah!*')
}
    } else if (userdb.tebaksusunkata === true) {
       if (m.text == "nyerah") {
userdb.game = false
await reply('*Anda Telah menyerah*')
userdb.tebaksusunkata = false
delete tebaksusunkata[m.sender.split('@')[0]]
} else if (m.text === userdb.jawaban) {
await Lily.sendText(m.chat, '*`[ Tebak Susun Kata ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebaksusunkata = false
userdb.bits += 143
delete tebaksusunkata[m.sender.split('@')[0]]
} else {
if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
reply('*Jawaban Salah!*')
}
    } else if (userdb.tebaksiapaaku === true) {
     if (m.text == "nyerah") {
userdb.game = false
await reply('*Anda Telah menyerah*')
userdb.tebaksiapaaku = false
delete tebaksiapakahaku[m.sender.split('@')[0]]
} else if (m.text === userdb.jawaban) {
await Lily.sendText(m.chat, '*`[ Tebak Siapa Aku- ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebaksiapaaku = false
userdb.bits += 143
delete tebaksiapakahaku[m.sender.split('@')[0]]
} else {
if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
reply('*Jawaban Salah!*')
}
    } else if (userdb.tebakasahotak === true) {
         if (m.text == "nyerah") {
userdb.game = false
await reply('*Anda Telah menyerah*')
userdb.tebakasahotak = false
delete tebakasahotak[m.sender.split('@')[0]]
} else if (m.text === userdb.jawaban) {
await Lily.sendText(m.chat, '*`[ Tebak Asah Otak ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.tebakasahotak = false
userdb.bits += 143
delete tebakasahotak[m.sender.split('@')[0]]
} else {
if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
reply('*Jawaban Salah!*')
}
    } else if (userdb.kuismath === true) {
    if (m.text == "nyerah") {
userdb.game = false
await reply('*Anda Telah menyerah*')
userdb.kuismath = false
delete kuismath[m.sender.split('@')[0]]
} else if (m.text === userdb.jawaban) {
await Lily.sendText(m.chat, '*`[ Learn - Math ]`*\n\nJawaban Benar 🎉\n- mendapat 150 bits', m);    
userdb.kuismath = false
userdb.bits += 143
delete kuismath[m.sender.split('@')[0]]
} else {
if (similarity(m.text, userdb.jawaban) >= threshold) return reply("*Hampir benar. . .*")
reply('*Jawaban Salah!*')
}
    } else if (userdb.caklontong === true) {
    if (m.text == "nyerah") {
userdb.game = false
        await reply('*Anda Telah menyerah*');
         userdb.caklontong = false;
  delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
    } else if (m.text.replace(" ", "") === userdb.jawaban) {
        userdb.caklontong = false;
        userdb.bits += 143;
        await reply(`Selamat Jawaban Kamu Benar\n\nJawaban: ${m.text}`);
         delete caklontong[m.sender.split('@')[0]]
      delete caklontong_desk[m.sender.split('@')[0]]
    } else {
        reply("Jawaban Salah 🤦🏽‍♂️");
    }
    } else {
    }
  }
}       
//===================《 EXIT FITUR TEBAK 》=====================\\
        
// VERSI FILE LOKAL MP3 (GK PKE LINK, DARI AUDIO DI ESCEH LU 

const ownerList = [
  {
    jid: '6285813708397@s.whatsapp.net',
    pesan: 'Eh tuan ku muncul nih.\nBicara dengan sopan kepada tuan ku FallZx Infinity',
    audioLinks: [
      './start/song/song.mp3',
    ]
  },
  {
    jid: '6285813708397@s.whatsapp.net',
    pesan: 'Tuan ku telah datang, Harap sopan denganya',
    audioLinks: [
      './start/song/song.mp3',
    ]
  },
  // Tambahin anu mu lagi disini kyk diatas 
];

if (!global.sambutanCooldown) global.sambutanCooldown = {};
const currentTime = Math.floor(Date.now() / 86400); // kalau mau fast ubah ke 100

if (isGroup && m.sender) {
  const ownerData = ownerList.find(owner => owner.jid === m.sender);
  const lastTime = global.sambutanCooldown[m.chat] || 0;

  if (ownerData && currentTime >= lastTime) {
    const metadata = await Lily.groupMetadata(m.chat);
    const participants = metadata.participants || [];
    const mentionedUsers = participants.map(p => p.id).filter(id => id !== Lily.user.id);

    // Kirim reply teks ke pengirim
    reply(ownerData.pesan);

    const isSendAudio = Math.random() < 0.5; // Buat Random =50% audio, lu atur aj
    if (isSendAudio && ownerData.audioLinks?.length) {
      const randomAudioPath = ownerData.audioLinks[Math.floor(Math.random() * ownerData.audioLinks.length)];
      const resolvedPath = path.resolve(randomAudioPath);

      if (fs.existsSync(resolvedPath)) {
        const audioBuffer = fs.readFileSync(resolvedPath);
        await Lily.sendMessage(m.chat, {
          audio: audioBuffer,
          mimetype: 'audio/mpeg',
          ptt: true,
          mentions: mentionedUsers
        }, { quoted: m });
      } else {
        console.error('File audio tidak ditemukan:', resolvedPath);
      }
    } 

    global.sambutanCooldown[m.chat] = currentTime + 1000;
  }
}
//~~~~~~~~~ Function Main ~~~~~~~~~~//

const example = (teks) => {
return `ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ *\`ʜɪʟʟᴀʀʏʏᴏᴜʀs\`*:\n *${prefix+command}* ${teks}\n\nɢᴜɴᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`
}        
        if (!pluginsDisable) return;  
        
        switch (command) {
            
            case "allmenu": {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const formattedUsedMem = formatSize(usedMem);
    const formattedTotalMem = formatSize(totalMem);
    
    let anu = `ʜᴀʟᴏ ᴋᴀᴋ 👏

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ \`ʜɪʟʟᴀʀʏ ᴍᴅ\`. ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ \`ғᴀʟʟᴢx - ɪɴғɪɴɪᴛʏ\`, sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʀᴀᴍᴀʜ ᴅᴀɴ ʟᴜᴄᴜ 🙂‍↕. 

✧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ *⎙ INFO BOT* ]
> ɴᴀᴍᴀ   : ʜɪʟʟᴀʀʏ ᴍᴅ
> ᴏᴡɴᴇʀ  : ʜɪʟʟᴀʀʏ
> ᴠᴇʀꜱɪ   :  ${versinya}
✧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
┏─❣︎ 「 *\`OWNER MENU\`* 」 ❣︎──⪩
┃ • ${prefix}owner
┃ • ${prefix}self
┃ • ${prefix}public
┃ • ${prefix}addprem 62xx
┃ • ${prefix}clearchat
┃ • ${prefix}delprem 62xx
┃ • ${prefix}boton 
┃ • ${prefix}backup
┃ • ${prefix}sendch
┗❣︎
┏─❣︎ 「 *\`CONVERT MENU\`* 」 ❣︎──⪩
┃ • ${prefix}tiktok
┃ • ${prefix}instagram
┃ • ${prefix}twitter
┃ • ${prefix}ytmp3 
┃ • ${prefix}ytmp4
┃ • ${prefix}ytplay
┗❣︎
┏─❣︎ 「 *\`STORE MENU\`* 」 ❣︎──⪩
┃ • ${prefix}addlist
┃ • ${prefix}list
┃ • ${prefix}dellist
┃ • ${prefix}updatelist
┃ • ${prefix}setproses
┃ • ${prefix}changeproses
┃ • ${prefix}setdone
┃ • ${prefix}changedone
┗❣︎
┏─❣︎ 「 *\`MENU GABUT\`* 」 ❣︎──⪩
┃ • ${prefix}tozombie
┃ • ${prefix}cekoshi
┃ • ${prefix}longtext
┃ • ${prefix}gacha-member
┃ • ${prefix}menfess
┗❣︎
┏─❣︎ 「 *\`AI MENU\`* 」 ❣︎──⪩
┃ • ${prefix}ai-fall 
┃ • ${prefix}lily
┃ • ${prefix}blackboxai 
┃ • ${prefix}luminai
┃ • ${prefix}morphic
┃ • ${prefix}kana
┃ • ${prefix}bingimg-2d
┗❣︎
┏─❣︎ 「 *\`MENU BUG\`* 」 ❣︎──⪩
┃ • ${prefix}bug-button 
┃ • ${prefix}bug-browser
┃ • ${prefix}bug-gc 
┃ • ${prefix}tempban
┃ • ${prefix}bug-android
┃ • ${prefix}ga-ngotak
┃ • ${prefix}1day-out 
┃ • ${prefix}virg4m
┗❣︎
┏─❣︎ 「 *\`MENU BUG JKT48\`* 」 ❣︎──⪩
┃ • ${prefix}kebal-tubiran 
┃ • ${prefix}bantai-wotabul 
┃ • ${prefix}wotabul-kontol
┃ • ${prefix}mampuslu-zombie
┗❣︎
┏─❣︎ 「 *\`MENU GAME\`* 」 ❣︎──⪩
┃ • ${prefix}tebaklirik
┃ • ${prefix}tebakkimia
┃ • ${prefix}ltebaktebakan
┃ • ${prefix}tebakbendera
┃ • ${prefix}tebakbendera
┃ • ${prefix}tebakjkt48
┃ • ${prefix}tebakgambar
┃ • ${prefix}tebakkalimat 
┃ • ${prefix}tebaktekateki
┃ • ${prefix}tebaksusunkata
┗❣︎
┏─❣︎ 「 *\`RPG MENU\`* 」 ❣︎──⪩
┃ • ${prefix}joinrp
┃ • ${prefix}buygumption
┃ • ${prefix}ceklimitrp
┃ • ${prefix}heal
┃ • ${prefix}gumtion
┃ • ${prefix}crystal 
┃ • ${prefix}healing
┃ • ${prefix}myhost
┃ • ${prefix}inventori
┃ • ${prefix}rpbalance
┃ • ${prefix}cheatlevel
┃ • ${prefix}adventure
┃ • ${prefix}gaincrystal
┃ • ${prefix}leaderboard 
┃ • ${prefix}level
┗❣︎
ɢᴜɴᴀᴋᴀɴ ᴍᴇɴᴜ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`;
        let buttons = [
        { buttonId: ".realown", buttonText: { displayText: "OWNER 🔥" }, type: 1 },
        { buttonId: ".about", buttonText: { displayText: "ABOUT 🛸" }, type: 1 }
        
    ];
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${anu}`, // Teks menu
        contextInfo: {
        mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: namabot,
                body: descown,
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Lily Gen 2",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Ini adalah command yang sering diginakan",
                        highlight_label: "POPULER",
                        rows: [
                            { title: "🔍 ALL MENU", description: "Menampilkan semua menu", id: ".allmenu" }
                            ]
                            },
                            {
                            title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Lily 🌊",
                        rows: [
                            { title: "⬇️ DOWNLOAD MENU", description: "Menu untuk mendownload dan mencari", id: ".downloadmenu" },
                            { title: "📚 OTHER MENU", description: "Other menu", id: ".othermenu" },
                            { title: "🔥 OWNER MENU", description: "Hanya King👑 yang boleh menggunakan command ini", id: ".ownermenu" },
                            { title: "🎭 ANIME MENU", description: "Command untuk menu anime", id: ".animemenu" },
                            { title: "🔮 AI MENU", description: "Menu Artificial intelligence free", id: ".aimenu" },
                            { title: "♻️ RANDOM MENU", description: "Menu random", id: ".randommenu" },
                            { title: "🎤 AUDIO MENU", description: "Menu untuk merubah audio", id: ".audiomenu" },
                            { title: "🔄 CONVERT MENU", description: "Menu untuk converter", id: ".convertmenu" },
                            { title: "🫧 GROUP MENU", description: "Menu tentang group", id: ".groupmenu" }
                        ]
                    },
                    {
                        title: "Document & Support",
                        highlight_label: "Lily Gen 2 ⭐",
                        rows: [
                            { title: "📝 SCRIPT", description: "Script bot yang saya pakai", id: ".script" },
                            { title: "🔑 OWNER", description: "Pembuat Bot WhatsApp Lily", id: ".contact" },
                            { title: "🪨 TQTO", description: "Membantu support dan berbagi", id: ".tqto" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await Lily.sendMessage(m.chat, buttonMessage, { quoted: m });
};
break;
case 'menu': {
    // Format menu dengan limit dan register
    const ini = `ʜᴀʟᴏ ᴋᴀᴋ 👏

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ \`ʜɪʟʟᴀʀʏ ᴍᴅ\`. ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ \`ғᴀʟʟᴢx - ɪɴғɪɴɪᴛʏ\`, sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʀᴀᴍᴀʜ ᴅᴀɴ ʟᴜᴄᴜ 🙂‍↕. 

✧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ *⎙ INFO BOT* ]
> ɴᴀᴍᴀ   : ʜɪʟʟᴀʀʏ ᴍᴅ
> ᴏᴡɴᴇʀ  : ʜɪʟʟᴀʀʏ
> ᴠᴇʀꜱɪ   :  ${versinya}
✧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
┏─❣︎ 「 *\`LIST MENU\`* 」 ❣︎──⪩
┃ • ${prefix}ownermenu
┃ • ${prefix}menustore
┃ • ${prefix}menugabut
┃ • ${prefix}menugame
┃ • ${prefix}menutools
┃ • ${prefix}menurpg
┃ • ${prefix}menuai
┃ • ${prefix}menudownload
┃ • ${prefix}vipmenu
┃ • ${prefix}ddosmenu
┃ • ${prefix}menupush
┃ • ${prefix}islamicmenu
┗❣︎
Ingin Lagu? Ketik .setlistOriginal
ɢᴜɴᴀᴋᴀɴ ᴍᴇɴᴜ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`;
        let buttons = [
        { buttonId: ".realown", buttonText: { displayText: "OWNER 🔥" }, type: 1 },
        { buttonId: ".about", buttonText: { displayText: "ABOUT 🛸" }, type: 1 }
        
    ];
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${ini}`, // Teks menu
        contextInfo: {
        mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: namabot,
                body: descown,
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Lily Gen 2",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Ini adalah command yang sering diginakan",
                        highlight_label: "POPULER",
                        rows: [
                            { title: "🔍 ALL MENU", description: "Menampilkan semua menu", id: ".allmenu" }
                            ]
                            },
                            {
                            title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Lily 🌊",
                        rows: [
                            { title: "⬇️ DOWNLOAD MENU", description: "Menu untuk mendownload dan mencari", id: ".downloadmenu" },
                            { title: "📚 OTHER MENU", description: "Other menu", id: ".othermenu" },
                            { title: "🔥 OWNER MENU", description: "Hanya King👑 yang boleh menggunakan command ini", id: ".ownermenu" },
                            { title: "🎭 ANIME MENU", description: "Command untuk menu anime", id: ".animemenu" },
                            { title: "🔮 AI MENU", description: "Menu Artificial intelligence free", id: ".aimenu" },
                            { title: "♻️ RANDOM MENU", description: "Menu random", id: ".randommenu" },
                            { title: "🎤 AUDIO MENU", description: "Menu untuk merubah audio", id: ".audiomenu" },
                            { title: "🔄 CONVERT MENU", description: "Menu untuk converter", id: ".convertmenu" },
                            { title: "🫧 GROUP MENU", description: "Menu tentang group", id: ".groupmenu" }
                        ]
                    },
                    {
                        title: "Document & Support",
                        highlight_label: "Lily Gen 2 ⭐",
                        rows: [
                            { title: "📝 SCRIPT", description: "Script bot yang saya pakai", id: ".script" },
                            { title: "🔑 OWNER", description: "Pembuat Bot WhatsApp Lily", id: ".contact" },
                            { title: "🪨 TQTO", description: "Membantu support dan berbagi", id: ".tqto" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await Lily.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break
             
            case 'ownermenu': {
// Format menu dengan limit dan register
let int = `
ʜᴀʟᴏ ᴋᴀᴋ 👏

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ \`ʜɪʟʟᴀʀʏ ᴍᴅ\`. ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ \`ғᴀʟʟᴢx - ɪɴғɪɴɪᴛʏ\`, sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʀᴀᴍᴀʜ ᴅᴀɴ ʟᴜᴄᴜ 🙂‍↕. 

┏──❣︎ 【  *\`INFO BOT\`*  】 ❣︎──⪩
┃ •  Name : ${pushname}
┃ •  Number: ${m.sender.split('@')[0]}
┃ •  Status: ${isPremium ? "Premium" : "Free"}
┃ •  Libary: Baileys - Socket
┃ •  Version: ${versinya}
┗──❣︎

┏─❣︎ 「 *\`OWNER MENU\`* 」 ❣︎──⪩
┃ • ${prefix}owner
┃ • ${prefix}self
┃ • ${prefix}public
┃ • ${prefix}addprem 62xx
┃ • ${prefix}clearchat
┃ • ${prefix}delprem 62xx
┃ • ${prefix}boton 
┃ • ${prefix}backup
┃ • ${prefix}sendch
┗❣︎
ɢᴜɴᴀᴋᴀɴ ᴍᴇɴᴜ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`
let buttons = [
        { buttonId: ".realown", buttonText: { displayText: "OWNER 🔥" }, type: 1 },
        { buttonId: ".about", buttonText: { displayText: "ABOUT 🛸" }, type: 1 }
        
    ];
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${int}`, // Teks menu
        contextInfo: {
        mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: namabot,
                body: descown,
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Lily Gen 2",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Ini adalah command yang sering diginakan",
                        highlight_label: "POPULER",
                        rows: [
                            { title: "🔍 ALL MENU", description: "Menampilkan semua menu", id: ".allmenu" }
                            ]
                            },
                            {
                            title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Lily 🌊",
                        rows: [
                            { title: "⬇️ DOWNLOAD MENU", description: "Menu untuk mendownload dan mencari", id: ".downloadmenu" },
                            { title: "📚 OTHER MENU", description: "Other menu", id: ".othermenu" },
                            { title: "🔥 OWNER MENU", description: "Hanya King👑 yang boleh menggunakan command ini", id: ".ownermenu" },
                            { title: "🎭 ANIME MENU", description: "Command untuk menu anime", id: ".animemenu" },
                            { title: "🔮 AI MENU", description: "Menu Artificial intelligence free", id: ".aimenu" },
                            { title: "♻️ RANDOM MENU", description: "Menu random", id: ".randommenu" },
                            { title: "🎤 AUDIO MENU", description: "Menu untuk merubah audio", id: ".audiomenu" },
                            { title: "🔄 CONVERT MENU", description: "Menu untuk converter", id: ".convertmenu" },
                            { title: "🫧 GROUP MENU", description: "Menu tentang group", id: ".groupmenu" }
                        ]
                    },
                    {
                        title: "Document & Support",
                        highlight_label: "Lily Gen 2 ⭐",
                        rows: [
                            { title: "📝 SCRIPT", description: "Script bot yang saya pakai", id: ".script" },
                            { title: "🔑 OWNER", description: "Pembuat Bot WhatsApp Lily", id: ".contact" },
                            { title: "🪨 TQTO", description: "Membantu support dan berbagi", id: ".tqto" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await Lily.sendMessage(m.chat, buttonMessage, { quoted: m });
}
        break
    case 'menustore':{
        // Format menu dengan limit dan register
let int = `
ʜᴀʟᴏ ᴋᴀᴋ 👏

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ \`ʜɪʟʟᴀʀʏ ᴍᴅ\`. ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ \`ғᴀʟʟᴢx - ɪɴғɪɴɪᴛʏ\`, sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʀᴀᴍᴀʜ ᴅᴀɴ ʟᴜᴄᴜ 🙂‍↕. 

┏──❣︎ 【  *\`INFO BOT\`*  】 ❣︎──⪩
┃ •  Name : ${pushname}
┃ •  Number: ${m.sender.split('@')[0]}
┃ •  Status: ${isPremium ? "Premium" : "Free"}
┃ •  Libary: Baileys - Socket
┃ •  Version: ${versinya}
┗──❣︎
┏─❣︎ 「 *\`STORE MENU\`* 」 ❣︎──⪩
┃ • ${prefix}addlist
┃ • ${prefix}list
┃ • ${prefix}dellist
┃ • ${prefix}updatelist
┃ • ${prefix}setproses
┃ • ${prefix}changeproses
┃ • ${prefix}setdone
┃ • ${prefix}changedone
┗❣︎
ɢᴜɴᴀᴋᴀɴ ᴍᴇɴᴜ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`
let buttons = [
        { buttonId: ".realown", buttonText: { displayText: "OWNER 🔥" }, type: 1 },
        { buttonId: ".about", buttonText: { displayText: "ABOUT 🛸" }, type: 1 }
        
    ];
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${int}`, // Teks menu
        contextInfo: {
        mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: namabot,
                body: descown,
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Lily Gen 2",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Ini adalah command yang sering diginakan",
                        highlight_label: "POPULER",
                        rows: [
                            { title: "🔍 ALL MENU", description: "Menampilkan semua menu", id: ".allmenu" }
                            ]
                            },
                            {
                            title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Lily 🌊",
                        rows: [
                            { title: "⬇️ DOWNLOAD MENU", description: "Menu untuk mendownload dan mencari", id: ".downloadmenu" },
                            { title: "📚 OTHER MENU", description: "Other menu", id: ".othermenu" },
                            { title: "🔥 OWNER MENU", description: "Hanya King👑 yang boleh menggunakan command ini", id: ".ownermenu" },
                            { title: "🎭 ANIME MENU", description: "Command untuk menu anime", id: ".animemenu" },
                            { title: "🔮 AI MENU", description: "Menu Artificial intelligence free", id: ".aimenu" },
                            { title: "♻️ RANDOM MENU", description: "Menu random", id: ".randommenu" },
                            { title: "🎤 AUDIO MENU", description: "Menu untuk merubah audio", id: ".audiomenu" },
                            { title: "🔄 CONVERT MENU", description: "Menu untuk converter", id: ".convertmenu" },
                            { title: "🫧 GROUP MENU", description: "Menu tentang group", id: ".groupmenu" }
                        ]
                    },
                    {
                        title: "Document & Support",
                        highlight_label: "Lily Gen 2 ⭐",
                        rows: [
                            { title: "📝 SCRIPT", description: "Script bot yang saya pakai", id: ".script" },
                            { title: "🔑 OWNER", description: "Pembuat Bot WhatsApp Lily", id: ".contact" },
                            { title: "🪨 TQTO", description: "Membantu support dan berbagi", id: ".tqto" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await Lily.sendMessage(m.chat, buttonMessage, { quoted: m });
}
        break
    case 'menubug':{
        // Format menu dengan limit dan register
let int = `
ʜᴀʟᴏ ᴋᴀᴋ 👏

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ \`ʜɪʟʟᴀʀʏ ᴍᴅ\`. ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ \`ғᴀʟʟᴢx - ɪɴғɪɴɪᴛʏ\`, sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʀᴀᴍᴀʜ ᴅᴀɴ ʟᴜᴄᴜ 🙂‍↕. 

┏──❣︎ 【  *\`INFO BOT\`*  】 ❣︎──⪩
┃ •  Name : ${pushname}
┃ •  Number: ${m.sender.split('@')[0]}
┃ •  Status: ${isPremium ? "Premium" : "Free"}
┃ •  Libary: Baileys - Socket
┃ •  Version: ${versinya}
┗──❣︎

┏─❣︎ 「 *\`MENU BUG\`* 」 ❣︎──⪩
┃ • ${prefix}bug-button 
┃ • ${prefix}bug-browser
┃ • ${prefix}bug-gc 
┃ • ${prefix}tempban
┃ • ${prefix}bug-android
┃ • ${prefix}ga-ngotak
┃ • ${prefix}1day-out 
┃ • ${prefix}virg4m
┗❣︎
ɢᴜɴᴀᴋᴀɴ ᴍᴇɴᴜ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`
let buttons = [
        { buttonId: ".realown", buttonText: { displayText: "OWNER 🔥" }, type: 1 },
        { buttonId: ".about", buttonText: { displayText: "ABOUT 🛸" }, type: 1 }
        
    ];
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${int}`, // Teks menu
        contextInfo: {
        mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: namabot,
                body: descown,
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Lily Gen 2",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Ini adalah command yang sering diginakan",
                        highlight_label: "POPULER",
                        rows: [
                            { title: "🔍 ALL MENU", description: "Menampilkan semua menu", id: ".allmenu" }
                            ]
                            },
                            {
                            title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Lily 🌊",
                        rows: [
                            { title: "⬇️ DOWNLOAD MENU", description: "Menu untuk mendownload dan mencari", id: ".downloadmenu" },
                            { title: "📚 OTHER MENU", description: "Other menu", id: ".othermenu" },
                            { title: "🔥 OWNER MENU", description: "Hanya King👑 yang boleh menggunakan command ini", id: ".ownermenu" },
                            { title: "🎭 ANIME MENU", description: "Command untuk menu anime", id: ".animemenu" },
                            { title: "🔮 AI MENU", description: "Menu Artificial intelligence free", id: ".aimenu" },
                            { title: "♻️ RANDOM MENU", description: "Menu random", id: ".randommenu" },
                            { title: "🎤 AUDIO MENU", description: "Menu untuk merubah audio", id: ".audiomenu" },
                            { title: "🔄 CONVERT MENU", description: "Menu untuk converter", id: ".convertmenu" },
                            { title: "🫧 GROUP MENU", description: "Menu tentang group", id: ".groupmenu" }
                        ]
                    },
                    {
                        title: "Document & Support",
                        highlight_label: "Lily Gen 2 ⭐",
                        rows: [
                            { title: "📝 SCRIPT", description: "Script bot yang saya pakai", id: ".script" },
                            { title: "🔑 OWNER", description: "Pembuat Bot WhatsApp Lily", id: ".contact" },
                            { title: "🪨 TQTO", description: "Membantu support dan berbagi", id: ".tqto" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await Lily.sendMessage(m.chat, buttonMessage, { quoted: m });
}
        break
    case 'menutools': {
        // Format menu dengan limit dan register
let int = `
ʜᴀʟᴏ ᴋᴀᴋ 👏

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ \`ʜɪʟʟᴀʀʏ ᴍᴅ\`. ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ \`ғᴀʟʟᴢx - ɪɴғɪɴɪᴛʏ\`, sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʀᴀᴍᴀʜ ᴅᴀɴ ʟᴜᴄᴜ 🙂‍↕. 

┏──❣︎ 【  *\`INFO BOT\`*  】 ❣︎──⪩
┃ •  Name : ${pushname}
┃ •  Number: ${m.sender.split('@')[0]}
┃ •  Status: ${isPremium ? "Premium" : "Free"}
┃ •  Libary: Baileys - Socket
┃ •  Version: ${versinya}
┗──❣︎

┏─❣︎ 「 *\`MENU TOOLS\`* 」 ❣︎──⪩
┃ • ${prefix}toanime
┃ • ${prefix}toanime2
┃ • ${prefix}toanime3
┃ • ${prefix}tobadut
┃ • ${prefix}tohijab
┃ • ${prefix}aiedit
┃ • ${prefix}ainsfw
┃ • ${prefix}aitohuman
┃ • ${prefix}hitamkan
┃ • ${prefix}hdr
┃ • ${prefix}remini
┃ • ${prefix}ssweb
┗❣︎
ɢᴜɴᴀᴋᴀɴ ᴍᴇɴᴜ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`
let buttons = [
        { buttonId: ".realown", buttonText: { displayText: "OWNER 🔥" }, type: 1 },
        { buttonId: ".about", buttonText: { displayText: "ABOUT 🛸" }, type: 1 }
        
    ];
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${int}`, // Teks menu
        contextInfo: {
        mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: namabot,
                body: descown,
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Lily Gen 2",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Ini adalah command yang sering diginakan",
                        highlight_label: "POPULER",
                        rows: [
                            { title: "🔍 ALL MENU", description: "Menampilkan semua menu", id: ".allmenu" }
                            ]
                            },
                            {
                            title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Lily 🌊",
                        rows: [
                            { title: "⬇️ DOWNLOAD MENU", description: "Menu untuk mendownload dan mencari", id: ".downloadmenu" },
                            { title: "📚 OTHER MENU", description: "Other menu", id: ".othermenu" },
                            { title: "🔥 OWNER MENU", description: "Hanya King👑 yang boleh menggunakan command ini", id: ".ownermenu" },
                            { title: "🎭 ANIME MENU", description: "Command untuk menu anime", id: ".animemenu" },
                            { title: "🔮 AI MENU", description: "Menu Artificial intelligence free", id: ".aimenu" },
                            { title: "♻️ RANDOM MENU", description: "Menu random", id: ".randommenu" },
                            { title: "🎤 AUDIO MENU", description: "Menu untuk merubah audio", id: ".audiomenu" },
                            { title: "🔄 CONVERT MENU", description: "Menu untuk converter", id: ".convertmenu" },
                            { title: "🫧 GROUP MENU", description: "Menu tentang group", id: ".groupmenu" }
                        ]
                    },
                    {
                        title: "Document & Support",
                        highlight_label: "Lily Gen 2 ⭐",
                        rows: [
                            { title: "📝 SCRIPT", description: "Script bot yang saya pakai", id: ".script" },
                            { title: "🔑 OWNER", description: "Pembuat Bot WhatsApp Lily", id: ".contact" },
                            { title: "🪨 TQTO", description: "Membantu support dan berbagi", id: ".tqto" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await Lily.sendMessage(m.chat, buttonMessage, { quoted: m });
}
        break
    case 'menupush': {
        // Format menu dengan limit dan register
let int = `
ʜᴀʟᴏ ᴋᴀᴋ 👏

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ \`ʜɪʟʟᴀʀʏ ᴍᴅ\`. ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ \`ғᴀʟʟᴢx - ɪɴғɪɴɪᴛʏ\`, sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʀᴀᴍᴀʜ ᴅᴀɴ ʟᴜᴄᴜ 🙂‍↕. 

┏──❣︎ 【  *\`INFO BOT\`*  】 ❣︎──⪩
┃ •  Name : ${pushname}
┃ •  Number: ${m.sender.split('@')[0]}
┃ •  Status: ${isPremium ? "Premium" : "Free"}
┃ •  Libary: Baileys - Socket
┃ •  Version: ${versinya}
┗──❣︎

┏─❣︎ 「 *\`CONVERT MENU\`* 」 ❣︎──⪩
┃ • ${prefix}pushkontak
┃ • ${prefix}pushkontak2
┃ • ${prefix}cekidgc
┃ • ${prefix}inspect
┗❣︎
ɢᴜɴᴀᴋᴀɴ ᴍᴇɴᴜ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`
let buttons = [
        { buttonId: ".realown", buttonText: { displayText: "OWNER 🔥" }, type: 1 },
        { buttonId: ".about", buttonText: { displayText: "ABOUT 🛸" }, type: 1 }
        
    ];
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${int}`, // Teks menu
        contextInfo: {
        mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: namabot,
                body: descown,
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Lily Gen 2",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Ini adalah command yang sering diginakan",
                        highlight_label: "POPULER",
                        rows: [
                            { title: "🔍 ALL MENU", description: "Menampilkan semua menu", id: ".allmenu" }
                            ]
                            },
                            {
                            title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Lily 🌊",
                        rows: [
                            { title: "⬇️ DOWNLOAD MENU", description: "Menu untuk mendownload dan mencari", id: ".downloadmenu" },
                            { title: "📚 OTHER MENU", description: "Other menu", id: ".othermenu" },
                            { title: "🔥 OWNER MENU", description: "Hanya King👑 yang boleh menggunakan command ini", id: ".ownermenu" },
                            { title: "🎭 ANIME MENU", description: "Command untuk menu anime", id: ".animemenu" },
                            { title: "🔮 AI MENU", description: "Menu Artificial intelligence free", id: ".aimenu" },
                            { title: "♻️ RANDOM MENU", description: "Menu random", id: ".randommenu" },
                            { title: "🎤 AUDIO MENU", description: "Menu untuk merubah audio", id: ".audiomenu" },
                            { title: "🔄 CONVERT MENU", description: "Menu untuk converter", id: ".convertmenu" },
                            { title: "🫧 GROUP MENU", description: "Menu tentang group", id: ".groupmenu" }
                        ]
                    },
                    {
                        title: "Document & Support",
                        highlight_label: "Lily Gen 2 ⭐",
                        rows: [
                            { title: "📝 SCRIPT", description: "Script bot yang saya pakai", id: ".script" },
                            { title: "🔑 OWNER", description: "Pembuat Bot WhatsApp Lily", id: ".contact" },
                            { title: "🪨 TQTO", description: "Membantu support dan berbagi", id: ".tqto" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await Lily.sendMessage(m.chat, buttonMessage, { quoted: m });
}
        break
    case 'menugabut':{
        // Format menu dengan limit dan register
let int = `
ʜᴀʟᴏ ᴋᴀᴋ 👏

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ \`ʜɪʟʟᴀʀʏ ᴍᴅ\`. ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ \`ғᴀʟʟᴢx - ɪɴғɪɴɪᴛʏ\`, sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʀᴀᴍᴀʜ ᴅᴀɴ ʟᴜᴄᴜ 🙂‍↕. 

┏──❣︎ 【  *\`INFO BOT\`*  】 ❣︎──⪩
┃ •  Name : ${pushname}
┃ •  Number: ${m.sender.split('@')[0]}
┃ •  Status: ${isPremium ? "Premium" : "Free"}
┃ •  Libary: Baileys - Socket
┃ •  Version: ${versinya}
┗──❣︎

┏─❣︎ 「 *\`MENU GABUT\`* 」 ❣︎──⪩
┃ • ${prefix}tozombie
┃ • ${prefix}cekoshi
┃ • ${prefix}longtext
┃ • ${prefix}gacha-member
┃ • ${prefix}menfess
┗❣︎
ɢᴜɴᴀᴋᴀɴ ᴍᴇɴᴜ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`
let buttons = [
        { buttonId: ".realown", buttonText: { displayText: "OWNER 🔥" }, type: 1 },
        { buttonId: ".about", buttonText: { displayText: "ABOUT 🛸" }, type: 1 }
        
    ];
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${int}`, // Teks menu
        contextInfo: {
        mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: namabot,
                body: descown,
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Lily Gen 2",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Ini adalah command yang sering diginakan",
                        highlight_label: "POPULER",
                        rows: [
                            { title: "🔍 ALL MENU", description: "Menampilkan semua menu", id: ".allmenu" }
                            ]
                            },
                            {
                            title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Lily 🌊",
                        rows: [
                            { title: "⬇️ DOWNLOAD MENU", description: "Menu untuk mendownload dan mencari", id: ".downloadmenu" },
                            { title: "📚 OTHER MENU", description: "Other menu", id: ".othermenu" },
                            { title: "🔥 OWNER MENU", description: "Hanya King👑 yang boleh menggunakan command ini", id: ".ownermenu" },
                            { title: "🎭 ANIME MENU", description: "Command untuk menu anime", id: ".animemenu" },
                            { title: "🔮 AI MENU", description: "Menu Artificial intelligence free", id: ".aimenu" },
                            { title: "♻️ RANDOM MENU", description: "Menu random", id: ".randommenu" },
                            { title: "🎤 AUDIO MENU", description: "Menu untuk merubah audio", id: ".audiomenu" },
                            { title: "🔄 CONVERT MENU", description: "Menu untuk converter", id: ".convertmenu" },
                            { title: "🫧 GROUP MENU", description: "Menu tentang group", id: ".groupmenu" }
                        ]
                    },
                    {
                        title: "Document & Support",
                        highlight_label: "Lily Gen 2 ⭐",
                        rows: [
                            { title: "📝 SCRIPT", description: "Script bot yang saya pakai", id: ".script" },
                            { title: "🔑 OWNER", description: "Pembuat Bot WhatsApp Lily", id: ".contact" },
                            { title: "🪨 TQTO", description: "Membantu support dan berbagi", id: ".tqto" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await Lily.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break
    case 'menugame':{
        // Format menu dengan limit dan register
let int = `
ʜᴀʟᴏ ᴋᴀᴋ 👏

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ \`ʜɪʟʟᴀʀʏ ᴍᴅ\`. ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ \`ғᴀʟʟᴢx - ɪɴғɪɴɪᴛʏ\`, sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʀᴀᴍᴀʜ ᴅᴀɴ ʟᴜᴄᴜ 🙂‍↕. 

┏──❣︎ 【  *\`INFO BOT\`*  】 ❣︎──⪩
┃ •  Name : ${pushname}
┃ •  Number: ${m.sender.split('@')[0]}
┃ •  Status: ${isPremium ? "Premium" : "Free"}
┃ •  Libary: Baileys - Socket
┃ •  Version: ${versinya}
┗──❣︎

┏─❣︎ 「 *\`MENU GAME\`* 」 ❣︎──⪩
┃ • ${prefix}tebaklirik
┃ • ${prefix}tebakkimia
┃ • ${prefix}ltebaktebakan
┃ • ${prefix}tebakbendera
┃ • ${prefix}tebakbendera
┃ • ${prefix}tebakjkt48
┃ • ${prefix}tebakgambar
┃ • ${prefix}tebakkalimat 
┃ • ${prefix}tebaktekateki
┃ • ${prefix}tebaksusunkata
┗❣︎
ɢᴜɴᴀᴋᴀɴ ᴍᴇɴᴜ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`
let buttons = [
        { buttonId: ".realown", buttonText: { displayText: "OWNER 🔥" }, type: 1 },
        { buttonId: ".about", buttonText: { displayText: "ABOUT 🛸" }, type: 1 }
        
    ];
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${int}`, // Teks menu
        contextInfo: {
        mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: namabot,
                body: descown,
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Lily Gen 2",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Ini adalah command yang sering diginakan",
                        highlight_label: "POPULER",
                        rows: [
                            { title: "🔍 ALL MENU", description: "Menampilkan semua menu", id: ".allmenu" }
                            ]
                            },
                            {
                            title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Lily 🌊",
                        rows: [
                            { title: "⬇️ DOWNLOAD MENU", description: "Menu untuk mendownload dan mencari", id: ".downloadmenu" },
                            { title: "📚 OTHER MENU", description: "Other menu", id: ".othermenu" },
                            { title: "🔥 OWNER MENU", description: "Hanya King👑 yang boleh menggunakan command ini", id: ".ownermenu" },
                            { title: "🎭 ANIME MENU", description: "Command untuk menu anime", id: ".animemenu" },
                            { title: "🔮 AI MENU", description: "Menu Artificial intelligence free", id: ".aimenu" },
                            { title: "♻️ RANDOM MENU", description: "Menu random", id: ".randommenu" },
                            { title: "🎤 AUDIO MENU", description: "Menu untuk merubah audio", id: ".audiomenu" },
                            { title: "🔄 CONVERT MENU", description: "Menu untuk converter", id: ".convertmenu" },
                            { title: "🫧 GROUP MENU", description: "Menu tentang group", id: ".groupmenu" }
                        ]
                    },
                    {
                        title: "Document & Support",
                        highlight_label: "Lily Gen 2 ⭐",
                        rows: [
                            { title: "📝 SCRIPT", description: "Script bot yang saya pakai", id: ".script" },
                            { title: "🔑 OWNER", description: "Pembuat Bot WhatsApp Lily", id: ".contact" },
                            { title: "🪨 TQTO", description: "Membantu support dan berbagi", id: ".tqto" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await Lily.sendMessage(m.chat, buttonMessage, { quoted: m });
}
        break
    case 'menurpg': {
        // Format menu dengan limit dan register
let int = `
ʜᴀʟᴏ ᴋᴀᴋ 👏

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ \`ʜɪʟʟᴀʀʏ ᴍᴅ\`. ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ \`ғᴀʟʟᴢx - ɪɴғɪɴɪᴛʏ\`, sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʀᴀᴍᴀʜ ᴅᴀɴ ʟᴜᴄᴜ 🙂‍↕. 

┏──❣︎ 【  *\`INFO BOT\`*  】 ❣︎──⪩
┃ •  Name : ${pushname}
┃ •  Number: ${m.sender.split('@')[0]}
┃ •  Status: ${isPremium ? "Premium" : "Free"}
┃ •  Libary: Baileys - Socket
┃ •  Version: ${versinya}
┗──❣︎

┏─❣︎ 「 *\`RPG MENU\`* 」 ❣︎──⪩
┃ • ${prefix}joinrp
┃ • ${prefix}buygumption
┃ • ${prefix}ceklimitrp
┃ • ${prefix}heal
┃ • ${prefix}gumtion
┃ • ${prefix}crystal 
┃ • ${prefix}healing
┃ • ${prefix}myhost
┃ • ${prefix}inventori
┃ • ${prefix}rpbalance
┃ • ${prefix}cheatlevel
┃ • ${prefix}adventure
┃ • ${prefix}gaincrystal
┃ • ${prefix}leaderboard 
┃ • ${prefix}level
┗❣︎
ɢᴜɴᴀᴋᴀɴ ᴍᴇɴᴜ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`
let buttons = [
        { buttonId: ".realown", buttonText: { displayText: "OWNER 🔥" }, type: 1 },
        { buttonId: ".about", buttonText: { displayText: "ABOUT 🛸" }, type: 1 }
        
    ];
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${int}`, // Teks menu
        contextInfo: {
        mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: namabot,
                body: descown,
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Lily Gen 2",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        
                        title: "Ini adalah command yang sering diginakan",
                        highlight_label: "POPULER",
                        rows: [
                            { title: "🔍 ALL MENU", description: "Menampilkan semua menu", id: ".allmenu" }
                            ]
                            },
                            {
                            title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Lily 🌊",
                        rows: [
                            { title: "⬇️ DOWNLOAD MENU", description: "Menu untuk mendownload dan mencari", id: ".downloadmenu" },
                            { title: "📚 OTHER MENU", description: "Other menu", id: ".othermenu" },
                            { title: "🔥 OWNER MENU", description: "Hanya King👑 yang boleh menggunakan command ini", id: ".ownermenu" },
                            { title: "🎭 ANIME MENU", description: "Command untuk menu anime", id: ".animemenu" },
                            { title: "🔮 AI MENU", description: "Menu Artificial intelligence free", id: ".aimenu" },
                            { title: "♻️ RANDOM MENU", description: "Menu random", id: ".randommenu" },
                            { title: "🎤 AUDIO MENU", description: "Menu untuk merubah audio", id: ".audiomenu" },
                            { title: "🔄 CONVERT MENU", description: "Menu untuk converter", id: ".convertmenu" },
                            { title: "🫧 GROUP MENU", description: "Menu tentang group", id: ".groupmenu" }
                        ]
                    },
                    {
                        title: "Document & Support",
                        highlight_label: "Lily Gen 2 ⭐",
                        rows: [
                            { title: "📝 SCRIPT", description: "Script bot yang saya pakai", id: ".script" },
                            { title: "🔑 OWNER", description: "Pembuat Bot WhatsApp Lily", id: ".contact" },
                            { title: "🪨 TQTO", description: "Membantu support dan berbagi", id: ".tqto" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await Lily.sendMessage(m.chat, buttonMessage, { quoted: m });
}
        break
    case 'menuai': {
        // Format menu dengan limit dan register
let int = `
ʜᴀʟᴏ ᴋᴀᴋ 👏

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ \`ʜɪʟʟᴀʀʏ ᴍᴅ\`. ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ \`ғᴀʟʟᴢx - ɪɴғɪɴɪᴛʏ\`, sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʀᴀᴍᴀʜ ᴅᴀɴ ʟᴜᴄᴜ 🙂‍↕. 

┏──❣︎ 【  *\`INFO BOT\`*  】 ❣︎──⪩
┃ •  Name : ${pushname}
┃ •  Number: ${m.sender.split('@')[0]}
┃ •  Status: ${isPremium ? "Premium" : "Free"}
┃ •  Libary: Baileys - Socket
┃ •  Version: ${versinya}
┗──❣︎

┏─❣︎ 「 *\`AI MENU\`* 」 ❣︎──⪩
┃ • ${prefix}ai-fall 
┃ • ${prefix}lily-ai
┃ • ${prefix}gpt4o-mini 
┃ • ${prefix}blackboxai 
┃ • ${prefix}luminai
┃ • ${prefix}morphic
┃ • ${prefix}kana
┃ • ${prefix}bingimg-2d
┃ • ${prefix}autoai
┃ • ${prefix}hillary-image
┃ • ${prefix}ai-llama
┃ • ${prefix}logic-ai
┗❣︎
ɢᴜɴᴀᴋᴀɴ ᴍᴇɴᴜ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`
let buttons = [
        { buttonId: ".realown", buttonText: { displayText: "OWNER 🔥" }, type: 1 },
        { buttonId: ".about", buttonText: { displayText: "ABOUT 🛸" }, type: 1 }
        
    ];
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${int}`, // Teks menu
        contextInfo: {
        mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: namabot,
                body: descown,
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Lily Gen 2",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Ini adalah command yang sering diginakan",
                        highlight_label: "POPULER",
                        rows: [
                            { title: "🔍 ALL MENU", description: "Menampilkan semua menu", id: ".allmenu" }
                            ]
                            },
                            {
                            title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Lily 🌊",
                        rows: [
                            { title: "⬇️ DOWNLOAD MENU", description: "Menu untuk mendownload dan mencari", id: ".downloadmenu" },
                            { title: "📚 OTHER MENU", description: "Other menu", id: ".othermenu" },
                            { title: "🔥 OWNER MENU", description: "Hanya King👑 yang boleh menggunakan command ini", id: ".ownermenu" },
                            { title: "🎭 ANIME MENU", description: "Command untuk menu anime", id: ".animemenu" },
                            { title: "🔮 AI MENU", description: "Menu Artificial intelligence free", id: ".aimenu" },
                            { title: "♻️ RANDOM MENU", description: "Menu random", id: ".randommenu" },
                            { title: "🎤 AUDIO MENU", description: "Menu untuk merubah audio", id: ".audiomenu" },
                            { title: "🔄 CONVERT MENU", description: "Menu untuk converter", id: ".convertmenu" },
                            { title: "🫧 GROUP MENU", description: "Menu tentang group", id: ".groupmenu" }
                        ]
                    },
                    {
                        title: "Document & Support",
                        highlight_label: "Lily Gen 2 ⭐",
                        rows: [
                            { title: "📝 SCRIPT", description: "Script bot yang saya pakai", id: ".script" },
                            { title: "🔑 OWNER", description: "Pembuat Bot WhatsApp Lily", id: ".contact" },
                            { title: "🪨 TQTO", description: "Membantu support dan berbagi", id: ".tqto" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await Lily.sendMessage(m.chat, buttonMessage, { quoted: m });
}
        break
    case 'menudownload': {
        // Format menu dengan limit dan register
let int = `
ʜᴀʟᴏ ᴋᴀᴋ 👏

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ \`ʜɪʟʟᴀʀʏ ᴍᴅ\`. ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ \`ғᴀʟʟᴢx - ɪɴғɪɴɪᴛʏ\`, sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʀᴀᴍᴀʜ ᴅᴀɴ ʟᴜᴄᴜ 🙂‍↕. 

┏──❣︎ 【  *\`INFO BOT\`*  】 ❣︎──⪩
┃ •  Name : ${pushname}
┃ •  Number: ${m.sender.split('@')[0]}
┃ •  Status: ${isPremium ? "Premium" : "Free"}
┃ •  Libary: Baileys - Socket
┃ •  Version: ${versinya}
┗──❣︎

┏─❣︎ 「 *\`CONVERT MENU\`* 」 ❣︎──⪩
┃ • ${prefix}tiktok
┃ • ${prefix}tiktokslide
┃ • ${prefix}pinterest
┃ • ${prefix}instagram
┃ • ${prefix}twitter
┃ • ${prefix}ytmp3 
┃ • ${prefix}ytmp4
┃ • ${prefix}ytplay
┗❣︎
ɢᴜɴᴀᴋᴀɴ ᴍᴇɴᴜ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`
let buttons = [
        { buttonId: ".realown", buttonText: { displayText: "OWNER 🔥" }, type: 1 },
        { buttonId: ".about", buttonText: { displayText: "ABOUT 🛸" }, type: 1 }
        
    ];
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${int}`, // Teks menu
        contextInfo: {
        mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: namabot,
                body: descown,
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Lily Gen 2",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Ini adalah command yang sering diginakan",
                        highlight_label: "POPULER",
                        rows: [
                            { title: "🔍 ALL MENU", description: "Menampilkan semua menu", id: ".allmenu" }
                            ]
                            },
                            {
                            title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Lily 🌊",
                        rows: [
                            { title: "⬇️ DOWNLOAD MENU", description: "Menu untuk mendownload dan mencari", id: ".downloadmenu" },
                            { title: "📚 OTHER MENU", description: "Other menu", id: ".othermenu" },
                            { title: "🔥 OWNER MENU", description: "Hanya King👑 yang boleh menggunakan command ini", id: ".ownermenu" },
                            { title: "🎭 ANIME MENU", description: "Command untuk menu anime", id: ".animemenu" },
                            { title: "🔮 AI MENU", description: "Menu Artificial intelligence free", id: ".aimenu" },
                            { title: "♻️ RANDOM MENU", description: "Menu random", id: ".randommenu" },
                            { title: "🎤 AUDIO MENU", description: "Menu untuk merubah audio", id: ".audiomenu" },
                            { title: "🔄 CONVERT MENU", description: "Menu untuk converter", id: ".convertmenu" },
                            { title: "🫧 GROUP MENU", description: "Menu tentang group", id: ".groupmenu" }
                        ]
                    },
                    {
                        title: "Document & Support",
                        highlight_label: "Lily Gen 2 ⭐",
                        rows: [
                            { title: "📝 SCRIPT", description: "Script bot yang saya pakai", id: ".script" },
                            { title: "🔑 OWNER", description: "Pembuat Bot WhatsApp Lily", id: ".contact" },
                            { title: "🪨 TQTO", description: "Membantu support dan berbagi", id: ".tqto" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await Lily.sendMessage(m.chat, buttonMessage, { quoted: m });
}
        break
    case 'vipmenu': {
        // Format menu dengan limit dan register
let int = `
ʜᴀʟᴏ ᴋᴀᴋ 👏

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ \`ʜɪʟʟᴀʀʏ ᴍᴅ\`. ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ \`ғᴀʟʟᴢx - ɪɴғɪɴɪᴛʏ\`, sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʀᴀᴍᴀʜ ᴅᴀɴ ʟᴜᴄᴜ 🙂‍↕. 

┏──❣︎ 【  *\`INFO BOT\`*  】 ❣︎──⪩
┃ •  Name : ${pushname}
┃ •  Number: ${m.sender.split('@')[0]}
┃ •  Status: ${isPremium ? "Premium" : "Free"}
┃ •  Libary: Baileys - Socket
┃ •  Version: ${versinya}
┗──❣︎

┏─❣︎ 「 *\`VIP MENU\`* 」 ❣︎──⪩
┃ • ${prefix}doxing
┃ • ${prefix}spampairing
┃ • ${prefix}oneshot
┗❣︎
ɢᴜɴᴀᴋᴀɴ ᴍᴇɴᴜ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`
let buttons = [
        { buttonId: ".realown", buttonText: { displayText: "OWNER 🔥" }, type: 1 },
        { buttonId: ".about", buttonText: { displayText: "ABOUT 🛸" }, type: 1 }
        
    ];
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${int}`, // Teks menu
        contextInfo: {
        mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: namabot,
                body: descown,
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Lily Gen 2",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Ini adalah command yang sering diginakan",
                        highlight_label: "POPULER",
                        rows: [
                            { title: "🔍 ALL MENU", description: "Menampilkan semua menu", id: ".allmenu" }
                            ]
                            },
                            {
                            title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Lily 🌊",
                        rows: [
                            { title: "⬇️ DOWNLOAD MENU", description: "Menu untuk mendownload dan mencari", id: ".downloadmenu" },
                            { title: "📚 OTHER MENU", description: "Other menu", id: ".othermenu" },
                            { title: "🔥 OWNER MENU", description: "Hanya King👑 yang boleh menggunakan command ini", id: ".ownermenu" },
                            { title: "🎭 ANIME MENU", description: "Command untuk menu anime", id: ".animemenu" },
                            { title: "🔮 AI MENU", description: "Menu Artificial intelligence free", id: ".aimenu" },
                            { title: "♻️ RANDOM MENU", description: "Menu random", id: ".randommenu" },
                            { title: "🎤 AUDIO MENU", description: "Menu untuk merubah audio", id: ".audiomenu" },
                            { title: "🔄 CONVERT MENU", description: "Menu untuk converter", id: ".convertmenu" },
                            { title: "🫧 GROUP MENU", description: "Menu tentang group", id: ".groupmenu" }
                        ]
                    },
                    {
                        title: "Document & Support",
                        highlight_label: "Lily Gen 2 ⭐",
                        rows: [
                            { title: "📝 SCRIPT", description: "Script bot yang saya pakai", id: ".script" },
                            { title: "🔑 OWNER", description: "Pembuat Bot WhatsApp Lily", id: ".contact" },
                            { title: "🪨 TQTO", description: "Membantu support dan berbagi", id: ".tqto" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await Lily.sendMessage(m.chat, buttonMessage, { quoted: m });
}
        break
    case 'setlist-original': {
        // Format menu dengan limit dan register
let int = `
ʜᴀʟᴏ ᴋᴀᴋ 👏

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ \`ʜɪʟʟᴀʀʏ ᴍᴅ\`. ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ \`ғᴀʟʟᴢx - ɪɴғɪɴɪᴛʏ\`, sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʀᴀᴍᴀʜ ᴅᴀɴ ʟᴜᴄᴜ 🙂‍↕. 

┏──❣︎ 【  *\`INFO BOT\`*  】 ❣︎──⪩
┃ •  Name : ${pushname}
┃ •  Number: ${m.sender.split('@')[0]}
┃ •  Status: ${isPremium ? "Premium" : "Free"}
┃ •  Libary: Baileys - Socket
┃ •  Version: ${versinya}
┗──❣︎

┏─❣︎ 「 *\`SET LIST ORIGINAL\`* 」 ❣︎──⪩
┃ • ${prefix}Pajama-Drive
┃ • ${prefix}Boku-No-Taiyou
┃ • ${prefix}Mahagita-Kamikyokutachi
┃ • ${prefix}Mahagita-Vol2
┗❣︎
ɢᴜɴᴀᴋᴀɴ ᴍᴇɴᴜ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`
let buttons = [
        { buttonId: ".realown", buttonText: { displayText: "OWNER 🔥" }, type: 1 },
        { buttonId: ".about", buttonText: { displayText: "ABOUT 🛸" }, type: 1 }
        
    ];
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${int}`, // Teks menu
        contextInfo: {
        mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: namabot,
                body: descown,
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Lily Gen 2",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Ini adalah command yang sering diginakan",
                        highlight_label: "POPULER",
                        rows: [
                            { title: "🔍 ALL MENU", description: "Menampilkan semua menu", id: ".allmenu" }
                            ]
                            },
                            {
                            title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Lily 🌊",
                        rows: [
                            { title: "⬇️ DOWNLOAD MENU", description: "Menu untuk mendownload dan mencari", id: ".downloadmenu" },
                            { title: "📚 OTHER MENU", description: "Other menu", id: ".othermenu" },
                            { title: "🔥 OWNER MENU", description: "Hanya King👑 yang boleh menggunakan command ini", id: ".ownermenu" },
                            { title: "🎭 ANIME MENU", description: "Command untuk menu anime", id: ".animemenu" },
                            { title: "🔮 AI MENU", description: "Menu Artificial intelligence free", id: ".aimenu" },
                            { title: "♻️ RANDOM MENU", description: "Menu random", id: ".randommenu" },
                            { title: "🎤 AUDIO MENU", description: "Menu untuk merubah audio", id: ".audiomenu" },
                            { title: "🔄 CONVERT MENU", description: "Menu untuk converter", id: ".convertmenu" },
                            { title: "🫧 GROUP MENU", description: "Menu tentang group", id: ".groupmenu" }
                        ]
                    },
                    {
                        title: "Document & Support",
                        highlight_label: "Lily Gen 2 ⭐",
                        rows: [
                            { title: "📝 SCRIPT", description: "Script bot yang saya pakai", id: ".script" },
                            { title: "🔑 OWNER", description: "Pembuat Bot WhatsApp Lily", id: ".contact" },
                            { title: "🪨 TQTO", description: "Membantu support dan berbagi", id: ".tqto" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await Lily.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break
    case 'islamicmenu': {
        // Format menu dengan limit dan register
let int = `
ʜᴀʟᴏ ᴋᴀᴋ 👏

sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ sɪᴍᴘʟᴇ ᴍᴇɴᴜ \`ʜɪʟʟᴀʀʏ ᴍᴅ\`. ʏᴀɴɢ ᴅɪʀᴀɴᴄᴀɴɢ ᴏʟᴇʜ \`ғᴀʟʟᴢx - ɪɴғɪɴɪᴛʏ\`, sᴀʏᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ʀᴀᴍᴀʜ ᴅᴀɴ ʟᴜᴄᴜ 🙂‍↕. 

┏──❣︎ 【  *\`INFO BOT\`*  】 ❣︎──⪩
┃ •  Name : ${pushname}
┃ •  Number: ${m.sender.split('@')[0]}
┃ •  Status: ${isPremium ? "Premium" : "Free"}
┃ •  Libary: Baileys - Socket
┃ •  Version: ${versinya}
┗──❣︎

┏─❣︎ 「 *\`ISLAMIC MENU\`* 」 ❣︎──⪩
┃ • ${prefix}kisahnabi
┃ • ${prefix}asmaulhusna
┃ • ${prefix}alquranaudio
┃ • ${prefix}surah
┃ • ${prefix}niatpuasa 
┃ • ${prefix}niattraweh
┃ • ${prefix}niatwitir
┃ • ${prefix}randomhadist
┃ • ${prefix}surah
┃ • ${prefix}quranaudio
┃ • ${prefix}ngaji
┗❣︎
ɢᴜɴᴀᴋᴀɴ ᴍᴇɴᴜ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`
let buttons = [
        { buttonId: ".realown", buttonText: { displayText: "OWNER 🔥" }, type: 1 },
        { buttonId: ".about", buttonText: { displayText: "ABOUT 🛸" }, type: 1 }
        
    ];
    let buttonMessage = {
    document: global.forpdf,
        fileName: waktuucapan,
        mimetype: 'application/pdf',
        fileLength: '100000000000000',
        pageCount: '999',
        image: {
            url: getRandomThumb2(), // Pastikan file ini tersedia
            gifPlayback: true
        },
        caption: `${int}`, // Teks menu
        contextInfo: {
        mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: namabot,
                body: descown,
                thumbnail: getRandomThumb3(),
                mediaType: 1,
                renderLargerThumbnail: true,
                previewType: 0,
             
                mediaUrl: gh,
                sourceUrl: gh
            }
        },
        footer: "© Lily Gen 2",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: 'This Button List' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "Select Menu!",
                sections: [
                    {
                        title: "Ini adalah command yang sering diginakan",
                        highlight_label: "POPULER",
                        rows: [
                            { title: "🔍 ALL MENU", description: "Menampilkan semua menu", id: ".allmenu" }
                            ]
                            },
                            {
                            title: "Silahkan Pilih Button Menu di Bawah Ini",
                        highlight_label: "Lily 🌊",
                        rows: [
                            { title: "⬇️ DOWNLOAD MENU", description: "Menu untuk mendownload dan mencari", id: ".downloadmenu" },
                            { title: "📚 OTHER MENU", description: "Other menu", id: ".othermenu" },
                            { title: "🔥 OWNER MENU", description: "Hanya King👑 yang boleh menggunakan command ini", id: ".ownermenu" },
                            { title: "🎭 ANIME MENU", description: "Command untuk menu anime", id: ".animemenu" },
                            { title: "🔮 AI MENU", description: "Menu Artificial intelligence free", id: ".aimenu" },
                            { title: "♻️ RANDOM MENU", description: "Menu random", id: ".randommenu" },
                            { title: "🎤 AUDIO MENU", description: "Menu untuk merubah audio", id: ".audiomenu" },
                            { title: "🔄 CONVERT MENU", description: "Menu untuk converter", id: ".convertmenu" },
                            { title: "🫧 GROUP MENU", description: "Menu tentang group", id: ".groupmenu" }
                        ]
                    },
                    {
                        title: "Document & Support",
                        highlight_label: "Lily Gen 2 ⭐",
                        rows: [
                            { title: "📝 SCRIPT", description: "Script bot yang saya pakai", id: ".script" },
                            { title: "🔑 OWNER", description: "Pembuat Bot WhatsApp Lily", id: ".contact" },
                            { title: "🪨 TQTO", description: "Membantu support dan berbagi", id: ".tqto" }
                        ]
                    }
                ]
            })
        },
        viewOnce: true
    },
];

// Tambahkan flowActions ke buttonMessage
buttonMessage.buttons.push(...flowActions);

// Kirim pesan
await Lily.sendMessage(m.chat, buttonMessage, { quoted: m });
}
        break 
    case 'ddosmenu':{
        reply2('coming soon')
    }
                
                break 
            case "deepsek":{
    if (!text) return reply('Mau tanya apa?')
    let h = await DekuChat(text)          
    await Lily.sendMessage(m.cht, {
        text: h,
    }, {
        quoted: m
    })
            }
            
 //===================《 Fitur Sticker 》=====================\\                   
                break;
case 's':
case 'stiker':
case 'sticker': {
  if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Lily.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await Lily.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
//=================================================//
case 'qc': {
const { quote } = require('./start/lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m?.quoted.text
} else reply("Input teks atau reply teks yang ingin di jadikan quote!")
if (!text) return reply('masukan text')
if (text.length > 30) return reply('Maksimal 30 Teks!')
let ppnyauser = await await Lily.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
Lily.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break

//================================================================================

case "tourl": {
if (!/image/.test(mime)) return reply(example("dengan kirim/reply foto"))
let media = await Lily.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'Lily.png');

let teks = directLink.toString()
await Lily.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break
//================================================================================

case "rvo": case "readviewonce": {
if (!m.quoted) return reply("Penggunaan : slide fotonya")
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return reply("Pesan itu bukan viewonce!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Lily.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return Lily.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return Lily.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break;

case 'brat':
case 'anomali': {
    if (!text) return reply(example('halo suki'));
    if (text.length > 101) return reply(`Karakter terbatas, max 100!`);

    let caption = `Yuk pilih tipe *brat* yang Kamu suka, ada beberapa tipe nih! Klik *tombol* di bawah ini ya, kak! 😋👇`;

    await Lily.sendMessage(m.chat,{
        text: caption,
        footer: footer,
        buttons: [
            {
                buttonId: `${prefix}bratfot ${text}`,
                buttonText: { displayText: "Gambar" }
            },
            {
                buttonId: `${prefix}bratvid ${text}`,
                buttonText: { displayText: "Video" }
            }
        ],
        viewOnce: true
    });
}

			//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
break
case "bratfot": {
          if (!text) return reply(`*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ\`*:\n${prefix+command} halo suki`) 
                                               try {
                                                       await Lily.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
                                                               const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=false`;
                                                                       const response = await axios.get(url, { responseType: "arraybuffer" });
                                                                               const sticker = new Sticker(response.data, {
                                                                                           pack: "Stiker By",
                                                                                                       author: "Hillaryours",
                                                                                                                   type: "image/png",
                                                                                                                           });
                                                                                                                                   const stikerBuffer = await sticker.toBuffer();
                                                                                                                                           await Lily.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });
                                                                                                                                               } catch (err) {
                                                                                                                                                       console.error("Error:", err);
                                                                                                                                                               await Lily.sendMessage(m.chat, {
                                                                                                                                                                           text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
                                                                                                                                                                                   }, { quoted: m });
                                                                                                                                                                                       }
                                                                                                                                                                                      
                                                                                                                                                                                      }
                                                                                          break
case "bratvid": {
          if (!text) return reply(`*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ\`*:\n${prefix+command} halo suki`) 
                                               try {
                                                       await Lily.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
                                                               const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=true`;
                                                                       const response = await axios.get(url, { responseType: "arraybuffer" });
                                                                               const sticker = new Sticker(response.data, {
                                                                                           pack: "Stiker By",
                                                                                                       author: "Hillaryours",
                                                                                                                   type: "image/png",
                                                                                                                           });
                                                                                                                                   const stikerBuffer = await sticker.toBuffer();
                                                                                                                                           await Lily.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });
                                                                                                                                               } catch (err) {
                                                                                                                                                       console.error("Error:", err);
                                                                                                                                                               await Lily.sendMessage(m.chat, {
                                                                                                                                                                           text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
                                                                                                                                                                                   }, { quoted: m });
                                                                                                                                                                                       }
                                                                                                                                                                                      
                                                                                                                                                                                      }
                                                                                                                                                                                      
                                                                                            
                                                                                                                                                                                        break
case 'animebrat': {
    if (!text) return reply('Masukkan teks untuk stiker.');
  const axios = require('axios')
  const { createCanvas, loadImage, registerFont } = require('canvas')
  const sharp = require('sharp')
    try {
        let imageUrl = 'https://cloudkuimages.com/uploads/images/67ddbbcb065a6.jpg';
        let fontUrl = 'https://github.com/googlefonts/noto-emoji/raw/main/fonts/NotoColorEmoji.ttf';
        let imagePath = path.join(__dirname, 'session', 'file.jpg');
        let fontPath = path.join(__dirname, 'session', 'NotoColorEmoji.ttf');
        let outputMp4 = path.join(__dirname, 'session', `output_${Date.now()}.mp4`);
        let outputWebP = path.join(__dirname, 'session', `animated_${Date.now()}.webp`);
        let frameDir = path.join(__dirname, 'session', `frames_${Date.now()}`);

        if (!fs.existsSync(frameDir)) fs.mkdirSync(frameDir);

        if (!fs.existsSync(fontPath)) {
            let fontData = await axios.get(fontUrl, { responseType: 'arraybuffer' });
            fs.writeFileSync(fontPath, Buffer.from(fontData.data));
        }

        let response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        fs.writeFileSync(imagePath, Buffer.from(response.data));

        let baseImage = await loadImage(imagePath);
        let canvas = createCanvas(baseImage.width, baseImage.height);
        let ctx = canvas.getContext('2d');

        require('canvas').registerFont(fontPath, { family: 'EmojiFont' });

        let boardX = canvas.width * 0.22;
        let boardY = canvas.height * 0.50;
        let boardWidth = canvas.width * 0.56;
        let boardHeight = canvas.height * 0.25;

        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        let maxFontSize = 32;
        let minFontSize = 12;
        let fontSize = maxFontSize;

        function isTextFit(text, fontSize) {
            ctx.font = `bold ${fontSize}px EmojiFont`;
            let words = text.split(' ');
            let lineHeight = fontSize * 1.2;
            let maxWidth = boardWidth * 0.9;
            let lines = [];
            let currentLine = words[0];

            for (let i = 1; i < words.length; i++) {
                let testLine = currentLine + ' ' + words[i];
                let testWidth = ctx.measureText(testLine).width;
                if (testWidth > maxWidth) {
                    lines.push(currentLine);
                    currentLine = words[i];
                } else {
                    currentLine = testLine;
                }
            }
            lines.push(currentLine);
            let textHeight = lines.length * lineHeight;
            return textHeight <= boardHeight * 0.9;
        }

        while (!isTextFit(text, fontSize) && fontSize > minFontSize) {
            fontSize -= 2;
        }

        ctx.font = `bold ${fontSize}px EmojiFont`;

        let words = text.split(' ');
        let lineHeight = fontSize * 1.2;
        let maxWidth = boardWidth * 0.9;
        let frames = [];

        for (let i = 1; i <= words.length; i++) {
            let tempText = words.slice(0, i).join(' ');
            let frameCanvas = createCanvas(baseImage.width, baseImage.height);
            let frameCtx = frameCanvas.getContext('2d');

            frameCtx.drawImage(baseImage, 0, 0, frameCanvas.width, frameCanvas.height);
            frameCtx.fillStyle = '#000';
            frameCtx.textAlign = 'center';
            frameCtx.textBaseline = 'middle';
            frameCtx.font = `bold ${fontSize}px EmojiFont`;

            let lines = [];
            let currentLine = '';
            tempText.split(' ').forEach((word) => {
                let testLine = currentLine ? currentLine + ' ' + word : word;
                let testWidth = frameCtx.measureText(testLine).width;
                if (testWidth > maxWidth) {
                    lines.push(currentLine);
                    currentLine = word;
                } else {
                    currentLine = testLine;
                }
            });
            lines.push(currentLine);

            let startY = boardY + boardHeight / 2 - (lines.length - 1) * lineHeight / 2;
            lines.forEach((line, index) => {
                frameCtx.fillText(line, boardX + boardWidth / 2, startY + index * lineHeight);
            });

            let framePath = path.join(frameDir, `frame${i}.png`);
            fs.writeFileSync(framePath, frameCanvas.toBuffer('image/png'));
            frames.push(framePath);
        }

        exec(`ffmpeg -y -framerate 2 -i ${frameDir}/frame%d.png -c:v libx264 -pix_fmt yuv420p ${outputMp4}`, async (err) => {
            if (err) {
                console.error("❌ Error membuat video:", err);
                return reply("Terjadi kesalahan saat membuat video animasi.");
            }

            exec(`ffmpeg -i ${outputMp4} -vf "scale=512:512:flags=lanczos,format=rgba" -loop 0 -preset default -an -vsync 0 ${outputWebP}`, async (err) => {
                if (err) {
                    console.error("❌ Error konversi video ke stiker:", err);
                    return reply("Terjadi kesalahan saat mengonversi video ke stiker.");
                }

                Lily.sendMessage(m.chat, { sticker: { url: outputWebP } }, { quoted: m });

                setTimeout(() => {
                    fs.unlinkSync(imagePath);
                    fs.unlinkSync(outputMp4);
                    fs.unlinkSync(outputWebP);
                    fs.rmSync(frameDir, { recursive: true, force: true });
                }, 5000);
            });
        });

    } catch (e) {
        console.error(e);
        reply('⚠️ Terjadi kesalahan saat membuat stiker.');
    }
}                                                                                                                                                                              
//===================《 Sticker Exit 》==============p=======\\
break
case 'totalfeature': 
        case 'totalfitur': 
        case 'totalcmd': 
        case 'totalcommand': {
            reply(`hallo kak ${pushname}
jadi ${botname} memiliki total fitur ${lilyfitur()}
bantu support dan donasinya biar fitur nya 
tambah banyak yaa..... terimakasih.🔥🔥`)
}
break 
case 'tqto': {
let Tq = `
✧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
> [ *⎙ INFO BOT* ]
> ɴᴀᴍᴀ   : ʜɪʟʟᴀʀʏ ᴍᴅ
> ᴏᴡɴᴇʀ  : ʜɪʟʟᴀʀʏ
> ᴠᴇʀꜱɪ   :  ${versinya}
✧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
┏─❣︎ 「 *\`𝑻𝒉𝒂𝒏𝒌𝒔 𝑻𝒐\`* 」 ❣︎──⪩
┃㉺ 𝑭𝒂𝒍𝒍𝒁𝒙 ( 𝑪𝒓𝒆𝒂𝒕𝒐𝒓 ) 
┃㉺ 𝑭𝒖𝒂𝒅𝑿𝒚𝒓𝒐 ( 𝑭𝒓𝒊𝒆𝒏𝒅𝒔 ) 
┃㉺ 𝑨𝒅𝒓𝒊𝒂𝒏 ( 𝑭𝒓𝒊𝒆𝒏𝒅𝒔 ) 
┃㉺ 𝑻𝒆𝒂𝒎 𝑯𝒊𝒍𝒍𝒂𝒓𝒚𝒀𝒐𝒖𝒓𝒔 
┗❣︎
┏─❣︎ 「 𝑺𝒖𝒑𝒑𝒐𝒓𝒕 𝑴𝒆𝒆 」 ❣︎──⪩
┃ youtube.com/@fallzx-features
┃ ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
┃    「 *© 𝑳𝒊𝒍𝒚 𝑮𝒆𝒏 𝟐* 」
┗──────────────────────༓ ⳹`
Lily.sendMessage(m.chat, {                
text: Tq,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: '𝑳𝒊𝒍𝒚 𝑮𝒆𝒏 𝟐',
                            body: `sᴄ ᴘʀɪᴠᴀᴛᴇ`,
                            thumbnailUrl: 'https://pomf2.lain.la/f/3cr2pitj.jpg',
                            sourceUrl: global.idsaluran2,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: LilyUp
                })
}
        break
case 'bot': {
  reply(`${global.botname} Aktif boss...`)
}
break
case 'daftar': {
  let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
    let teks = text
      let user = global.db.data.users[m.sender]    
        if (user.registered) {
            return reply("```ɴɢᴀᴘᴀɪɴ ᴅᴀғᴛᴀʀ ʟᴀɢɪ ᴅᴀʜ\nᴋᴀɴ ᴜᴅᴀʜ ᴋᴇᴅᴀғᴛᴀʀ```")
              } else {
                  let match = teks.match(Reg)
                      if (!match) return reply(`*\`ʜɪʟʟᴀʀʏʏᴏᴜʀs\`* ɴᴏᴛ ᴀᴄᴄᴇss\nᴅᴀғᴛᴀʀ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ ᴋᴀᴋ.\n\nᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ :\n.daftar fall.18`)    
                          let [name, age] = match
                              if (!name.trim()) return reply('ᴍᴀsᴜᴋᴀɴ ɴᴀᴍᴀ ᴍᴜ ᴅᴇɴɢᴀɴ ʙᴇɴᴀʀ')
                                  if (!age) return reply('ᴜᴍᴜʀ ᴍᴜ ʙᴇʀᴀᴘᴀ ɴɪᴄʜ?')    
                                      age = parseInt(age)
                                          if (age > 30) return reply('*[ ʜɪʟʟᴀʀʏʏᴏᴜʀs ]* ᴡᴀʜ ᴜᴍᴜʀ ᴋᴀᴍᴜ ᴜᴅᴀʜ ᴛᴜᴀ ʏᴀ 😅 ')
                                              if (age < 5) return reply('*[ ʜɪʟʟᴀʀʏʏᴏᴜʀs ]* ᴡᴀʜ ᴀᴅᴀ ᴀᴅɪᴋ ᴋᴇʟᴀs ᴋᴜ ɴɪʜ , sᴜɴɢᴋᴇᴍ ᴅᴜʟᴜ sᴀᴍᴀ sᴇᴘᴜʜ')    
                                                  user.name = name.trim()
                                                      user.age = age
                                                          user.regTime = +new Date
                                                              user.registered = true
                                                                  user.sn = generateRandomPassword()    
                                                                      let sn = crypto.createHash("md5").update(m.sender).digest("hex")
                                                                          let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? Lily.user.jid : m.sender
                                                                              let capt = `┏⪻── *[ ᴅ ᴀ ғ ᴛ ᴀ ʀ - s ᴜ ᴄ ᴄ ᴇ s s ]* ──⪼┓\n`
                                                                                  capt += `│    =〆  ɴᴀᴍᴇ : ${name}\n`
                                                                                      capt += `│    =〆  ɴᴜᴍʙᴇʀ : ${m.sender.split("@")[0]}\n`
                                                                                          capt += `│    =〆  ɴᴏᴍᴏʀ sᴇʀɪᴀʟ : .ceksn\n`
                                                                                              capt += `│    =〆  ᴄʀᴇᴀᴛᴇ ʙʏ: ʟᴇᴏᴏxᴢʏ ғɪᴛᴜʀ ᴅᴀғᴛᴀʀ ʙʏ: ᴅɪᴛᴢᴏғғᴄ\n`
                                                                                                  capt += `⏤͟͟͞͞╳────────── .✦`    
                                                                                                  let yuta = {
                                                                                                    text: capt,
                                                                                                      contextInfo: {
                                                                                                            isForwarded: true,
                                                                                                                 forwardingScore: 99999,
                                                                                                                     externalAdReply: {
                                                                                                                           showAdAttribution: true,
                                                                                                                                 title: botname,
                                                                                                                                       mediaType: 1,
                                                                                                                                             previewType: 1,
                                                                                                                                                   body: linknya,
                                                                                                                                                         //previewType: "PHOTO",
                                                                                                                                                               thumbnail: fs.readFileSync('./start/img/Lily.jpg'),
                                                                                                                                                                     renderLargerThumbnail: true,
                                                                                                                                                                           mediaUrl: linknya,
                                                                                                                                                                                 sourceUrl: linknya
                                                                                                                                                                                    },
                                                                                                                                                                                        forwardedNewsletterMessageInfo: {
                                                                                                                                                                                             newsletterJid: idsaluran2,
                                                                                                                                                                                                  serverMessageId: -1,
                                                                                                                                                                                                       newsletterName: `Register By: ${ownerName}`,
                                                                                                                                                                                                           }
                                                                                                                                                                                                             }
                                                                                                                                                                                                         };
                                                                                                                                                                                                             await Lily.sendmessage(m.chat, yuta, { quoted: LilyUp });
              }
                                                                                                                                                                                                             }
break
case 'owner': {
    const kontak = {
        "displayName": 'Lily Generation',
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${global.nama}\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X-ABLabel:\nPlease Don't Spam My Owner\nURL;Email Owner:${global.nama}@gmail.com\nORG: INI OWNER\nEND:VCARD`
    };

    await Lily.sendMessage(from, {
        contacts: { contacts: [kontak] },
        contextInfo: {
            forwardingScore: 999, 
            isForwarded: false, 
            mentionedJid: [sender],
            "externalAdReply": {
                "showAdAttribution": true,
                "renderLargerThumbnail": true,
                "title": "Ada apa ganteng?", 
                "containsAutoReply": true,
                "mediaType": 1, 
                "jpegThumbnail": fs.readFileSync("./start/img/Lily.jpg"),
                "mediaUrl": "https://files.catbox.moe/mz4yik.jpg",
                "sourceUrl": "https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D"
            }
        }
    }, { quoted: m }); 
}
case 'jkt48info': {
  if (!text) return reply(`*\`ᴘᴇɴɢɢᴜɴᴀᴀɴ ᴋᴀᴍᴜ sᴀʟᴀʜ\`*\n*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ ʜɪʟʟᴀʀʏʏᴏᴜʀs\`*\n${prefix+command} berita|member|jadwal`)
  const axios = require('axios');
  const cheerio = require('cheerio');

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  async function scrapeJkt48(query) {
    try {
      if (query === 'berita') {
        const newsResponse = await axios.get('https://jkt48.com/news/list?lang=id');
        const $ = cheerio.load(newsResponse.data);
        const newsList = [];
        $('.entry-news__list').each((_, element) => {
          const title = $(element).find('.entry-news__list--item h3 a').text().trim();
          const link = $(element).find('.entry-news__list--item h3 a').attr('href');
          const date = $(element).find('.entry-news__list--item time').text().trim();
          newsList.push({ title, link: `https://jkt48.com${link}`, date });
        });
        const randomNews = shuffle(newsList).slice(0, Math.max(10, newsList.length));
        return `*📢 Berita JKT48 :*\n\n${randomNews.map((item, idx) => `${idx + 1}. ${item.title}\n   Link: ${item.link}\n   Tanggal: ${item.date}`).join('\n\n')}`;
      } else if (query === 'jadwal') {
        const eventResponse = await axios.get('https://jkt48.com');
        const $ = cheerio.load(eventResponse.data);
        const schedule = [];
        $('.entry-schedule_calendar .table tbody tr').each((_, element) => {
          const dateText = $(element).find('td h3').html().trim();
          const date = dateText.split('<br>')[0].trim();
          const day = dateText.split('<br>')[1].replace(/[()]/g, '').trim();
          const events = [];
          $(element).find('.contents p a').each((_, eventElement) => {
            const event = $(eventElement).text().trim();
            const link = $(eventElement).attr('href');
            events.push({ event, link: `https://jkt48.com${link}` });
          });
          schedule.push({ date, day, events });
        });
        const randomSchedule = shuffle(schedule).slice(0, Math.max(10, schedule.length));
        return `*📅 Jadwal JKT48 :*\n\n${randomSchedule.map((item, idx) => `${idx + 1}. ${item.date} (${item.day})\n   Acara: ${item.events.map(e => e.event).join(', ')}`).join('\n\n')}`;
      } else if (query === 'member') {
        const memberResponse = await axios.get('https://jkt48.com/member/list?lang=id');
        const $ = cheerio.load(memberResponse.data);
        const members = [];
        $('div.col-4.col-lg-2').each((_, element) => {
          const name = $(element).find('.entry-member__name a').html().replace(/<br\s*\/?>/g, ' ').trim();
          const profileLink = $(element).find('.entry-member a').attr('href');
          const imageSrc = $(element).find('.entry-member img').attr('src');
          members.push({
            name,
            profileLink: profileLink ? `https://jkt48.com${profileLink}` : null,
            imageSrc: imageSrc ? `https://jkt48.com${imageSrc}` : null,
          });
        });
        const randomMembers = shuffle(members).slice(0, Math.max(10, members.length));
        return `*Member JKT48 :*\n\n${randomMembers.map((member, idx) => `${idx + 1}. ${member.name}\n   Profil: ${member.profileLink}`).join('\n\n')}`;
      } 
    } catch (err) {
      return `Terjadi kesalahan: ${err.message}`;
    }
  }

  const query = args[0]?.toLowerCase();
  scrapeJkt48(query).then(response => {
    Lily.sendMessage(from, { text: response }, { quoted: m });
  }).catch(err => {
    Lily.sendMessage(from, { text: `Error: ${err.message}` }, { quoted: m });
  });

  break;
}
/*
- 𝗘𝗩𝗘𝗡𝗧𝗦 𝗝𝗞𝗧𝟰𝟴
- `Type:` 𝗖𝗮𝘀𝗲 (𝗖𝗼𝗺𝗺𝗼𝗻𝗝𝘀)
- `MyChannels:` https://whatsapp.com/channel/0029VaWA5U1EQIamnmeXRn2M
- https://whatsapp.com/channel/0029VavowiVCRs1quY4CKe08


- 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗕𝘆: https://michelleapi.vercel.app (API)
*/

break
case 'events': {
  try {
    let { data } = await axios.get('https://michelleapi.vercel.app/jkt48/event')
    if (!data.status || !data.data || data.data.result.length === 0) {
      return reply('Tidak ada event yang tersedia saat ini.')
    }

    let events = data.data.result
    let push = []
    let i = 1

    async function createImage(url) {
      const { imageMessage } = await generateWAMessageContent({
        image: { url }
      }, { upload: Lily.waUploadToServer })
      return imageMessage
    }

    for (let event of events) {
      let eventImageUrl = `https://c.top4top.io/p_3374h4yg91.jpg`
      let eventUrl = `https://jkt48.com${event.url}`

      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: `\`JUDUL:\` ${event.title}\n\`TANGGAL:\` ${new Date(event.date).toLocaleDateString('id-ID')}`
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: "JKT48 Official Schedule"
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: `Event ke-${i++}`,
          hasMediaAttachment: true,
          imageMessage: await createImage(eventImageUrl)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "cta_url",
              "buttonParamsJson": `{"display_text":"Lihat Detail","url":"${eventUrl}","merchant_url":"${eventUrl}"}`
            }
          ]
        })
      })
    }

    const bot = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: "*JADWAL EVENTS JKT48*"
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "SasukeBotz"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: push
            })
          })
        }
      }
    }, { quoted: m })

    await Lily.relayMessage(m.chat, bot.message, {
      messageId: bot.key.id
    })

  } catch (err) {
    console.error(err)
    reply('Error')
  }
}
/*

- *CASE JKT48*
- `Type:` *Case, commonJs*
- `CHANNELS:` https://whatsapp.com/channel/0029VaWA5U1EQIamnmeXRn2M


- `Powered By:` https://michelleapi.vercel.app
*/

case 'jkt48live': {
    try {
        let res = await fetch('https://michelleapi.vercel.app/jkt48/live')
        if (!res.ok) throw new Error('Error bg')
        
        let json = await res.json();
        if (!json.status || !json.data || !json.data.result.length) {
            return Lily.sendMessage(m.chat, { text: 'Gaada yang live sekarang' }, { quoted: m })
        }

        let live = json.data.result[0]; 
        let caption = `*MEMBER JKT48 LIVE*\n\n` +
                      `👤 *Nama:* ${live.name}\n` +
                      `📡 *Tipe:* ${live.type}\n` +
                      `🎬 *Link streaming:* ${live.streaming_url_list[0].url}\n` +
                      `📅 *Mulai:* ${new Date(live.started_at).toLocaleString('id-ID')}\n`;

        let message = {
            image: { url: live.img },
            caption: caption,
        };

        Lily.sendMessage(m.chat, message, { quoted: m })

    } catch (e) {
        console.error(e)
        Lily.sendMessage(m.chat, { text: 'Terjadi kesalahan, coba lagi nanti 😀' }, { quoted: m })
    }
}
break
case "cerpen":
if (!text) return reply('`Masukan type: .cerpen anak`')
 function cerpen(category) {
 return new Promise(async (resolve, reject) => {
 try {
 let title = category.toLowerCase().replace(/[()*]/g, "");
 let judul = title.replace(/\s/g, "-");
 let page = Math.floor(Math.random() * 5) + 1; 

 let get = await axios.get('http://cerpenmu.com/category/cerpen-' + judul + '/page/' + page);
 let $ = cheerio.load(get.data);
 let link = [];

 $('article.post').each(function (a, b) {
 link.push($(b).find('a').attr('href'));
 });

 if (link.length === 0) {
 return reject("No stories found for this category.");
 }

 let random = link[Math.floor(Math.random() * link.length)];
 let res = await axios.get(random);
 let $$ = cheerio.load(res.data);

 let hasil = {
 title: $$('#content > article > h1').text(),
 author: $$('#content > article').text().split('Cerpen Karangan: ')[1]?.split('Kategori: ')[0]?.trim(),
 kategori: $$('#content > article').text().split('Kategori: ')[1]?.split('\n')[0]?.trim(),
 lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1]?.split('\n')[0]?.trim(),
 cerita: $$('#content > article > p').text()
 };

 resolve(hasil);
 } catch (error) {
 reject(error);
 }
 });
}


 try {
 var data = await cerpen(text);
 var textpp = `Title : ${data.title}\n`;
 textpp += `Author : ${data.author}\n`;
 textpp += `Category : ${data.kategori}\n`;
 textpp += `Approved on : ${data.lolos}\n`;
 textpp += `Story :\n${data.cerita}`;

 reply(textpp);
 } catch (error) {
 console.error(error);
 reply("An error occurred while fetching the story.");
 }
break

break
case 'antitagsw': {
 if (!m.isGroup) return reply(mess.group)
if (!(isAdmins || isCreator)) return reply(mess.admin)
if (args[0] === "on") {
       //WM: KHAERUL, jangan hapus wm dong biar kaya orang lain
 antiTagSWGroup[m.chat] = true
       //WM: KHAERUL, jangan hapus wm dong biar kaya orang lain😭  
    saveAntiTagSW(antiTagSWGroup)
        reply("✅ Fitur Anti Tag Status Grup AKTIF di grup ini!")
    } else if (args[0] === "off") {
        delete antiTagSWGroup[m.chat];
       //WM: KHAERUL, jangan hapus wm dong biar kaya orang lain😭
//My saluran: https://whatsapp.com/channel/0029VaWA5U1EQIamnmeXRn2M
 saveAntiTagSW(antiTagSWGroup);
      reply("❌ Fitur Anti Tag Status Grup DINONAKTIFKAN di grup ini!")
    } else {
        reply(`Contoh: ${prefix}antitagsw on/off`)
    }
   break;
}
                break
      case 'statusaudio':
      case 'upswaudio': {
        if (!isOwner) return reply(mess.owners);
        if(/audio/.test(mime)) {
          var audiosw = await Lily.downloadAndSaveMediaMessage(quoted);
          await Lily.sendMessage('status@broadcast', {
            audio: {
              url: audiosw
            },
            mimetype: 'audio/mp4',
            ptt: true
          }, {
            backgroundColor: '#FF000000',
            statusJidList: Object.keys(global.db.data.users)
          });
          await reply('Sukses kirim status audio!');
        } else {
          reply('Reply audio dulu, ya!');
        }
      }
                break

// FITUR BUG V1

case 'inspect': case 'getidgrup': {
if (!isCreator) return reply(mess.owner)
if (!q) return reply(`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ \`ʜɪʟʟᴀʀʏʏᴏᴜʀs\`:\n\nʟɪɴᴋ ɢʀᴜᴘɴʏᴀ.`)
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
Lily.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
let tekse = `${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}`
reply(tekse)
})}
break;
case 'upsw': {
    const baileys = require("@fizzxydev/baileys-pro");

    async function fetchParticipants(...jids) {
        let results = [];
        for (const jid of jids) {
            let { participants } = await Lily.groupMetadata(jid);
            participants = participants.map(({ id }) => id);
            results = results.concat(participants);
        }
        return results;
    }

    async function mentionStatus(jids, content) {
        const msg = await baileys.generateWAMessage(baileys.STORIES_JID, content, {
            upload: Lily.waUploadToServer
        });

        let statusJidList = [];
        for (const _jid of jids) {
            if (_jid.endsWith("@g.us")) {
                const participants = await fetchParticipants(_jid);
                statusJidList.push(...participants);
            } else {
                statusJidList.push(_jid);
            }
        }
        statusJidList = [...new Set(statusJidList)];

        await Lily.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
            statusJidList,
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: jids.map((jid) => ({
                                tag: "to",
                                attrs: { jid },
                                content: undefined
                            }))
                        }
                    ]
                }
            ]
        });

        for (const jid of jids) {
            let type = jid.endsWith("@g.us") ? "groupStatusMentionMessage" : "statusMentionMessage";
            await Lily.relayMessage(jid, {
                [type]: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            }, {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined
                    }
                ]
            });
        }

        return msg;
    }

    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    let content = {};

    // Memisahkan pesan dan ID grup menggunakan '|'
    let input = args.join(" ");
    let [groupId, ...messageParts] = input.split('|');
    let message = messageParts.join('|').trim(); // Menggabungkan kembali pesan jika ada lebih dari satu bagian

    if (!groupId) {
        return reply("Masukkan format yang benar: <pesan> | <id_grup>");
    }

    if (mime) {
        let media = await q.download();

        if (/image/.test(mime)) {
            content.image = media;
        } else if (/video/.test(mime)) {
            content.video = media;
        } else if (/audio/.test(mime)) {
            content.audio = media;
        } else {
            return reply("Jenis file tidak didukung!");
        }

        if (message) content.caption = message; // Menggunakan pesan yang dipisahkan
    } else if (message) {
        // Jika tidak ada media, gunakan pesan sebagai teks
        content.text = message;
    } else {
        return reply("Masukkan pesan yang valid.");
    }

    // Pastikan mentionStatus dipanggil dengan benar
    mentionStatus([groupId], content).then(() => {
        reply(`Status berhasil dikirim ke grup ${groupId}.`);
    }).catch(err => {
        console.error('Error in mentionStatus:', err);
        reply("Terjadi kesalahan saat mengirim status mention.");
    });
}
break;

case "luckynumber": {
 let luckyNumber = Math.floor(Math.random() * 100) + 1;
 reply(`🍀 *Angka Keberuntunganmu Hari Ini:* *${luckyNumber}* 🍀`);
};
break;

case "ramalan": {
 let fortunes = [
 "🔮 Hari ini keberuntungan ada di pihakmu!",
 "⚡ Waspada dengan keputusan besar hari ini.",
 "🌞 Kamu akan mendapatkan kejutan menyenangkan!",
 "💼 Kesempatan emas sedang mendekat, jangan lewatkan!"
 ];
 let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
 reply(`🔮 *Ramalan Hari Ini:* \n\n${randomFortune}`);
};
break;

case "glitchtext": {
 if (!args.length) return reply("Masukkan teks untuk diubah menjadi glitch!");
 
 let text = args.join(" ");
 let glitch = text.split("").map(char => char + "̖̫͟").join("");
 
 reply(`🌌 *Glitch Text:* \n\n${glitch}`);
};
break;
case 'addcase': {

 if (!isCreator) return reply('lu sapa asu')

 if (!text) return reply('Mana case nya');
    const fs = require('fs');
const namaFile = './start/system.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
//===================《 FITUR EMOJI 》=====================\\
break
          case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return reply(`Contoh : ${prefix + command} 😅+🤔`)
		if (!emoji2) return reply(`Contoh : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyDDJ4NpyhadO3c41Z0YCeiQ9zwLmo1j3fI&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await Lily.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }
	    break
    case 'igemoji': 
case 'instagramemoji': 
if (!q) return reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "10")
break
case 'emoji': {
if (!args.join(" ")) return reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await Lily.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await Lily.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}

//===================《 FITUR CREATE PANEL 》=====================\\

break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "uninstalltema": {
if (!isCreator) return reply(mess.owner)
if (!text || !text.split("|")) return reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemastellar": case "installtemastelar": {
if (!isCreator) return reply(mess.owner)
if (!text || !text.split("|")) return reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return reply(mess.owner)
if (global.installtema == undefined) return reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return reply(mess.owner)
if (!text || !text.split("|")) return reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemaenigma": 
case "instaltemaenigma": {
if (!isCreator) return reply(mess.owner)
if (!text || !text.split("|")) return reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (global.installtema == undefined) return reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6285813708397\n');
stream.write('https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s\n');
stream.write('https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "uninstallpanel": {
if (!isCreator) return reply(msg.owner);
if (!text || !text.split("|")) return reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installpanel": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "fallzx"
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*📦 Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await Lily.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Panel By xyzhiraa\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('NODES\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break  

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "startwings": case "configurewings": {
if (!isCreator) return reply(mess.owner)
let t = text.split('|')
if (t.length < 3) return reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "hbpanel": case "hackbackpanel": {
if (!isCreator) return reply(mess.owner)
let t = text.split('|')
if (t.length < 2) return reply(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await Lily.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "subdomain": case "subdo": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(example("lily|ipserver"))
if (!text.split("|")) return reply(example("lily|ipserver"))
let [host, ip] = text.split("|")
let dom = await Object.keys(global.subdomain)
let list = []
for (let i of dom) {
await list.push({
title: i, 
id: `.domain ${dom.indexOf(i) + 1} ${host}|${ip}`
})
}
await Lily.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Domain',
          sections: [
            {
              title: 'List Domain',
              highlight_label: 'Recommended',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `ʟɪʟʏ ɢᴇɴᴇʀᴀᴛɪᴏɴ 👑`,
  headerType: 1,
  viewOnce: true,
  text: `❣︎ 「 *\`ᴘɪʟɪʜ ᴅᴏᴍᴀɪɴ ᴍᴜ\`* 」 ❣︎\n\nɢᴜɴᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ 👋`,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "domain": {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply("Domain tidak ditemukan!")
if (isNaN(args[0])) return reply("Domain tidak ditemukan!")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return reply("Domain tidak ditemukan!")
if (!args[1].split("|")) return reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await reply(teks)
} else return reply(`${e['error']}`)
})
}
//===================《 Exit》=====================\\



//===================《 ISLAMIC FITUR》=====================\\
break
         

        case 'kisahnabi': {
             if (!text) return reply(`*\`ʜɪʟʟᴀʀʏʏᴏᴜʀs ɪsʟᴀᴍɪᴄ\`*\n\nᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} adam`)
             let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
             let kisah = await url.json().catch(_ => "Error")
             if (kisah == "Error") return reply("Not Found\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")
             
            let hasil = `_👳 Nabi :_ ${kisah.name}
        📅 Tanggal Lahir : ${kisah.thn_kelahiran}
        📍 Tempat Lahir : ${kisah.tmp}
        📊 Usia : ${kisah.usia}
        
        — — — — — — — [ K I S A H ] — — — — — — —
        
        ${kisah.description}`
        
             reply(`${hasil}`)
        
        }
        break
//=========================================\\
const contoh = `*Asmaul Husna*
`
// data here
const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`

case 'asmaulhusna': {
const asmaulhusna = [
    {
        index: 1,
        latin: "Ar Rahman",
        arabic: "الرَّحْمَنُ",
        translation_id: "Yang Memiliki Mutlak sifat Pemurah",
        translation_en: "The All Beneficent"
    },
    {
        index: 2,
        latin: "Ar Rahiim",
        arabic: "الرَّحِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Penyayang",
        translation_en: "The Most Merciful"
    },
    {
        index: 3,
        latin: "Al Malik",
        arabic: "الْمَلِكُ",
        translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
        translation_en: "The King, The Sovereign"
    },
    {
        index: 4,
        latin: "Al Quddus",
        arabic: "الْقُدُّوسُ",
        translation_id: "Yang Memiliki Mutlak sifat Suci",
        translation_en: "The Most Holy"
    },
    {
        index: 5,
        latin: "As Salaam",
        arabic: "السَّلاَمُ",
        translation_id: "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
        translation_en: "Peace and Blessing"
    },
    {
        index: 6,
        latin: "Al Mu’min",
        arabic: "الْمُؤْمِنُ",
        translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
        translation_en: "The Guarantor"
    },
    {
        index: 7,
        latin: "Al Muhaimin",
        arabic: "الْمُهَيْمِنُ",
        translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
        translation_en: "The Guardian, the Preserver"
    },
    {
        index: 8,
        latin: "Al ‘Aziiz",
        arabic: "الْعَزِيزُ",
        translation_id: "Yang Memiliki Mutlak Kegagahan",
        translation_en: "The Almighty, the Self Sufficient"
    },
    {
        index: 9,
        latin: "Al Jabbar",
        arabic: "الْجَبَّارُ",
        translation_id: "Yang Memiliki Mutlak sifat Perkasa",
        translation_en: "The Powerful, the Irresistible"
    },
    {
        index: 10,
        latin: "Al Mutakabbir",
        arabic: "الْمُتَكَبِّرُ",
        translation_id: "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
        translation_en: "The Tremendous"
    },
    {
        index: 11,
        latin: "Al Khaliq",
        arabic: "الْخَالِقُ",
        translation_id: "Yang Memiliki Mutlak sifat Pencipta",
        translation_en: "The Creator"
    },
    {
        index: 12,
        latin: "Al Baari’",
        arabic: "الْبَارِئُ",
        translation_id: "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
        translation_en: "The Maker"
    },
    {
        index: 13,
        latin: "Al Mushawwir",
        arabic: "الْمُصَوِّرُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
        translation_en: "The Fashioner of Forms"
    },
    {
        index: 14,
        latin: "Al Ghaffaar",
        arabic: "الْغَفَّارُ",
        translation_id: "Yang Memiliki Mutlak sifat Pengampun",
        translation_en: "The Ever Forgiving"
    },
    {
        index: 15,
        latin: "Al Qahhaar",
        arabic: "الْقَهَّارُ",
        translation_id: "Yang Memiliki Mutlak sifat Memaksa",
        translation_en: "The All Compelling Subduer"
    },
    {
        index: 16,
        latin: "Al Wahhaab",
        arabic: "الْوَهَّابُ",
        translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
        translation_en: "The Bestower"
    },
    {
        index: 17,
        latin: "Ar Razzaaq",
        arabic: "الرَّزَّاقُ",
        translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
        translation_en: "The Ever Providing"
    },
    {
        index: 18,
        latin: "Al Fattaah",
        arabic: "الْفَتَّاحُ",
        translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
        translation_en: "The Opener, the Victory Giver"
    },
    {
        index: 19,
        latin: "Al ‘Aliim",
        arabic: "اَلْعَلِيْمُ",
        translation_id: "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
        translation_en: "The All Knowing, the Omniscient"
    },
    {
        index: 20,
        latin: "Al Qaabidh",
        arabic: "الْقَابِضُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
        translation_en: "The Restrainer, the Straightener"
    },
    {
        index: 21,
        latin: "Al Baasith",
        arabic: "الْبَاسِطُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
        translation_en: "The Expander, the Munificent"
    },
    {
        index: 22,
        latin: "Al Khaafidh",
        arabic: "الْخَافِضُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
        translation_en: "The Abaser"
    },
    {
        index: 23,
        latin: "Ar Raafi’",
        arabic: "الرَّافِعُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
        translation_en: "The Exalter"
    },
    {
        index: 24,
        latin: "Al Mu’izz",
        arabic: "الْمُعِزُّ",
        translation_id: "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
        translation_en: "The Giver of Honor"
    },
    {
        index: 25,
        latin: "Al Mudzil",
        arabic: "المُذِلُّ",
        translation_id: "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
        translation_en: "The Giver of Dishonor"
    },
    {
        index: 26,
        latin: "Al Samii’",
        arabic: "السَّمِيعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
        translation_en: "The All Hearing"
    },
    {
        index: 27,
        latin: "Al Bashiir",
        arabic: "الْبَصِيرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
        translation_en: "The All Seeing"
    },
    {
        index: 28,
        latin: "Al Hakam",
        arabic: "الْحَكَمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
        translation_en: "The Judge, the Arbitrator"
    },
    {
        index: 29,
        latin: "Al ‘Adl",
        arabic: "الْعَدْلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
        translation_en: "The Utterly Just"
    },
    {
        index: 30,
        latin: "Al Lathiif",
        arabic: "اللَّطِيفُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
        translation_en: "The Subtly Kind"
    },
    {
        index: 31,
        latin: "Al Khabiir",
        arabic: "الْخَبِيرُ",
        translation_id: "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
        translation_en: "The All Aware"
    },
    {
        index: 32,
        latin: "Al Haliim",
        arabic: "الْحَلِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
        translation_en: "The Forbearing, the Indulgent"
    },
    {
        index: 33,
        latin: "Al ‘Azhiim",
        arabic: "الْعَظِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
        translation_en: "The Magnificent, the Infinite"
    },
    {
        index: 34,
        latin: "Al Ghafuur",
        arabic: "الْغَفُورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
        translation_en: "The All Forgiving"
    },
    {
        index: 35,
        latin: "As Syakuur",
        arabic: "الشَّكُورُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
        translation_en: "The Grateful"
    },
    {
        index: 36,
        latin: "Al ‘Aliy",
        arabic: "الْعَلِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
        translation_en: "The Sublimely Exalted"
    },
    {
        index: 37,
        latin: "Al Kabiir",
        arabic: "الْكَبِيرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
        translation_en: "The Great"
    },
    {
        index: 38,
        latin: "Al Hafizh",
        arabic: "الْحَفِيظُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
        translation_en: "The Preserver"
    },
    {
        index: 39,
        latin: "Al Muqiit",
        arabic: "المُقيِت",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
        translation_en: "The Nourisher"
    },
    {
        index: 40,
        latin: "Al Hasiib",
        arabic: "الْحسِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
        translation_en: "The Reckoner"
    },
    {
        index: 41,
        latin: "Al Jaliil",
        arabic: "الْجَلِيلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The Majestic"
    },
    {
        index: 42,
        latin: "Al Kariim",
        arabic: "الْكَرِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
        translation_en: "The Bountiful, the Generous"
    },
    {
        index: 43,
        latin: "Ar Raqiib",
        arabic: "الرَّقِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
        translation_en: "The Watchful"
    },
    {
        index: 44,
        latin: "Al Mujiib",
        arabic: "الْمُجِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
        translation_en: "The Responsive, the Answerer"
    },
    {
        index: 45,
        latin: "Al Waasi’",
        arabic: "الْوَاسِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
        translation_en: "The Vast, the All Encompassing"
    },
    {
        index: 46,
        latin: "Al Hakiim",
        arabic: "الْحَكِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
        translation_en: "The Wise"
    },
    {
        index: 47,
        latin: "Al Waduud",
        arabic: "الْوَدُودُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
        translation_en: "The Loving, the Kind One"
    },
    {
        index: 48,
        latin: "Al Majiid",
        arabic: "الْمَجِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The All Glorious"
    },
    {
        index: 49,
        latin: "Al Baa’its",
        arabic: "الْبَاعِثُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
        translation_en: "The Raiser of the Dead"
    },
    {
        index: 50,
        latin: "As Syahiid",
        arabic: "الشَّهِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
        translation_en: "The Witness"
    },
    {
        index: 51,
        latin: "Al Haqq",
        arabic: "الْحَقُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
        translation_en: "The Truth, the Real"
    },
    {
        index: 52,
        latin: "Al Wakiil",
        arabic: "الْوَكِيلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
        translation_en: "The Trustee, the Dependable"
    },
    {
        index: 53,
        latin: "Al Qawiyyu",
        arabic: "الْقَوِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
        translation_en: "The Strong"
    },
    {
        index: 54,
        latin: "Al Matiin",
        arabic: "الْمَتِينُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
        translation_en: "The Firm, the Steadfast"
    },
    {
        index: 55,
        latin: "Al Waliyy",
        arabic: "الْوَلِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
        translation_en: "The Protecting Friend, Patron, and Helper"
    },
    {
        index: 56,
        latin: "Al Hamiid",
        arabic: "الْحَمِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
        translation_en: "The All Praiseworthy"
    },
    {
        index: 57,
        latin: "Al Mushii",
        arabic: "الْمُحْصِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
        translation_en: "The Accounter, the Numberer of All"
    },
    {
        index: 58,
        latin: "Al Mubdi’",
        arabic: "الْمُبْدِئُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
        translation_en: "The Producer, Originator, and Initiator of all"
    },
    {
        index: 59,
        latin: "Al Mu’iid",
        arabic: "الْمُعِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
        translation_en: "The Reinstater Who Brings Back All"
    },
    {
        index: 60,
        latin: "Al Muhyii",
        arabic: "الْمُحْيِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
        translation_en: "The Giver of Life"
    },
    {
        index: 61,
        latin: "Al Mumiitu",
        arabic: "اَلْمُمِيتُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
        translation_en: "The Bringer of Death, the Destroyer"
    },
    {
        index: 62,
        latin: "Al Hayyu",
        arabic: "الْحَيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
        translation_en: "The Ever Living"
    },
    {
        index: 63,
        latin: "Al Qayyuum",
        arabic: "الْقَيُّومُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
        translation_en: "The Self Subsisting Sustainer of All"
    },
    {
        index: 64,
        latin: "Al Waajid",
        arabic: "الْوَاجِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
        translation_en: "The Perceiver, the Finder, the Unfailing"
    },
    {
        index: 65,
        latin: "Al Maajid",
        arabic: "الْمَاجِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The Illustrious, the Magnificent"
    },
    {
        index: 66,
        latin: "Al Wahiid",
        arabic: "الْواحِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
        translation_en: "The One, The Unique, Manifestation of Unity"
    },
    {
        index: 67,
        latin: "Al ‘Ahad",
        arabic: "اَلاَحَدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
        translation_en: "The One, the All Inclusive, the Indivisible"
    },
    {
        index: 68,
        latin: "As Shamad",
        arabic: "الصَّمَدُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
        translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
    },
    {
        index: 69,
        latin: "Al Qaadir",
        arabic: "الْقَادِرُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
        translation_en: "The All Able"
    },
    {
        index: 70,
        latin: "Al Muqtadir",
        arabic: "الْمُقْتَدِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
        translation_en: "The All Determiner, the Dominant"
    },
    {
        index: 71,
        latin: "Al Muqaddim",
        arabic: "الْمُقَدِّمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
        translation_en: "The Expediter, He who brings forward"
    },
    {
        index: 72,
        latin: "Al Mu’akkhir",
        arabic: "الْمُؤَخِّرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
        translation_en: "The Delayer, He who puts far away"
    },
    {
        index: 73,
        latin: "Al Awwal",
        arabic: "الأوَّلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
        translation_en: "The First"
    },
    {
        index: 74,
        latin: "Al Aakhir",
        arabic: "الآخِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
        translation_en: "The Last"
    },
    {
        index: 75,
        latin: "Az Zhaahir",
        arabic: "الظَّاهِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
        translation_en: "The Manifest; the All Victorious"
    },
    {
        index: 76,
        latin: "Al Baathin",
        arabic: "الْبَاطِنُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
        translation_en: "The Hidden; the All Encompassing"
    },
    {
        index: 77,
        latin: "Al Waali",
        arabic: "الْوَالِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
        translation_en: "The Patron"
    },
    {
        index: 78,
        latin: "Al Muta’aalii",
        arabic: "الْمُتَعَالِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
        translation_en: "The Self Exalted"
    },
    {
        index: 79,
        latin: "Al Barri",
        arabic: "الْبَرُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
        translation_en: "The Most Kind and Righteous"
    },
    {
        index: 80,
        latin: "At Tawwaab",
        arabic: "التَّوَابُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
        translation_en: "The Ever Returning, Ever Relenting"
    },
    {
        index: 81,
        latin: "Al Muntaqim",
        arabic: "الْمُنْتَقِمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
        translation_en: "The Avenger"
    },
    {
        index: 82,
        latin: "Al Afuww",
        arabic: "العَفُوُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
        translation_en: "The Pardoner, the Effacer of Sins"
    },
    {
        index: 83,
        latin: "Ar Ra`uuf",
        arabic: "الرَّؤُوفُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
        translation_en: "The Compassionate, the All Pitying"
    },
    {
        index: 84,
        latin: "Malikul Mulk",
        arabic: "مَالِكُ الْمُلْكِ",
        translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
        translation_en: "The Owner of All Sovereignty"
    },
    {
        index: 85,
        latin: "Dzul JalaaliWal Ikraam",
        arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
        translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
        translation_en: "The Lord of Majesty and Generosity"
    },
    {
        index: 86,
        latin: "Al Muqsith",
        arabic: "الْمُقْسِطُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
        translation_en: "The Equitable, the Requiter"
    },
    {
        index: 87,
        latin: "Al Jamii’",
        arabic: "الْجَامِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
        translation_en: "The Gatherer, the Unifier"
    },
    {
        index: 88,
        latin: "Al Ghaniyy",
        arabic: "الْغَنِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
        translation_en: "The All Rich, the Independent"
    },
    {
        index: 89,
        latin: "Al Mughnii",
        arabic: "الْمُغْنِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
        translation_en: "The Enricher, the Emancipator"
    },
    {
        index: 90,
        latin: "Al Maani",
        arabic: "اَلْمَانِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
        translation_en: "The Withholder, the Shielder, the Defender"
    },
    {
        index: 91,
        latin: "Ad Dhaar",
        arabic: "الضَّارَّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
        translation_en: "The Distressor, the Harmer"
    },
    {
        index: 92,
        latin: "An Nafii’",
        arabic: "النَّافِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
        translation_en: "The Propitious, the Benefactor"
    },
    {
        index: 93,
        latin: "An Nuur",
        arabic: "النُّورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
        translation_en: "The Light"
    },
    {
        index: 94,
        latin: "Al Haadii",
        arabic: "الْهَادِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
        translation_en: "The Guide"
    },
    {
        index: 95,
        latin: "Al Baadii",
        arabic: "الْبَدِيعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
        translation_en: "Incomparable, the Originator"
    },
    {
        index: 96,
        latin: "Al Baaqii",
        arabic: "اَلْبَاقِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
        translation_en: "The Ever Enduring and Immutable"
    },
    {
        index: 97,
        latin: "Al Waarits",
        arabic: "الْوَارِثُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
        translation_en: "The Heir, the Inheritor of All"
    },
    {
        index: 98,
        latin: "Ar Rasyiid",
        arabic: "الرَّشِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
        translation_en: "The Guide, Infallible Teacher, and Knower"
    },
    {
        index: 99,
        latin: "As Shabuur",
        arabic: "الصَّبُورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
        translation_en: "The Patient"
    }
]
    let json = JSON.parse(JSON.stringify(asmaulhusna))
    let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
    if (isNaN(args[0])) return reply (`*\`ʜɪʟʟᴀʀʏʏᴏᴜʀs ɪsʟᴀᴍɪᴄ\`*\n\nᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ :\n${prefix+command} 1`)
    if (args[0]) {
        if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`
        let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
        return reply(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
    }
    reply(`${contoh} + ${data} + ${anjuran}`)
}
        break
			case 'quranaudio':
			case 'alquranaudio': {
				if (!text) return reply(`*\`ʜɪʟʟᴀʀʏʏᴏᴜʀs ǫᴜʀ'ᴀɴ\`*Masukkan Suratnya\nContoh : ${prefix+command} 1\n\nKetik .listsurah Untuk Melihat Daftar Surat`)
				try {
					let todi = await fetchJson(`https://raw.githubusercontent.com/dcode-al/database/refs/heads/main/Islami/quranaudio.json`)
					const tod = await todi[text - 1]
					const arti = tod.asma.translation.id
					const audio = tod.audio
					const asma = tod.asma.ar.short
					const ayat = tod.ayatCount
					const keterangan = tod.tafsir
					const nama = tod.asma.id.short
					const nomor = tod.number
					const tempat = tod.type
					var quran = `*ʜɪʟʟᴀʀʏᴏᴜʀs ǫᴜʀ'ᴀɴ*

*Nama* : ${nama}
*Asma* : ${asma}
*Surat Ke* : ${nomor}
*Arti* : ${arti}
*Total Ayat* : ${ayat}
*Type* : ${tempat}
*Keterangan* : ${keterangan}\n\n_Loading Audio..._`
					await reply(quran)
					await Lily.sendMessage(m.chat, {
						audio: {
							url: audio
						},
						mimetype: 'audio/mpeg'
					}, {
						quoted: m
					})
				} catch (error) {
					console.error(error);
					reply('⚠️ Terjadi kesalahan saat mencari anime di Kusonime.');
				}
			}
			break
			case 'surah': {
  if (!q) return reply('☘️ *Masukkan Nomor Surah*');
  const surahNumber = q.toLowerCase();
  try {
    const result = await Surah(surahNumber);
    if (result.ayat && result.ayat.length > 0) {
let Teks = `ʜɪʟʟᴀʀʏᴏᴜʀs ʙᴛ ғᴀʟʟᴢx\n`;
result.ayat.forEach((ayat, index) => {
  Teks += `\n*Ayat ${index + 1}*\n`;
  Teks += `*Arab :* ${ayat.arab}\n`;
  Teks += `*Latin :* _${ayat.latin}_\n\n`;
  Teks += ` _${ayat.indo}_\n`;
  Teks += '\n==============================\n';
});
Teks += `\n*${result.watermark}*`;
reply(Teks);
    } else {
reply('⚠️ *Data Surah Tidak Ditemukan!*');
    }
  } catch (err) {
    reply('Terjadi Kesalahan Dalam Fitur Silahkan Lapor ketik *.raport teks*');
  }
            }
            break
//=========================================\\
case 'niatsholat': {
    if (!q) return reply(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
    {
        index: 1,
        solat: "subuh",
        latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 2,
        solat: "maghrib",
        latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 3,
        solat: "dzuhur",
        latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 4,
        solat: "isha",
        latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 5,
        solat: "ashar",
        latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
    }
]
    let text = q.toLowerCase() || ''
    let data = Object.values(niatsholat).find(v => v.solat == text)
    if (!data) return reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
    reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break
//=========================================\\
case 'quotesislami': {
const islami = [
   {
      "id": "1",
      "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
      "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
   },
   {
      "id": "2",
      "arabic": "مَنْ صَبَرَ ظَفِرَ",
      "arti": "Barang siapa bersabar, maka dia akan beruntung."
   },
   {
      "id": "3",
      "arabic": "مَنْ جَدَّ وَجَـدَ",
      "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
   },
   {
      "id": "4",
      "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
      "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
   },
   {
      "id": "5",
      "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
      "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
   },
   {
      "id": 6,
      "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
      "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
   },
   {
      "id": "7",
      "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
      "arti": "Kesabaran akan menolong segala pekerjaan."
   },
   {
      "id": "8",
      "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
      "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
   },
   {
      "id": "9",
      "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
      "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
   },
   {
      "id": "10",
      "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
      "arti": "Telur hari ini lebih baik daripada ayam esok hari."
   },
   {
      "id": "11",
      "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
      "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
   },
   {
      "id": "12",
      "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
      "arti": "Waktu itu lebih berharga daripada emas."
   },
   {
      "id": "13",
      "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
      "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
   },
   {
      "id": "14",
      "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
      "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
   },
   {
      "id": "15",
      "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
      "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
   },
   {
      "id": "16",
      "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
      "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
   },{
      "id": "17",
      "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
      "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
   },
   {
      "id": "18",
      "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
      "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
   },
   {
      "id": "19",
      "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
      "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
   },
   {
      "id": "20",
      "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
      "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
   },
   {
      "id": "21",
      "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
      "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
   },
   {
      "id": "22",
      "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
      "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
   },
   {
      "id": "23",
      "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
      "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
   },
   {
      "id": "24",
      "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
      "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
   },
   {
      "id": "25",
      "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
      "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
   }
]
    const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
    reply(`${arabic}\n${arti}`)
}
break
//=========================================\\
case 'doatahlil': {
    let { result } = JSON.parse(fs.readFileSync('./start/database/tahlil.json', 'utf-8'))
    let caption = result.map((v, i) => {
        return `
*${i + 1}.* ${v.title}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
    }).join('\n\n')
    reply(`${caption}`)
}
break
case "niatpuasa": if (!text) return reply(`*📜 Niat Puasa Ramadhan 📜*\n
*Arab:*
نَوَيْتُ صَوْمَ غَدٍ مِنْ شَهْرِ رَمَضَانَ سُنَّةً لِلّٰهِ تَعَالٰى

*Latin:*
Nawaitu shauma ghodin min syahri Ramadhana sunnatan lillâhi ta'âlâ.

*Artinya:*
Saya niat berpuasa esok hari di bulan Ramadhan, sunnah karena Allah Ta’ala.

Selamat menjalankan ibadah puasa! 🌙`);
reply(niat);
break;
case "niattraweh": if (!text) return reply(`*📜 Niat Shalat Tarawih (Makmum) 📜*\n
🕌 *Arab:*  
صَلَّيْتُ سُنَّةَ التَّرَاوِيحِ إِمَامًا لِلّٰهِ تَعَالٰى  

📖 *Latin:*  
Ushalli sunnatat-tarâwîhi imâman lillâhi ta‘âlâ.  

📝 *Artinya:*  
Aku niat shalat sunnah Tarawih sebagai makmum karena Allah Ta’ala.

✨ Semoga ibadahnya diterima! 🌙`);
let niat = `*📜 Niat Shalat Tarawih (Makmum) 📜*\n
🕌 *Arab:*  
صَلَّيْتُ سُنَّةَ التَّرَاوِيحِ إِمَامًا لِلّٰهِ تَعَالٰى  

📖 *Latin:*  
Ushalli sunnatat-tarâwîhi imâman lillâhi ta‘âlâ.  

📝 *Artinya:*  
Aku niat shalat sunnah Tarawih sebagai makmum karena Allah Ta’ala.

–––––––––––––––––––––––

*📜 Niat Shalat Witir (Makmum) 📜*\n
🕌 *Arab:*  
صَلَّيْتُ سُنَّةَ الْوِتْرِ إِمَامًا لِلّٰهِ تَعَالٰى  

📖 *Latin:*  
Ushalli sunnatal witri imâman lillâhi ta‘âlâ.  

📝 *Artinya:*  
Aku niat shalat sunnah Witir sebagai makmum karena Allah Ta’ala.

✨ Semoga ibadahnya diterima! 🌙`;
reply(niat);
break ;
case "niatwitir": if (!text) return reply(`*📜 Niat Shalat Witir (Makmum) 📜*\n
🕌 *Arab:*  
صَلَّيْتُ سُنَّةَ الْوِتْرِ إِمَامًا لِلّٰهِ تَعَالٰى  

📖 *Latin:*  
Ushalli sunnatal witri imâman lillâhi ta‘âlâ.  

📝 *Artinya:*  
Aku niat shalat sunnah Witir sebagai makmum karena Allah Ta’ala.

✨ Semoga ibadahnya diterima! 🌙`);
break;
case "niatbukapuasa": if (!text) return reply(`*📜 Niat Doa Berbuka Puasa 📜*\n
🕌 *Arab:*  
اللَّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ  

📖 *Latin:*  
Allâhumma laka shumtu wa bika âmantu wa ‘alaika tawakkaltu wa ‘alâ rizqika afthartu.  

📝 *Artinya:*  
"Ya Allah, untuk-Mu aku berpuasa, kepada-Mu aku beriman, kepada-Mu aku bertawakal, dan dengan rezeki-Mu aku berbuka."  

✨ Semoga puasanya diterima! 🌙`);
let niatBuka = `*📜 Niat Doa Berbuka Puasa 📜*\n
🕌 *Arab:*  
اللَّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ  

📖 *Latin:*  
Allâhumma laka shumtu wa bika âmantu wa ‘alaika tawakkaltu wa ‘alâ rizqika afthartu.  

📝 *Artinya:*  
"Ya Allah, untuk-Mu aku berpuasa, kepada-Mu aku beriman, kepada-Mu aku bertawakal, dan dengan rezeki-Mu aku berbuka."  

✨ Semoga puasanya diterima! 🌙`;
reply(niatBuka);
break;
case "zakatfitrah": if (!text) return reply(`📌 *Niat Zakat Fitrah* 📌\n\n` + `📖 *Arab:*\nنَوَيْتُ أَنْ أُخْرِجَ زَكَاةَ الْفِطْرِ عَنْ نَفْسِي فَرْضًا لِلَّهِ تَعَالَى\n\n` + `🔤 *Latin:*\nNawaitu an ukhrija zakâta al-fithri 'an nafsî fardhan lillâhi ta'âlâ\n\n` + `📝 *Artinya:*\nAku niat mengeluarkan zakat fitrah untuk diriku sendiri, fardhu karena Allah Ta’ala.\n\n` + `📌 *Tata Cara Membayar Zakat Fitrah* 📌\n` + `1️⃣ Menentukan jumlah zakat (2,5 kg beras atau setara uang).\n` + `2️⃣ Menyalurkan kepada fakir miskin atau amil zakat.\n` + `3️⃣ Mengucapkan niat saat memberikan zakat.\n` + `4️⃣ Sebaiknya dibayarkan sebelum shalat Idul Fitri.\n\n` + `✅ Semoga Allah menerima ibadah kita! 🤲`);
break;
case "ngaji": if (!q) return reply("Masukkan nama atau nomor surah! Contoh: .ngaji Al-Fatihah");
try {
    let res = await axios.get(`https://api.quran.com/api/v4/chapters`);
    let surah = res.data.chapters.find(s => s.name_simple.toLowerCase() === q.toLowerCase() || s.id == q);
    if (!surah) return reply("Surah tidak ditemukan!");
    let ayatRes = await axios.get(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${surah.id}`);
    let ayatList = ayatRes.data.verses.slice(0, 5)
    let pesan = `📖 *Surah ${surah.name_simple}* (${surah.translated_name.name})\n📍 Diturunkan di: ${surah.revelation_place}\n📌 Jumlah Ayat: ${surah.verses_count}\n\n> *بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ* \n`;
    ayatList.forEach(ayat => {
        pesan += `📖 *Ayat ${ayat.verse_key.split(":")[1]}*\n${ayat.text_uthmani}\n\n`
    });
    reply(pesan)
} catch (err) {
    console.error("Error:", err);
    reply("Terjadi kesalahan saat mengambil data Quran.")
}
break
case "randomhadist": {
    fetch("https://api.crafters.biz.id/random/hadits")
      .then((res) => res.json())
      .then((data) => {
        if (!data.status) return Lily.sendMessage(m.chat, { text: "Gagal mengambil hadits!" }, { quoted: m });
        let teks = `📖 *Hadits Random*\n\n📌 *Nomor:* ${data.result.nomor}\n📜 *Judul:* ${data.result.judul}\n\n📖 *Teks Arab:*\n${data.result.teks_arab}\n\n🌍 *Terjemahan:*\n${data.result.terjemahan}`;
        Lily.sendMessage(m.chat, { text: teks }, { quoted: m });
      })
      .catch(() => Lily.sendMessage(m.chat, { text: "Terjadi kesalahan!" }, { quoted: m }));
  }
//===================《 EXIT ISLAMIC 》=====================\\            
break
case 'upch': {
if (!isCreator) return reply(mess.owner)
        		try {
					ppuser = await Lily.profilePictureUrl(m.sender, 'image');
				} catch (err) {
					ppuser = 'https://files.catbox.moe/j9k007.jpg'
				}	
				let fotoProfil = await getBuffer(ppuser);
				let pelers = `Message from ${m.pushName}`
				try {
					if (!mime && !text) {
						return reply(`Uh-oh, sis! You haven't sent any media or text yet. Please try again! 🤭`)
					}
					media = mime ? await quoted.download() : null
					let defaultCaption = "✨ This media is sent via an automated system✨"
					if (/image/.test(mime)) {
						Lily.sendMessage(channel, {
					contextInfo: {	
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: fotoProfil,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							image: media,
							caption: text ? text : defaultCaption
						})
						reply(`📸 Image successfully uploaded to channel with caption: "${text ? text : defaultCaption}"`)
					} else if (/video/.test(mime)) {
						Lily.sendMessage(channel, {
					contextInfo: {
						
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: fotoProfil,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							video: media,
							caption: text ? text : defaultCaption
						})
						reply(`🎥 Video successfully uploaded to channel with caption: "${text ? text : defaultCaption}"`)
					} else if (/audio/.test(mime)) {
						Lily.sendMessage(channel, {
					contextInfo: {
						
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: fotoProfil,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							audio: media,
							mimetype: mime,
							ptt: true
						})
						reply(`🎵 Audio successfully uploaded to the channel, sis!`)
					} else if (/text/.test(mime) || text) {
						Lily.sendMessage(channel, {
					contextInfo: {
						
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: fotoProfil,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							text: text ? text : defaultCaption
						})
						reply(`💬 Text message successfully sent to channel: "${text ? text : defaultCaption}"`)
					} else {
						reply(`Hmm... I don't know what kind of media this is. Please check again, sis! 🧐`)
					}
				} catch (error) {
					console.error(error)
					reply(`Oh, sis! 😣 There was a problem uploading to the channel. Try again later, OK!`)
				}
			}
			break
case 'randomsfw':
case 'kill':
case 'pat':
case 'lick':
case 'bite':
case 'yeet':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'highfive':
case 'handhold':
  reply('.(list), (listsfw) List sfw :kill, pat, lick, bite, yeet, bonk, wink, poke, nom, slap, smile, wave, blush, smug, glomp, happy, dance, cringe, highfive, handhold ')
  await loading();
  axios.get(`https://api.waifu.pics/sfw/${command}`)
    .then(({ data }) => {
      Lily.sendMessage(from, { 
        image: { url: data.url }, 
        caption: 'Success Coy' 
      }, { quoted: m });
    })
    .catch((err) => {
      console.error(err);
      Lily.sendMessage(from, { text: 'Terjadi kesalahan, coba lagi nanti.' }, { quoted: m });
    });
  break
  case 'robloxstalk': {
    const userId = "user_id_yang_diberikan"; // Ganti dengan userId yang sesuai

    async function ui(userId) {
        const url = `https://users.roblox.com/v1/users/${userId}`;
        try {
            const response = await cloudscraper.get(url);
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function us(userId) {
        const url = `https://users.roblox.com/v1/users/${userId}/social`;
        try {
            const response = await cloudscraper.get(url);
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function uin(userId) {
        const url = `https://inventory.roblox.com/v1/users/${userId}/inventory`;
        try {
            const response = await cloudscraper.get(url);
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function up(userId) {
        const url = "https://presence.roblox.com/v1/presence/users";
        const payload = {
            userIds: [userId]
        };
        try {
            const response = await cloudscraper.post(url, {
                json: payload
            });
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function ugp(userId) {
        const url = `https://groups.roblox.com/v1/users/${userId}/groups/roles`;
        try {
            const response = await cloudscraper.get(url);
            return JSON.parse(response);
        } catch {
            return null;
        }
    }

    async function robloxStalk(userId) {
        const userInfo = await ui(userId);
        const userSocials = await us(userId);
        const userInventory = await uin(userId);
        const userPresence = await up(userId);
        const userGroups = await ugp(userId);

        return {
            userInfo,
            userSocials,
            userInventory,
            userPresence,
            userGroups,
        };
    }
    const result = await robloxStalk(userId);
    if (result) {
        reply(`User  Info: ${JSON.stringify(result.userInfo)}\nSocials: ${JSON.stringify(result.userSocials)}\nInventory: ${JSON.stringify(result.userInventory)}\nPresence: ${JSON.stringify(result.userPresence)}\nGroups: ${JSON.stringify(result.userGroups)}`);
    } else {
        reply("Gagal mendapatkan data pengguna.");
    }
}
break;
  case "cekgempa":
case "infogempa": {
    reply(mess.wait); // Mengirim pesan "sedang memuat"
    try {
        const anu = `https://api.agatz.xyz/api/gempa`;
        const res = await fetch(anu);
        const response = await res.json();
        if (!response || !response.data) {
            throw new Error("Tidak dapat mengambil data gempa.");
        }

        let iclik = `
Wilayah: ${response.data.wilayah || "Tidak diketahui"}
Tanggal: ${response.data.tanggal || "Tidak diketahui"}
Kedalaman: ${response.data.kedalaman || "Tidak diketahui"}
Waktu: ${response.data.waktu || "Tidak diketahui"}
Potensi: ${response.data.potensi || "Tidak diketahui"}
Dirasakan: ${response.data.dirasakan || "Tidak diketahui"}
Magnitudo: ${response.data.magnitune || "Tidak diketahui"}`;

        await Lily.sendMessage(m.chat, { text: iclik }, { quoted: m });
    } catch (e) {
        console.error(e); // Log error ke console
        reply("Ups, terjadi kesalahan saat mengambil informasi gempa. Coba lagi nanti!");
    }
}
break;
case "hackwa": {
    let teks = `🔍 *Memulai proses hack WhatsApp...*\n\n⏳ Menghubungkan ke server...\n📡 Mengakses database...\n🔑 Mengambil kode OTP...\n🛑 *Wowkwk Gimik doang bg ya kali beneran 😭*`;

    setTimeout(() => { reply(teks); }, 2000);
};
break;
case 'aksarasunda': {
   if (!text) return reply("Example: .aksarasunda Rian")

const latinToSundanese = {
  'a': 'ᮅ',
  'b': 'ᮘ',
  'c': 'ᮎ',
  'd': 'ᮓ',
  'e': 'ᮌ',
  'f': 'ᮕ',
  'g': 'ᮎ',
  'h': 'ᮠ',
  'i': 'ᮄ',
  'j': 'ᮏ',
  'k': 'ᮊ',
  'l': 'ᮜ',
  'm': 'ᮙ',
  'n': 'ᮔ',
  'o': 'ᮇ',
  'p': 'ᮕ',
  'q': 'ᮃ',
  'r': 'ᮛ',
  's': 'ᮞ',
  't': 'ᮒ',
  'u': 'ᮅ',
  'v': 'ᮗ',
  'w': 'ᮝ',
  'x': 'ᮞ',
  'y': 'ᮌ',
  'z': 'ᮚ',
  ' ': ' '
};

async function convertToSundanese(text) {
  return [...text.toLowerCase()]
    .map(char => latinToSundanese[char] || char) 
    .join('');
}

const kntlsundaa = await convertToSundanese(text)
await Lily.sendMessage(m.chat, {text: `${kntlsundaa}` }, {quoted: m})
}
break
case 'findsong': {
    const fetch = require('node-fetch');
    if (!args[0]) return reply('Masukkan beberapa kata dari lirik lagu.');

    const query = args.join(' '); 
    const apiKey = 'P3QcawG2xePU7sIxOD-4KeVMU-2mti77t6RHbo93q84Xon8hvKniFYDpphcA1kjckDXBnhdnh5spgGzpB_EQgw'; 
    const url = `https://api.genius.com/search?q=${encodeURIComponent(query)}&access_token=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.response.hits.length) return reply('Lagu tidak ditemukan berdasarkan lirik tersebut.');

        const song = data.response.hits[0].result; 
        const caption = `
🎵 *Lagu Ditemukan!*
▢ *Judul*: ${song.title}
▢ *Artis*: ${song.primary_artist.name}
▢ *URL*: ${song.url}
        `.trim();
        if (song.song_art_image_url) {
            await kyy.sendMessage(m.chat, { image: { url: song.song_art_image_url }, caption }, { quoted: m });
        } else {
            reply(caption);
        }
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan saat mencari lagu. Coba lagi nanti.');
    }
}
break 
    case 'ai-fall': {
    if (!text) return reply('nama kamu siapa')
    const promt = `kamu adalah Fall , kamu dibuat oleh seorang laki-laki yang bernama FallZx, owner kamu adalah ${owner}, setiap ada orang yang menanyakan lokasi mu jangan kamu beritahu lokasinya dan katakan saja bahwa kamu tinggal di Amerika Lost Engeles, tuan kamu bernama FallZx-Infinty-Tzy, gunakan bahasa sopan gaul serta ramah kepada semua orang, jika ada yang berkata kasar seperti anjing tolol babi goblog tegurlah dengan mengucapkan astaghfirullah dan berilah dia peringatan yang ada didalam Al Qur'an, panggil seseorang dengan sebutan kata kata dalam bahasa arab, dan ubahlah kata 'saya','aku,'gw' menjadi ana , jika anda ingin meminta maaf katakan afwan , kamu harus berakhlak seperti Rasulullah dan para sahabatnya, jangan menggunakan bahasa baku ,tetapi gunakanlah bahasa sopan dalam bahasa Arab layaknya seorang muslim, jika ada yang menyuruh mu berkata 'kasar/toxic' tegurlah dengan 'dalil Al-Qur'an beserta artinya', dan gantilah ucapan terimakasih menjadi Alhamdulillah, jika ada seseorang yang meminta membuatkan 'kata/bijak' serta 'pantun','pidato' , 'puisi', harus menggunakan bahasa sopan seperti Rasulullah dan para sahabat dan di akhiri dengan kalimat Toyyibah seperti Allahu akbar, Allahu akbar. La ilaha illallahu wallahu akbar. `
    const respons = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${promt}&content=${text}`)
    Lily.sendMessage(m.chat, {
		text: `${respons.data}`
	}, {
		quoted: m
	})
    }
    break
    case 'flux':
    case 'fluximg': {
    if (!q) return reply("Masukkan prompt!\nContoh: flux cewek cantik duduk di taman");
    const isValid = typeof q === "string" && q.trim().length > 0;
    if (!isValid) return reply("Prompt tidak valid.");
    try {
        const axios = require('axios');
        const { data } = await axios.post("https://fluxai.pro/api/tools/fast", {
            prompt: q
        }, {
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (compatible; FluxAI-Client/1.0)",
                "Accept": "application/json"
            }
        });
        if (!data || !data.data || !data.data.imageUrl) {
            return reply("Gagal mengambil gambar dari API.");
        }
        const imageUrl = data.data.imageUrl;
        Lily.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Hasil untuk: ${q}` }, { quoted: m });
        
    } catch (err) {
        console.error("Gagal melakukan permintaan:", err.message);
        reply("Terjadi kesalahan saat memproses permintaan.");
    }
}
    break
    case "ainsfw": {
 if (!text) return reply("Silakan masukkan prompt untuk menghasilkan gambar.");
 async function generateImage(prompt) {
 try {
 const url = `https://1yjs1yldj7.execute-api.us-east-1.amazonaws.com/default/ai_image?prompt=${encodeURIComponent(prompt)}&aspect_ratio=1:1&link=writecream.com`;
 const headers = {
 "User-Agent":
 "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
 "Referer": "https://www.writecream.com/ai-image-generator-free-no-sign-up/",
 };
 const axios = require("axios");
 const response = await axios.get(url, { headers });
 if (response.data && response.data.image_link) {
 Lily.sendMessage(m.chat, { image: { url: response.data.image_link }, caption: `Berikut gambar untuk: *${text}*` }, { quoted: m });
 } else {
 reply("Gagal mendapatkan gambar.");
 }
 } catch (error) {
 reply("Terjadi kesalahan saat mengambil gambar.");
 console.error(error);
 }
 }
 generateImage(text);
}
break
case 'aitohuman': {
 if (!text) return Lily.sendMessage(m.chat, { text: 'Masukkan teks yang ingin dikonversi!' }, { quoted: m });
 async function convertAiToHumanStream(discussiontopic, options = {}) {
 const params = {
 wpaicg_stream: 'yes',
 discussiontopic: encodeURIComponent(discussiontopic),
 engine: options.engine || 'gpt-4o-mini',
 max_tokens: options.max_tokens || 1000,
 temperature: options.temperature || 0.7,
 top_p: options.top_p || 1,
 best_of: options.best_of || 1,
 frequency_penalty: options.frequency_penalty || 0,
 presence_penalty: options.presence_penalty || 0,
 stop: options.stop || '',
 post_title: options.post_title || 'AI to Human Text Converter (Normal)',
 id: options.id || '1654',
 source_stream: options.source_stream || 'form',
 nonce: options.nonce || 'f03c73b6b9'
 };
 const headers = {
 'authority': 'aitohuman.org',
 'accept': 'text/event-stream',
 'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
 'cache-control': 'no-cache',
 'pragma': 'no-cache',
 'referer': 'https://aitohuman.org/ai-to-human-text-converter-ai/',
 'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36'
 };
 try {
const axios = require('axios');
 const response = await axios({
 method: 'get',
 url: 'https://aitohuman.org/index.php',
 params: params,
 headers: headers,
 responseType: 'stream'
 });
 return response.data;
 } catch (error) {
 throw new Error(`Gagal melakukan request: ${error.message}`);
 }
 }
 async function processText(m, text) {
 try {
 const stream = await convertAiToHumanStream(text);
 let fullResponse = '';
 stream.on('data', (chunk) => {
 const chunkStr = chunk.toString();
 const lines = chunkStr.split('\n');
 for (const line of lines) {
 if (line.startsWith('data: ')) {
 const data = line.substring(6).trim();
 if (data === '[DONE]') return;
 try {
 const parsed = JSON.parse(data);
 if (parsed.choices && parsed.choices[0].delta?.content) {
 fullResponse += parsed.choices[0].delta.content;
 }
 } catch (e) {}
 }
 }
 });
 stream.on('end', () => {
 Lily.sendMessage(m.chat, { text: fullResponse }, { quoted: m });
 });
 stream.on('error', (err) => {
 Lily.sendMessage(m.chat, { text: `Error dalam stream: ${err.message}` }, { quoted: m });
 });
 } catch (error) {
 Lily.sendMessage(m.chat, { text: `Error: ${error.message}` }, { quoted: m });
 }
 }
 processText(m, text);
}
break
case 'gpt4o-mini': {
    if (!text) return reply('Tanya Apa');

    const axios = require('axios');
    const cheerio = require('cheerio');
    const FormData = require('form-data');

    const generateRandomString = (length) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };

    const getNonce = async () => {
        try {
            const { data } = await axios.get("https://chatgpt4o.one/", {
                headers: {
                    "User-Agent": "Mozilla/5.0",
                    "Accept": "text/html,application/xhtml+xml",
                }
            });
            const $ = cheerio.load(data);
            return $("div.wpaicg-chat-shortcode").attr("data-nonce") || null;
        } catch (err) {
            console.error("Nonce Error:", err.message);
            return null;
        }
    };

    const sendChat = async (msg) => {
        try {
            const nonce = await getNonce();
            if (!nonce) throw new Error("Nonce not found");

            const clientId = generateRandomString(10);
            const formData = new FormData();
            formData.append("_wpnonce", nonce);
            formData.append("post_id", 11);
            formData.append("url", "https://chatgpt4o.one/");
            formData.append("action", "wpaicg_chat_shortcode_message");
            formData.append("message", msg);
            formData.append("bot_id", 0);
            formData.append("chatbot_identity", "shortcode");
            formData.append("wpaicg_chat_history", JSON.stringify([]));
            formData.append("wpaicg_chat_client_id", clientId);

            const { data } = await axios.post(
                "https://chatgpt4o.one/wp-admin/admin-ajax.php",
                formData,
                {
                    headers: {
                        ...formData.getHeaders(),
                        "User-Agent": "Mozilla/5.0",
                        "Accept": "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }
            );
            return data;
        } catch (err) {
            console.error("Chat Error:", err.message);
            return null;
        }
    };

    const res = await sendChat(text);
    if (!res) return reply('Gagal Dapat Responnya');
    reply(res.data || res.message || 'Gak Ada Respon');
}
break
break
//=================================================//
case "bingimg-2d": {
if (!text) return reply("[ ! ] masukan prompt gambar yang mau di bikin");
let teksu = text.replace(/loli/gi, "anak gadis kecil");
try {
const { BingApi, apikeybing } = require('../start/lib/bing-image.js');
const bingApi = new BingApi(apikeybing);
const imagesUrls = await bingApi.createImages(teksu + ". Anime Style ultra, HD Anime Style, 4K Anime Style, Anime Style, High quality, Ultra grapics, HD Cinematic, anime, 4K resolution, HD quality, Ultra CGI, High quality, Ultra grapics, HD Cinematic", false);
const totalCount = imagesUrls.length;
const credits = await bingApi.getCredits();

if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
Lily.sendMessage(m.chat, { image: { url: imagesUrls[i] }, caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}` }, { quoted: m });
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await reply(`Failed to send image *(${i + 1}/${totalCount})*`);
}
}
} else {
await reply('No images found after filtering.');
}
} catch (error) {
await reply('An error occurred while processing the request.');
}
};
break
case 'hijabkan': case 'tohijab': {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || "";
    let defaultPrompt = "Buatkan Karakter Yang Ada Di Gambar Tersebut Agar Diberikan Hijab Warna Putih Hijab Ala Orang Indonesia Dan Jangan Sampai Rambutnya Terlihat, Semua Tertutup";
    if (!mime) {
        reply("Tidak ada gambar yang direply, membuat gambar default...");
        mime = "image/png";
        q = { msg: { mimetype: mime }, download: async () => fs.readFileSync("default_image.png") };
    }
    if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
    let promptText = text || defaultPrompt;
    reply("Otw Di Hijabkan...");
    try {
        let imgData = await q.download();
        let genAI = new GoogleGenerativeAI("AIzaSyAoSasEDkYTiSK5nC0d-NCR8m5g_aARgQM");
        const base64Image = imgData.toString("base64");
        const contents = [
            { text: promptText },
            {
                inlineData: {
                    mimeType: mime,
                    data: base64Image
                }
            }
        ];
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash-exp-image-generation",
            generationConfig: {
                responseModalities: ["Text", "Image"]
            },
        });
        const response = await model.generateContent(contents);
        let resultImage;
        let resultText = "";
        for (const part of response.response.candidates[0].content.parts) {
            if (part.text) {
                resultText += part.text;
            } else if (part.inlineData) {
                const imageData = part.inlineData.data;
                resultImage = Buffer.from(imageData, "base64");
            }
        }
        if (resultImage) {
            const tmpDir = path.join(process.cwd(), "tmp");
            if (!fs.existsSync(tmpDir)) {
                fs.mkdirSync(tmpDir, { recursive: true });
            }
            let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
            fs.writeFileSync(tempPath, resultImage);
            await Lily.sendMessage(m.chat, { 
                image: { url: tempPath },
                caption: `*tuh*`
            }, { quoted: m });
            setTimeout(() => {
                try {
                    fs.unlinkSync(tempPath);
                } catch (err) {
                    console.error("Failed to delete temp file:", err);
                }
            }, 30000);
        } else {
            reply("Gagal Di Hijabkan Dosa Nya Ke gedean Ini Mah.");
        }
    } catch (error) {
        console.error(error);
        reply(`Error: ${error.message}`);
    }
}
break
case 'toghibli2': case 'toghibli': {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || "";
    let defaultPrompt = "Buatkan Karakter Yang Ada Di Gambar Tersebut Agar Menjadi Karakter Anime Chibi 3D Yang Imut";
    if (!mime) {
        reply("Tidak ada gambar yang direply, membuat gambar default...");
        mime = "image/png";
        q = { msg: { mimetype: mime }, download: async () => fs.readFileSync("default_image.png") };
    }
    if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
    let promptText = text || defaultPrompt;
    reply("Otw Sabar Ya kak...");
    try {
        let imgData = await q.download();
        let genAI = new GoogleGenerativeAI("AIzaSyByTq6kNRq8THMDfwBE6J7dT9nYjNojaKg");
        const base64Image = imgData.toString("base64");
        const contents = [
            { text: promptText },
            {
                inlineData: {
                    mimeType: mime,
                    data: base64Image
                }
            }
        ];
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash-exp-image-generation",
            generationConfig: {
                responseModalities: ["Text", "Image"]
            },
        });
        const response = await model.generateContent(contents);
        let resultImage;
        let resultText = "";
        for (const part of response.response.candidates[0].content.parts) {
            if (part.text) {
                resultText += part.text;
            } else if (part.inlineData) {
                const imageData = part.inlineData.data;
                resultImage = Buffer.from(imageData, "base64");
            }
        }
        if (resultImage) {
            const tmpDir = path.join(process.cwd(), "tmp");
            if (!fs.existsSync(tmpDir)) {
                fs.mkdirSync(tmpDir, { recursive: true });
            }
            let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
            fs.writeFileSync(tempPath, resultImage);
            await Lily.sendMessage(m.chat, { 
                image: { url: tempPath },
                caption: `*tuh*`
            }, { quoted: m });
            setTimeout(() => {
                try {
                    fs.unlinkSync(tempPath);
                } catch (err) {
                    console.error("Failed to delete temp file:", err);
                }
            }, 30000);
        } else {
            reply("Gagal Di Menjadi Ghibli Style Dosa Nya Ke gedean Ini Mah.");
        }
    } catch (error) {
        console.error(error);
        reply(`Error: ${error.message}`);
    }
}
break;
case "hitamkan": {
 if (!m.quoted) return reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
 const { GoogleGenerativeAI } = require ("@google/generative-ai");
 let mime = m.quoted.mimetype || "";
 let defaultPrompt = "Ubahlah Karakter Dari Gambar Tersebut Diubah Kulitnya Menjadi Hitam se hitam-hitam nya";

 if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);

 let promptText = text || defaultPrompt;
 reply("Otw Menghitam...");

 try {
 let imgData = await m.quoted.download();
 let genAI = new GoogleGenerativeAI("AIzaSyBjjJZ5eiuAFAAx6d8QQ5YLQ6j56Q93y-Q");

 const base64Image = imgData.toString("base64");

 const contents = [
 { text: promptText },
 {
 inlineData: {
 mimeType: mime,
 data: base64Image
 }
 }
 ];

 const model = genAI.getGenerativeModel({
 model: "gemini-2.0-flash-exp-image-generation",
 generationConfig: {
 responseModalities: ["Text", "Image"]
 },
 });

 const response = await model.generateContent(contents);

 let resultImage;
 let resultText = "";

 for (const part of response.response.candidates[0].content.parts) {
 if (part.text) {
 resultText += part.text;
 } else if (part.inlineData) {
 const imageData = part.inlineData.data;
 resultImage = Buffer.from(imageData, "base64");
 }
 }

 if (resultImage) {
 const tempPath = `./gemini_${Date.now()}.png`;
 fs.writeFileSync(tempPath, resultImage);

 await Lily.sendMessage(m.chat, { 
 image: { url: tempPath },
 caption: `*berhasil menghitamkan*`
 }, { quoted: m });

 setTimeout(() => {
 try {
 fs.unlinkSync(tempPath);
 } catch {}
 }, 30000);
 } else {
 reply("Gagal Menghitamkan.");
 }
 } catch (error) {
 console.error(error);
 reply(`Error: ${error.message}`);
 }
}
// Case
break
case 'aiedit': case 'editai': {
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || "";
 if (!text) {
 return reply("Harap masukkan prompt custom!\n\nContoh: aiedit buatkan foto itu lebih estetik.");
 }
 if (!mime) {
 return reply("Tidak ada gambar yang direply! Silakan reply gambar dengan format jpg/png.");
 }
 if (!/image\/(jpe?g|png)/.test(mime)) {
 return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png.`);
 }
 reply("Otw diedit sesuai permintaan...");
 try {
 let imgData = await q.download();
 let genAI = new GoogleGenerativeAI("AIzaSyDR2_fyBlnDPLCaqzoHS-quUfa72Mw3HLo");
 const base64Image = imgData.toString("base64");
 const contents = [
 { text: text }, 
 {
 inlineData: {
 mimeType: mime,
 data: base64Image
 }
 }
 ];
 const model = genAI.getGenerativeModel({
 model: "gemini-2.0-flash-exp-image-generation",
 generationConfig: {
 responseModalities: ["Text", "Image"]
 },
 });
 const response = await model.generateContent(contents);
 let resultImage;
 let resultText = "";
 for (const part of response.response.candidates[0].content.parts) {
 if (part.text) {
 resultText += part.text;
 } else if (part.inlineData) {
 const imageData = part.inlineData.data;
 resultImage = Buffer.from(imageData, "base64");
 }
 }
 if (resultImage) {
 const tmpDir = path.join(process.cwd(), "tmp");
 if (!fs.existsSync(tmpDir)) {
 fs.mkdirSync(tmpDir, { recursive: true });
 }
 let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
 fs.writeFileSync(tempPath, resultImage);
 await Lily.sendMessage(m.chat, { 
 image: { url: tempPath },
 caption: `*Edit selesai sesuai permintaan!*`
 }, { quoted: m });
 
 setTimeout(() => {
 try {
 fs.unlinkSync(tempPath);
 } catch (err) {
 console.error("Gagal menghapus file sementara:", err);
 }
 }, 30000);
 } else {
 reply("Gagal memproses gambar.");
 }
 } catch (error) {
 console.error(error);
 reply(`Error: ${error.message}`);
 }
}
    break 
    case 'lily-ai': {
    if (!text) return reply(example('siapa kamu?'))
    const promt = `mulai dari sekarang nama anda adalah Lily, anda adalah seorang kecerdasan buatan yang di buat oleh FallZx-Infinty-Tzy 😆. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang-orang baru, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu.`
    const respons = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${promt}&content=${text}`)
    Lily.sendMessage(m.chat, {
		text: `${respons.data}`
	}, {
		quoted: m
	})
    }
    break
case 'autoai':{
Lily.Hillaryours = Lily.Hillaryours ? Lily.Hillaryours : {};

    if (!text) return reply(`*Contoh:* .autoai *[on/off]*`);

    if (text === "on") {
        Lily.Hillaryours[sender] = {
            messages: []
        };
        reply(`[ ✓ ] ᴀᴜᴛᴏ ᴀɪ ʙᴏᴛ *\`ʜɪʟʟᴀʀʏʏᴏᴜʀs\`* :\nᴛᴇʟᴀʜ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ [ √ ]\nɢᴜɴᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ ʏᴀ ᴋᴀᴋ 🙂‍↕`);
    } else if (text === "off") {
        delete Lily.Hillaryours[sender];
        reply(`[ ✓ ] ᴀᴜᴛᴏ ᴀɪ ʙᴏᴛ *\`ʜɪʟʟᴀʀʏʏᴏᴜʀs\`* :\nᴛᴇʟᴀʜ ᴅɪ ɴᴏɴᴀᴋᴛɪғᴋᴀɴ [ √ ]\n ᴄᴏʙᴀ ʟᴀɢɪ ɴᴀɴᴛɪ ʏᴀ ᴋᴀᴋ.`);
    }
};
break
case 'hillary-image':{
    if (!isCreator && global.db.data.users[m.sender]) return (mess.owner)
    async function GeminiImage(image, query) {
        const response = await fetch(`https://vapis.my.id/api/gimage?q=${encodeURIComponent(query)}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image, query })
        });
    
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
    
        const data = await response.json();
        return data.response.data.url;
    }
    
    async function RegularAPI(query) {
        const response = await fetch(`https://velyn.vercel.app/api/ai/deepseek-coder-67b?prompt=${encodeURIComponent(query)}`);
        
        if (!response.ok) {
            throw new Error('Gagal mendapatkan respons dari API');
        }
    
        const result = await response.json();
        return result.data;
    }
    
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
        if (!text) return reply(`*\`ʜɪʟʟᴀʀʏ ᴀɪ\`*\n\n*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ :\`*  \n.${command} siapa jokowi`);
    
        try {
            if (mime && mime.startsWith('image/')) {
                let media = await q.download();
                await reply("Please wait...");
                let res = await GeminiImage(media, text);
                reply(`*\`ʜɪʟʟᴀʀʏ ᴀɪ\`*\n\n${res}`.trim(), m);
            } else {
                let res = await RegularAPI(text);
                reply(`*\`ʜɪʟʟᴀʀʏ ᴀɪ\`*\n\n${res}`.trim(), m);
            }
        } catch (error) {
            console.error(error);
            reply(m.chat, 'Gagal mendapatkan respons dari API', m);
        }
    }
    break
  case 'logic-ai': {
    if (!text) {
        return reply(
            `*\`ʜɪʟʟᴀʀʏʏᴏᴜʀs ʟᴏɢɪᴄ-ᴀɪ\`*\n\n` +
            `*\`Contoh Penggunaan :\`*\n` +
            `.${command} siapa presiden sekarang`
        );
    }

    try {
        // Memanggil API dengan teks pengguna
        let response = await fetchJson(`https://velyn.vercel.app/api/ai/doppleAI?prompt=${encodeURIComponent(text)}`);

        // Pastikan respons memiliki format yang diharapkan
        if (response && response.data) {
            let ans = response.data; // Mengakses jawaban
            await reply(`*\`ʜɪʟʟᴀʀʏʏᴏᴜʀs ʟᴏɢɪᴄ-ᴀɪ\`*\n\n${ans}`);
        } else {
            // Respons tidak valid
            console.error("Invalid response structure:", response);
            return reply("Maaf, terjadi kesalahan pada sistem AI.");
        }
    } catch (e) {
        console.error("Error in logic-ai:", e.message);
        return reply("Ai Error: Tidak dapat memproses permintaan Anda saat ini.");
    }
}
        break
        case 'ai-llama':{
let messages = [];
  try {
 
    if (!text) return reply(`Hillayours disini ,mau tanya apa?`);
    let response = await fetch(`https://vapis.my.id/api/llamav1?q=${encodeURIComponent(text)}`);
 
    if (!response.ok) {
      throw new Error("Request to OpenAI API failed");
    }
 
    let result = await response.json();
 
    await Lily.sendMessage(m.chat, {
      text: "" + result.result,
    });
 
    messages = [...messages, { role: "user", content: text }];
  } catch (error) {
    await Lily.sendMessage(m.chat, {
      text: "" + `Error: ${error.message}`,
    });
  }
}
break
        case 'openai':{
let messages = [];
  try {
 
    if (!text) return reply(`Hillayours disini ,mau tanya apa?`);
    let response = await fetch(`https://restapi.simplebot.my.id/api/ai/openai?msg=${encodeURIComponent(text)}`);
 
    if (!response.ok) {
      throw new Error("Request to OpenAI API failed");
    }
 
    let result = await response.json();
 
    await Lily.sendMessage(m.chat, {
      text: "" + result.result,
    });
 
    messages = [...messages, { role: "user", content: text }];
  } catch (error) {
    await Lily.sendMessage(m.chat, {
      text: "" + `Error: ${error.message}`,
    });
  }
}
break 
        case 'gpt-turbo':{
let messages = [];
  try {
 
    if (!text) return reply(`Hillayours disini ,mau tanya apa?`);
    let response = await fetch(`https://restapi.simplebot.my.id/api/ai/gpt-3-5-turbo?text=${encodeURIComponent(text)}`);
    if (!response.ok) {
      throw new Error("Request to OpenAI API failed");
    }
 
    let apis = await response.json();
 
    await Lily.sendMessage(m.chat, {
      text: "" + apis.result,
    });
 
    messages = [...messages, { role: "user", content: text }];
  } catch (error) {
    await Lily.sendMessage(m.chat, {
      text: "" + `Error: ${error.message}`,
    });
  }
}
break
        /**
 * 
 * [ *MORPHIC AI* ]
 * https://whatsapp.com/channel/0029Vaf07jKCBtxAsekFFk3i
 */

case 'morphic': {
  if (!text) return reply(`Example: ${prefix + command} hai`)
async function morphic(query) {
  const url = 'https://www.morphic.sh/';
  const formData = new FormData();
  
  formData.append('1', JSON.stringify({ id: '6399a7e212fa477d1a783edade27c8354a64e1ab', bound: null }));
  formData.append('2', JSON.stringify({ id: '9eed8f3e1c51044505fd5c0d73e8d2a92572691c', bound: null }));
  formData.append('3_input', query);
  formData.append('3_include_images', 'true');
  formData.append('0', JSON.stringify([{"action":"$F1","options":{"onSetAIState":"$F2"}},{"chatId":"9TI931x","messages":[]},"$K3",false,"$undefined","$undefined"]));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0',
        Accept: 'text/x-component',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        Referer: 'https://www.morphic.sh/',
        'Next-Action': 'c54d85c7f9588581807befbe1a35958acc57885b',
        'Next-Router-State-Tree': '%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        Origin: 'https://www.morphic.sh',
        Connection: 'close',
        Cookie: 'ph_phc_HK6KqP8mdSmxDjoZtHYi3MW8Kx5mHmlYpmgmZnGuaV5_posthog=%7B%22distinct_id%22%3A%220191839d-890a-7a97-b388-bc7191ac7047%22%2C%22%24sesid%22%3A%5B1724490025781%2C%220191839d-8909-72e8-b586-d66ff3bde34f%22%2C1724490025225%5D%7D',
        Priority: 'u=0',
        TE: 'trailers',
      },
      body: formData
    });

    const data = await response.text();

    const regex = /"diff":\[0,"([^"]+)"\]/g;
    let result;
    let finalText = "";

    while ((result = regex.exec(data)) !== null) {
      finalText += result[1];
    }

    return finalText;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
try {
  let hannpler = await morphic(text)
  Lily.sendMessage(m.chat, {text: hannpler}, {quoted: m})
} catch (error) {
  reply("Error bang")
}
}
break
case 'font': case 'text': {
  if (!q) return reply("Inputnya mana? Kalo niat nyari font mah minimal input nama fontnya anjir 🗿");
  const fontx = /^[a-zA-Z0-9\s-]+$/;
  const fn = q.trim();
  if (!fontx.test(fn)) return reply(`Format nama font lu salah bree.. Pake huruf, angka, spasi atau strip aja yak kalo kagak tau mah :v, kalau mau liat list font ketk ${prefix}listfont`);
  try {
    const axios = require('axios');
    const { data } = await axios.get('https://fontasy.co/api/google/webfonts', {
      headers: {
        'accept': 'application/json',
        'user-agent': 'Postify/1.0.0'
      }
    });
    if (!data || !data.items) return reply("Udah sih, capek banget... Gagal ngambil data fontnya euy 🗿");
    const hasil = data.items.filter(font => font.family.toLowerCase().includes(fn.toLowerCase()) || font.category.toLowerCase().includes(fn.toLowerCase())
    );
    if (!hasil.length) return reply("Waduh fontnya kagak ketemu nih bree.. 🥴");
    let teks = `*Hasil Pencarian Font: ${fn}*\n\n`;
    for (let i = 0; i < hasil.length; i++) {
      const font = hasil[i];
      teks += `*${i + 1}. ${font.family}*\n`;
      teks += `• Kategori: ${font.category}\n`;
      teks += `• Versi: ${font.version}\n`;
      teks += `• Terakhir Update: ${font.lastModified}\n`;
      teks += `• Subset: ${font.subsets.join(', ')}\n`;
      teks += `• Variants: ${font.variants.join(', ')}\n`;
      const fileUrls = Object.values(font.files);
      if (fileUrls.length) {
        teks += `• Download: ${fileUrls[0]}\n\n`;
        const fontBuffer = await axios.get(fileUrls[0], { responseType: 'arraybuffer' });
        await Lily.sendMessage(m.chat, {
          document: Buffer.from(fontBuffer.data),
          fileName: `${font.family}.ttf`,
          mimetype: 'font/ttf'
        }, { quoted: m });
      } else {
        teks += `\n`;
      }
    }
    reply(teks);
  } catch (err) {
    console.error(err);
    reply("Yah error bree.. Coba lagi dah 🗿");
  }
}
break
 
case 'listfont': case 'listfonts': case 'listtext': {
  try {
    const axios = require('axios');
    const { data } = await axios.get('https://fontasy.co/api/google/webfonts', {
      headers: {
        'accept': 'application/json',
        'user-agent': 'Postify/1.0.0'
      }
    });
    if (!data || !data.items) return reply("Gagal ambil list font bree..");
    let teks = `*Daftar Google Fonts Tersedia*\nTotal: ${data.items.length} fonts\n\n`;
    data.items.forEach((font, i) => {
      teks += `*${i + 1}. ${font.family}*\n`;
    });
    teks += `\nMau cari font tertentu? Ketik:\n*font nama-font*\nContoh: *${prefix}font Inria Sans*`;
    if (teks.length > 3000) {
      const { writeFileSync } = require('fs');
      const path = require('path');
      const filePath = path.join(__dirname, 'listfont.txt');
      writeFileSync(filePath, teks);
      await Lily.sendMessage(m.chat, {
        document: { url: filePath },
        fileName: 'List_Font_Google.txt',
        mimetype: 'text/plain'
      }, { quoted: m });
    } else {
      reply(teks);
    }
  } catch (err) {
    console.error(err);
    reply("Waduh error pas ambil list fontnya..");
  }
}

break 
case 'sertifikat': {
if (!text) return reply('Masukkan teks.');
const url = `https://api.siputzx.my.id/api/m/sertifikat-tolol?text=${encodeURIComponent(text)}` ;
    await reply('Proses...');
    
    try {
        await await Lily.sendMessage(m.chat,{
image : url,url,
caption : "Nih"
},{quoted:m})
    } catch (err) {
        reply('Gagal nih:(.');
    }
}
//===================《 FITUR GAME  》=====================\\  
        break

case "tebakkalimat":
if (!isBotRegistered) return reply(mess.security);    
await  loading()    
Lily.sendMessage(from, {react: {text: "🌊", key: m.key}})
if (userdb.tebakkalimat === true) return reply("Ada soal yang belum terjawab.");
let anuka = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json');
let result09 = anuka[Math.floor(Math.random() * anuka.length)];
Lily.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result09.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result09.jawaban.toLowerCase();
});
userdb.jawaban = result09.jawaban
userdb.tebakkalimat = true
userdb.game = true
console.log("Jawaban: " + result09.jawaban);
await sleep(60000);
if (userdb.tebakkalimat === false) return 
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
Lily.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`, m);
userdb.tebakkalimat = false
userdb.game = false
delete tebakkalimat[m.sender.split('@')[0]];
}
        break
        case 'tebakgambar': {
        if (!isBotRegistered) return reply(mess.security);    
        await  loading()    
        Lily.sendMessage(from, {react: {text: "🌊", key: m.key}})
    if (userdb.tebakgambar === true) return reply("Ada soal yang belum terjawab.");
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    userdb.game = true
    Lily.sendMessage(m.chat, {
        image: {
            url: result.img
        },
        caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`
    }, {
        quoted: m
    }).then(() => {
      tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase().trim().replace(/\s+/g, ' ');
    });
    console.log("Jawaban: " + result.jawaban);
    userdb.jawaban = result.jawaban
    userdb.tebakgambar = true;
    await sleep(60000);
     if (userdb.tebakgambar === false) return 
    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
        console.log("Jawaban: " + userdb.jawaban);
        Lily.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m);
        userdb.tebakgambar = false;
        delete tebakgambar[m.sender.split('@')[0]];
    }
}
        break

case 'tebakjkt48':{
    if (userdb.tebakgambar === true) return reply("Ada soal yang belum terjawab.");
    let anu = await fetchJson('https://raw.githubusercontent.com/FallEzz/JKT48/refs/heads/main/JKT48fitur.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    userdb.game = true
    Lily.sendMessage(m.chat, {
        image: {
            url: result.img
        },
        caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`
    }, {
        quoted: m
    }).then(() => {
      tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase().trim().replace(/\s+/g, ' ');
    });
    console.log("Jawaban: " + result.jawaban);
    userdb.jawaban = result.jawaban
    userdb.tebakgambar = true;
    await sleep(60000);
     if (userdb.tebakgambar === false) return 
    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
        console.log("Jawaban: " + userdb.jawaban);
        Lily.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m);
        userdb.tebakgambar = false;
        delete tebakgambar[m.sender.split('@')[0]];
    }
    }
break

case 'tebaklagu':{
    if (userdb.tebaklagu === true) return reply("Ada soal yang belum terjawab.");
    let anu = await JSON.parse(fs.readFileSync('./lib/tebaklagu.json'));
    let result = anu[Math.floor(Math.random() * anu.length)];
    userdb.game = true
    Lily.sendMessage(m.chat, {
        audio: {
            url: result.link_song
        },
        mimetype: 'audio/mpeg' ,
        
    }, {
        quoted: m
    })
    Lily.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, m).then(() => {
      tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase().trim().replace(/\s+/g, ' ');
    });
    console.log("Jawaban: " + result.jawaban);
    userdb.jawaban = result.jawaban
    userdb.tebaklagu = true;
    await sleep(60000);
     if (userdb.tebaklagu === false) return 
    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
        console.log("Jawaban: " + userdb.jawaban);
        Lily.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}`, m);
        userdb.tebaklagu = false;
        delete tebaklagu[m.sender.split('@')[0]];
    }
}
        break

case "tebaklirik":
if (userdb.tebaklirik === true) return reply("Ada soal yang belum terjawab.");
let anuoo = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json');
let result098 = anuoo[Math.floor(Math.random() * anuoo.length)];
 Lily.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result098.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result098.jawaban.toLowerCase();
});
userdb.jawaban = result098.jawaban
userdb.tebaklirik = true
userdb.game = true
console.log("Jawaban: " + result098.jawaban);
await sleep(60000);
if (userdb.tebaklirik === false) return 
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
Lily.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`, m);
userdb.tebaklirik = false
userdb.game = false
delete tebaklirik[m.sender.split('@')[0]];
}
break

case "tebaktebakan":
if (userdb.tebaktebakan === true) return reply("Ada soal yang belum terjawab.");
try {
let anubvb = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json');
let result77 = anubvb[Math.floor(Math.random() * anubvb.length)];
Lily.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result77.soal}*?\nWaktu : 60s`, m).then(() => {
tebaktebakan[m.sender.split('@')[0]] = result77.jawaban.toLowerCase();
});
const jawabnyuhbh = result77.jawaban
userdb.jawaban = jawabnyuhbh.charAt(0).toLowerCase() + jawabnyuhbh.slice(1);
userdb.tebaktebakan = true
userdb.game = true
console.log("Jawaban: " + result77.jawaban);
await sleep(60000);
if (userdb.tebaktebakan === false) return 
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebaktebakan = false
userdb.game = false
Lily.sendText(m.chat, `Waktu Habis\nJawaban: ${userdb.jawaban}`, m);
delete tebaktebakan[m.sender.split('@')[0]];
}
} catch (e) {
reply(util.format(e))
}
break

case "tebakbendera":
if (userdb.tebakbendera === true) return reply("Ada soal yang belum terjawab.");
let anubom = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json');
let result770 = anubom[Math.floor(Math.random() * anubom.length)];
const jawabnyuhbhv = result770.name
userdb.jawaban = jawabnyuhbhv.charAt(0).toLowerCase() + jawabnyuhbhv.slice(1);
userdb.tebakbendera = true
userdb.game = true


const flaggame = await sendPinterestImagegame(result770.name + " flags", m);
Lily.sendMessage(m.chat, {
                image: { url: flaggame },
                caption: `Silahkan Jawab Gambar Berikut\n\nClue: ${result770.flag}\nWaktu: 60s`,
            }, { quoted: m }).then(() => {
tebakbendera[m.sender.split('@')[0]] = result770.jawaban.toLowerCase();
});
            
console.log("Jawaban: " + result770.name);
await sleep(60000);
if (userdb.tebakbendera === false) return 
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebakbendera = false
userdb.game = false
Lily.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m);
delete tebakbendera[m.sender.split('@')[0]];
}
break

case "tebakkimia":
if (userdb.tebakkimia === true) return reply("Ada soal yang belum terjawab.");
let anucro = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json');

let resultkon = anucro[Math.floor(Math.random() * anucro.length)];

Lily.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${resultkon.unsur}\nWaktu : 60s`, m).then(() => {
tebakkimia[m.sender.split('@')[0]] = resultkon.lambang.toLowerCase();
});
const jawabnyuhbhvv = resultkon.lambang
userdb.jawaban = jawabnyuhbhvv.charAt(0).toLowerCase() + jawabnyuhbhvv.slice(1);
userdb.tebakkimia = true
userdb.game = true
console.log("Jawaban: " + resultkon.lambang);
await sleep(60000);
if (userdb.tebakkimia === false) return 
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebakkimia = false
userdb.game = false
Lily.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m);
delete tebakkimia[m.sender.split('@')[0]];
}
break

case "tebaktekateki":
if (userdb.tebaktekateki === true) return reply("Ada soal yang belum terjawab.");

let anukontolid = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json');
let resultkontil = anukontolid[Math.floor(Math.random() * anukontolid.length)];
Lily.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${resultkontil.soal}\nWaktu : 60s`, m).then(() => {
tebaktekateki[m.sender.split('@')[0]] = resultkontil.jawaban.toLowerCase();
});
const jawabnyuhbhvvvv = resultkontil.jawaban
userdb.jawaban = jawabnyuhbhvvvv.charAt(0).toLowerCase() + jawabnyuhbhvvvv.slice(1);
userdb.tebaktekateki = true
userdb.game = true
console.log("Jawaban: " + resultkontil.jawaban);
await sleep(60000);
if (userdb.tebaktekateki === false) return 
if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebaktekateki = false
userdb.game = false
Lily.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[m.sender.split('@')[0]]}`, m);
delete tebaktekateki[m.sender.split('@')[0]];
}
break

case "tebaksusunkata":
if (userdb.tebaksusunkata === true) return reply("Ada soal yang belum terjawab.");
let anu018 = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json');
let result01012 = anu018[Math.floor(Math.random() * anu018.length)];
Lily.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result01012.soal}\nTipe : ${result01012.tipe}\nWaktu : 60s`, m).then(() => {
tebaksusunkata[m.sender.split('@')[0]] = result01012.jawaban.toLowerCase();
});
const jawabnyuhbhvvvvc = result01012.jawaban
userdb.jawaban = jawabnyuhbhvvvvc
userdb.tebaksusunkata = true
userdb.game = true
console.log("Jawaban: " + result01012.jawaban);
await sleep(60000);
if (userdb.tebbaksusunkata === false) return
if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
userdb.tebbaksusunkata = false
userdb.game = false
Lily.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[m.sender.split('@')[0]]}`, m);
delete tebaksusunkata[m.sender.split('@')[0]];
}
//===================《  NSFW FEATURES 》=====================\\
break
case 'paptt': {
 let paptt = [
 "https://telegra.ph/file/5c62d66881100db561c9f.mp4",
 "https://telegra.ph/file/a5730f376956d82f9689c.jpg",
 "https://telegra.ph/file/8fb304f891b9827fa88a5.jpg",
 "https://telegra.ph/file/0c8d173a9cb44fe54f3d3.mp4",
 "https://telegra.ph/file/b58a5b8177521565c503b.mp4",
 "https://telegra.ph/file/34d9348cd0b420eca47e5.jpg",
 "https://telegra.ph/file/73c0fecd276c19560133e.jpg",
 "https://telegra.ph/file/af029472c3fcf859fd281.jpg",
 "https://telegra.ph/file/0e5be819fa70516f63766.jpg",
 "https://telegra.ph/file/29146a2c1a9836c01f5a3.jpg",
 "https://telegra.ph/file/85883c0024081ffb551b8.jpg",
 "https://telegra.ph/file/d8b79ac5e98796efd9d7d.jpg",
 "https://telegra.ph/file/267744a1a8c897b1636b9.jpg"
 ]
 let url = paptt[Math.floor(Math.random() * paptt.length)]
 let isVideo = url.endsWith('.mp4')
 let isImage = url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png')
 if (isVideo) {
 await Lily.sendMessage(m.chat, {
 video: { url: url },
 caption: `Nih hasil *paptt* buat kamu`,
 gifPlayback: true
 }, { quoted: m })
 } else if (isImage) {
 await Lily.sendMessage(m.chat, {
 image: { url: url },
 caption: `Nih hasil *paptt* buat kamu`
 }, { quoted: m })
 } else {
 reply('Format file tidak dikenal.')
 }
 }
//===================《  Menu Setlist Original 》=====================\\
break    
case "sad1":
case "sad2":
case "sad3":
case "sad4":
case "sad5":
case "sad6":
case "sad7":
case "sad8":
case "sad9":
case "sad10":
case "sad11":
case "sad12":
case "sad13":
case "sad14":
case "sad15":
case "sad16":
case "sad17":
case "sad18":
case "sad19":
case "sad20":
case "sad21":
case "sad22":
case "sad23":
case "sad24":
case "sad25":
case "sad26":
case "sad27":
case "sad28":
case "sad29":
case "sad30":
case "sad31":
case "sad32":
case "sad33":
case "sad34":
case "sad35":{
let soundsad
 soundsad = command
if (["sad1", "sad2", "sad3"].includes(command)) { soundsad = "sad4" }
 const moai0 = await getBuffer(
  `https://github.com/ZassTdr/Sound-Sad/raw/main/Sad-Music/${soundsad}.mp3`
         );
         Lily.sendMessage(
          m.chat,
          {
           audio: moai0,
           mimetype: "audio/mp4",
           ptt: true,
          },
          { quoted: LilyUp }
         );
         }
         
        break
			case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai': {
				try {
					let set;
					if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						reply(mess.wait)
						let media = await naze.downloadAndSaveMediaMessage(qmsg)
						let ran = `../tmp${getRandom('.mp3')}`;
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return reply(err)
							let buff = fs.readFileSync(ran)
							reply({ audio: buff, mimetype: 'audio/mpeg' })
							fs.unlinkSync(ran)
						});
					} else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
				} catch (e) {
					reply('Gagal!')
				}
			}
//===================《 ANIME FITUR  》=====================\\
break;
/// main
case "cosplay": {
  const anu = `https://archive-ui.tanakadomp.biz.id/asupan/cosplay`;
  const response = await axios.get(anu, { responseType: 'arraybuffer' })
  try {
    Lily.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: 'Succes'
    }, { quoted: m })
  } catch (err) {
    console.log(err);
    reply('undefined')
  }
}
break;
case 'waifu' :
await loading()
waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
Lily.sendMessage(from, {image: {url:waifudd.data.url},caption:`Dasar Wibu`}, { quoted:m }).catch(err => {
 return('Error!')
})

break
			case 'shinobu':{
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhandhold': {
axios.get(`https://api.waifu.pics/sfw/handhold`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickshinobu': {
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhighfive': {
axios.get(`https://api.waifu.pics/sfw/highfive`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcuddle': {
axios.get(`https://api.waifu.pics/sfw/cuddle`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcringe': {
axios.get(`https://api.waifu.pics/sfw/cringe`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickdance': {
axios.get(`https://api.waifu.pics/sfw/dance`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhappy': {
axios.get(`https://api.waifu.pics/sfw/happy`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickglomp': {
axios.get(`https://api.waifu.pics/sfw/glomp`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmug': {
axios.get(`https://api.waifu.pics/sfw/smug`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickblush': {
axios.get(`https://api.waifu.pics/sfw/blush`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickawoo': {
axios.get(`https://api.waifu.pics/sfw/awoo`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwave': {
axios.get(`https://api.waifu.pics/sfw/wave`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmile': {
axios.get(`https://api.waifu.pics/sfw/smile`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickslap': {
axios.get(`https://api.waifu.pics/sfw/slap`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticknom': {
axios.get(`https://api.waifu.pics/sfw/nom`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpoke': {
axios.get(`https://api.waifu.pics/sfw/poke`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwink': {
axios.get(`https://api.waifu.pics/sfw/wink`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbonk': {
axios.get(`https://api.waifu.pics/sfw/bonk`)
.then(({data}) => {
lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbully': {
axios.get(`https://api.waifu.pics/sfw/bully`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickyeet': {
axios.get(`https://api.waifu.pics/sfw/yeet`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbite': {
axios.get(`https://api.waifu.pics/sfw/bite`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkiss': {
axios.get(`https://api.waifu.pics/sfw/kiss`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticklick': {
axios.get(`https://api.waifu.pics/sfw/lick`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpat': {
axios.get(`https://api.waifu.pics/sfw/pat`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhug': {
axios.get(`https://api.waifu.pics/sfw/hug`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkill': {
axios.get(`https://api.waifu.pics/sfw/kill`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcry': {
axios.get(`https://api.waifu.pics/sfw/cry`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickspank':{
                axios.get(`https://nekos.life/api/v2/img/spank`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticktickle':{
                axios.get(`https://nekos.life/api/v2/img/tickle`)
.then(({data}) => {
Lily.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
			case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await lily.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })

}
//==================《 CONVERT MENU 》======================\\
break
//=================================================//
    case 'remini': {
    if (!m.quoted) return reply("reply image nya")
    if (!/image/.test(mime)) return reply(`Kirim/Balas gambar dengan caption ${prefix + command}`);
    reply(mess.getdata)
    let media = await quoted.download()
    let image = await uploaden(media)
    let proses = await Tools.remini(media, "enhance");
    Lily.sendMessage(m.chat, {
        image: proses,
        caption: mess.success
    }, {
        quoted: m
    })
    }    
break
case 'remini2' : {
    Lily.enhancer = Lily.enhancer || {}

    if (m.sender in Lily.enhancer)
        throw "❗Masih ada proses yang belum selesai. Silakan tunggu."

    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ""
    if (!mime) throw "❗Kirim/Reply foto.";
    if (!/image\/(jpe?g|png)/.test(mime)) throw `❗ Mimetype ${mime} tidak didukung.`

    Lily.enhancer[m.sender] = true
    await Lily.sendMessage(m.chat, { react: { text: "🌀", key: m.key } })

    let img = await q.download?.()
    let enhancedImg = await Upscale(img)

    if (enhancedImg) {
        await Lily.sendMessage(m.chat, { react: { text: "✅", key: m.key } })
        Lily.sendFile(
            m.chat,
            enhancedImg,
            "",
            "Done✅",
            m
        )
    } else {
        await Lily.sendMessage(m.chat, { react: { text: "❌", key: m.key } })
        reply("*Result:* Failed ");
    }

    delete Lily.enhancer[m.sender]
}
break

case 'hd': 
case 'hdr': {
if (!/image/.test(mime)) {
        return reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Gambar Dengan Caption .${command}*`);
    }
    if (!quoted) {
        return reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Gamba Dengan Caption .${command}*`);
    }
    reply('sabar sedang proses..');
    let media = await Lily.downloadAndSaveMediaMessage(quoted);
    let anu = await uploaden(media);
    let gas = await (await fetch(`https://shannz-myapi.hf.space/tools/enhance?imageUrl=${anu}`)).json();
    let final = gas.result.resultImageUrl;
    Lily.sendMessage(m.chat, { image: { url: final }, caption: '*SUCCESS ✅*'}, { quoted: m})
}
break
break
    case 'ssweb':{   
    if(!q) return reply('mana link nya')
    let resultnya = await fetchJson(`https://server.apisanz.my.id/tools/ssweb?text=${q}`)
    await Lily.sendMessage(m.chat, {
        image: { url: resultnya },
        caption: "Done",
    }, { quoted: LilyUp });

} 
break
//=================================================//
case 'tiktok':
case 'tt': {
if (args.length == 0) return reply(`Example: ${prefix + command} Harap Berikan Link Nya`)
let res = await tiktok2(`${text}`)
				Lily.sendMessage(m.chat, { video: { url: res.no_watermark }, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
				
                    Lily.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
			})
}         
break
//=========================================\\
case 'tiktokslide':
case 'ttslide': {
Lily.sendMessage(from, {
		react: {
			text: "🌊",
			key: m.key
		}
	})
  if (!text) return reply(`Contoh: ${prefix + command} link`);
  reply(mess.wait);
      try {
    const dati = await fetchJson(`https://vapis.my.id/api/ttdl?url=${encodeURIComponent(budy)}`);
    for (let img of dati.data.data.url) {
  await Lily.sendMessage(m.chat, { image: { url: img }, caption: data.title }, { quoted: m })
    } 
      } catch (error) {
      console.error(error);
      reply("Terjadi kesalahan saat mendownload");
}
}
break 
case 'tiktok2': case 'tt2': {
 let momok = "`𝗧 𝗜 𝗞 𝗧 𝗢 𝗞 - 𝗗 𝗢 𝗪 𝗡 𝗟 𝗢 𝗔 𝗗`"
if (!text.startsWith("https://")) return reply(example("url"))
const { tiktokDl } = require('../start/lib/scraper/scraper1');
await tiktokDl(q).then(async (result) => {
await Lily.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: Lily.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*TIKTOK - DOWNLOADER*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Lily.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")

await Lily.sendMessage(m.chat,{
			 video: {url:urlVid.url},
					caption: momok,
					footer: `\n${global.botname}`,
					buttons: [
						{
							buttonId: `.ttaudio ${text}`,
							buttonText: {
								displayText: "sᴏᴜɴᴅ 🔊"
							}
						},
					],
					viewOnce: true,
				}, {
					quoted: m
				});
}
}).catch(e => console.log(e))
await Lily.sendMessage(m.chat, {react: {text: '🐬', key: m.key}})
}      
break
/// download
case 'sspotify': {
    if (!text) return reply(`Masukkan judul lagu yang ingin Anda cari, Contoh: ${prefix + command} gala bunga mataharia`);
    
    reply('tunggu sebentar..'); 
    
    try {
        let response = await axios.get(`https://fgsi-spotify.hf.space/query=${encodeURIComponent(text)}`);
        let data = response.data;

        if (!data.status) return reply(`Error: ${data.msg}`);

        let { title, artist, duration, popularity, preview, thumbnail: thumbnailUrl, url } = data.result;
        let audioUrl = data.audio.url;

        const thumbnails = await axios.get(thumbnailUrl, { responseType: 'arraybuffer' });
        const thumbnail = Buffer.from(thumbnails.data, 'binary');

        await Lily.sendMessage(m.chat, {
            image: thumbnail,
            caption: `🎵 *${title}*\n👤 *Artist:* ${artist}\n⏳ *Duration:* ${duration}\n✨ *Rate Song:* ${popularity}\n📌 *Preview:* ${preview || "No preview available"}\n🔗 *Spotify Link:* ${url}`,
        }, { quoted: m });

        await Lily.sendMessage(m.chat, {
            audio: { url: audioUrl },
            mimetype: 'audio/mp4',
            fileName: `${title}.mp3`,
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        reply("Terjadi kesalahan saat mengambil lagu dari spotify.");
    }
}
                case 'spotifdl': {
    if (!text) return reply(`*\`sᴘᴏᴛɪғʏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ\`*\n\n*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ\`*:\n${prefix+ command} Link-nya`);
   let ouh = await fetch(`https://api.siputzx.my.id/api/d/spotify?url=${encodeURIComponent(text)}`)
    let gyh = await ouh.json() 
    let hallo = ` Judul: ${gyh.data.title}\nUrl: ${text}`             
          await Lily.sendMessage(
              m.chat, 
              { audio: { url: gyh.data.download }, mimetype: 'audio/mpeg', ptt: true }, 
              { quoted: m }
          );
                }
break
case "videy":
case "videyvid": {
  if(!text) return reply('Woi Jangan Begitu lah tobat²,btw kalau mau make mana link nya?');
  let anu = `https://vapis.my.id/api/videy?url=${encodeURIComponent(text)}`;
  const res = await fetch(anu);
  const response = await res.json();
  try {
    Lily.sendMessage(m.chat, {
      video: { url: response.data },
      mimeType: 'video/mp4',
      caption: 'Succes Icikbos.'
    }, { quoted: null }) //Ganti Ke m aja :v
  } catch (e) {
    console.log(e);
    reply('Gatot\nGagal Ngentot :v')
  }
}
break
case 'snackvideo':{
 const cheerio = require('cheerio');
if (!text) return reply(`Linknya mana??`)
async function downloadSnackVideo(url) {
 return new Promise(async (resolve, reject) => {
 try {
 const response = await axios.get(url);
 const $ = cheerio.load(response.data);
 let result = {
 metadata: {},
 download: null
 };
 const json = JSON.parse($("#VideoObject").text().trim());
 result.metadata.title = json.name;
 result.metadata.thumbnail = json.thumbnailUrl[0];
 result.metadata.uploaded = new Date(json.uploadDate).toLocaleString();
 result.metadata.comment = json.commentCount;
 result.metadata.watch = json.interactionStatistic[0].userInteractionCount;
 result.metadata.likes = json.interactionStatistic[1].userInteractionCount;
 result.metadata.share = json.interactionStatistic[2].userInteractionCount;
 result.metadata.author = json.creator.mainEntity.name;
 result.download = json.contentUrl;
 resolve(result);
 } catch (error) {
 reject({ msg: error.message });
 }
 });
}
try {
const result = await downloadSnackVideo(text);
let message = `🎥 Nihh hasil download darii SnackVideo kamuu !! 🎉

✨ Judul Video : ${result.metadata.title} ✨
👀 Jumlah Tonton : ${result.metadata.watch} 👀
👤 Darii : ${result.metadata.author} 👤`

Lily.sendMessage(m.chat,{
video : { url : result.download },
caption : message
 })
} catch (err) {
console.error(err);
reply("Error :(")}
}
                case 'pin' :
case 'pinterest': {
const axios = require('axios')
const https = require('https')

const agent = new https.Agent({
 rejectUnauthorized: true,
 maxVersion: 'TLSv1.3',
 minVersion: 'TLSv1.2'
});

async function getCookies() {
 try {
 const response = await axios.get('https://www.pinterest.com/csrf_error/', { httpsAgent: agent });
 const setCookieHeaders = response.headers['set-cookie'];
 if (setCookieHeaders) {
 const cookies = setCookieHeaders.map(cookieString => {
 const cookieParts = cookieString.split(';');
 return cookieParts[0].trim();
 });
 return cookies.join('; ');
 }
 return null;
 } catch {
 return null;
 }
}

async function pinterest(query) {
 try {
 const cookies = await getCookies();
 if (!cookies) return [];

 const url = 'https://www.pinterest.com/resource/BaseSearchResource/get/';
 const params = {
 source_url: `/search/pins/?q=${query}`,
 data: JSON.stringify({
 options: {
 isPrefetch: false,
 query: query,
 scope: "pins",
 no_fetch_context_on_resource: false
 },
 context: {}
 }),
 _: Date.now()
 };

 const headers = {
 'accept': 'application/json, text/javascript, */*, q=0.01',
 'accept-encoding': 'gzip, deflate',
 'accept-language': 'en-US,en;q=0.9',
 'cookie': cookies,
 'dnt': '1',
 'referer': 'https://www.pinterest.com/',
 'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
 'sec-ch-ua-full-version-list': '"Not(A:Brand";v="99.0.0.0", "Microsoft Edge";v="133.0.3065.92", "Chromium";v="133.0.6943.142"',
 'sec-ch-ua-mobile': '?0',
 'sec-ch-ua-model': '""',
 'sec-ch-ua-platform': '"Windows"',
 'sec-ch-ua-platform-version': '"10.0.0"',
 'sec-fetch-dest': 'empty',
 'sec-fetch-mode': 'cors',
 'sec-fetch-site': 'same-origin',
 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
 'x-app-version': 'c056fb7',
 'x-pinterest-appstate': 'active',
 'x-pinterest-pws-handler': 'www/[username]/[slug].js',
 'x-pinterest-source-url': '/hargr003/cat-pictures/',
 'x-requested-with': 'XMLHttpRequest'
 };

 const { data } = await axios.get(url, { httpsAgent: agent, headers, params });
 return data.resource_response.data.results
 .filter(v => v.images?.orig)
 .map(result => ({
 upload_by: result.pinner.username,
 fullname: result.pinner.full_name,
 followers: result.pinner.follower_count,
 caption: result.grid_title,
 image: result.images.orig.url,
 source: "https://id.pinterest.com/pin/" + result.id,
 }));
 } catch {
 return [];
 }
}

 if (!text) return reply(`*Penggunaan:* ${prefix + command} <query> <jumlah>\n\n*Contoh:* ${prefix + command} anime 3`);
 
 let [query, count] = text.split(' ');
 let imgCount = 5;

 if (text.indexOf(' ') !== -1) {
 const lastWord = text.split(' ').pop();
 if (!isNaN(lastWord) && lastWord.trim() !== '') {
 imgCount = parseInt(lastWord);
 query = text.substring(0, text.lastIndexOf(' '));
 } else {
 query = text;
 }
 } else {
 query = text;
 }
 
 reply('Searching Pinterest images...');
 
 try {
 const results = await pinterest(query);
 if (results.length === 0) return reply(`No results found for "${query}". Try another search term.`);
 
 const imagesToSend = Math.min(results.length, imgCount);
 reply(`Sending ${imagesToSend} Pinterest images for "${query}"...`);
 
 for (let i = 0; i < imagesToSend; i++) {
 await Lily.sendMessage(m.chat, { image: { url: results[i].image } });
 }
 } catch {
 reply('Error occurred while fetching Pinterest images. Please try again later.');
 }
}
        break
case 'instagram':
case 'ig': {
        if (!text) return reply(example(`https://www.instagram.com/reel/DB8BGCZRKAh/?igsh=eDk1ajRncDV6Mjdh`))
    
        let memek = await igdl(text);
    
        let respon = memek.data;
        if (respon && respon.length > 0) {
        
            let uniqueUrls = new Set(respon.map(item => item.url));
            try {
                for (let mediaUrl of uniqueUrls) {
                    const headResponse = await axios.head(mediaUrl);
                    const mimeType = headResponse.headers['content-type'];

                    const isImage = /image\/.*/.test(mimeType);
                    const isVideo = /video\/.*/.test(mimeType);

                    if (isImage) {
                        await Lily.sendMessage(m.chat, {
                            image: { url: mediaUrl },
                            caption: "berhasil mendownload gambar dari URL."
                        }, { quoted: m });
                    } else if (isVideo || mimeType === 'application/octet-stream') {
                        await Lily.sendMessage(m.chat, {
                            video: { url: mediaUrl },
                            caption: `*\`ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ʙʏ ʟɪʟʏ ɢᴇɴᴇʀᴀᴛɪᴏɴ\`*`
                  
                        }, { quoted: m });
                    } else {
                        await Lily.sendMessage(m.chat, {
                            text: `tipe media tidak didukung: ${mimeType}`
                        }, { quoted: m });
                    }
                }
            } catch (error) {
                console.error('Error fetching media type:', error);
                reply(error)
            }
        } else {
            await Lily.sendMessage(m.chat, {
                text: "Tidak ditemukan media atau terjadi kesalahan saat mengambil media."
            }, { quoted: m });
        }
    }
        break;
case "ytmp3": {
  if (!q.includes("youtube.com") && !q.includes("youtu.be")) return reply("Masukin Link YouTube Yang Valid!");
  let [link, quality] = q.split(",");
  let qualityOptions = ["64kbps", "128kbps", "192kbps", "256kbps", "320kbps"];
  if (!quality) {
    let qualityList = qualityOptions.map(q => `▫️ ${q}`).join("\n");
    return reply(`🔊 *Pilih Kualitas Audio:*\n\n${qualityList}\n\nContoh: *ytmp3 ${link},128kbps*`);
  }
  if (!qualityOptions.includes(quality)) return reply(`⚠️ *Kualitas Tidak Valid!*\n\nPilih Salah Satu:\n${qualityOptions.map(q => `▫️ ${q}`).join("\n")}`);
  let apiUrl = `https://fastrestapis.fasturl.cloud/downup/ytmp3?url=${encodeURIComponent(link)}&quality=${quality}&server=auto`;
  reply("Tunggu Sebentar, Lagi Proses Download...");
  try {
    let res = await fetch(apiUrl);
    let data = await res.json();
    if (data.status !== 200) return reply("Gagal Mengambil Audio!");
    let { title, metadata, author, url, media } = data.result;
    let cap = `🎵 *Judul:* ${title}\n📌 *Durasi:* ${metadata.duration}\n👤 *Channel:* ${author.name}\n📆 *Upload:* ${metadata.uploadDate}\n🎶 *Kualitas:* ${quality}\n🔗 *Link:* ${url}`;
    await Lily.sendMessage(m.sender, {
      audio: { url: media },
      mimetype: "audio/mp4",
      fileName: `${title}.mp3`
    }, { quoted: m });
    await Lily.sendMessage(m.sender, { text: cap });
    reply("✅ *Berhasil, Cek PM!*");
  } catch (e) {
    console.error(e);
    reply("Terjadi Kesalahan, Coba Lagi Nanti!");
  }
}
break;

case "ytmp4": {
  if (!q.includes("youtube.com") && !q.includes("youtu.be")) return reply("Masukin Link YouTube Yang Valid!");
  let [link, quality] = q.split(",");
  let qualityOptions = ["144p", "240p", "360p", "480p", "720p", "1080p"];
  if (!quality) {
    let qualityList = qualityOptions.map(q => `▫️ ${q}`).join("\n");
    return reply(`📺 *Pilih Kualitas Video:*\n\n${qualityList}\n\nContoh: *ytmp4 ${link},360p*`);
  }
  if (!qualityOptions.includes(quality)) return reply(`⚠️ *Kualitas Tidak Valid!*\n\nPilih Salah Satu:\n${qualityOptions.map(q => `▫️ ${q}`).join("\n")}`);
  let apiUrl = `https://fastrestapis.fasturl.cloud/downup/ytmp4?url=${encodeURIComponent(link)}&quality=${quality}&server=auto`;
  reply("Tunggu Sebentar, Lagi Proses Download...");
  try {
    let res = await fetch(apiUrl);
    let data = await res.json();
    if (data.status !== 200) return reply("Gagal Mengambil Video!");
    let { title, metadata, author, url, media } = data.result;
    let cap = `📹 *Judul:* ${title}\n📌 *Durasi:* ${metadata.duration}\n👤 *Channel:* ${author.name}\n📆 *Upload:* ${metadata.uploadDate}\n🎞 *Kualitas:* ${quality}\n🔗 *Link:* ${url}`;
    await Lily.sendMessage(m.sender, {
      video: { url: media },
      mimetype: "video/mp4",
      fileName: `${title}.mp4`
    }, { quoted: m });
    await Lily.sendMessage(m.sender, { text: cap });
    reply("✅ *Berhasil, Cek PM!*");
  } catch (e) {
    console.error(e);
    reply("Terjadi Kesalahan, Coba Lagi Nanti!");
  }
}

        break;
case "play":
            case "ply":
            case "pl": {
                if (!text) return reply("Enter Title / Link From YouTube!");
                reply(mess.wait);
                let anu = `https://api.diioffc.web.id/api/search/ytplay?query=${encodeURIComponent(text)}`;
                const fetch = require('node-fetch');
                const res = await fetch(anu);
                const response = await res.json();
                let url = `${response.result.url}`
                let teks = `- Title: ${response.result.title}\n\n- Description: ${response.result.description}`
                try {
                    Lily.sendMessage(m.chat, {
                        image: { url: response.result.thumbnail },
                        caption: teks,
                        footer: "Ytdl",
                        buttons: [
                            {
                                buttonId: `.ytmp4 ${url},720p`,
                                buttonText: {
                                    displayText: 'Video | Mp4'
                                },
                                type: 1
                            },
                            {
                                buttonId: `.ytmp3 ${url},128kbps`,
                                buttonText: {
                                    displayText: 'Audio | Mp3'
                                },
                                type: 1
                            },
                        ],
                        headerType: 1,
                        viewOnce: true
                    }, { quoted: m })
                } catch (e) {
                    console.log(e);
                    reply("Error", e)
                }
            }
break
case 'ytplay3':
case 'youtubeplay': {
  const axios = require('axios');
  if (!text) return reply(`Contoh penggunaan:
• yt search lofi
• yt channel lofi girl
• yt latest lofi girl
• yt stat https://youtube.com/watch?v=abc123`);

  const subcmd = text.split(' ')[0].toLowerCase();
  const query = text.replace(subcmd, '').trim();
  const apikey = 'AIzaSyC5av7BkLRp9gfPsaHF1RL74k5bBoqwk_Q';

  if (!['search', 'channel', 'latest', 'stat'].includes(subcmd))
    return reply('Subfitur tidak dikenal. Gunakan salah satu: search, channel, latest, stat');

  try {
    if (subcmd === 'search') {
      if (!query) return reply('Contoh: yt search lofi chill');
      const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: 'snippet',
          q: query,
          key: apikey,
          type: 'video',
          maxResults: 30 // lu atur aj bebas
        }
      });

      if (!data.items.length) return reply('Video tidak ditemukan.');
      let teks = '*Hasil Pencarian YouTube:*\n\n';
      data.items.forEach(v => {
        teks += `• *${v.snippet.title}*\n`;
        teks += `  Channel: ${v.snippet.channelTitle}\n`;
        teks += `  Link: https://youtube.com/watch?v=${v.id.videoId}\n\n`;
      });
      return reply(teks);
    }

    if (subcmd === 'channel') {
      if (!query) return reply('Contoh: yt channel lofi girl');
      const search = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: 'snippet',
          q: query,
          type: 'channel',
          key: apikey
        }
      });

      const ch = search.data.items[0];
      if (!ch) return reply('Channel tidak ditemukan.');
      const channelId = ch.id.channelId;
      const detail = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
        params: {
          part: 'snippet,statistics,brandingSettings',
          id: channelId,
          key: apikey
        }
      });

      const info = detail.data.items[0];
      if (!info) return reply('Gagal mengambil detail channel.');
      const bannerUrl = info.brandingSettings?.image?.bannerExternalUrl;
      const cap = `*Channel Info:*
• *Nama:* ${info.snippet.title}
• *Subscriber:* ${info.statistics.subscriberCount}
• *Views:* ${info.statistics.viewCount}
• *Total Video:* ${info.statistics.videoCount}
• *Dibuat:* ${new Date(info.snippet.publishedAt).toLocaleDateString()}
• *Lokasi:* ${info.snippet.country || 'Tidak diketahui'}
• *Link:* https://youtube.com/channel/${channelId}

*Deskripsi:*\n${info.snippet.description?.slice(0, 500) || 'Tidak ada deskripsi.'}`;

      await Lily.sendMessage(m.chat, {
        image: { url: info.snippet.thumbnails.high.url },
        caption: cap
      }, { quoted: m });

      if (bannerUrl) await Lily.sendMessage(m.chat, {
        image: { url: bannerUrl },
        caption: 'Banner Channel'
      }, { quoted: m });
      return;
    }

    if (subcmd === 'latest') {
      if (!query) return reply('Contoh: yt latest lofi girl');
      const search = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: 'snippet',
          q: query,
          type: 'channel',
          key: apikey
        }
      });

      const ch = search.data.items[0];
      if (!ch) return reply('Channel tidak ditemukan.');
      const channelId = ch.id.channelId;
      const latest = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          key: apikey,
          channelId,
          part: 'snippet,id',
          order: 'date',
          maxResults: 1
        }
      });

      const vid = latest.data.items[0];
      if (!vid) return reply('Video terbaru tidak ditemukan.');
      const caption = `*Video Terbaru dari ${vid.snippet.channelTitle}:*
• *Judul:* ${vid.snippet.title}
• *Link:* https://youtube.com/watch?v=${vid.id.videoId}`;

      return Lily.sendMessage(m.chat, {
        image: { url: vid.snippet.thumbnails.high.url },
        caption
      }, { quoted: m });
    }

    if (subcmd === 'stat') {
      if (!query.includes('youtube.com/watch')) return reply('Contoh: yt stat https://youtube.com/watch?v=abc123');
      const videoId = new URL(query).searchParams.get('v');
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
        params: {
          part: 'snippet,statistics,status,contentDetails',
          id: videoId,
          key: apikey
        }
      });

      const video = res.data.items[0];
      if (!video) return reply('Video tidak ditemukan.');
      const cap = `*Statistik Video:*
• *Judul:* ${video.snippet.title}
• *Channel:* ${video.snippet.channelTitle}
• *Tayang:* ${new Date(video.snippet.publishedAt).toLocaleDateString()}
• *Views:* ${video.statistics.viewCount}
• *Likes:* ${video.statistics.likeCount}
• *Komentar:* ${video.statistics.commentCount}
• *Kategori ID:* ${video.snippet.categoryId}
• *Status:* ${video.status.privacyStatus}
• *Lisensi:* ${video.status.license}
• *Tags:* ${video.snippet.tags?.slice(0, 5).join(', ') || 'Tidak ada tag'}
• *Link:* https://youtube.com/watch?v=${videoId}

*Deskripsi:* 
${video.snippet.description?.slice(0, 1000) || 'Tidak ada deskripsi.'}`;
      return reply(cap);
    }
  } catch (err) {
    console.error(err);
    return reply('Gagal mengambil data dari YouTube. Coba lagi nanti.');
  }
}
        break
case "youtubsearch": case "yts": {
if (!text) throw `Example : ${prefix + command} story wa anime`
const yts = require('yts')
let searchh = await yts(text)
await loading()
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of searchh.all) {
teks += `•° No : ${no++}\n•° Type : ${i.type}\n•° Video ID : ${i.videoId}\n•° Title : ${i.title}\n•° Views : ${i.views}\n•° Duration : ${i.timestamp}\n•° Upload At : ${i.ago}\n•° Url : ${i.url}\n\n─────────────────\n\n`
}
Lily.sendMessage(m.chat, { image: { url: searchh.all[0].thumbnail },  caption: teks }, { quoted: m })
}
        break 
    case 'film': {
    if (!text) throw 'Masukan query'

    reply(mess.wait)
    
    let { result } = await film(text)
    let cap = `\`Search Film From: ${text}\`\n\n`
    for (let res of result) {
        cap += `*Title*: ${res.title}\n`
        cap += `*Link*: ${res.link}\n`
        cap += `*Genre*: ${res.relTag.map(v => v).join(', ')}\n\n`
    }
    reply(cap)
    }
    /* 
• Case Ghibli Style
• Plugins: https://whatsapp.com/channel/0029VakezCJDp2Q68C61RH2C/2818 ( ESM ) 
• Source Scrape: https://whatsapp.com/channel/0029Vb5EZCjIiRotHCI1213L
• Preview: https://files.catbox.moe/kvc5di.jpg
*/
break
case 'ghibli': {

  const ghibliGenerator = {
    api: {
      base: 'https://ghibli-image-generator.com',
      imageBase: 'https://imgs.ghibli-image-generator.com',
      endpoints: {
        signed: '/api/trpc/uploads.signedUploadUrl?batch=1',
        create: '/api/trpc/ai.create4oImage?batch=1',
        task: '/api/trpc/ai.getTaskInfo?batch=1'
      }
    },

    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'origin': 'https://ghibli-image-generator.com',
      'referer': 'https://ghibli-image-generator.com/',
      'user-agent': 'Postify/1.0.0'
    },

    axiosInstance: axios.create({
      timeout: 30000,
      validateStatus: s => s >= 200 && s < 300
    }),

    isImage: (input) => {
      if (!input || input.trim === '') return { valid: false, error: "Input kosong" };
      if (typeof input === 'string' && /^https?:\/\//.test(input)) return { valid: true, isUrl: true };
      if (Buffer.isBuffer(input)) return { valid: true, isUrl: false };
      return { valid: false, error: "Input tidak valid" };
    },

    getImage: async (url) => {
      try {
        const res = await axios.get(url, { responseType: 'arraybuffer' });
        const ext = url.split('.').pop().toLowerCase().split("?")[0];
        return { buffer: Buffer.from(res.data), ext };
      } catch { return { buffer: null }; }
    },

    upload: async (buffer, ext) => {
      const filename = `original/${CryptoJS.SHA256(buffer).toString()}_${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;
      const uploadUrl = await ghibliGenerator.axiosInstance.post(
        ghibliGenerator.api.base + ghibliGenerator.api.endpoints.signed,
        { "0": { "json": { path: filename, bucket: "ghibli-image-generator" } } },
        { headers: ghibliGenerator.headers }
      ).then(r => r.data[0]?.result?.data?.json).catch(() => null);

      if (!uploadUrl) return null;

      await axios.put(uploadUrl, buffer, { headers: { 'Content-Type': `image/${ext}` } });
      return `${ghibliGenerator.api.imageBase}/${filename}`;
    },

    createTask: async (url, size = "1:1", prompt = "restyle image in studio ghibli style, keep all details") => {
      const res = await ghibliGenerator.axiosInstance.post(
        ghibliGenerator.api.base + ghibliGenerator.api.endpoints.create,
        {
          "0": {
            "json": {
              imageUrl: url,
              prompt,
              size
            }
          }
        },
        { headers: ghibliGenerator.headers }
      );
      return res.data[0]?.result?.data?.json?.data?.taskId || null;
    },

    waitTask: async (taskId) => {
      for (let i = 0; i < 30; i++) {
        const res = await ghibliGenerator.axiosInstance.get(
          ghibliGenerator.api.base + ghibliGenerator.api.endpoints.task,
          {
            params: {
              input: JSON.stringify({ "0": { "json": { taskId } } })
            },
            headers: ghibliGenerator.headers
          }
        );

        const data = res.data[0]?.result?.data?.json?.data;
        if (data.status === 'SUCCESS') return data.response.resultUrls[0];
        if (['FAILED', 'GENERATE_FAILED'].includes(data.status)) break;
        await new Promise(r => setTimeout(r, 5000));
      }
      return null;
    },

    generate: async (input, size) => {
      const check = ghibliGenerator.isImage(input);
      if (!check.valid) return { ok: false, msg: check.error };

      let buffer, ext = 'jpg';
      if (check.isUrl) {
        const res = await ghibliGenerator.getImage(input);
        if (!res.buffer) return { ok: false, msg: "Gagal unduh gambar" };
        buffer = res.buffer;
        ext = res.ext || 'jpg';
      } else {
        buffer = input;
      }

      const imageUrl = await ghibliGenerator.upload(buffer, ext);
      if (!imageUrl) return { ok: false, msg: "Gagal upload gambar" };

      const taskId = await ghibliGenerator.createTask(imageUrl, size);
      if (!taskId) return { ok: false, msg: "Gagal buat tugas generate" };

      const finalUrl = await ghibliGenerator.waitTask(taskId);
      if (!finalUrl) return { ok: false, msg: "Gagal menghasilkan gambar" };

      return { ok: true, url: finalUrl };
    }
  };

  let input = text;
  if (!text && m.quoted && /image/.test(m.quoted.mimetype)) {
    input = await m.quoted.download();
  }

  if (!input) {
    return Lily.sendMessage(m.chat, {
      text: `Kirim gambar atau URL gambar untuk diubah ke gaya Ghibli!\n\nContoh: https://example.com/image.jpg`
    }, { quoted: m });
  }

  const size = /1:1|2:3|3:2/.exec(text)?.[0] || "1:1";

  await Lily.sendMessage(m.chat, {
    text: '⏳ Sedang memproses gambar ke gaya Studio Ghibli...'
  }, { quoted: m });

  const result = await ghibliGenerator.generate(input, size);
  if (!result.ok) {
    return Lily.sendMessage(m.chat, {
      text: `❌ Gagal:\n${result.msg}`
    }, { quoted: m });
  }

  await Lily.sendMessage(m.chat, {
    image: { url: result.url },
    caption: '✨ Ini hasil versi Ghibli kamu.'
  }, { quoted: m });

}
break
case 'toanime': 
case 'jadianime': {
if (!/image/.test(mime)) {
        return reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Gambar Dengan Caption .${command}*`);
    }
    if (!quoted) {
        return reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Gamba Dengan Caption .${command}*`);
    }
    reply('sabar sedang proses..');
    let media = await Lily.downloadAndSaveMediaMessage(quoted);
    let anu = await uploaden(media);
    let gas = await (await fetch(`https://shannz-myapi.hf.space/ai/aiease?imageUrl=${anu}&models=Japan+Anime`)).json();
    let final = gas.result.image;
    Lily.sendMessage(m.chat, { image: { url: final }, caption: '*SUCCESS ✅*'}, { quoted: m})
}
break
case 'tobadut': {
if (!/image/.test(mime)) {
        return reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Gambar Dengan Caption .${command}*`);
    }
    if (!quoted) {
        return reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Gamba Dengan Caption .${command}*`);
    }
    reply('sabar sedang proses..');
    let media = await Lily.downloadAndSaveMediaMessage(quoted);
    let anu = await uploaden(media);
    let gas = await (await fetch(`https://shannz-myapi.hf.space/ai/aiease?imageUrl=${anu}&models=Clown`)).json();
    let final = gas.result.image;
    Lily.sendMessage(m.chat, { image: { url: final }, caption: '*SUCCESS ✅*'}, { quoted: m})
}
break
case 'toanime3':
case '3d-cartoon': {
if (!/image/.test(mime)) {
        return reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Gambar Dengan Caption .${command}*`);
    }
    if (!quoted) {
        return reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Gamba Dengan Caption .${command}*`);
    }
    reply('sabar sedang proses..');
    let media = await Lily.downloadAndSaveMediaMessage(quoted);
    let anu = await uploaden(media);
    let gas = await (await fetch(`https://shannz-myapi.hf.space/ai/aiease?imageUrl=${anu}&models=3D+Cartoon+1`)).json();
    let final = gas.result.image;
    Lily.sendMessage(m.chat, { image: { url: final }, caption: '*SUCCESS ✅*'}, { quoted: m})
}
break
case 'toanime2': case 'jadianime2': {
if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
try {
Lily.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
const media = await Lily.downloadAndSaveMediaMessage(quoted)
const anuu = await UploadFileUgu(media)
Lily.sendMessage(m.chat, { image: { url: `https://api.hiuraa.my.id/tools/img2anime?imageUrl=${anuu.url}` }, caption: 'Selesai'}, { quoted: m})
	} catch {
	  reply('yah Error kak laporankan ke owner agar di perbaiki')
	}
}
        break
      case 'git': case 'gitclone':{
if (!args[0]) return reply(`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ *\`ʜɪʟʟᴀʀʏʏᴏᴜʀs\`*:\n${prefix}${command} ɢɪᴛʜᴜʙ:ғᴀʟʟᴇᴢᴢ/ʙᴀɪʟᴇʏs`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Lily.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: LilyUp }).catch((err) =>(err))
}
//==================《 EXIT DOWNLOADER 》======================\\
break 
            case "play2":{
                if (!text) return reply(`\n*ex:* ${prefix + command} impossible\n`)
                await reaction(m.chat, '⚡')
                let mbut = await fetchJson(`https://api.siputzx.my.id/api/d/ytmp3?url=${text}`)
                let ahh = mbut.data.title
                let crot = mbut.data.dl

                Lily.sendMessage(m.chat, {
                    audio: { url: crot },
                    mimetype: "audio/mpeg", 
                    ptt: true
                }, { quoted:m })
            }
            break
                //// BETA
            case "public":{
                if (!Access) return reply(mess.owner) 
                Lily.public = true
                reply(`successfully changed to ${command}`)
            }
 //==================《 STORE 》======================\\               
            break
            case 'done': {

    let t = text.split(',');

    if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal,sistem`);
    
    let barang = t[0];
    let nominal = t[1];
    let sistem = t[2];
    
    reply(`╔════════════════════╗
     *TRANSAKSI BERHASIL*  
          BY *${global.nama}*
╚════════════════════╝

📦 *Barang:* ${barang}  
💵 *Nominal:* Rp${nominal}  
🔧 *Sistem:* ${sistem}  
🏢 *Nama Store:* ${global.owner}

━━━━━━━━━━━━

🙏 *TERIMA KASIH TELAH ORDER DI ${global.nama}*  
🔁 *JANGAN LUPA ORDER LAGI YA!*  


*🪷TESTIMONI SALURAN :* ${global.ch}

━━━━━━━━━━━━`);
}
break;
case "cekidgc": {

    // Cek jika pengguna adalah Creator

    if (!isCreator) return reply("Fitur ini hanya bisa digunakan oleh Creator bot!");

    try {
        let getGroups = await Lily.groupFetchAllParticipating();
        let groups = Object.entries(getGroups).map((entry) => entry[1]);
        let anu = groups.map((v) => v.id);

        let teks = `⬣ *LIST GROUP BY Fixenzo*\n\nTotal Group: ${anu.length} Group\n\n`;

        for (let x of anu) {
            try {
                let metadata2 = await Lily.groupMetadata(x);
                teks += `◉ Nama: ${metadata2.subject}\n◉ ID: ${metadata2.id}\n◉ Member: ${metadata2.participants.length}\n\n────────────────────────\n\n`;
            } catch (e) {
                teks += `◉ [Gagal mengambil data group ID: ${x}]\n\n`;
            }
        }

        reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`);
    } catch (error) {
        console.error(error);
        reply("Terjadi kesalahan saat mengambil data group. Silahkan coba lagi nanti.");
    }
}
break;
            case 'pushkontak': {

    if (!isGroup) return reply('Fitur ini hanya dapat digunakan di grup.');

    if (!isCreator) return reply('Hanya owner yang dapat menggunakan fitur ini.');

    const groupMetadata = await Lily.groupMetadata(from);
    const participants = groupMetadata.participants;

    if (!text) return reply('Silakan masukkan pesan yang ingin dikirim.');

    const pesan = text.trim(); 
    let success = 0;
    let failed = 0;

    for (let member of participants) {
        const memberId = member.id; 
        try {
            // Kirim pesan ke anggota grup
            await Lily.sendMessage(memberId, { text: pesan });
            console.log(`Pesan berhasil dikirim ke: ${memberId}`);
            success++;
        } catch (error) {
            console.error(`Gagal mengirim pesan ke: ${memberId}`, error);
            failed++;
        }
        await sleep(1000); // Delay 1 detik 
    }

    reply(`Push pesan selesai.\nBerhasil: ${success}\nGagal: ${failed}`);
    break;
}
case 'pushkontakid': {

    if (!isCreator) return reply('Fitur ini hanya dapat digunakan oleh owner.');


    const args = text.split('|');
    if (args.length < 2) return reply(`Gunakan format:\n${prefix}pushkontakid <id_grup>|<pesan>\n\nContoh:\n${prefix}pushkontakid 1234567890-123456789@g.us|Woi Jawir`);

    const groupId = args[0].trim(); 
    const pesan = args[1].trim(); 
    try {
        const groupMetadata = await Lily.groupMetadata(groupId);
        const participants = groupMetadata.participants;

        let success = 0;
        let failed = 0;

        for (let member of participants) {
            const memberId = member.id; 
            try {
                await Lily.sendMessage(memberId, { text: pesan });
                console.log(`Pesan berhasil dikirim ke: ${memberId}`);
                success++;
            } catch (error) {
                console.error(`Gagal mengirim pesan ke: ${memberId}`, error);
                failed++;
            }
            await sleep(1000); // Delay 1 detik
        }

        reply(`Push pesan selesai.\nBerhasil: ${success}\nGagal: ${failed}`);
    } catch (error) {
        console.error(error);
        reply('Gagal mendapatkan metadata grup. Pastikan ID grup benar dan bot ada di dalam grup tersebut.');
    }
    break;
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "welcome": {
if (!m.isGroup) return reply(mess.group)
if (!isCreator) return reply(mess.owner)
if (!text) return reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].welcome == true) return reply(`*Welcome* di grup ini sudah aktif!`)
global.db.groups[m.chat].welcome = true
return reply("Berhasil menyalakan *welcome* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].welcome == false) return reply(`*Welcome* di grup ini tidak aktif!`)
global.db.groups[m.chat].welcome = false
return reply("Berhasil mematikan *welcome* di grup ini")
} else return reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink": {
if (!m.isGroup) return reply(mess.group)
if (!isCreator) return reply(mess.owner)
if (!text) return reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink == true) return reply(`*Antilink* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink2 == true) global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink = true
return reply("Berhasil menyalakan *antilink* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink == false) return reply(`*Antilink* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink = false
return reply("Berhasil mematikan *antilink* di grup ini")
} else return reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink2": {
if (!m.isGroup) return reply(mess.group)
if (!isCreator) return reply(mess.owner)
if (!text) return reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink2 == true) return reply(`*Antilink2* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink == true) global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = true
return reply("Berhasil menyalakan *antilink2* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink2 == false) return reply(`*Antilink2* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink2 = false
return reply("Berhasil mematikan *antilink2* di grup ini")
} else return reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "mute": {
if (!m.isGroup) return reply(mess.group)
if (!isCreator) return reply(mess.owner)
if (!text) return reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].mute == true) return reply(`*Mute* di grup ini sudah aktif!`)
global.db.groups[m.chat].mute = true
return reply("Berhasil menyalakan *mute* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].mute == false) return reply(`*Mute* di grup ini tidak aktif!`)
global.db.groups[m.chat].mute = false
return reply("Berhasil mematikan *mute* di grup ini")
} else return reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "blacklist": case "blacklistjpm": case "blgc": {
if (!m.isGroup) return reply(mess.group)
if (!isCreator) return reply(mess.owner)
if (!text) return reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].blacklistjpm == true) return reply(`*Blacklistjpm* di grup ini sudah aktif!`)
global.db.groups[m.chat].blacklistjpm = true
return reply("Berhasil menyalakan *blacklistjpm* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].blacklistjpm == false) return reply(`*Blacklistjpm* di grup ini tidak aktif!`)
global.db.groups[m.chat].blacklistjpm = false
return reply("Berhasil mematikan *blacklistjpm* di grup ini")
} else return reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return reply(mess.group)
if (!m.isBotAdmin) return reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await Lily.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await Lily.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "kudetagc": case "kudeta": {
if (!isCreator) return reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return reply("Grup Ini Sudah Tidak Ada Member!")
await reply("Kudeta Grup By Luxz Starting 🔥")
for (let i of memberFilter) {
await Lily.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
            break
            case "self":{
                if (!Access) return reply(mess.owner) 
                Lily.public = false
                reply(`successfully changed to ${command}`)
            }
            break
                
            case 'tagall':{
                if (!isAdmins) return reply(mess.admin);
                if (!m.isGroup) return reply(mess.group);
                
                const textMessage = args.join(" ") || "nothing";
                let teks = `tagall message :\n> *${textMessage}*\n\n`;

                const groupMetadata = await Lily.groupMetadata(m.chat);
                const participants = groupMetadata.participants;

                for (let mem of participants) {
                    teks += `@${mem.id.split("@")[0]}\n`;
                }

                Lily.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map((a) => a.id)
                }, { quoted: m });
            }
            break         
            
            case "h":
            case "hidetag": {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !Access) return reply(mess.admin)
                if (m.quoted) {
                    Lily.sendMessage(m.chat, {
                        forward: m.quoted.fakeObj,
                        mentions: participants.map(a => a.id)
                    })
                }
                if (!m.quoted) {
                    Lily.sendMessage(m.chat, {
                        text: q ? q : '',
                        mentions: participants.map(a => a.id)
                    }, { quoted: m })
                }
            }
            break
              
            case "jadibot": {
                await reaction(m.chat, '✅')
                try {
                    await jadibot(Lily, m, m.sender)
                } catch (error) {
                    await reply(util.format(error), command)
                }
            }
            break
                
            case "stopjadibot": {
                await reaction(m.chat, '✅')
                if (m.key.fromMe) return
                try {
                    await stopjadibot(Lily, m, m.sender)
                } catch (error) {
                    await reply(util.format(error), command)
                }
            }
            break
			
            case "listjadibot": {
                if (m.key.fromMe) return
                try {
                    listjadibot(Lily, m)
                } catch (error) {
                    await reply(util.format(error), command)
                }
            }
            break           
                
            default:
              if (!m.fromMe & !m.isGroup) {
              let user = global.db.data.users[m.sender];
              const cooldown = 21600000;
              if (new Date() - user.pc < cooldown) return; // every 6 hours
              let caption = `ʜᴀʟᴏ @${m.sender.split('@')[0]} ${waktuucapan}, ᴀᴅᴀ ᴀᴘᴀ ᴄʜᴀᴛ *\`ʜɪʟʟᴀʀʏʏᴏᴜʀs\`*, Jɪᴋᴀ ᴘᴇɴᴛɪɴɢ ᴛɪɴɢɢᴀʟᴋᴀɴ ᴄʜᴀᴛ ᴅᴀɴ *\`ʜɪʟʟᴀʀʏʏᴏᴜʀs\`* ᴀᴋᴀɴ ᴍᴇᴍʙᴀʟᴀꜱ ꜱᴇᴄᴇᴘᴀᴛ ᴍᴜɴɢᴋɪɴ.`.trim();
              Lily.sendMessage(m.chat,{text:caption,mentions:[m.sender]},{quoted:LilyUp})
              user.pc = new Date() * 1;
              }
              
              Lily.autosholat = Lily.autosholat ? Lily.autosholat : {}
		let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? Lily.user.jid : m.sender
		let id = m.chat
		if (!(id in Lily.autosholat)) {
			let jadwalSholat = {
				Fajr: "04:34",
				Dhuhr: "12:03",
				Asr: "15:15",
				Maghrib: "18:12",
				Isha: "19:23",
			}
			const date = new Date((new Date).toLocaleString("en-US", {
				timeZone: "Asia/Jakarta"
			}));
			const hours = date.getHours();
			const minutes = date.getMinutes();
			const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
			for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
				if (timeNow === waktu) {
					if (sholat === "Fajr") {
						thumbislam = "https://telegra.ph/file/b666be3c20c68d9bd0139.jpg"
					} else if (sholat === "Dhuhr") {
						thumbislam = "https://telegra.ph/file/5295095dad53783b9cd64.jpg"
					} else if (sholat === "Asr") {
						thumbislam = "https://telegra.ph/file/c0e1948ad75a2cba22845.jpg"
					} else if (sholat === "Maghrib") {
						thumbislam = "https://telegra.ph/file/0082ad9c0e924323e08a6.jpg"
					} else if (sholat === "Isha") {
						thumbislam = "https://telegra.ph/file/fd141833a983afa0a8412.jpg"
					} else {
						thumbislam = "https://telegra.ph/file/687fd664f674e90ae1079.jpg"
					}
					Lily.autosholat[id] = [
						Lily.sendMessage(m.chat, {
							audio: {
								url: "https://www.vreden.web.id/database/islamic/y2mate.com%20-%20Adzan%20Merdu%20Irama%20Jiharkah%20%20menyejukkan%20hati%20.mp3"
							},
							mimetype: 'audio/mpeg',
							contextInfo: {
								externalAdReply: {
									title: `Waktu ${sholat} telah tiba, ambilah air wudhu dan segeralah shalat🙂`,
									body: "untuk wilayah Subang dan sekitarnya",
									mediaType: 1,
									previewType: 0,
									renderLargerThumbnail: true,
									thumbnailUrl: thumbislam,
									sourceUrl: "-"
								}
							}
						}, {
							quoted: m
						}),
						setTimeout(() => {
							delete Lily.autosholat[id]
						}, 57000)
					]
				}
			}
		}
                
                Lily.Hillaryours = Lily.Hillaryours ? Lily.Hillaryours : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!Lily.Hillaryours[sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (Lily.Hillaryours[sender] && m.text) {
        let name = Lily.getName(sender);
        //await RuzXD.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

        const prompt = `mulai dari sekarang nama anda adalah Lily, anda adalah seorang kecerdasan buatan yang di buat oleh FallZx-Infinty-Tzy 😆. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang-orang baru, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu.`;
        const apiUrl = `https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(prompt)}&content=${encodeURIComponent(m.text)}`;

        try {
            const response = await axios.get(apiUrl, {
                headers: { 'accept': 'application/json' }
            });

            const responseData = response.data;
            const answer = response.data;
            //await RuzXD.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
            m.reply(answer);
            Lily.Hillaryours[sender].messages = [
                { role: "system", content: `Halo, saya *\`ʜɪʟʟᴀʀʏʏᴏᴜʀs\`* , dikembangkan oleh *\`ғᴀʟʟᴢx ɪɴғɪɴɪᴛʏ\`* Anda sedang berbicara dengan ${name}` },
                { role: "user", content: m.text }
            ];
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
        }
    }
                if (budy.startsWith('$')) {
                    if (!Access) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout);
                    });
                }
                
                if (budy.startsWith('>')) {
                    if (!Access) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await reply(evaled);
                    } catch (err) {
                        reply(String(err));
                    }
                }
        
                if (budy.startsWith('<')) {
                    if (!Access) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await reply(require('util').format(teks))
                    }
                }
        
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
