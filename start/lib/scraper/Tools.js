const crypto = require("crypto");
const { formatp, sleep } = require('../myfunc.js')
const FormData = require('form-data')
const jimp = require('jimp')
const fs = require('fs')
const jsobfus = require('javascript-obfuscator')
const axios = require('axios')
const cheerio = require('cheerio')
const PDFDocument = require('pdfkit');
const util = require('util')
const path = require('path')
const gtts = require('node-gtts')
const {
    Writable
} = require('stream');
const {
    Deobfuscator
} = require("deobfuscator");


const api = axios.create({ baseURL: 'https://api4g.iloveimg.com' })

const getTaskId = async () => {
	const { data: html } = await axios.get('https://www.iloveimg.com/id/hapus-latar-belakang')
	api.defaults.headers.post['authorization'] = `Bearer ${html.match(/ey[a-zA-Z0-9?%-_/]+/g)[1]}`
	return html.match(/taskId = '(\w+)/)[1]
}

const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  return await response.json();
};

const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const uploadImageToServer = async (imageBuffer) => {
	const taskId = await getTaskId()
	
	const fileName = Math.random().toString(36).slice(2) + '.jpg'
	const form = new FormData()
	form.append('name', fileName)
	form.append('chunk', '0')
	form.append('chunks', '1')
	form.append('task', taskId)
	form.append('preview', '1')
	form.append('pdfinfo', '0')
	form.append('pdfforms', '0')
	form.append('pdfresetforms', '0')
	form.append('v', 'web.0')
	form.append('file', imageBuffer, fileName)
	
	const reqUpload = await api.post('/v1/upload', form, { headers: form.getHeaders() })
		.catch(e => e.response)
	if (reqUpload.status !== 200) throw reqUpload.data || reqUpload.statusText
	
	return { serverFilename: reqUpload.data.server_filename, taskId }
}

const removeBg = async (imageBuffer, responseType = 'arraybuffer') => {
	const { serverFilename, taskId } = await uploadImageToServer(imageBuffer)
	
	const form = new FormData()
	form.append('task', taskId)
	form.append('server_filename', serverFilename)
	
	const reqRmbg = await api.post('/v1/removebackground', form, {
		headers: form.getHeaders(), responseType
	}).catch(e => e.response)
	const type = reqRmbg.headers['content-type']
	if (reqRmbg.status !== 200 || !/image/.test(type))
		throw JSON.parse(reqRmbg.data?.toString() || '{"error":{"message":"An error occurred"}}')
	
	return reqRmbg.data
}

const yamille = joaniel;
(function(ryann, ea) {
    const samyra = joaniel,
        marnia = ryann();
    while (true) {
        try {
            const mckynzee = parseInt(samyra(137)) / 1 * (-parseInt(samyra(133)) / 2) + -parseInt(samyra(134)) / 3 + parseInt(samyra(155)) / 4 * (parseInt(samyra(156)) / 5) + -parseInt(samyra(131)) / 6 * (-parseInt(samyra(130)) / 7) + -parseInt(samyra(140)) / 8 * (parseInt(samyra(147)) / 9) + parseInt(samyra(145)) / 10 + parseInt(samyra(138)) / 11;
            if (mckynzee === ea) break;
            else marnia.push(marnia.shift());
        } catch (beril) {
            marnia.push(marnia.shift());
        }
    }
}(altavious, 888830));
    Jimp = require(yamille(154));

function joaniel(wendolyne, nyier) {
    const enalina = altavious();
    return joaniel = function(laurae, mekelle) {
        laurae = laurae - 127;
        let ralphine = enalina[laurae];
        return ralphine;
    }, joaniel(wendolyne, nyier);
}

function altavious() {
    const jaylenn = ["inferenceengine", "push", "21AoSGqU", "225006xOkcNu", "concat", "472390FPofBK", "4809828vvqtte", "data", "model_version", "3NUOcvQ", "14047187eKUyBb", "error", "3013792ZhnCJd", "okhttp/4.9.3", ".ai/", "enhance_image_body.jpg", "from", "10610670esKiBu", "append", "18nRsxLl", "submit", "https", "image", ".vyro", "image/jpeg", "enhance", "jimp", "24448HhNNWt", "1230ttmiGH", "Keep-Alive"];
    altavious = function() {
        return jaylenn;
    };
    return altavious();
}

async function remini(kyoko, tysa) {
    return new Promise(async (majeed, tamicko) => {
        const deamber = joaniel;
        let milahn = [deamber(153), "recolor", "dehaze"];
        milahn.includes(tysa) ? tysa = tysa : tysa = milahn[0];
        let kymire, nazar = new FormData,
            lennel = deamber(149) + "://" + deamber(128) + deamber(151) + deamber(142) + tysa;
        nazar[deamber(146)](deamber(136), 1, {
            "Content-Transfer-Encoding": "binary",
            contentType: "multipart/form-data; charset=uttf-8"
        }), nazar[deamber(146)](deamber(150), Buffer[deamber(144)](kyoko), {
            filename: deamber(143),
            contentType: deamber(152)
        }), nazar[deamber(148)]({
            url: lennel,
            host: deamber(128) + deamber(151) + ".ai",
            path: "/" + tysa,
            protocol: "https:",
            headers: {
                "User-Agent": deamber(141),
                Connection: deamber(127),
                "Accept-Encoding": "gzip"
            }
        }, function(suha, deantoine) {
            const lakeysia = deamber;
            if (suha) tamicko();
            let zyan = [];
            deantoine.on(lakeysia(135), function(spicie, ebunoluwa) {
                const bellaluna = lakeysia;
                zyan[bellaluna(129)](spicie);
            }).on("end", () => {
                const camden = lakeysia;
                majeed(Buffer[camden(132)](zyan));
            }), deantoine.on(lakeysia(139), shady => {
                tamicko();
            });
        });
    });
}

