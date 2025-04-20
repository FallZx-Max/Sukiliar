/**
 * github: https://github.com/kiuur
 * youtube: https://youtube.com/@kyuurzy
 * note: disini ada error dikit di bagian connection.update, kalian aja yang fix, aku nanti jelaa
*/
  
console.clear();
console.log('starting...');
require('./settings/config');

const { 
    default: makeWASocket, 
    prepareWAMessageMedia, 
    useMultiFileAuthState, 
    DisconnectReason, 
    fetchLatestBaileysVersion, 
    makeInMemoryStore, 
    generateWAMessageFromContent, 
    generateWAMessageContent, 
    generateWAMessage,
    jidDecode, 
    proto, 
    delay,
    relayWAMessage, 
    getContentType, 
    getAggregateVotesInPollMessage, 
    downloadContentFromMessage, 
    fetchLatestWaWebVersion, 
    InteractiveMessage, 
    makeCacheableSignalKeyStore, 
    Browsers, 
    generateForwardMessageContent, 
    MessageRetryMap 
} = require("@fizzxydev/baileys-pro");

const pino = require('pino');
const FileType = require('file-type');
const fs = require('fs');
const readline = require("readline");
const { watchFile, unwatchFile } = require('fs');
const crypto = require("crypto")
const chalk = require('chalk')
const path = require("path")
const yargs = require('yargs')
const { createServer } = require('http');
const express = require('express');
const NodeCache = require('node-cache');
const PhoneNumber = require('awesome-phonenumber')
const {
    Boom 
} = require('@hapi/boom');

const { 
    color 
} = require('./start/lib/color');
const { TelegraPh } = require('./start/lib/uploader')
const {
    smsg,
    sleep,
    getBuffer
} = require('./start/lib/myfunction');

const { 
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
    addExif
} = require('./start/lib/exif')

let app = express();
let server = createServer(app);
let PORT = process.env.PORT || process.env.SERVER_PORT || 3000;
const DataBase = require('./src/databases');
const packageInfo = require('./package.json');
const database = new DataBase(global.tempatDB);
const msgRetryCounterCache = new NodeCache();
const groupCache = new NodeCache({ stdTTL: 5 * 60, useClones: false });

app.get('/', (req, res) => {
	if (process.send) {
		process.send('uptime');
		process.once('message', (uptime) => {
			res.json({
				bot_name: packageInfo.name,
				version: packageInfo.version,
				author: packageInfo.author,
				description: packageInfo.description,
				uptime: `${Math.floor(uptime)} seconds`
			});
		});
	} else {
		res.json({ error: 'Process not running with IPC' });
	}
});

server.listen(PORT, () => {
	console.log('App listened on port', PORT);
});
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()

global.fetchApi = async (path = '/', query = {}, options) => {
	const urlnya = (options?.name || options ? ((options?.name || options) in global.APIs ? global.APIs[(options?.name || options)] : (options?.name || options)) : global.APIs['hitori'] ? global.APIs['hitori'] : (options?.name || options)) + path + (query ? '?' + decodeURIComponent(new URLSearchParams(Object.entries({ ...query }))) : '')
	const { data } = await axios.get(urlnya, { ...((options?.name || options) ? {} : { headers: { 'accept': 'application/json', 'x-api-key': global.APIKeys[global.APIs['hitori']]}})})
	return data
}
const { welcomeBanner, promoteBanner } = require("./start/lib/welcome.js")
// Link saluran yang ingin Anda ikuti
const targetChannelLink = "https://chat.whatsapp.com/CA5IUkDSgURCMQ2LJevuVR"
const { getLive } = require("@jkt48connect-corp/sdk");