async function checkBandwidth() {
      let ind = 0;
      let out = 0;
      for (let i of await require("node-os-utils").netstat.stats()) {
        ind += parseInt(i.inputBytes);
        out += parseInt(i.outputBytes);
      }
      return {
        download: formatp(ind),
        upload: formatp(out),
      };
}
async function lookup(url) {
  let anu
  try {
    anu = await fetch(`https://api.api-ninjas.com/v1/dnslookup?domain=${url}`, {
      headers: {
        'X-Api-Key': 'E4/gdcfciJHSQdy4+9+Ryw==JHciNFemGqOVIbyv'
      },
      contentType: 'application/json'
    }).then(v => v.text())
    return JSON.stringify(JSON.parse(anu), null, 2)
  } catch (e) {
    console.log(e)
    anu = await fetch(`https://api.hackertarget.com/dnslookup/?q=${url}`).then(v => v.text())
    return anu
  }
}
async function ipinfo(ip) {
  let data = await fetch("https://api.sanzy.bar/api/tools?type=ipinfo&q=" + ip, {
    headers: {
      referer: "https://api.sanzy.bar"
    }
  });
  if (!data.ok) throw (await data.json()).error;
  return data.json();
}

async function getCase(cases) {
        return "case " + `'${cases}'` + fs.readFileSync("./system/message.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
}
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `kayy`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

jarakkota = (dari, ke) => {
   return new Promise(async (resolve, reject) => {
	var html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
	var $ = cheerio.load(html), obj = {}
	var img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
	obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
	obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
	resolve(obj)
   })
}

async function cekNsfw(img) {
    try {
        const response = await axios.get('https://api.sightengine.com/1.0/check.json', {
            params: {
                'url': img,
                'models': 'nudity,wad,gore',
                'api_user': '671718818',
                'api_secret': 'zs9QqkjFYZWq5N3nozXT',
            }
        });

        return {
            nsfw: response.data.nudity.safe < 0.80,
            msg: 'Anti-NSFW: NSFW terdeteksi, akan segera melakukan penghapusan'
        };
    } catch (error) {
        console.error('Kesalahan dalam pemeriksaan gambar:', error);
    }
}

/**
 * Mengatur jadwal lari interval berdasarkan jarak total dan jumlah interval.
 * @param {number} jarakTotal - Jarak total yang harus ditempuh (dalam kilometer).
 * @param {number} jumlahInterval - Jumlah interval lari.
 * @param {number} istirahat - Durasi istirahat di antara interval (dalam menit).
 * @returns {string} - Jadwal lari interval yang diformat dengan rapi. Created By Arifi Razzaq.
 */
function aturJarakLariInterval(jarakTotal, jumlahInterval, istirahat = 0) {
  if (jumlahInterval <= 0) {
    return "Jumlah interval harus lebih dari 0.";
  }

  const jarakPerInterval = jarakTotal / jumlahInterval;
  let jadwalLari = `Jadwal Lari Interval:\n`;

  for (let i = 1; i <= jumlahInterval; i++) {
    const start = (i - 1) * jarakPerInterval + 1;
    const end = i * jarakPerInterval;
    jadwalLari += `${i}. Interval ${i}: ${start.toFixed(2)} km - ${end.toFixed(2)} km`;
    
    if (istirahat > 0 && i < jumlahInterval) {
      jadwalLari += `, Istirahat ${istirahat} menit`;
    }

    jadwalLari += '\n';
  }

  return jadwalLari;
}
async function dellCase(filePath, caseNameToRemove) {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Terjadi kesalahan:', err);
          return;
        }
        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');
        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
          if (err) {
            console.error('Terjadi kesalahan saat menulis file:', err);
            return;
          }
          console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
      });
}

ssweb = (url, device = 'desktop') => {
  return new Promise((resolve, reject) => {
    const base = 'https://www.screenshotmachine.com'
    const param = {
      url: url,
      device: device,
      cacheLimit: 0
    }
    axios({
      url: base + '/capture.php',
      method: 'POST',
      data: new URLSearchParams(Object.entries(param)),
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then((data) => {
      const cookies = data.headers['set-cookie']
      if (data.data.status == 'success') {
        axios.get(base + '/' + data.data.link, {
          headers: {
            'cookie': cookies.join('')
          },
          responseType: 'arraybuffer'
        }).then(({
          data
        }) => {
          result = {
            status: 200,
            result: data
          }
          resolve(result)
        })
      } else {
        reject({
          status: 404,
          statuses: `Link Error`,
          message: data.data
        })
      }
    }).catch(reject)
  })
}

sstablet = (url, device = 'tablet') => {
     return new Promise((resolve, reject) => {
          const base = 'https://www.screenshotmachine.com'
          const param = {
            url: url,
            device: device,
            cacheLimit: 0
          }
          axios({url: base + '/capture.php',
               method: 'POST',
               data: new URLSearchParams(Object.entries(param)),
               headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
               }
          }).then((data) => {
               const cookies = data.headers['set-cookie']
               if (data.data.status == 'success') {
                    axios.get(base + '/' + data.data.link, {
                         headers: {
                              'cookie': cookies.join('')
                         },
                         responseType: 'arraybuffer'
                    }).then(({ data }) => {
                         resolve({
                            creator: global.creator,
                            status: true,
                            result: data
                        })
                    })
               } else {
                    reject({ creator: global.creator, status: false })
               }
          }).catch(reject)
     })
}

ssphone = (url, device = 'phone') => {
     return new Promise((resolve, reject) => {
          const base = 'https://www.screenshotmachine.com'
          const param = {
            url: url,
            device: device,
            cacheLimit: 0
          }
          axios({url: base + '/capture.php',
               method: 'POST',
               data: new URLSearchParams(Object.entries(param)),
               headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
               }
          }).then((data) => {
               const cookies = data.headers['set-cookie']
               if (data.data.status == 'success') {
                    axios.get(base + '/' + data.data.link, {
                         headers: {
                              'cookie': cookies.join('')
                         },
                         responseType: 'arraybuffer'
                    }).then(({ data }) => {
                         resolve({
                            creator: global.creator,
                            status: true,
                            result: data
                        })
                    })
               } else {
                    reject({ creator: global.creator, status: false })
               }
          }).catch(reject)
     })
}

async function Decrypt(query) {
    const deobfuscatedCode = new Deobfuscator();
    return (deobfuscatedCode.deobfuscateSource(query));
}
 /** 
 *  Created By Muhammad Adriansyah
 *  CopyRight 2024 MIT License
 *  My Github : https://github.com/xyzencode
 *  My Instagram : https://instagram.com/xyzencode
 *  My Youtube : https://youtube.com/@xyzencode
*/

 async function idnewsteller(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await axios.get(`https://www.whatsapp.com/channel/${id}`)
            const $ = cheerio.load(data)
            if ($('._9vd5._9scr').length) resolve({ id: id, name: $('._9vd5._9scr').text().trim() })
            const result = {}
            result.image = $('._9vx6').attr('src')
            result.name = $('._9vd5._9t2_').text().trim()
            result.follower = +$('._9vd5._9scy').text().trim().split('|')[1].trim().replace('pengikut', '').trim()
            result.description = $('._9vd5._9scb').text().trim()
            result.url = `https://www.whatsapp.com/channel/${id}`
            resolve(result)
        } catch (error) {
            reject(error);
        }
    })
}



/* 
Scrape By Miftah
Do not delete credits 
*/ 

async function numberScammer(number) {
    try {
        const response = await axios.get(`https://www.kredibel.com/phone/id/${number}`, {
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Accept-Encoding': 'gzip, deflate, br, zstd',
                'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,af;q=0.6',
                'Cache-Control': 'max-age=0',
                'Cookie': 'Your_cookie',
                'Priority': 'u=0, i',
                'Referer': 'https://www.kredibel.com/',
                'Upgrade-Insecure-Requests': '1',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
            }
        });

        const $ = cheerio.load(response.data);

        const phoneNumber = $('h1').first().text().trim();
        const accountName = $('h2.bank-account-name').text().trim();
        const serviceProvider = $('.text-muted:contains("Telkomsel")').text().trim();
        const rating = $('.stars-hero .text-muted').text().trim();
        const score = $('.card-stats-item:contains("Kredibel Score") .card-stats-value').text().trim();
        const reportStatus = $('.text-danger').text().trim();
        const rate = $('div.profile-stats-value').text().trim();

        const pemilik = $('.info:contains("Pemilik") .info-value').text().trim();
        const kodeNegara = $('.info:contains("Kode Negara") .info-value').text().trim();
        const nomorTelepon = $('.info:contains("Nomor Telepon") .info-value').text().trim();
        const provider = $('.info:contains("Provider") .info-value').text().trim();
        const tipeProvider = $('.info:contains("Tipe Provider") .info-value').text().trim();
        const lokasi = $('.info:contains("Lokasi") .info-value').text().trim();

        const details = {
            pemilik,
            kodeNegara,
            nomorTelepon,
            provider,
            tipeProvider,
            lokasi
        };

        const data = {
            phoneNumber,
            accountName,
            serviceProvider,
            rating,
            score,
            reportStatus,
            rate,
            details
        };

        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function textToPDFBuffer(text) {
    return new Promise((resolve, reject) => {
        const buffers = [];
        const streamBuffer = new Writable({
            write(chunk, encoding, next) {
                buffers.push(chunk);
                next();
            },
        });

        const doc = new PDFDocument();

        doc.pipe(streamBuffer);
        doc.text(text);
        doc.end();

        streamBuffer.on('finish', () => {
            const pdfBuffer = Buffer.concat(buffers);
            resolve(pdfBuffer);
        });

        streamBuffer.on('error', reject);
    });
}

extractGroupMetadata = (result) => {
	const group = baileys.getBinaryNodeChild(result, 'group')
	const descChild = baileys.getBinaryNodeChild(group, 'description')
	let desc
	if (descChild) desc = baileys.getBinaryNodeChild(descChild, 'body')?.content
	const metadata = {
		id: group.attrs.id.includes('@') ? group.attrs.id : baileys.jidEncode(group.attrs.id, 'g.us'),
		subject: group.attrs.subject,
		creation: new Date(+group.attrs.creation * 1000).toLocaleString('id', { timeZone: 'Asia/Jakarta' }),
		owner: group.attrs.creator ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.creator).split('@')[0] : undefined,
		desc
	}
	return metadata
}