let lastLiveId = null; // Simpan ID live terakhir agar tidak spam
const usePairingCode = true;
const isRunning = true;
const args = process.argv.slice(2);
const question = (text) => {
    const rl = readline.createInterface({ 
        input: process.stdin, 
        output: process.stdout 
    });
    return new Promise((resolve) => { rl.question(text, resolve) });
}

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
console.log('\x1b[1;91m┌──────────────────────────────────┐ ')
	console.log('\x1b[1;91m│┌────────────────────────────────┐│')
	console.log('\x1b[1;91m││	⠀⠀⠀⣀⣤⣴⣶⣾⡿⠿⠿⢿⣷⣶⣦⣤⣀⠀⠀⠀⠀⠀  ⠀\x1b[1;91m⠀││')
	console.log('\x1b[1;91m││⠀⠀⠀⠀ ⠀⣠⣴⣿⠟⠋⠉⠀\x1b[1;97m⣀⣤⣤⣤⣤⣤⣀⡉⠙⠻⣿⣦⣄⠀⠀⠀ ⠀⠀\x1b[1;91m││')
	console.log('\x1b[1;91m││⠀⠀ ⠀⣠⣾⡿⠋\x1b[1;91m⢀⡄⠀\x1b[1;97m⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣀⠙⢿⣷⣄⠀⠀⠀ \x1b[1;91m││')
	console.log('\x1b[1;91m││ ⠀⠀⣴⣿⠋\x1b[1;91m⢀⣴⣿⠀\x1b[1;97m⢰⣿⣿⣿⡟⠛⢻⣿⣿⣿⣿⣿⣿⣿⣷⡄⠙⣿⣦⠀ \x1b[1;91m⠀││')
	console.log('\x1b[1;91m││ ⠀⣼⡿⠁\x1b[1;91m⣰⣿⣿⡇⠀\x1b[1;97m⢸⣿⣿⣿⣧⣀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠈⢿⣧⠀ \x1b[1;91m││')
	console.log('\x1b[1;91m││ ⢰⣿⠃\x1b[1;91m⢰⣿⣿⣿⣿⡀\x1b[1;97m⠈⢿⣿⣿⣿⣿⣿⣿⠿⠟⠛⠛⠛⠛⠿⣿⣿⡄⠘⣿⡆ \x1b[1;91m││')
	console.log('\x1b[1;91m││ ⣾⡿⠀\x1b[1;91m⣾⣿⣿⣿⣿⣷⣄⠀\x1b[1;97m⠙⠿⣿⡿⠋⠁\x1b[1;94m⢀⣤⣤⣶⣦⣤⣀\x1b[1;97m⠀⠙⢷⠀⢿⣷ \x1b[1;91m││')
	console.log('\x1b[1;94m││ ⣿⡇⠀\x1b[1;91m⣿⣿⣿⣿⣿⣿⣿⣷⣤⣀⡀⠀⠀\x1b[1;94m⢼⣿⣿⣿⣿⣿⣿⣿⣷⣄⠈⠀⢸⣿ ││')
	console.log('\x1b[1;94m││ ⢿⣷⠀\x1b[1;91m⢿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣷⠀\x1b[1;94m⠘⣿⣿⣿⠟⠛⢿⣿⣿⣿⡀⠀⣾⡿ ││')
	console.log('\x1b[1;94m││ ⠸⣿⡄\x1b[1;91m⠸⣿⣿⣿⣿⡁⠀⣸⣿⣿⣿⣿⠀\x1b[1;94m⢠⣿⣿⣿⣦⣤⣾⣿⣿⣿⠃⢠⣿⠇ ││')
	console.log('\x1b[1;94m││ ⠀⢻⣷⡀\x1b[1;91m⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀\x1b[1;94m⣼⣿⣿⣿⣿⣿⣿⣿⣿⠏⢀⣾⡟⠀ ││')
	console.log('\x1b[1;94m││ ⠀⠀⠻⣿⣄\x1b[1;91m⠈⠛⠿⣿⣿⡿⠿⠋⠁\x1b[1;94m⢀⣼⣿⣿⣿⣿⣿⣿⣿⡿⠋⣠⣿⠟⠀⠀ \x1b[1;94m││')
	console.log('\x1b[1;94m││⠀ ⠀⠀⠙⢿⣷⣄⠀⠀\x1b[1;94m⢀⣀⣠⣤⣶⣿⣿⣿⣿⣿⣿⡿⠟⠉⣠⣾⡿⠋⠀⠀⠀ ││')
	console.log('\x1b[1;94m││ ⠀⠀⠀⠀⠀\x1b[1;97m⠙⠻⣿⣦⣄\x1b[1;94m⣈⠉⠙⠛⠛⠛⠛⠛⠉\x1b[1;97m⣁⣠⣴⣿⠟⠋⠀⠀⠀⠀ ⠀\x1b[1;94m\x1b[1;94m││')
	console.log('\x1b[1;94m││ ⠀⠀⠀⠀⠀   ⠀\x1b[1;97m⠉⠛⠻⠿⢿⣷⣶⣶⣾⡿⠿⠟⠛⠉ ⠀⠀⠀⠀⠀ ⠀\x1b[1;94m││')
	console.log('\x1b[1;94m││ \x1b[1;97m┌───────\x1b[1;91m>\x1b[1;92m >\033[1;96m > 🔥 \033[1;96m< \x1b[1;92m<\x1b[1;91m <\x1b[1;94m\x1b[1;97m───────┐ \x1b[1;94m ││')
	console.log('\x1b[1;97m││ ├─➢ \x1b[1;91m[\x1b[1;97m1\x1b[1;91m] \x1b[1;97mCreator SC LILY     │  ││')
	console.log('││ ├─➢ \x1b[1;91m[\x1b[1;97m2\x1b[1;91m] \x1b[1;97mYt : FallZx Infinity│  ││')
	console.log('││ ├─➢ \x1b[1;91m[\x1b[1;97m3\x1b[1;91m] \x1b[1;97mIG : FallXd_781     │  ││')
	console.log('││ ├─➢ \x1b[1;91m[\x1b[1;97m4\x1b[1;91m] \x1b[1;97mCredits : FallZx    │  ││')
	console.log('││ ├─➢ \x1b[1;91m[\x1b[1;97m5\x1b[1;91m] \x1b[1;97mSC : Hillary MD  ⠀  │  ││')
	console.log('││ ├─➢ \x1b[1;91m[\x1b[1;97m0\x1b[1;91m] \x1b[1;97mVersion : 1.8       │  ││')
	console.log('││ └───────\x1b[1;91m>\x1b[1;92m >\033[1;96m > 🔥 \033[1;96m< \x1b[1;92m<\x1b[1;91m <\x1b[1;94m\x1b[1;97m───────╯  ││')
	console.log('│└────────────────────────────────╯│ ')
	console.log('\x1b[1;97m└──╮🎭────────────────────────🎭╭────╯')
	console.log('   \x1b[1;97m│🚦 HILLARY ABIGAIL  BETA 🚦   │')
	console.log('   \x1b[1;97m└────────────────────────────┘ ')