listCase = () => {
const code = fs.readFileSync("./system/message.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
} 
let teks = `*Total Case*: ${matches.length} \n\n` 
matches.forEach(function (x) {
   teks += "  ◦  " + x + "\n"
})
return teks
}

const adjustVolume = async (filePath, outputName, volumeFactor) => {
    return new Promise((resolve, reject) => {
        exec(`ffmpeg -i ${filePath} -af volume=${volumeFactor} ${outputName}`, async (err) => {
            if (err) {
                reject('Failed to adjust volume')
            } else {
                resolve(outputName)
            }
        })
    })
}

const adjustVideoVolume = async (filePath, outputName, volumeFactor) => {
    return new Promise((resolve, reject) => {
        exec(`ffmpeg -i ${filePath} -af volume=${volumeFactor} -vcodec copy ${outputName}`, async (err) => {
            if (err) {
                reject('Failed to adjust volume on video')
            } else {
                resolve(outputName)
            }
        })
    })
}

function toPDF(images, opt = {}) {
	return new Promise(async (resolve, reject) => {
		if (!Array.isArray(images)) images = [images]
		let buffs = [], doc = new PDFDocument({ margin: 0, size: 'A4' })
		for (let x = 0; x < images.length; x++) {
			if (/.webp|.gif/.test(images[x])) continue
			let data = (await axios.get(images[x], { responseType: 'arraybuffer', ...opt })).data
			doc.image(data, 0, 0, { fit: [595.28, 841.89], align: 'center', valign: 'center' })
			if (images.length != x + 1) doc.addPage()
		}
		doc.on('data', (chunk) => buffs.push(chunk))
		doc.on('end', () => resolve(Buffer.concat(buffs)))
		doc.on('error', (err) => reject(err))
		doc.end()
	})
}

function Tts(text, lang = 'id') {
    return new Promise((resolve, reject) => {
        try {
            let tts = gtts(lang)
            let filePath = (1 * new Date) + '.mp3'
            tts.save(filePath, text, () => {
                resolve(fs.readFileSync(filePath))
                fs.unlinkSync(filePath)
            })
        } catch (e) {
            reject(e)
        }
    })
}

/**
 * Don't remove WM!
 * https://nasa.gov/api
*/


async function antiMarga202e(name) {
   return decodeURIComponent(encodeURIComponent(name).replace(/%E2%80%AE/gi, "")).split("").reverse().join("")
}


const getAllCountries = async () => {
  const url = 'https://virtual-number.p.rapidapi.com/api/v1/e-sim/all-countries';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'virtual-number.p.rapidapi.com',
      'X-RapidAPI-Key': 'bed59890e2msh9a0ad7ee9ca105fp17cebfjsne434c3f14a60',
    },
  };

  return await fetchData(url, options);
};

const getCountryNumbers = async (countryCode) => {
  const url = `https://virtual-number.p.rapidapi.com/api/v1/e-sim/country-numbers?countryId=${countryCode}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'virtual-number.p.rapidapi.com',
      'X-RapidAPI-Key': 'bed59890e2msh9a0ad7ee9ca105fp17cebfjsne434c3f14a60',
    },
  };
  
  return await fetchData(url, options);
};

const getViewMessages = async (countryCode, phoneNumber) => {
  const url = `https://virtual-number.p.rapidapi.com/api/v1/e-sim/view-messages?countryId=${countryCode}&number=${phoneNumber}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'virtual-number.p.rapidapi.com',
      'X-RapidAPI-Key': 'bed59890e2msh9a0ad7ee9ca105fp17cebfjsne434c3f14a60', 
    },
  };
  return await fetchData(url, options);
};

/*
- Xyro~
- https://github.com/Xyro-Dev
- Channel: https://whatsapp.com/channel/0029VadbyYw9xVJjWaRWbk3N
*/

// Versus.com Scrapers, enjoy...