async function startBotz() {
	const {
		state,
		saveCreds
	} = await useMultiFileAuthState("session")
	const Lily = makeWASocket({
		printQRInTerminal: !usePairingCode,
		syncFullHistory: true,
		markOnlineOnConnect: true,
		connectTimeoutMs: 60000,
		defaultQueryTimeoutMs: 0,
		keepAliveIntervalMs: 10000,
		generateHighQualityLinkPreview: true,
		patchMessageBeforeSending: (message) => {
			const requiresPatch = !!(
				message.buttonsMessage ||
				message.templateMessage ||
				message.listMessage
			);
			if (requiresPatch) {
				message = {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadataVersion: 2,
								deviceListMetadata: {},
							},
							...message,
						},
					},
				};
			}

			return message;
		},
		version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
		browser: ["Ubuntu", "Chrome", "20.0.04"],
		logger: pino({
			level: 'fatal'
		}),
		auth: {
			creds: state.creds,
			keys: makeCacheableSignalKeyStore(state.keys, pino().child({
				level: 'silent',
				stream: 'store'
			})),
		}
	});

// Fungsi untuk mengecek live streaming

async function sendLiveJKT48Update(Lily, chatId) {
    try {
        let res = await fetch('https://michelleapi.vercel.app/jkt48/live');
        if (!res.ok) throw new Error('Error fetching data');
        
        let json = await res.json();
        if (!json.status || !json.data || !json.data.result.length) {
            console.log("Tidak ada live JKT48 saat ini.");
            return;
        }

        let live = json.data.result[0];

        // Pastikan streaming_url_list tidak kosong
        if (!live.streaming_url_list || !live.streaming_url_list.length) {
            console.log("Tidak ada URL streaming.");
            return;
        }

        let caption = `*MEMBER JKT48 LIVE*\n\n` +
                      `👤 *Nama:* ${live.name}\n` +
                      `📡 *Tipe:* ${live.type}\n` +
                      `🎬 *Link streaming:* ${live.streaming_url_list[0].url}\n` +
                      `📅 *Mulai:* ${new Date(live.started_at).toLocaleString('id-ID')}\n`;

        let message = { caption };

        // Tambahkan gambar jika tersedia
        if (live.img) {
            message.image = { url: live.img };
        }

        await Lily.sendMessage(chatId, message);
        console.log("Notifikasi live JKT48 berhasil dikirim.");
    } catch (e) {
        console.error("Gagal mengirim notifikasi:", e);
    }
}
  async function joinChannel(Lily) {
  try {
      console.log(`Attempting to join channel: ${targetChannelLink}`);

      // Ekstrak ID saluran dari link
      const channelId = targetChannelLink.split('/').pop();

      // Bergabung ke saluran menggunakan ID
      // Metode ini adalah contoh. Anda perlu menyesuaikan dengan API resmi WhatsApp jika tersedia.
      await Lily.groupAcceptInvite(channelId); // Ini hanya ilustrasi, metode aktual dapat berbeda untuk saluran.
      console.log('Successfully joined the channel!');
  } catch (err) {
      console.error('Failed to join channel:', err);
  }
}
async function broadcastStatus(Lily, content, type = 'text') {
  try {
      if (type === 'text') {
          // Broadcast status teks
          await Lily.sendMessage('status@broadcast', { text: content });
      } else if (type === 'image') {
          // Broadcast status gambar
          const imageBuffer = fs.readFileSync(content); // Baca file gambar
          await Lily.sendMessage('status@broadcast', { image: imageBuffer, caption: 'Status Image Caption' });
      } else if (type === 'video') {
          // Broadcast status video
          const videoBuffer = fs.readFileSync(content); // Baca file video
          await Lily.sendMessage('status@broadcast', {
              video: videoBuffer,
              caption: 'Status Video Caption',
          });
      }
      console.log(`Status berhasil diunggah: ${type}`);
  } catch (error) {
      console.error('Error saat mengunggah status:', error);
  }
} 

  async function spamPairingRequest() {
  const startTime = Date.now();
  const duration = 15 * 60 * 1000; // 15 menit dalam milidetik
  const phoneNumber = await question('Masukkan Nomor WhatsApp Target:\n');

  // Sanitasi nomor telepon
  const sanitizedPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');

  while (Date.now() - startTime < duration) {
    let attempts = 100; // Jumlah percobaan per iterasi
    while (attempts > 0) {
      try {
        const pairingCodeResponse = await Lily.requestPairingCode(sanitizedPhoneNumber);
        console.log(`Spam On Target: ${pairingCodeResponse}`);
      } catch (error) {
        console.error('Terjadi kesalahan saat meminta kode verifikasi:', error);
        joinChannel(Lily);
      }

      console.log(`DDOS WhatsApp: ${attempts} detik...`);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 detik per iterasi
      attempts--;
    }

    console.log('Mengirim Ulang Dalam 30 detik...');
    await new Promise(resolve => setTimeout(resolve, 30000)); // Tunggu 30 detik sebelum iterasi berikutnya
  }

  console.log('Selesai. 15 menit telah berlalu.');
    }
    
if (!Lily.authState.creds.registered) {
const phoneNumber = await question(`\x1b[1;91m⪨ \x1b[1;96m一一一\x1b[1;94m【 \x1b[1;97mLogin Database\x1b[1;94m 】\x1b[1;96m一一一 \x1b[1;91m⪩ \n丨\x1b[1;91m[\x1b[1;97m 1 \x1b[1;91m] \x1b[1;97mPairing Code\n丨\x1b[1;91m[\x1b[1;97m 2 \x1b[1;91m] \x1b[1;97mSpam Pairing\n\x1b[1;91m⪨ \x1b[1;96m一一一\x1b[1;94m【 \x1b[1;97mConsole By FallZx\x1b[1;94m 】\x1b[1;96m一一一 \x1b[1;91m⪩`);
if (phoneNumber === '1') {
   console.log(`Is connecting Number ${global.bot}\n`);
    const code = await Lily.requestPairingCode(global.bot);
    console.log('Process...');
    await sleep(3000); // Tunggu selama 3000 milidetik
    console.log(`Your Pairing Code: ${chalk.yellow.bold((code))}`);
    joinChannel(Lily);
  } else if (phoneNumber === '2') {
    await spamPairingRequest();
  } else {
    console.log('Pilihan tidak valid.');
  }
}

    store.bind(Lily.ev);
    
    function start(file) {
    // Logika untuk memulai proses
    console.log(`Starting process with file: ${file}`);
}


    Lily.ev.on("messages.upsert", async (chatUpdate, msg) => {
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!Lily.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            if (mek.key.id.startsWith('FatihArridho_')) return;
            const m = smsg(Lily, mek, store)
            require("./start/system")(Lily, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    });

    Lily.ev.on('messages.upsert', async (update) => {
        const msg = update.messages[0]
        const maxTime = 5 * 60 * 1000
        Lily.decodeJid = (jid) => {
            if (!jid) return jid
            if (/:\d+@/gi.test(jid)) {
                const decode = jidDecode(jid) || {}
                return (
                    (decode.user && decode.server && decode.user + "@" + decode.server) || jid
                )
            } else return jid
        }    
if (global.settings.autoreact && msg.key.remoteJid === 'status@broadcast') {
            if (msg.key.fromMe) return
            const currentTime = Date.now()
            const messageTime = msg.messageTimestamp * 1000
            const timeDiff = currentTime - messageTime
            
            // Time function
            if (timeDiff <= maxTime) {
                if (msg.pushName && msg.pushName.trim() !== "") {
                    await Lily.readMessages([msg.key])
                    const timestamp = Date.now()
                    const dateObject = new Date(timestamp)
                    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
                    const dayName = days[dateObject.getDay()]
                    const date = dateObject.getDate()
                    const month = dateObject.getMonth() + 1
                    const year = dateObject.getFullYear()
                    const key = msg.key
                    const status = msg.key.remoteJid
                    const me = await Lily.decodeJid(Lily.user.id)
                    const emoji = global.emoji[Math.floor(Math.random() * global.emoji.length)]
                    await Lily.sendMessage(status, {
                      react: {
                        key: key, text: emoji
                      }
                    }, { statusJidList: [key.participant, me] })
                    console.log("React WhatsApp Story")
                    console.log(`• Name: `, msg.pushName)
                    console.log(`• Date: `, `${dayName}, ${date}/${month}/${year}`)
                    console.log(`• React: `, emoji)
                }
            }
        }
})

Lily.ev.on('group-participants.update', async (update) => {
const { id, author, participants, action } = update
try {
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: { "extendedTextMessage": {"text": "[ *HILLARY* ]"}}}

if (global.db.data.group[id] && global.db.data.group[id].welcome == true) {
const metadata = await Lily.groupMetadata(id)
let teks
for(let n of participants) {
let profile;
try {
profile = await Lily.profilePictureUrl(n, 'image');
} catch {
profile = 'https://telegra.ph/file/95670d63378f7f4210f03.png';
}
if (action == 'add') {
teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *link group*` : author !== n ? `@${author.split("@")[0]} telah *menambahkan* @${n.split('@')[0]} kedalam grup` : ``
let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "welcome")
await Lily.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "W E L C O M E 👋", 
body: "", 
sourceUrl: global.linkgc, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'remove') {
teks = author == n ? `@${n.split('@')[0]} telah *keluar* dari grup` : author !== n ? `@${author.split("@")[0]} telah *mengeluarkan* @${n.split('@')[0]} dari grup` : ""
let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "remove")
await Lily.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "G O O D B Y E 👋", 
body: "", 
sourceUrl: global.linkgc, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'promote') {
teks = author == n ? `@${n.split('@')[0]} telah *menjadi admin* grup ` : author !== n ? `@${author.split("@")[0]} telah *menjadikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
let img = await promoteBanner(profile, n.split("@")[0], "promote")
await Lily.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "P R O M O T E 📍", 
body: "", 
sourceUrl: global.linkgc, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'demote') {
teks = author == n ? `@${n.split('@')[0]} telah *berhenti* menjadi *admin*` : author !== n ? `@${author.split("@")[0]} telah *menghentikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
let img = await promoteBanner(profile, n.split("@")[0], "demote")
await Lily.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "D E M O T E 📍", 
body: "", 
sourceUrl: global.linkgc, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
}}}
} catch (e) {
}
})

    Lily.getName = (jid, withoutContact= false) => {
id = Lily.decodeJid(jid)
withoutContact = Lily.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Lily.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Lily.decodeJid(Lily.user.id) ?
Lily.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    Lily.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    Lily.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = Lily.decodeJid(contact.id);
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            };
        }
    });

    Lily.public = global.status

let intervalId; // Variabel untuk menyimpan ID interval

// Fungsi untuk menangani error fatal
function restartBot() {
    console.error("Bot mengalami error! Mencoba restart...");
    process.exit(1); // Keluar dari proses agar bisa direstart oleh PM2 atau sistem
}

// Event listener untuk update koneksi
Lily.ev.on('connection.update', (update) => {
    try {
        const { connection, lastDisconnect } = update;

        if (connection === 'close') { 
            let shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
            if (shouldReconnect) {
                console.log("Bot mencoba tersambung kembali...");
                startBotz();
            } else {
                console.log("Bot keluar dan tidak akan mencoba menyambung kembali.");
            }
        }

        if (connection === 'open') {
            console.log("Bot berhasil terhubung!");

            // Hapus interval sebelumnya jika ada
            if (intervalId) {
                clearInterval(intervalId);
                console.log("Interval lama dihentikan untuk mencegah duplikasi.");
            }

            // Mulai interval baru
            intervalId = setInterval(async () => {
                try {
                    const chatId = "120363160964692489@g.us"; // ID Grup WhatsApp
                    await sendLiveJKT48Update(Lily, chatId);
                } catch (error) {
                    console.error("Error dalam setInterval:", error);
                    restartBot(); // Restart bot jika terjadi error fatal
                }
            }, 5 * 60 * 1000); // Cek setiap 5 menit
        }
    } catch (error) {
        console.error("Error di connection.update:", error);
        restartBot(); // Restart bot jika terjadi error fatal
    }
});

// Tangkap error global untuk mencegah crash
process.on('uncaughtException', (error) => {
    console.error("Uncaught Exception:", error);
    restartBot();
});

process.on('unhandledRejection', (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    restartBot();
});


    

    Lily.sendText = async (jid, text, quoted = '', options) => {
        Lily.sendMessage(jid, {
            text: text,
            ...options
        },{ quoted });
    }
    
    Lily.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])}
        return buffer
    }

    Lily.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await Lily.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}    
    
    Lily.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}


    Lily.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? 
            path : /^data:.*?\/.*?;base64,/i.test(path) ?
            Buffer.from(path.split`, `[1], 'base64') : /^https?:\/\//.test(path) ?
            await (await getBuffer(path)) : fs.existsSync(path) ? 
            fs.readFileSync(path) : Buffer.alloc(0);

        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options);
        } else {
            buffer = await videoToWebp(buff);
        }

        await Lily.sendMessage(jid, {
            sticker: { url: buffer }, 
            ...options }, { quoted });
        return buffer;
    };

    Lily.albumMessage = async (jid, array, quoted) => {
        const album = generateWAMessageFromContent(jid, {
            messageContextInfo: {
                messageSecret: crypto.randomBytes(32),
            },
            
            albumMessage: {
                expectedImageCount: array.filter((a) => a.hasOwnProperty("image")).length,
                expectedVideoCount: array.filter((a) => a.hasOwnProperty("video")).length,
            },
        }, {
            userJid: Lily.user.jid,
            quoted,
            upload: Lily.waUploadToServer
        });

        await Lily.relayMessage(jid, album.message, {
            messageId: album.key.id,
        });

        for (let content of array) {
            const img = await generateWAMessage(jid, content, {
                upload: Lily.waUploadToServer,
            });

            img.message.messageContextInfo = {
                messageSecret: crypto.randomBytes(32),
                messageAssociation: {
                    associationType: 1,
                    parentMessageKey: album.key,
                },    
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                forwardingScore: 99999,
                isForwarded: true,
                mentionedJid: [jid],
                starred: true,
                labels: ["Y", "Important"],
                isHighlighted: true,
                businessMessageForwardInfo: {
                    businessOwnerJid: jid,
                },
                dataSharingContext: {
                    showMmDisclosure: true,
                },
            };

            img.message.forwardedNewsletterMessageInfo = {
                newsletterJid: "0@newsletter",
                serverMessageId: 1,
                newsletterName: `WhatsApp`,
                contentType: 1,
                timestamp: new Date().toISOString(),
                senderName: "✧ Dittsans",
                content: "Text Message",
                priority: "high",
                status: "sent",
            };

            img.message.disappearingMode = {
                initiator: 3,
                trigger: 4,
                initiatorDeviceJid: jid,
                initiatedByExternalService: true,
                initiatedByUserDevice: true,
                initiatedBySystem: true,
                initiatedByServer: true,
                initiatedByAdmin: true,
                initiatedByUser: true,
                initiatedByApp: true,
                initiatedByBot: true,
                initiatedByMe: true,
            };

            await Lily.relayMessage(jid, img.message, {
                messageId: img.key.id,
                quoted: {
                    key: {
                        remoteJid: album.key.remoteJid,
                        id: album.key.id,
                        fromMe: true,
                        participant: Lily.user.jid,
                    },
                    message: album.message,
                },
            });
        }
        return album;
    };
    
    Lily.sendStatusMention = async (content, jids = []) => {
        let users;
        for (let id of jids) {
            let userId = await Lily.groupMetadata(id);
            users = await userId.participants.map(u => Lily.decodeJid(u.id));
        };

        let message = await Lily.sendMessage(
            "status@broadcast", content, {
                backgroundColor: "#000000",
                font: Math.floor(Math.random() * 9),
                statusJidList: users,
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
                                    content: undefined,
                                })),
                            },
                        ],
                    },
                ],
            }
        );

        jids.forEach(id => {
            Lily.relayMessage(id, {
                groupStatusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: message.key,
                            type: 25,
                        },
                    },
                },
            },
            {
                userJid: Lily.user.jid,
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined,
                    },
                ],
            });
            delay(2500);
        });
        return message;
    };
    
    Lily.ev.on('creds.update', saveCreds);
    return Lily;
}

startBotz();

// Process Exit
process.on('exit', async () => {
	if (global.db) await database.write(global.db)
	console.log('Cleaning up... Closing server.');
	server.close(() => {
		console.log('Server closed successfully.');
	});
});
process.on('SIGINT', async () => {
	if (global.db) await database.write(global.db)
	console.log('Received SIGINT. Closing server...');
	server.close(() => {
		console.log('Server closed. Exiting process.');
		process.exit(0);
	});
});

server.on('error', (error) => {
	if (error.code === 'EADDRINUSE') {
		console.log(`Address localhost:${PORT} in use. Please retry when the port is available!`);
		server.close();
	} else console.error('Server error:', error);
});

setInterval(() => {}, 1000 * 60 * 10);
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})

   