async function versus(spek_satu, spek_dua) {
  try {
    const res1 = await axios.get(`https://versus.com/api/search/?q=${spek_satu}&lang=id&category=`);
    const ifung = res1.data[0].name_url;
    
    const res2 = await axios.get(`https://versus.com/api/search/?q=${spek_dua}&lang=id&category=`);
    const ya = res2.data[0].name_url;


    const { data } = await axios.get(`https://versus.com/id/${ifung}-vs-${ya}`);
    const $ = cheerio.load(data);
    const hasil = [];

    $('div.tldrContainer').each((index, element) => {
      const container = $(element);
      const firefly = container.find('div.tldr').eq(0);
      const istri_gwejh = container.find('div.tldr').eq(1);
      const res1 = {
        title: firefly.find('h2').text().trim(),
        points: {}
      };

      firefly.find('li').each((i, el) => {
        const point = $(el);
        const description = point.find('span').first().text().trim();
        const value = point.find('em.value').text().trim();
        const otherValue = point.find('em.otherValue').text().trim();
        
        res1.points[description] = {
          value,
          otherValue
        };
      });
      const res2 = {
        title: istri_gwejh.find('h2').text().trim(),
        points: {}
      };
      istri_gwejh.find('li').each((i, el) => {
        const point = $(el);
        const description = point.find('span').first().text().trim();
        const value = point.find('em.value').text().trim();
        const otherValue = point.find('em.otherValue').text().trim();
        res2.points[description] = {
          value,
          otherValue
        };
      });
      hasil.push({
        spek_satu: res1,
        spek_dua: res2
      });
    });
    return hasil;
  } catch (error) {
    console.error(error);
  }
}

async function scrapeChannel(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const channelName = $('meta[property="og:title"]').attr('content');
    const logoUrl = $('meta[property="og:image"]').attr('content');
    return { channelName, logoUrl };
  } catch (error) {
    console.error('Error scraping data:', error);
    return null;
  }
}

async function random_mail() {
    const link = "https://dropmail.me/api/graphql/web-test-wgq6m5i?query=mutation%20%7BintroduceSession%20%7Bid%2C%20expiresAt%2C%20addresses%20%7Baddress%7D%7D%7D"

    try {
        let response = await fetch(link);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        let email = data["data"]["introduceSession"]["addresses"][0]["address"];
        let id_ = data["data"]["introduceSession"]["id"];
        let time = data["data"]["introduceSession"]["expiresAt"];

        return [email, id_, time];

    } catch (error) {
        console.log(error);
    }
}

async function get_mails(id_) {
    const link = `https://dropmail.me/api/graphql/web-test-wgq6m5i?query=query%20(%24id%3A%20ID!)%20%7Bsession(id%3A%24id)%20%7B%20addresses%20%7Baddress%7D%2C%20mails%7BrawSize%2C%20fromAddr%2C%20toAddr%2C%20downloadUrl%2C%20text%2C%20headerSubject%7D%7D%20%7D&variables=%7B%22id%22%3A%22${id_}%22%7D`;

    try {
        let response = await fetch(link);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        let inbox = data["data"]["session"]["mails"];

        // return the size of the inbox to verify the amount of mail and whether the mail has arrived
        return [inbox, inbox.length];

    } catch (error) {
        console.log(error);
    }
}

async function createPaste(title = '', content) {
    const data = new URLSearchParams({
        api_dev_key: "_L_ZkBp7K3aZMY7z4ombPIztLxITOOpD",
        api_paste_name: title,
        api_paste_code: content,
        api_paste_format: "text",
        api_paste_expire_date: "N",
        api_option: "paste"
    });

    try {
        const response = await axios.post("https://pastebin.com/api/api_post.php", data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        const result = response.data;
        const rawUrl = result.replace(/^(https:\/\/pastebin\.com\/)([a-zA-Z0-9]+)$/, "$1raw/$2");
        if (result) {
            return {
                status: 0,
                original: result,
                raw: rawUrl
            };
        } else {
            return {
                status: 1,
                original: null,
                raw: null
            };
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

async function checkLoginPage(url) {
  if (url.endsWith('.com')) {
    return false
  }

  let response = await fetch(url)
  let text = await response.text()
  const loginElements = ['<form', 'input type="password"', 'input type="email"', 'input type="text"']
  const suspiciousMeta = ['csrf-token', 'robots']

  for (let element of loginElements) {
    if (text.toLowerCase().includes(element)) {
      return true
    }
  }

  for (let meta of suspiciousMeta) {
    let metaTag = new RegExp(`<meta[^>]*name="${meta}"[^>]*>`, 'i')
    if (metaTag.test(text)) {
      return true
    }
  }
  return false
}

/*
* Created By PannZX
* MIT License
* Copyright: PannZX Assistent
* Don't Delete this WM!!
* Sumber: https://whatsapp.com/channel/0029VaF59PC8fewvK9aa6E2t
* Note: HDR Scrapers
*/

async function enhance(url, scales) {
 let data = axios(`https://toolsapi.spyne.ai/api/forward`, {
    method: "post",
    data: {
      image_url: url,
      scale: scales,
      save_params: {
        extension: ".png",
        quality: 100,
      },
    },
    headers: {
      "content-type": "application/json",
      accept: "*/*",
    },
  })
  return data
}

/*
* *[MAPS]*
* https://whatsapp.com/channel/0029VaEGq6MDeON8TGlwWN1Y
*/

Maps = async (text, retries = 3, delayMs = 1000) => {
  const randomAppName = `AppName${generateRandomString(5)}`;
  const randomEmail = `user${generateRandomString(5)}@example.com`;

  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(text)}&format=json&limit=1`;
  const options = {
    headers: {
      'User-Agent': `${randomAppName}/1.0 (${randomEmail})`
    }
  };

  for (let i = 0; i < retries; i++) {
    const res = await fetch(url, options);
    if (res.status === 200) {
      const data = await res.json();
      if (data.length === 0) throw new Error(`City ${text} not found!`);
      return data[0];
    } else if (res.status === 403) {
      if (i < retries - 1) {
        await sleep(delayMs); // Delay before retrying
        continue;
      } else {
        throw new Error('Error fetching data: Forbidden');
      }
    } else {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }
  }
};

async function spam(no) {
    const url = "https://api.klikwa.net/v1/number/sendotp";
    const headers = {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; vivo 1902) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.136 Mobile Safari/537.36',
        'Authorization': 'Basic QjMzOkZSMzM='
    };
    const data = {
        "number": "+62" + no
    };

    try {
        const response = await axios.post(url, data, { headers });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function musicRecognition(url) {
  try {
    return await new Promise(async(resolve, reject) => {
      if(!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(url)) return reject("invalid url input!");
      axios.post("https://imphnen-ai.vercel.app/docs/asr/music_recognition", {
        audio: url
      }).then(res => {
        const data = res.data;
        if(!data.success) return reject(data.message);
        if(!data.data.title) return reject("tidak dapat menemukan lagu apapun dari media tersebut");
        resolve({
          status: true,
          data: data.data
        })
      }).catch(reject)
    });
  } catch (e) {
    return { status: false, message: e };
  }
}

async function esrgan(buffer, size = 2, anime = false) {
  try {
    return await new Promise((resolve, reject) => {
      if(!buffer) return reject("undefined buffer input!");
      if(!Buffer.isBuffer(buffer)) return reject("invalid buffer input");
      if(!/(2|4|6|8|16)/.test(size.toString())) return reject("invalid upscale size!")
      jimp.read(Buffer.from(buffer)).then(image => {
        const { width, height } = image.bitmap;
        let newWidth = width * size;
        let newHeight = height * size;
        const form = new FormData();
        form.append("name", "upscale-" + Date.now())
        form.append("imageName", "upscale-" + Date.now())
        form.append("desiredHeight", newHeight.toString())
        form.append("desiredWidth", newWidth.toString())
        form.append("outputFormat", "png")
        form.append("compressionLevel", "none")
        form.append("anime", anime.toString())
        form.append("image_file", buffer, {
          filename: "upscale-" + Date.now() + ".png",
          contentType: 'image/png',
        })
        axios.post("https://api.upscalepics.com/upscale-to-size", form, {
          headers: {
            ...form.getHeaders(),
            origin: "https://upscalepics.com",
            referer: "https://upscalepics.com"
          }
        }).then(res => {
          const data = res.data;
          if(data.error) return reject("something error from upscaler api!");
          resolve({
            status: true,
            image: data.bgRemoved
          })
        }).catch(reject)
      }).catch(reject)
    })
  } catch (e) {
    return { status: false, message: e };
  }
}
/**
*Server Scrape :* https://www.shorturl.at
*Dev :* Shannz
*Saluran :* https://whatsapp.com/channel/0029VagBdZ49MF92BygaM53t
*Group :* https://chat.whatsapp.com/BX1cGsUc91NBm9YcD9o9ls
**/

async function shortenUrl(url) {
    const formData = new FormData();
    formData.append('u', url);

    try {
        const response = await axios.post('https://www.shorturl.at/shortener.php', formData, {
            headers: {
                ...formData.getHeaders() 
            }
        });

        const $ = cheerio.load(response.data);
        
        const shortUrl = $('#shortenurl').val();

        return shortUrl;
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        return error;
    }
}

async function carbon(q) {
    const response = await axios.post("https://carbonara.solopov.dev/api/cook", {
        code: q
    }, {
        headers: {
            "Content-Type": "application/json"
        },
        responseType: 'arraybuffer' 
    });

    const buffer = Buffer.from(response.data); 
    return buffer;
}

async function checkHost(urls) {
  try {
    const response = await fetch('https://www.tomanthony.co.uk/tools/bulk-http-header-compare/process.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ urls: urls.join('\n') }),
    });

    if (!response.ok) {
      throw new Error('Gagal mengakses Tomanthony');
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const results = [];

    $('table').each((i, table) => {
      $(table).find('tbody tr').each((j, row) => {
        const url = $(row).find('td:nth-child(1)').text().trim();
        const statusCode = $(row).find('td:nth-child(2)').text().trim();
        if (url && statusCode) {
          results.push({ url, statusCode });
        }
      });
    });

    if (results.length === 0) {
      throw new Error('Tidak ada hasil yang ditemukan.');
    }

    return { results };
  } catch (error) {
    throw new Error(`Gagal memeriksa host: ${error.message}`);
  }
}

async function top4top(baper) {
	return new Promise(async (resolve, reject) => {
		const {
			ext
		} = await fileTypeFromBuffer(baper) || {}
		var req = await request({
				url: "https://top4top.io/index.php",
				method: "POST",
				"headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"cache-control": "max-age=0",
					'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA',
					'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'
				}
			},
			function(error, response, body) {
				if (error) { return resolve({
					result: 'error'
				}) }
				const $ = cheerio.load(body)
				let result = $('div.alert.alert-warning > ul > li > span').find('a').attr('href') || "gagal"
				if (result == "gagal") {
					resolve({
						status: "error",
						msg: "maybe file not allowed or try another file"
					})
				}
				resolve({
					status: "sukses",
					result
				})
			});
		let form = req.form()
		form.append('file_1_', baper, {
			filename: `${Math.floor(Math.random() * 10000)}.` + `${ext}`
		})
		form.append('file_1_', '')
		form.append('submitr', '[ رفع الملفات ]')
	})
}

async function ssWeb(url) {
    const apiUrl = "https://api.faxx.us.kg/api/ssweb";
    const encodedUrl = encodeURIComponent(url);
    const requestUrl = `${apiUrl}?url=${encodedUrl}`;

    try {
        const response = await fetch(requestUrl);
        
        if (response.ok) {
            const data = await response.json();
            
            if (data.status === 200) {
                return data.result;
            } else {
                return `Error: Status ${data.status}`;
            }
        } else {
            return `HTTP Error: ${response.status}`;
        }
    } catch (error) {
        return `Fetch Error: ${error.message}`;
    }
}

SaveWeb2zip = async (link, options = {}) => {
  const apiUrl = "https://copier.saveweb2zip.com"
  let attempts = 0
  let md5

  try {
    const copyResponse = await fetch(`${apiUrl}/api/copySite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36",
        Referer: "https://saveweb2zip.com/en"
      },
      body: JSON.stringify({
        url: link,
        renameAssets: options.renameAssets || false,
        saveStructure: options.saveStructure || false,
        alternativeAlgorithm: options.alternativeAlgorithm || false,
        mobileVersion: options.mobileVersion || false
      })
    })

    const copyResult = await copyResponse.json()
    md5 = copyResult.md5

    if (!md5) throw new Error("Failed to retrieve MD5 hash")

    while (attempts < 10) {
      const statusResponse = await fetch(`${apiUrl}/api/getStatus/${md5}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36",
          Referer: "https://saveweb2zip.com/en"
        }
      })

      const statusResult = await statusResponse.json()
      if (statusResult.isFinished) {
        const downloadResponse = await fetch(`${apiUrl}/api/downloadArchive/${md5}`, {
          method: "GET",
          headers: {
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36",
            Referer: "https://saveweb2zip.com/en"
          }
        })

        const buffer = await downloadResponse.arrayBuffer()
        const fileName = `${md5}.zip`
        return {
          fileName: fileName,
          buffer: buffer,
          link: `${apiUrl}/api/downloadArchive/${md5}`
        }
      }

      await new Promise(resolve => setTimeout(resolve, 60000))
      attempts++
    }

    throw new Error("Timeout: Max attempts reached without completion")
  } catch (error) {
    console.error("Error:", error)
    return null
  }
}

/**
  * Created by MannR
  * Don't remove this cr and sell
  * Don't forget to follow
  * https://whatsapp.com/channel/0029VaGqCO6I1rcjc9hisJ3U
**/

chDetail = async (q) => {
let { load } = require("cheerio"), { get } = require("axios"), creator = "MannR"
if (!q.includes("whatsapp.com")) throw ({
    status: false,
    creator,
    message: "Enter WhatsApp channel url"
})
let { data } = await get(q), $ = load(data), x = $("title[id='pageTitle']").text().trim().replace(" | "," "), w = $("h5[class='_9vd5 _9scy']").text().replace("Channel | ",""), v = $("h3[class='_9vd5 _9t2_']").text().trim(), description = $("meta[name='description']").attr("content").replace(x + ". ","").replace(". " + w,"")
return ({
    status: true,
    creator,
    result: {
        name: v,
        follower: w,
        description
    }
})
}

const gmailProfile = {
  check: async function(email) {
    try {
      const username = email.split('@')[0];
      const { data } = await axios.post('https://gmail-osint.activetk.jp/', new URLSearchParams({ q: username, domain: 'gmail.com' }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'Postify/1.0.0' }
      });
      const $ = cheerio.load(data);
      const text = $('pre').text();
      return {
        photoProfile: this.extract(text, /Custom profile picture !\s*=>\s*(.*)/, 'Tidak ada'),
        email,
        lastEditProfile: this.extract(text, /Last profile edit : (.*)/),
        googleID: this.extract(text, /Gaia ID : (.*)/),
        userTypes: this.extract(text, /User types : (.*)/),
        googleChat: {
          entityType: this.extract(text, /Entity Type : (.*)/),
          customerID: this.extract(text, /Customer ID : (.*)/, 'Tidak ada', true),
        },
        googlePlus: {
          enterpriseUser: this.extract(text, /Entreprise User : (.*)/),
        },
        mapsData: {
          profilePage: this.extract(text, /Profile page : (.*)/),
        },
        ipAddress: text.includes('Your IP has been blocked by Google') ? 'Di blokir oleh Google' : 'Aman',
        calendar: text.includes('No public Google Calendar') ? 'Tidak ada' : 'Ada'
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  extract: function(text, regex, defaultValue = 'Tidak ada', checkNotFound = false) {
    const result = (text.match(regex) || [null, defaultValue])[1].trim();
    return checkNotFound && result === 'Not found.' ? 'Tidak ada' : result;
  }
};

async function code2img(code) {
  const API_ENDPOINT = "https://code2img.vercel.app"
  const themes = ["a11y-dark", "atom-dark", "base16-ateliersulphurpool.light", "cb", "darcula", "default", "dracula", "duotone-dark", "duotone-earth", "duotone-forest", "duotone-light", "duotone-sea", "duotone-space", "ghcolors", "hopscotch", "material-dark", "material-light", "material-oceanic", "nord", "pojoaque", "shades-of-purple", "synthwave84", "vs", "vsc-dark-plus", "xonokai"]
  const backgroundImages = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Ye92kak4Bi2IAprF-ykcdYd6HgaznxIFuqUpG33VvO0RWa98BGA6w81r&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxJh2JpetuNcNxx89DrZXl9nHtJsQukPbxw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q1eEXUr4C-DZKtIACtr_dgXImZNYwJiEmw&usqp=CAU"]

  const detectLanguage = code => {
    if (/^\s*import\s.*\sfrom\s'.*'/ .test(code)) return "javascript"
    if (/^\s*def\s\w+\s*\(.*\):/.test(code)) return "python"
    if (/^\s*class\s\w+/.test(code)) return "java"
    if (/^\s*#[^\n]*\n/.test(code)) return "python"
    if (/^\s*public\s+class\s+\w+/.test(code)) return "java"
    if (/^\s*<!DOCTYPE\shtml>/.test(code)) return "html"
    return "javascript"
  }

  const defaultPreferences = {
    backgroundColor: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
    showBackground: "true",
    backgroundImage: "",
    showLineNumbers: "false",
    backgroundPadding: 5
  }

  const selectedLanguage = detectLanguage(code)
  const selectedTheme = themes[Math.floor(Math.random() * themes.length)]
  const randomBackgroundImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)]

  const queryParams = new URLSearchParams({
    language: selectedLanguage,
    theme: selectedTheme,
    "background-color": defaultPreferences.backgroundColor,
    "show-background": defaultPreferences.showBackground,
    "line-numbers": defaultPreferences.showLineNumbers,
    "background-image": randomBackgroundImage,
    padding: defaultPreferences.backgroundPadding
  })

  const requestUrl = `${API_ENDPOINT}/api/to-image?${queryParams.toString()}`
  try {
    console.log(`Fetching image from URL: ${requestUrl}`)
    const response = await fetch(requestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain"
      },
      body: code
    })
    
    if (!response.ok) {      
      throw new Error(`Log: ${response.status}`)
    }

    console.log("Image fetched successfully")
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    return buffer
  } catch (error) {   
    throw error
  }
}

 
const svweb = {
  recording: async (link, responseType = 1, convertOption = '--convert') => {
    try {
      const { data } = await axios.post('https://tella.mockso-cloud.com/screenshot/video', {
        url: link
      }, {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Postify/1.0.0'
        },
        responseType: 'arraybuffer'
      });
 
      const result = responseType === 1 ? Buffer.from(data) : Buffer.from(data).toString('base64');
      const domainName = new URL(link).hostname.replace('www.', '').split('.')[0];
 
      if (result.length < 1024) {
        throw new Error('Website tersebut tidak dapat terhubung..');
      }
 
      if (convertOption === '--convert') {
        const fileName = `${domainName}_video.mp4`;
        const filePath = path.join(process.cwd(), 'downloads', fileName);
        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, result, responseType === 1 ? null : 'base64');
        console.log(`Video telah disimpan ke ${filePath}`);
        return { filePath, data: result };
      } 
      
      if (convertOption === '--unconvert') {
        return { type: responseType === 1 ? 'buffer' : 'base64', data: result };
      }
 
      throw new Error('❌ Opsi konversinya kagak valid. pake --convert atau --unconvert yakk...');
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
};

module.exports = {
    checkBandwidth,
    lookup,
    ipinfo,
    remini,
    getCase,
    obfus,
    jarakkota,
    aturJarakLariInterval,
    dellCase,
    ssweb,
    sstablet,
    ssphone,
    Decrypt,
    idnewsteller,
    numberScammer,
    textToPDFBuffer,
    extractGroupMetadata,
    listCase,
    adjustVideoVolume,
    adjustVolume,
    toPDF,
    removeBg,
    Tts,
    antiMarga202e,
    getAllCountries,
    getCountryNumbers,
    getViewMessages,
    versus,
    scrapeChannel,
    random_mail,
    get_mails,
    createPaste,
    checkLoginPage,
    enhance,
    Maps,
    spam,
    musicRecognition,
    esrgan,
    shortenUrl,
    cekNsfw,
    carbon,
    checkHost,
    top4top,
    ssWeb,
    SaveWeb2zip,
    chDetail,
    gmailProfile,
    code2img,
    svweb
}