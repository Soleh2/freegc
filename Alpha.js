/*

	Di video udah ada cara install nya jadi gk usah nanya lagi
	Gak usah pc klo eror setelah recode
	Jgn di jual sc nya
	Jika ada module yg kurang pc aja di wa utama
	
	Thanks ~

*/



const {
   WAConnection: _WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WAMessageProto,
   mentionedJid,
   Browsers,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs")
const axios = require('axios')
const toMs = require('ms')
const chalk = require("chalk")
const crypto = require('crypto')
const util = require('util');
const speed = require('performance-now')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const request = require('request')
const fetch = require('node-fetch')
const path = require('path')
const cd = 4.32e+7
const { spawn, exec, execSync } = require("child_process")
const hx = require('hxz-api')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const { webp2mp4File} = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js');
const { color, bgcolor } = require('./lib/color')
const translate = require('./lib/translate')
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/aboutuser")
const Exif = require('./lib/exif');
const exif = new Exif();
const { pShadow,pRomantic,pSmoke,pBurnPapper,pNaruto,pLoveMsg,pMsgGrass,pGlitch,pDoubleHeart,pCoffeCup,pLoveText,pButterfly } = require('./lib/photooxy')
const { msgFilter } = require('./lib/antispam')
const _prem = require('./lib/premium')
const _sewa = require("./lib/sewa")
const voting = JSON.parse(fs.readFileSync('./database/voting/voting.json'))
const { addVote, delVote } = require('./database/voting/vote')
const afk = require("./lib/afk")
const { yta, ytv, upload, uploadImages, styleText } = require('./lib/ytdl')
const { tiktokDown } = require("./lib/tiktok")
const menubot = require('./Menu/zeeoneofc.js')
const { wikiSearch } = require('./lib/wiki.js')
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword");
const { addCommands, getJawabanCmd, getSoalCmd, getCommandsPosi, checkCommands, isCreated, deleteCommands } = require('./lib/commands')
const lolkey = '78bd89cd7b4d6205e3e18061' 
			const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
			const setting = JSON.parse(fs.readFileSync('./settings.json'))
			const _user = JSON.parse(fs.readFileSync('./database/user.json'))
			const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
			const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
			const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
			const _level = JSON.parse(fs.readFileSync('./database/level.json'))
			const _afk = JSON.parse(fs.readFileSync('./database/afk.json'))
			const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
			const antivo = JSON.parse(fs.readFileSync('./database/AVO.json'))
			const atro = JSON.parse(fs.readFileSync('./database/ATO.json'))
			const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
			const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
			const setiker = JSON.parse(fs.readFileSync('./database/stick.json'))
			const audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
			const badword = JSON.parse(fs.readFileSync('./database/badword.json'));
			const grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
			const senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
			let cmdDB = JSON.parse(fs.readFileSync('./database/commands.json'))
			const scommand = JSON.parse(fs.readFileSync('./database/scommand.json')) 
			const imagebb = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"

let blocked = []
limitawal = "100" 
namabot = setting.botname
owner_name = setting.ownername
owner_number = setting.ownerNumber
gamewaktu = "3" 
numbernye = "0" 
simbolnya = "•"
petik = '```'
prefa = "!"
public_mode = setting. public_mode
mlistmsg = false 
multiprefix = true 
nopref = false 
battre = "Not Detected" 
charg = "Not Detected" 
charging = false
autovn = false
ngetik = false
baterai = { baterai: 100, cas: false }
thumbnail = fs.readFileSync(`./image/${setting.thumbnail}`)

const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
   }

const runtime = function(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor(seconds % (3600 * 24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}
const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const getLevelingXp = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
						if (_level[i].id === sender) {
							position = i
							}
					})
if (position !== false) {
			return _level[position].xp
			}
		}

const getLevelingLevel = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			return _level[position].level
			}
		}

const getLevelingId = (sender) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			return _level[position].id
			}
		}

const addLevelingXp = (sender, amount) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
			_level[position].xp += amount
				fs.writeFileSync('./database/level.json', JSON.stringify(_level))
			}
		}

const addLevelingLevel = (sender, amount) => {
			let position = false
				Object.keys(_level).forEach((i) => {
					if (_level[i].id === sender) {
						position = i
							}
					})
if (position !== false) {
				_level[position].level += amount
						fs.writeFileSync('./database/level.json', JSON.stringify(_level))
					}
			}

const addLevelingId = (sender) => {
	const obj = {id: sender, xp: 0, level: 0}
				_level.push(obj)
				fs.writeFileSync('./database/level.json', JSON.stringify(_level))
				}
 const getUserRandomId = () => {
 	return _user[Math.floor(Math.random() * _user.length)].id
 }

const addRegisterUser = (userid, sender, age, time, serials) => {
	const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
	_user.push(obj)
	fs.writeFileSync('./database/user.json', JSON.stringify(_user))
	}

const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
	}

const cekUser = (sender) => {
	let status = false
	Object.keys(_user).forEach((i) => {
		if (_user[i].id === sender) {
			status = true
			}
			})
			return status
			}

var date = new Date();
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
		switch(hari) {
			case 0: hari = "Minggu"; break;
			case 1: hari = "Senin"; break;
			case 2: hari = "Selasa"; break;
			case 3: hari = "Rabu"; break;
			case 4: hari = "Kamis"; break;
			case 5: hari = "Jum`at"; break;
			case 6: hari = "Sabtu"; break;
			}
		switch(bulan1) {
			case 0: bulan1 = "Januari"; break;
			case 1: bulan1 = "Februari"; break;
			case 2: bulan1 = "Maret"; break;
			case 3: bulan1 = "April"; break;
			case 4: bulan1 = "Mei"; break;
			case 5: bulan1 = "Juni"; break;
			case 6: bulan1 = "Juli"; break;
			case 7: bulan1 = "Agustus"; break;
			case 8: bulan1 = "September"; break;
			case 9: bulan1 = "Oktober"; break;
			case 10: bulan1 = "November"; break;
			case 11: bulan1 = "Desember"; break;
			}
			var tampilTanggal = "" + hari + ", " + tanggal + ", " + bulan1 + ", " + tahun;
				var tampilWaktu = "" + jam + " Jam , " + menit + " Menit , " + detik + " Detik";
            
module.exports = Zeeone = async (Zeeone, Ofc) => {
	try {
		if (!Ofc.hasNewMessage) return
		Ofc = Ofc.messages.all()[0]
		if (!Ofc.message) return 
		if (Ofc.key && Ofc.key.remoteJid == 'status@broadcast') return
		if ((Object.keys(Ofc.message)[0] === 'ephemeralMessage' && JSON.stringify(Ofc.message).includes('EPHEMERAL_SETTING')) && Ofc.message.ephemeralMessage.message.protocolMessage.type === 3) {
		Zeeone.sendMessage(Ofc.key.remoteJid, `Defak ada yg send bug`, MessageType.text)
		Zeeone.sendMessage(Ofc.key.remoteJid, `Pasti bocil nih`, MessageType.text)
		Zeeone.sendMessage(Ofc.key.remoteJid, `*TANDAI TELAH DI BACA*\n`.repeat(100), MessageType.text)
		}
		m = simple.smsg(Zeeone, Ofc)
		global.prefix
		global.blocked
		Ofc.message = (Object.keys(Ofc.message)[0] === 'ephemeralMessage') ? Ofc.message.ephemeralMessage.message : Ofc.message
		const content = JSON.stringify(Ofc.message)
		const from = Ofc.key.remoteJid
		const { buttonsMessage, text, extendedText, contact, contacsArray, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wib = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		function formatDate(n, locale = 'id') {
			let d = new Date(n)
			return d.toLocaleDateString(locale, {
				weekday: 'long',
				day: 'numeric',
				month: 'long',
				year: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric'
				})
				}
			let d = new Date
			let locale = 'id'
			let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
			let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
			let week = d.toLocaleDateString(locale, { weekday: 'long' })
			let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
			let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
			const type = Object.keys(Ofc.message)[0]
			const addCmd = (id, command) => {
			const obj = { id: id, chats: command }
			scommand.push(obj)
			fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
			}
			const getCommandPosition = (id) => {
				let position = null
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						position = i
					}
				})
				if (position !== null) {
					return position
				}
			}
			const getCmd = (id) => {
				let position = null
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						position = i
					}
				})
				if (position !== null) {
					return scommand[position].chats
				}
			}
			const checkSCommand = (id) => {
				let status = false
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						status = true
					}
				})
			return status
		}
			const cmd = (type === 'buttonsResponseMessage' && Ofc.message.buttonsResponseMessage.selectedButtonId && m.quoted.sender === Zeeone.user.jid) ? Ofc.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && Ofc.message.listResponseMessage.singleSelectReply.selectedRowId && m.quoted.sender === Zeeone.user.jid) ? Ofc.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(Ofc.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(Ofc.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? getCmd(Ofc.message.stickerMessage.fileSha256.toString('hex')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
			if (multiprefix){
				var prefix = /^[•×¶∆£¢€¥~+×!#%&.,/\^]/.test(cmd) ? cmd.match(/^[•×¶∆£¢€¥~+×!#%&.,/\^]/gi) : '!'
				} else {
					if (nopref){
						prefix = ''
						} else {
							prefix = prefa
						}
					}            
			body = (type === 'buttonsResponseMessage' && Ofc.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && m.quoted.sender === Zeeone.user.jid) ? Ofc.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && Ofc.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && m.quoted.sender === Zeeone.user.jid) ? Ofc.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && Ofc.message.conversation.startsWith(prefix)) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption.startsWith(prefix) ? Ofc.message.imageMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption.startsWith(prefix) ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text.startsWith(prefix) ? Ofc.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(Ofc.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(Ofc.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? (getCmd(Ofc.message.stickerMessage.fileSha256.toString('hex')).startsWith(prefix) ? getCmd(Ofc.message.stickerMessage.fileSha256.toString('hex')) : '') : ""
			budy = (type === 'conversation') ? Ofc.message.conversation : (type === 'extendedTextMessage') ? Ofc.message.extendedTextMessage.text : ''
			qb = Object.keys(Ofc.message)[0] == "buttonsResponseMessage" ? Ofc.message.buttonsResponseMessage.selectedButtonId : ""
			const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			chats = (type === 'conversation') ? Ofc.message.conversation : (type === 'extendedTextMessage') ? Ofc.message.extendedTextMessage.text : ''
			const arg = chats.slice(command.length + 2, chats.length)
			const arg2 = budy.slice(command.length + 1, budy.length)
			const argss = body.split(/ +/g)
			const isCmd = body.startsWith(prefix)
			const q = args.join(' ')
			const botNumber = Zeeone.user.jid
			const botNumberss = Zeeone.user.jid.split("@")[0] + '@c.us'
			const isGroup = from.endsWith('@g.us')
			let sender = Ofc.key.fromMe ? Zeeone.user.jid : Ofc.key.remoteJid.endsWith('@g.us') ? Ofc.participant : Ofc.key.remoteJid
			const itsMe = sender == botNumber ? true : false
			try {
					pp_userb = await Zeeone.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
			const isSelf = Ofc.key.fromMe ? true : false
			const senderNumber = sender.split("@")[0]
			const totalchat = await Zeeone.chats.all()
			const ownerNumber = [`${owner_number}@s.whatsapp.net`]
			const unread = await Zeeone.loadAllUnreadMessages()
			const conts = Ofc.key.fromMe ? Zeeone.user.jid : Zeeone.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const orang = sender.split("@")[0]
			const me = Zeeone.user
			const nomerbot = me.jid.split("@")[0]
			const pushname = Ofc.key.fromMe ? Zeeone.user.name : conts.notify || conts.vname || conts.name || '-'
			const mentionByTag = type == "extendedTextMessage" && Ofc.message.extendedTextMessage.contextInfo != null ? Ofc.message.extendedTextMessage.contextInfo.mentionedJid : []
			const mentionByreply = type == "extendedTextMessage" && Ofc.message.extendedTextMessage.contextInfo != null ? Ofc.message.extendedTextMessage.contextInfo.participant || "" : ""
			const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
			mention != undefined ? mention.push(mentionByreply) : []
			const mentionUser = mention != undefined ? mention.filter(n => n) : []
			const groupMetadata = isGroup ? await Zeeone.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.id : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			var pes = (type === 'conversation' && Ofc.message.conversation) ? Ofc.message.conversation : (type == 'imageMessage') && Ofc.message.imageMessage.caption ? Ofc.message.imageMessage.caption : (type == 'videoMessage') && Ofc.message.videoMessage.caption ? Ofc.message.videoMessage.caption : (type == 'extendedTextMessage') && Ofc.message.extendedTextMessage.text ? Ofc.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

			const isOwner = ownerNumber.includes(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiVo = isGroup ? antivo.includes(from) : false
			const isAntro = isGroup ? atro.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAfkOn = afk.checkAfkUser(sender, _afk)
			const isVote = isGroup ? voting.includes(from) : false
			const isSewa = _sewa.checkSewaGroup(from, sewa)
			const isPrem = isOwner ? true : _prem.checkPremiumUser(sender, premium)
			const isUser = cekUser(sender)
			const isBan = ban.includes(sender)
			const isBadword = isGroup ? grupbadword.includes(from) : false

			const processsTime = (timestamp, now) => {
			return moment.duration(now - moment(timestamp * 1000)).asSeconds()} 

			const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
			if(time2 < "23:59:00"){
				var ucapannya = `Night 🌚 ${pushname}`
				}
       	 if(time2 < "19:00:00"){
     		   var ucapannya = `Night 🌚 ${pushname}`
				}
     	   if(time2 < "18:00:00"){
     		   var ucapannya = `Afternoon 🌅 ${pushname}`
				}
      	  if(time2 < "15:00:00"){
     		   var ucapannya = `GoodDay 🌞 ${pushname}`
				}
    	    if(time2 < "11:00:00"){
       		 var ucapannya = `Morning 🌄 ${pushname}`
				}
    	    if(time2 < "05:00:00"){
  		      var ucapannya = `Night 🌚 ${pushname}`
				}
				mess = {
					wait: 'Proses njing..',
					limit: 'Limit kamu habis lord , Silahkan beli dengan #buylimit <nominal> atau minta gift dari user lain',
					sewabot: ` 「 *SEWA BOT* 」 \n\nBerikut list sewa bot kami

•> 30k / BULAN (PREMIUM)
Isi sendiri

Minat? Pm wa.me/${owner_number}`,
					ban: 'Maaf njing Kamu Sudah Di Banned!',
					error: 'Error njing',
					only: {
						personal: 'Only Private Chat Lord',
						admin: 'Khusus Admin Group Lord',
						group: 'Khusus Dalam Grup Lord',
						 prem: 'Khusus User Premium Lord',
						owner: 'Khusus Owner Bot Lord',
						 }
					} 
				

			selectedButton = (type == 'buttonsResponseMessage') ? Ofc.message.buttonsResponseMessage.selectedButtonId : ''
			responseButton = (type == 'listResponseMessage') ? Ofc.message.listResponseMessage.title : ''
			const listmsg = (from, title, desc, button, futer, list) => {
				let po = Zeeone.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": button,"footerText": futer+'\nBot Created By ZeeoneOfc',"listType": "SINGLE_SELECT","sections": list}}, {})
				return Zeeone.relayWAMessage(po, {waitForAck: true})
				}
			const isUrl = (url) => {
				return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
				}
			function parseMention(text = '') {
				return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
				}
			const reply = (teks) => {
				return Zeeone.sendMessage(from, teks, text, {quoted: Ofc, contextInfo: { mentionedJid: parseMention(teks) }})
				}
			const sendImage = (teks) => {
				Zeeone.sendMessage(from, teks, image, {quoted:Ofc})
				 }
			 function randomNomor(angka){
				 return Math.floor(Math.random() * angka) + 1
				}
			function pickRandom(arr) {
				return arr[Math.floor(Math.random() * arr.length)]
				}
			const nebal = (angka) => {
				return Math.floor(angka)
				}
			const sendMess = (hehe, teks) => {
				Zeeone.sendMessage(hehe, teks, text)
				}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Zeeone.sendMessage(from, {text: teks.trim(), jpegThumbnail: thumbnail}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : Zeeone.sendMessage(from, {text: teks.trim(), jpegThumbnail: thumbnail}, extendedText, { sendEphemeral: true, quoted: Ofc, contextInfo: { "mentionedJid": memberr } })
				}
			const getUserrRandomId = () => {
				return _user[Math.floor(Math.random() * _user.length)].id
				}
				const sendTextWithMentions = (teks, member, id) => {
				(id == null || id == undefined || id == false) ? Zeeone.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": member } }) : Zeeone.sendMessage(from, teks.trim(), extendedText, { quoted: Ofc, contextInfo: { "mentionedJid": member } })
				} 
			function monospace(string) {
				return '```' + string + '```'
				}   
			const hideTag = async function(from, text){
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, text, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
				}  
			const sendMention = async(from, text, mentioned, quoted = "") => {
				Zeeone.sendMessage(from, text, text, { quoted: quoted, contextInfo: { mentionedJid: [mentioned] } })
				 }
			const hideTagStiker = async(from, buffer) => {
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, buffer, sticker, { sendEphemeral: true, contextInfo: { mentionedJid: ane } })
				}
		const promoteAdmin = async function(to, target=[]){
				if(!target.length > 0) { return  reply("No target..") }
				let g = await Zeeone.groupMetadata(to)
				let owner = g.owner.replace("c.us","s.whatsapp.net")
				let me = Zeeone.user.jid
				for (i of target){
					if (!i.includes(me) && !i.includes(owner)){
						const res = await Zeeone.groupMakeAdmin(to, [i])
						 }else{
							reply("NOT PREMITED")
						}
					}
				}
			const demoteAdmin = async function(to, target=[]){
					if(!target.length > 0) { return  reply("No target..") }
					let g = await Zeeone.groupMetadata(to)
					let owner = g.owner.replace("c.us","s.whatsapp.net")
					let me = Zeeone.user.jid
					for (i of target){
						if (!i.includes(me) && !i.includes(owner)){
							const res = await Zeeone.groupDemoteAdmin(to, [i])
							} else {
								reply("NOT PREMITED")
							}
						}
					}
			const kickMember = async(id, target = []) => {
					let group = await Zeeone.groupMetadata(id)
					let owner = group.owner.replace("c.us", "s.whatsapp.net")
					let me = Zeeone.user.jid
					for (i of target) {
						if (!i.includes(me) && !i.includes(owner)) {
							await Zeeone.groupRemove(to, [i])
							} else {
								await Zeeone.sendMessage(id, "Not Premited!", "conversation")
							}
						}
					}
			const kick = function(from, orangnya){
				for (let i of orangnya){
					Zeeone.groupRemove(from, [i])
				}
			}
			const add = function(from, orangnya){
					Zeeone.groupAdd(from, orangnya)
				}
			const sendKontak = (from, nomor, nama, org = "") => {
				const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
				Zeeone.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: Ofc})
			}
			const hideTagKontak = async(from, nomor, nama) => {
				vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
				let anu = await Zeeone.groupMetadata(from)
				let members = anu.participants
				let ane = []
				for (let i of members){
					ane.push(i.jid)
					}
					Zeeone.sendMessage(from, { displayname: nama, vcard: vcard }, contact, { contextInfo: { mentionedJid: ane } })
				}
			const sendFileFromStorage = (path, type, options) => {
				Zeeone.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
					reply('Terjadi kesalahan')
					console.log(e)
				})
			}
			const getGroup = async function(totalchat){
				let grup = []
				let a = []
				let b = []
				for (c of totalchat){
					a.push(c.jid)
				}
				for (d of a){
					if (d && d.includes('g.us')){
						b.push(d)
					}
				}
				for (e of b){
					let ingfo = await Zeeone.groupMetadata(e)
					grup.push(ingfo)
					}
					return grup
				}
				const sendButMessage = async (id, text1, desc1, but = [], options = {}) => {
					buttonMessage = {
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 1,
						};
						Zeeone.sendMessage(
						id,
						buttonMessage,
						MessageType.buttonsMessage,
						options
						);
						};
				const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
					kma = gam1
					mhan = await Zeeone.prepareMessage(id, kma, MessageType.location, {thumbnail:kma})
					buttonMessages = {
						locationMessage: mhan.message.locationMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 6
						}
						Zeeone.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const fakeReply = (teks, target, teks2) => {
					Zeeone.sendMessage(from, teks, text, {quoted: {key: {fromMe: false, participant: `${target}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: teks2}}})
				}
				let authorname = Zeeone.contacts[from] != undefined ? Zeeone.contacts[from].vname || Zeeone.contacts[from].notify : undefined	
				if (authorname != undefined) { } else { authorname = groupName }	
					function addMetadata(packname, author) {	
						if (!packname) packname = 'self'; if (!author) author = 'Zeeone';author = author.replace(/[^a-zA-Z0-9]/g, '');	
						let name = `${author}_${packname}`
						if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
				let len = JSON.stringify(json).length	
				let last	
				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)
					} else {
						bytes.unshift(0x00)	
					}	
				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
					} else {	
						last = len.toString(16)	
					}	
				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
					return `./sticker/${name}.exif`	
					})	
				}
				const sendStickerFromUrl = async(to, url) => {
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
					var names = getRandom('.webp')
					var namea = getRandom('.png')
					var download = function (uri, filename, callback) {
						request.head(uri, function (err, res, body) {
							request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
						});
					};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
						exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
							let media = fs.readFileSync(asw)
							Zeeone.sendMessage(to, media, sticker)
							console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
							fs.unlinkSync(asw)
							fs.unlinkSync(filess)
						});
					});
				});
			}
					const sendStickerUrl = async(to, url) => {
						console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
						var names = getRandom('.webp')
						var namea = getRandom('.png')
						var download = function (uri, filename, callback) {
							request.head(uri, function (err, res, body) {
								request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
							});
						};
					}
					const sendPTT = (res) => {
						Zeeone.sendMessage(from, res, audio, {mimetype: 'audio/mp4', ptt: false, quoted:Ofc})
					}
					const sendMediaURL = async(to, url, text="", mids=[]) =>{
						if(mids.length > 0){
							text = normalizeMention(to, text, mids)
						}
					const fn = Date.now() / 10000;
					const filename = fn.toString()
					let mime = ""
					var download = function (uri, filename, callback) {
						request.head(uri, function (err, res, body) {
							mime = res.headers['content-type']
							request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
						});
					};
					download(url, filename, async function () {
						console.log('done');
						let media = fs.readFileSync(filename)
						let type = mime.split("/")[0]+"Message"
						if(mime === "image/gif"){
							type = MessageType.video
							mime = Mimetype.gif
						}
						if(mime.split("/")[0] === "audio"){
							mime = Mimetype.mp4Audio
						}
						Zeeone.sendMessage(to, media, type, { quoted: Ofc, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
						fs.unlinkSync(filename)
					});
				}
					const sendFileFromUrl = async(link, type, options) => {
						hasil = await getBuffer(link)
						Zeeone.sendMessage(from, hasil, type, options).catch(e => {
							fetch(link).then((hasil) => {
								Zeeone.sendMessage(from, hasil, type, options).catch(e => {
									Zeeone.sendMessage(from, { url : link }, type, options).catch(e => {
										reply('Gagal Dalam Mendownload Dan Mengirim Media')
										console.log(e)
									})
								})
							})
						})
					}
					const sendGif = (from, gif) => {
						Zeeone.sendMessage(from, gif, MessageType.video, {mimetype: "video/gif"})
					}
					const beliprem = (sender, asu) => {
						let found = false
						Object.keys(limit).forEach((i) => {
							if (limit[i].id === sender) {
							found = i
						}
					})
					if (found !== false) {
						limit[found].limit += asu
						fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
					}
				}
					if(isGroup && !isVote) {
							if (budy.toLowerCase() === 'vote'){
								let vote = JSON.parse(fs.readFileSync(`./database/voting/pvote/${from}.json`))
								let _votes = JSON.parse(fs.readFileSync(`./database/voting/vote/${from}.json`))  
								let fil = vote.map(v => v.participant)
								let id_vote = sender ? sender : `${owner_number}@s.whatsapp.net`
								if(fil.includes(id_vote)) {
									return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
									} else {
										vote.push({
											participant: id_vote,
											voting: '✅'
										})
										fs.writeFileSync(`./database/voting/pvote/${from}.json`,JSON.stringify(vote))
										let _p = []
										let _vote = `「   VOTING  」\n\n*Vote* @${_votes[0].votes.split('@')[0]}\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit` 
										for(let i = 0; i < vote.length; i++) {
											_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}`
											_p.push(vote[i].participant)
										}  
										_p.push(_votes[0].votes)
										mentions(_vote,_p,true)   
									}
								} else if (budy.toLowerCase() === 'devote'){
									const vote = JSON.parse(fs.readFileSync(`./database/voting/pvote/${from}.json`))
									let _votes = JSON.parse(fs.readFileSync(`./database/voting/vote/${from}.json`))  
									let fil = vote.map(v => v.participant)
									let id_vote = sender ? sender : `${owner_number}@s.whatsapp.net`
									if(fil.includes(id_vote)) {
										return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
										} else {
											vote.push({
												participant: id_vote,
												voting: '❌'
											})
										fs.writeFileSync(`./database/voting/pvote/${from}.json`,JSON.stringify(vote))
										let _p = []
										let _vote = `「   VOTING  」\n\n*Vote* @${_votes[0].votes.split('@')[0]}\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit` 
										for(let i = 0; i < vote.length; i++) {
											_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}`
											_p.push(vote[i].participant)
											}  
											_p.push(_votes[0].votes)
											mentions(_vote,_p,true)   
											}
										}
									}	
					const getPremiumExpired = (sender) => {
						 let position = null
						 Object.keys(premium).forEach((i) => {
							if (premium[i].id === sender) {
								position = i
								}
						 })
						 if (position !== null) {
							return premium[position].expired
							 }
						}
					const expiredCheck = () => {
						setInterval(() => {
							let position = null
							Object.keys(premium).forEach((i) => {
								if (Date.now() >= premium[i].expired) {
									position = i
									}
								})
							if (position !== null) {
								console.log(chalk.bgHex('#3DB7E4').underline(color(`PREMIUM EXPIRED : ${premium[position].id}`,'red')))
								Zeeone.sendMessage(`${owner_number}@s.whatsapp.net`, `*「 PREMIUM EXPIRED 」* \n\n\`\`\`HAI OWNER! WAKTU PREMIUM wa.me/${premium[position].id.split("@")[0]} TELAH HABIS!\`\`\``, MessageType.text, {contextInfo:{mentionedJid: [premium[position].id]}})
								Zeeone.sendMessage(`${premium[position].id}`, `「 𝐍𝐎𝐓𝐈𝐅𝐘 」\nHai Kak selamat ${waktoo}!\nWAKTU PREMIUM KAKAK SEKARANG SUDAH HABIS ~\nTERMAKASIH 😊`, MessageType.text)
								premium.splice(position, 1)
								fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
							}
						}, 1000)
					}
					const getAllPremiumUser = () => {
						const array = []
						Object.keys(premium).forEach((i) => {
							array.push(premium[i].id)
						})
						return array
					}
					const expiredCheckS = (Zeeone, sewa) => {
						setInterval(() => {
							 let position = null
							Object.keys(sewa).forEach((i) => {
								if (Date.now() >= sewa[i].expired) {
									position = i
									}
								})
					if (position !== null) {
						sendButMessage(sewa[position].id, ` 「 *SEWA EXPIRED* 」 \n\n\`\`\`Waktu Sewa Di Grup Ini Sudah Habis, Bot Akan Keluar Otomatis\`\`\``, `Klik Button Untuk Perpanjang Waktu Penyewaan`, [
						{
							buttonId: `${prefix}extend`,
							buttonText: {
								displayText: `🔖 E X T E N D`,
								},
								type: 1,
								}]);
								Zeeone.sendMessage(`${owner_number}@s.whatsapp.net`, `*「 SEWA EXPIRED 」* \n\nHai Owner! Waktu Sewa *${sewa[position].id}*, Di Group *${groupName}* Telah Berakhir!`, MessageType.text)
								Zeeone.groupLeave(sewa[position].id)
							sewa.splice(position, 1)
						fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
					}
				}, 1000)
			}
					const fakefoto = { key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"}: {})}, message: {imageMessage: {caption: `${ucapannya}`, jpegThumbnail: thumbnail}}}
					const fakevideo = { key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"}: {})}, message: {videoMessage: {caption: `${ucapannya}`, jpegThumbnail: thumbnail}}}
					const fakelokasi = {key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {locationMessage: {degreesLatitude: -7.0389318, degreesLongitude: 113.8969749, name: 'Rusia', address: '@ZeeoneOfc', jpegThumbnail: thumbnail}}}
					const fakekontak = {key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {contactMessage: {displayName: `${ucapannya}`, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'N:Bot;Lord;Userbot;;\n' + 'FN: SUBSCRIBE YT ZEEONE OFC\n' + 'item1.TEL;waid=62887435047326:+62887435047326\n' + 'item1.X-ABLabel:Telepon\n' + 'END:VCARD'}}}
					const faketoko = {key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {productMessage: {product: {currencyCode: "BRL", title: `${ucapannya}`, priceAmount1000: 0, productImageCount: 0, productImage: {jpegThumbnail: thumbnail}}, businessOwnerJid: `${numbernye}@s.whatsapp.net`}}}
					const fakedoc = {key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapannya}`, pageCount: 0, fileName: `${ucapannya}`, jpegThumbnail: thumbnail}}}
					const fakeinvite = {key: {fromMe: false, participant: `${numbernye}@s.whatsapp.net`, remoteJid: `${numbernye}@s.whatsapp.net`}, message: {groupInviteMessage: {groupJid: from, inviteCode: `${ucapannya}`, groupName: groupName, caption: `${ucapannya}`, jpegThumbnail: thumbnail}}}
					const flokasi = {key:{ fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: { "locationMessage": { "name": `${ucapannya}`, 'jpegThumbnail': thumbnail}}}
					const faketroli = { key: { participant: `${numbernye}@s.whatsapp.net`},message: {orderMessage: {thumbnail: thumbnail,itemCount: 2004,status: 1,surface: 70000,message: `${ucapannya}`,orderTitle: `${ucapannya}`,sellerJid: `${numbernye}@s.whatsapp.net`}}}

					colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
					const isImage = (type === 'imageMessage')
					const isVideo = (type === 'videoMessage')
					const isSticker = (type == 'stickerMessage')
					const isMedia = (type === 'imageMessage' || type === 'videoMessage')
					const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
					const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
					const isQuotedLoca = type === 'extendedTextMessage' && content.includes('locationMessage')
					const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
					const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
					const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
					const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
					const isQuotedDocs = type === 'extendedTextMessage' && content.includes('documentMessage')
					const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
					const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
					const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')

					Zeeone.chatRead(from, "read")
					expiredCheck(premium)
					expiredCheckS(Zeeone, sewa)


					if (isGroup && isAntro && m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
						reply(`Troli Detected\n` + require('util').format(m.key))
						Zeeone.sendMessage(from, '*TANDAI TELAH DI BACA!!*\n'.repeat(300), text)
						await Zeeone.modifyChat(m.chat, 'delete', {
							includeStarred: false
						})
					}
					if (setiker.includes(messagesC)){
						namastc = messagesC
						buffer = fs.readFileSync(`./database/stick/${namastc}.webp`)
						fs.writeFileSync('./sticker/responder.webp', buffer)
						exec(`webpmux -set exif ./sticker/data.exif ./sticker/responder.webp -o ./sticker/responder.webp`, async (error) => {
							if (error) return reply(mess.error)
							Zeeone.sendMessage(from, fs.readFileSync(`./sticker/responder.webp`), sticker, {quoted: Ofc})
							fs.unlinkSync(`./sticker/responder.webp`)
						})
					}

					if (audionye.includes(messagesC)){
						namastc = messagesC
						buffer = fs.readFileSync(`./database/audio/${namastc}.mp3`)
						Zeeone.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: Ofc, ptt: true })
					}
					if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
						if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
							sendButMessage(from, ` *GROUP LINK DETECTED*\n\nMaaf Kamu Akan Di Kick Dari Group Ini!`, `Klik Di Bawah Untuk Mematikan`, [
							{
							buttonId: `${prefix}antilink off`,
							buttonText: {
								displayText: `🔖 DISABLE ANTILINK`,
								},
								type: 1,
								}]);
							Zeeone.groupRemove(from, [sender])
						}
					}
					if (budy.length > 10000) {
						if (!itsMe) return
						if (m.isBaileys) return
						sendMess(`${ownerNumber}`, `Hai Owner! *wa.me/${sender.split("@")[0]}* Terdeteksi Telah Mengirim Virtex ${isGroup?`*In Group ${groupName}*`:''}`, text)
						Zeeone.modifyChat(m.chat, 'delete', {
							includeStarred: false
						})
						Zeeone.sendMessage(from, `「 *VIRTEX DETECTED* 」 `, text, {quoted: Ofc})
						Zeeone.sendMessage(from, '*TANDAI TELAH DI BACA!!*\n'.repeat(300), text)
					}
					if (!m.isBaileys && isGroup && isBadword && !isOwner && !isGroupAdmins && !Ofc.key.fromMe){
						for (let kasar of badword){
							if (chats.toLowerCase().includes(kasar)){
								if (isCountKasar(sender, senbadword)){
									if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
									sendButMessage(from, `*ANTI BADWORD*\n\nHai ${pushname}\nSepertinya kamu sudah berkata kasar lebih dari 2x, maaf kamu akan di kick`, `Klik Di Bawah Untuk Mematikan`, [
									{
										buttonId: `${prefix}antibadword off`,
										buttonText: {
											displayText: `🔖 DISABLE ANTI BADWORD`,
											},
											type: 1,
											}]);
									Zeeone.groupRemove(from, [sender])
									delCountKasar(sender, senbadword)
									} else {
										addCountKasar(sender, senbadword)
										reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
									}
								}
							}
						}
						
				const levelRole = getLevelingLevel(sender)
					var role = 'Bronze 1'
					if (levelRole <= 2) {
						role = 'Bronze 1'
						} else if (levelRole <= 10) {
							role = 'Bronze 2'
							} else if (levelRole <= 20) {
								role = 'Bronze 3'
								} else if (levelRole <= 30) {
									role = 'Bronze 4'
									} else if (levelRole <= 40) {
										role = 'Bronze 5'
										} else if (levelRole <= 70) {
											role = 'Silver 1'
											} else if (levelRole <= 85) {
												role = 'Silver 2'
												} else if (levelRole <= 95) {
													role = 'Silver 3'
													} else if (levelRole <= 105) {
														role = 'Silver 4'
														} else if (levelRole <= 125) {
															role = 'Silver 5'
															} else if (levelRole <= 150) {
																role = 'Gold 1'
																} else if (levelRole <= 170) {
																	role = 'Gold 2'
																	} else if (levelRole <= 190) {
																		role = 'Gold 3'
																		} else if (levelRole <= 210) {
																			role = 'Gold 4'
																			} else if (levelRole <= 230) {
																				role = 'Gold 5'
																				} else if (levelRole <= 260) {
																					role = 'Platinum 1'
																					} else if (levelRole <= 290) {
																						role = 'Platinum 2'
																						} else if (levelRole <= 320) {
																							role = 'Platinum 3'
																							} else if (levelRole <= 350) {
																								role = 'Platinum 4'
																								} else if (levelRole <= 380) {
																									role = 'Platinum 5'
																									} else if (levelRole <= 410) {
																										role = 'Diamond 1'
																										} else if (levelRole <= 450) {
																											role = 'Diamond 2'
																											} else if (levelRole <= 500) {
																												role = 'Diamond 3'
																												} else if (levelRole <= 550) {
																													role = 'Diamond 4'
																													} else if (levelRole <= 600) {
																														role = 'Diamond 5'
																														} else if (levelRole <= 700) {
																															role = 'Master'
																															} else if (levelRole <= 800) {
																															role = 'Master ✩'
																														} else if (levelRole <= 900) {
																													role = 'Master ✩✩'
																												} else if (levelRole <= 1000) {
																											role = 'Master ✩✩✩'
																										} else if (levelRole <= 1100) {
																									role = 'Master ✯'
																								} else if (levelRole <= 1225) {
																							role = 'Master ✯✯'
																						} else if (levelRole <= 1340) {
																					role = 'Master ✯✯✯'
																				} else if (levelRole <= 1400) {
																			role = 'GrandMaster'
																		} else if (levelRole <= 1555) {
																	role = 'GrandMaster ✩'
																} else if (levelRole <= 1660) {
															role = 'GrandMaster ✩✩'
														} else if (levelRole <= 1710) {
													role = 'GrandMaster ✩✩✩'
												} else if (levelRole <= 1825) {
											role = 'GrandMaster ✯'
										} else if (levelRole <= 1950) {
									role = 'GrandMaster ✯✯'
								} else if (levelRole <= 2000) {
							role = 'GrandMaster ✯✯✯'
						} else if (levelRole <= 2220) {
					role = 'Legends'
				} else if (levelRole <= 2500) {
					role = 'Legends 2'
					} else if (levelRole <= 2700) {
						role = 'Legends 3'
						} else if (levelRole <= 2900) {
							role = 'Legends 4'
							} else if (levelRole <= 3100) {
								role = 'Legends 5'
								} else if (levelRole <= 3300) {
									role = 'Legends 6'
									} else if (levelRole <= 3600) {
										role = 'Legends 7'
										} else if (levelRole <= 3900) {
											role = 'Legends 8'
											} else if (levelRole <= 4200) {
												role = 'Legends 9'
												} else if (levelRole <= 4450) {
													role = 'Legends 10'
													} else if (levelRole <= 4700) {
														role = 'Legends 忍'
														} else if (levelRole <= 4900) {
															role = 'Legends 忍¹'
															} else if (levelRole <= 5100) {
																role = 'Legends 忍²'
																} else if (levelRole <= 5600) {
																	role = 'Legends 忍³'
																	} else if (levelRole <= 6100) {
																		role = 'Legends 忍⁴'
																		} else if (levelRole <= 7000) {
																			role = 'GrandLegends'
																			} else if (levelRole <= 10000) {
																				role = 'GrandLegends 1'
																				} else if (levelRole <= 20000) {
																					role = 'GrandLegends 2'
																					} else if (levelRole <= 30000) {
																						role = 'GrandLegends 3'
																						} else if (levelRole <= 40000) {
																							role = 'GrandLegends 4'
																							} else if (levelRole <= 50000) {
																								role = 'GrandLegends 忍¹'
																								} else if (levelRole <= 60000) {
																									role = 'GrandLegends 忍²'
																									} else if (levelRole <= 70000) {
																										role = 'GrandLegends 忍³'
																										} else if (levelRole <= 80000) {
																											role = 'GrandLegends 忍⁴'
																											} else if (levelRole <= 90000) {
																												role = 'Pro 숒'
																												} else if (levelRole <= 99999999999999) {
																													role = 'Pro × GrandLegends 숒'
																												}
					const addVn = function(kata){
						audionye.push(kata)
						fs.writeFileSync('./database/audio.json', JSON.stringify(audionye))
						}
					const dellVn = function(kata){
						anu = audionye.indexOf(kata)
						audionye.splice(anu, 1)
						fs.writeFileSync('./database/audio.json', JSON.stringify(audionye))
					}
					for (var i = 0; i < cmdDB.length ; i++) {
						if (budy.toLowerCase() === cmdDB[i].commands) {
							Zeeone.sendMessage(from, `${cmdDB[i].jawaban}`, text, {quoted:Ofc, thumbnail: thumbnail})
						}
					}
					const addStc = function(kata){
						setiker.push(kata)
						fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
					}
					const dellStc = function(kata){
						anu = setiker.indexOf(kata)
						setiker.splice(anu, 1)
						fs.writeFileSync('./database/stick.json', JSON.stringify(setiker))
					}
					if (isGroup && !m.isBaileys) {
						if (mentionUser.length !== 0){
							for (let ment of mentionUser) {
								if (afk.checkAfkUser(ment, _afk)) {
									const getId = afk.getAfkId(ment, _afk)
									const getReason = afk.getAfkReason(getId, _afk)
									const getTime = Date.now() - afk.getAfkTime(getId, _afk)
									const heheh = ms(getTime)
									reply(`AFK MODE\n\n@${ment.split('@')[0]} sedang afk\n\n*Alasan :* ${getReason}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu`)
								}
							}
						}
					if (afk.checkAfkUser(sender, _afk)) {
						const getId = afk.getAfkId(sender, _afk)
						const reason = afk.getAfkReason(sender, _afk)
						const getTime = Date.now() - afk.getAfkTime(getId, _afk)
						const heheh = ms(getTime)
						_afk.splice(afk.getAfkPosition(sender, _afk), 1)
						reply(`@${sender.split("@")[0]} telah kembali afk setelah *${reason}*\nSejak : ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik yang lalu\n\nselamat datang kembali`)
						fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
					}
				}
					if (isGroup && isUser && !isCmd) {
						const currentLevel = getLevelingLevel(sender)
						const checkId = getLevelingId(sender)
						try {
							if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
							const amountXp = Math.floor(Math.random() * 10) + 50
							const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
							const getLevel = getLevelingLevel(sender)
							addLevelingXp(sender, amountXp)
							if (requiredXp <= getLevelingXp(sender)) {
								addLevelingLevel(sender, 1)
								addBalance(sender, 30, balance)
								reply(`* 「 LEVEL UP 」 *\n\n🎯 *User :* @${sender.split("@")[0]}\n🆔 *Nomer :* ${sender.split("@")[0]}\n📊 *Xp :* ${getLevelingXp(sender)}\n💹 *Level :* ${getLevel} > ${getLevelingLevel(sender)}\n💳 *Balance :* $${getBalance(sender, balance)}*\n📛 *Role :* ${role}\n\nCongrats 🎉`)
								}
							} catch (err) {
								console.error(err)
							}
						}
					if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${sender.split("@")[0]}`,'green'))
						return reply('Jangan Spam Lord')
						} 
					if (isCmd && msgFilter.isFiltered(from) && isGroup) {
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${sender.split("@")[0]}`,'green'))
						return reply('Jangan Spam Lord')
					}
					if (autovn){
						await Zeeone.updatePresence(from, Presence.recording)
						} else if (ngetik){
							await Zeeone.updatePresence(from, Presence.composing)
							} else {
								await Zeeone.updatePresence(from, Presence.avaible)
							}
					if (isCmd && !isGroup) console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${pushname}`))
					if (isCmd && isGroup){
						console.log(color('[CMD]','magenta'), color(moment(Ofc.messageTimestamp * 1000).format('DD/MM/YYYY | HH:mm:ss'), 'white'), color(`${command}`,'magenta'), 'from', color(`${pushname}`), 'in', color(groupName,'magenta'))
						addBalance(sender, randomNomor(20), balance)
					}
					if (!Ofc.key.fromMe && !isOwner && public_mode === true ) return
					switch (command) {
						case 'allmenu': case 'help': case 'menu':
									ihsh = `${owner_number}@s.whatsapp.net`
									let cekvipp = ms(_prem.getPremiumExpired(sender,premium) - Date.now())
									let gaklo = [{
										"buttonId": `${prefix}owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `${prefix}mystat`,
										"buttonText": {
											"displayText": "STATICTIC"
											},
										"type": "RESPONSE"
										}]
										sendButLocation(from, menubot.allmenu(pushname, sender, isOwner, isPrem, cekvipp, getLimit, limitawal,limit, balance, getBalance, simbolnya, petik, prefix), `NOTE:\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\nLordUserbot™© | Allright Reserved.`, thumbnail, gaklo, {contextInfo: { mentionedJid: [sender,ihsh]}})
										break
						case 'public':
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner)
									if (public_mode === false) return
									public_mode = false
									sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [
									{
										buttonId: `${prefix}self`,
										buttonText: {
											displayText: `Self Mode`,
											},
											type: 1,
											}]);
									break;
						case 'self':
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner)
									if (public_mode === true) return
									public_mode = true
									sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [
									{
										buttonId: `${prefix}public`,
										buttonText: {
											displayText: `Public Mode`,
											},
											type: 1,
											}]);
									break;
						case 'topbalance':
									if(!isGroup)return reply(mess.only.group)
									let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
									let mebn = [];
									for (let i of balance){
										mebn.push(i.id)
										let bl = (i.balance)
										txot += `🆔 *ID :* @${i.id.split("@")[0]}\n💹 *Balance :* ${bl}\n\n`
										}
									mentions(txot, mebn, true)
									break
						case 'toplimit':{
									if(!isGroup)return reply(mess.only.group)
									let txot = `*── 「 TOP  LIMIT 」 ──*\n\n`
									let mebn = [];
									for (let i of limit){
										mebn.push(i.id)
										let bl = (i.limit)
										txot += `🆔 *ID :* @${i.id.split("@")[0]}\n📊 *Limit :* ${bl}\n\n`
									}
									mentions(txot, mebn, true)
									}
									break
						case 'bal': case 'limit': case 'ceklimit': case 'balance': 
									reply(`*${ucapannya} @${sender.split("@")[0]}* 

*📊 Limit : ${isPrem ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}*
*💹 Balance : $${getBalance(sender, balance)}*


Kamu Dapat Membeli Limit Dengan ${prefix}Buylimit *Nominal*

*Example :*
${prefix}buylimit 10

NOTE : 
- Harga Limit Perlimit adalah $100 balance`)
									break
						case 'level':{
									reply(`@${sender.split("@")[0]}

*📊 Level : ${getLevelingLevel(sender)}*
*🎯 Xp : ${getLevelingXp(sender)}*`)
}
									break
						case 'giftlimit': case 'givelimit':
									if (isPrem) return reply(`User Premium Tidak Bisa Melakukan Gift Limit Lord`)
									if (!isGroup) return reply(mess.only.group)
									if (!q.includes('|')) return  reply(`Contoh ${prefix + command} _@user | Nominal_`)
									const tujuan = q.substring(0, q.indexOf('|') - 1)
									const jumblah = q.substring(q.lastIndexOf('|') + 1)
									if(isNaN(jumblah)) return await reply('Jumlah Harus Berupa Angka Lord')
									if (jumblah < 1 ) return reply(`minimal transfer 1`)
									if (getLimit(sender, limitawal, limit) < jumblah) return reply(`Limit Mu Tidak Mencukupi Untuk Melakukan Gift Limit`)
									const tujuantf = `${tujuan.replace("@","")}@s.whatsapp.net`
									hasiltf = jumblah
									giveLimit(tujuantf, hasiltf, limit)
									beliprem(sender, jumblah)
									reply(`─ 「 *SUKSES* 」 ─

SUKSES TRANSFER LIMIT

🆔 *Pengirim :* @${sender.split("@")[0]}
📛 *Penerima :* ${tujuan}
💹 *Jumlah Limit :* ${jumblah}

Example : 
${prefix}giftlimit @user | 10 

*NOTE :*
Pastikan Transfer Limit Benar`)
									break 
						case 'buyprem': case 'beliprem':
									if (isPrem) return reply('Loe Dah Prem Cuy')
									if (getLimit(sender, limitawal, limit) < 1000) return reply(`Limitmu Tidak Cukup.\nDi Perlukan 1000 Limit Untuk Menjadi User Premium Trial 3 Hari`)
									_prem.addPremiumUser(`${sender}`, `3d`, premium)
									sendButMessage(from, `*Sekarang Akun Anda Telah Premium*`, `Klik Untuk Mengecek Waktu Expired`, [
									{
										buttonId: `${prefix}cekprem`,
										buttonText: {
											displayText: `🔖 CEK PREMIUM`,
											},
											type: 1,
											}]);
									beliprem(sender, 1000)
									break
						case 'buylimit':{
									if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
									if (q.includes('-')) return reply(`Jangan menggunakan -`)
									if (isNaN(q)) return reply(`Harus berupa angka`)
									let ane = Number(nebal(q) * 100)
									if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
									kurangBalance(sender, ane, balance)
									giveLimit(sender, nebal(q), limit)
									reply(`Pembeliaan limit sebanyak ${q} berhasil

*📊 Sisa Balance : ${getBalance(sender, balance)}*
*💹 Sisa Limit : ${getLimit(sender, limitawal, limit)} / ${limitawal}*`)
}
									break
						case 'playstore': 
									if(!q) return reply('Mau cari apa lord')
									reply(mess.wait)
									let play = await hx.playstore(q)
									let store = `*「 PLAY STORE 」*\n\n*Hasil Pencarian Dari : ${q}*`
									for (let i of play){
										store += `
🆔 *Nama* : ${i.name}
🎯 *Link* : ${i.link}\n
👨‍💻 *Dev* : ${i.developer}
🌝 *Link Dev* : ${i.link_dev}
`
}
									reply(store)
									break
						case 'brainly':
									if(!q) return reply('Mau cari apa lord')
									brainly(`${q}`).then(res => {
										teks = `─ 「 *BRAINLY* 」 ─\n\n*Hasil Pencarian Dari ${q}*\n\n`
										for (let Y of res.data) {
											teks += `🔖 *PERTANYAAN :* ${Y.pertanyaan}\n💬 *JAWABAN :* ${Y.jawaban[0].text}\n\n`
											}
											Zeeone.sendMessage(from, teks, text, {quoted: Ofc, detectLinks: false})
										})
									break
						case 'mediafire':
									if (!isPrem) return reply(mess.only.prem)
									if (args.length < 1) return reply('Masukkan link mediafire')
									if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error')
									reply(mess.wait)
									teks = args.join(' ')
									res = await mediafireDl(teks)
									result = ` *MEDIAFIRE DOWNLOAD*

*Data Berhasil Didapatkan!*

🆔 Nama : ${res[0].nama}
📊 Ukuran : ${res[0].size}
💬 Link : ${res[0].link}

_Tunggu Proses Upload Media_`
									reply(result)
									sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: Ofc})
									break
						case 'igdl': case 'igpost': case 'ig': case 'instagram': 
									if (args.length < 1) return reply(`Link Nya Mana Lord?`)
									if (!q.includes('instagram')) return reply(mess.error)
									anu = await igDownloader(`${q}`)
									.then((data) => { sendMediaURL(from, data.result.link, data.result.desc, Ofc) })
									.catch((err) => { reply(String(err)) })
									break
						case 'tiktoknowm':   case 'tiktok':
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
									if (!q) return reply('Linknya?')
									hx.ttdownloader(`${args[0]}`)
									.then(result => {
										const { wm, nowm, audio } = result
										axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
										.then(async (a) => {
											me = `*Link* : ${a.data}`
											Zeeone.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted: Ofc, caption:me})
											})
										})
									break 
						case 'tiktokmusic': case 'tiktokaudio':  
									if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid Link')
									if (!q) return reply('Linknya?')
									hx.ttdownloader(`${args[0]}`)
									.then(result => {
										const { wm, nowm, audio } = result
										axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
										.then(async (a) => {
											Zeeone.sendMessage(from,{url:`${audio}`},MessageType.audio,{mimetype:'audio/mp4',quoted: Ofc})
											})
										})
									break
						case 'playvideo': case 'playmp4': case 'ytmp4': case 'ytvideo':{
									if (!q) return reply(`Example : ${prefix+command} query`)
									reply(mess.wait)
									try {
										let yut = await yts(q)
										ytv(yut.videos[0].url)
										.then((res) => {
											const { dl_link, thumb, title, filesizeF, filesize } = res
											axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
											.then((a) => {
												if (Number(filesize) >= 40000) return Zeeone.sendMessage(from, `*─ 「 YOUTUBE VIDEO 」─*\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n\n\`\`\`Ukuran File Terlalu Besar Jadi Di Sajikan Dalam Bentuk Link\`\`\``, text, {quoted : Ofc})
												Zeeone.sendMessage(from, thumb, image, {caption: `─ 「 YOUTUBE VIDEO 」─\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n*▢ LINK :* ${yut.videos[0].url}\n\n\`\`\`Tunggu Sebentar, Video Sedang Dikirim\`\`\``, quoted : Ofc})
												sendFileFromUrl(dl_link, video, {mimetype: 'video/mp4',quoted:Ofc})
												})
												})
												} catch (err) {
													console.log('Error : %s', color(err, 'red'))
													reply(`ERROR`)
												}
											}
									break
						case 'play': case 'ytmp3':
									if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
									var srch = args.join(' ')
									aramas = await yts(srch);
									aramat = aramas.all 
									var mulaikah = aramat[0].url
									try {
										yta(mulaikah)
										.then((res) => {
											const { dl_link, thumb, title, filesizeF, filesize } = res
											axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
											.then(async (a) => {
												if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
												const captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
												await sendMediaURL(from, thumb, captions)
												sendMediaURL(from, dl_link).catch(() => reply('error'))
												}) 
											})
										} catch (err) {
											reply('Terjadi kesalahan')
											}
									break
						case 'yts': case 'youtubesearch': case 'ytsearch':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* _query_`)
									reply(mess.wait)
									yts(q)
									.then((res) => {
										let yt = res.videos
										let txt = `─ 「 *YOUTUBE SEARCH* 」 ─\n\n*Hasil Pencarian : ${q}*\n`
										l = 1
										for (let i = 0; i < 15; i++){
											txt += `\n${l++}. *Judul :* ${yt[i].title}\n*Id :* ${yt[i].videoId}\n*Upload :* ${yt[i].ago}\n*Ditonton :* ${yt[i].views}\n*Duration :* ${yt[i].timestamp}\n*Url :* ${yt[i].url}\n___________________\n`
											}
											sendFileFromUrl(yt[0].image, image, {caption: txt, quoted:Ofc})
										})
										.catch((err) => {
											console.log(color('[YT SEARCH]', 'red'), err)
											reply(mess.error)
											})
										}
									break
						case 'wiki': case 'wikipedia':
									if (args.length < 1) return reply(' Yang Mau Di Cari Apa Lord? ')
									reply(mess.wait)
									teks = args.join(' ')
									res = await wikiSearch(teks).catch(e => {
										return reply('Error Hasil Tidak Ditemukan') 
										}) 
										result = `*JUDUL :* ${res[0].judul}\n*WIKI :* ${res[0].wiki}`
										sendFileFromUrl(res[0].thumb, image, {quoted: Ofc, caption: result}).catch(e => {
											reply(result)
										})
									break
						case 'pinterest': case 'pin':
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* _query_`)
									reply(mess.wait)
									let pin = await hx.pinterest(q)
									let ac = pin[Math.floor(Math.random() * pin.length)]
									let di = await getBuffer(ac)
									await Zeeone.sendMessage(from,di,image,{thumbnail: thumbnail, quoted: Ofc})
									break
						case 'waifu': case 'loli': case 'husbu': case 'milf': case 'cosplay': case 'wallml':
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									reply(mess.wait)
									let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
									let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
									Zeeone.sendMessage(from, wipi, image, {quoted: Ofc})
									limitAdd(sender, limit)
									break
						case 'asupan':{
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									reply(mess.wait)
									data = fs.readFileSync('./lib/asupan.js');
									jsonData = JSON.parse(data);
									randIndex = Math.floor(Math.random() * jsonData.length);
									randKey = jsonData[randIndex];
									p = await getBuffer(randKey.result)
									Zeeone.sendMessage(from, p, video, { quoted:  Ofc, mimetype: 'video/mp4', caption: 'Asupan Lord'})
									limitAdd(sender, limit)
									}
									break
						case 'delete': case 'del': case 'd':
									if (!Ofc.key.fromMe && !isGroupAdmins && !isOwner)return reply(mess.only.admin)
									if (!isQuotedReply) return reply(`Reply pesan dari bot!!`)
									Zeeone.deleteMessage(from, { id: Ofc.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
									break
						case 'afk':
									if (!isGroup) return reply(mess.only.group)
									if (isAfkOn) return reply('Kamu dalam mode afk Lord')
									let reason = body.slice(5) ? body.slice(5) : 'Nothing.'
									afk.addAfkUser(sender, Date.now(), reason, _afk)
									mentions(`─「 *AFK MODE* 」─

@${sender.split('@')[0]} sedang afk!
Alasan : ${reason}`, [sender], true)
									break
						case 'delvote': case 'dellvote':
									if (!Ofc.key.fromMe && !isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isVote) return reply('Tidak ada sesi Voting')
									delVote(from)
									reply('Sukses Menghapus sesi Voting Di Grup Ini')
									break
						case 'voting': case 'vote':
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isGroup) return reply(mess.only.group)
									if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
									if (!q) return reply(`*Example :*\n ${prefix + command} @tag target | reason| 1 (1 = 1 Menit)`)
									if (Ofc.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || Ofc.message.extendedTextMessage.contextInfo == null) {
										let id = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
										split = args.join(' ').replace('@', '').split('|')
										if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
										await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai!' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
										addVote(from,split[1],split[0],split[2],reply)
									}
									break
						case 'sewabot': 
									let gakloo = [{
										"buttonId": `${prefix}owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `${prefix}donasi`,
										"buttonText": {
											"displayText": "DONASI"
											},
										"type": "RESPONSE"
										}]
										sendButLocation(from, `${mess.sewabot}`, `Sewa bot om?`, {jpegThumbnail: thumbnail}, gakloo, {contextInfo: { mentionedJid: [sender]}})
										break
						case 'donasi':
									reply('Isi sendiri')
									break
						case 'join':case 'joingc':
									if (!q) return reply('Linknya?')
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner)
										if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Lord')
										reply('Tunggu Sebentar Otw Masuk Group')
										link = args[0].replace('https://chat.whatsapp.com/','')
										fak = Zeeone.query({ json: ['action', 'invite', link],
										expect200: true })
										reply('Berhasil Masuk Grup')
									break
						case 'kick': case 'headsot':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin) 
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									kick(from, mentionUser)
									break
						case 'revoke': case 'resetlinkgc': case 'resetlink':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin) 
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									Zeeone.query({ json: ['action', 'inviteReset', from], expect200: true })
									reply(`Sukses Reset Link Group!`)
									break
						case 'linkgc': case 'gclink': case 'linkgrup': case 'linkgroup': case 'grouplink':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)   
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									linkgc = await Zeeone.groupInviteCode (from)
									yeh = `*https://chat.whatsapp.com/${linkgc}*`
									Zeeone.sendMessage(from, {text: yeh,
									matchedText: 'https://chat.whatsapp.com/' + linkgc, 
									canonicalUrl: `https://chat.whatsapp.com/${linkgc}`, 
									description: `https://chat.whatsapp.com/${linkgc}`, 
									title: `${groupName}`, 
									jpegThumbnail: thumbnail}, 'extendedTextMessage', { detectLinks: false, contextInfo: {mentionedJid: [yeh]}, quoted: Ofc})
									break
						case 'add':
									try {
										if (!isGroup) return reply(mess.only.group)
										if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)  
										if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
										if (Ofc.message.extendedTextMessage === null || Ofc.message.extendedTextMessage === undefined) {
											entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
											response = await Zeeone.groupAdd(from, [entah])
											o = response.participants[0]
											let inv = (Object.values(o))
											if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
											if(inv[0].code == 403) return reply('Eror, user private acc')
											if(inv[0].code == 408) return reply('Eror, user baru saja keluar')
											if(inv[0].code == 401) return reply('Eror, Karena Bot Di Block Oleh Target')
												} else {
													entah = Ofc.message.extendedTextMessage.contextInfo.participant
													response = await Zeeone.groupAdd(from, [entah])
													o = response.participants[0]
													let inv = (Object.values(o))
													if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
													if(inv[0].code == 403) return reply('Gagal, Karena Di Private')
													if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
													if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target')
												}
											} catch {
												return 
											}
									break
						case 'setthumb': case 'setthum':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									boij = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									delb = await Zeeone.downloadMediaMessage(boij)
									fs.writeFileSync('./image/thumb.jpg', delb)
									matanecok = fs.readFileSync('./image/thumb.jpg')
									await sleep(5000)
									reply(`Sukses`)
									break    
						case 'auto':{
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (!q) return 
									if (
									args[0].toLowerCase() === 'ngetik' ||
									args[0].toLowerCase() === 'ketik' ||
									args[0].toLowerCase() === 'typing'
									){
										ngetik = true
										autovn = false
										reply(`Sukses....`)
										} else if (
										args[0].toLowerCase() === 'voicenote' ||
										args[0].toLowerCase() === 'recording' ||
										args[0].toLowerCase() === 'vn' 
									){
										ngetik = false
										autovn = true
										reply(`Sukses...`)
										} else {
											}
										}
									break
						case 'changeprefix': case 'setprefix':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (!q) return 
									if (
									args[0].toLowerCase() === 'multi' ||
									args[0].toLowerCase() === 'all' ||
									args[0].toLowerCase() === 'allprefix' ||
									args[0].toLowerCase() === 'multiprefix'
									){
										multiprefix = true
										nopref = false
										reply(`Berhasil Mengubah Prefix Ke Multi Prefix`)
										} else if (
										args[0].toLowerCase() === 'nopref' ||
										args[0].toLowerCase() === 'no' ||
										args[0].toLowerCase() === 'nonpref'
									){
										multiprefix = false
										nopref = true
										reply(`Berhasil Mengubah Prefix Ke No Prefix`)
										} else if(args[0] === `${q}`){
											if (q.length > 2) return reply(`Maximal 1 angka/huruf!!`)
											multiprefix = false
											nopref = false
											prefa = `${args[0]}`
											reply(`Berhasil Mengubah Prefix Ke *${q}*`)
										}
									break
						case 'setnamabot':{
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Alphabot`)
									Zeeone.updateProfileName(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									 }
									break
						case 'setbiobot':{
									 if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} Alphabot`)
									Zeeone.setStatus(q)
									.then((res) => reply('Sukses Lord'))
									.catch((err) => reply('Eror Lord'))
									}
									break
						case 'grup': case 'grub': case 'group':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (args[0] === "buka") {
										Zeeone.groupSettingChange(from, GroupSettingChange.messageSend, false)
										} else if (args[0] === "tutup") {
											Zeeone.groupSettingChange(from, GroupSettingChange.messageSend, true)
											} else {
												reply (`${prefix + command} buka / tutup`)
												}
									break 
						case 'promote':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (Ofc.message.extendedTextMessage === null || Ofc.message.extendedTextMessage === undefined) return;
									if (Ofc.message.extendedTextMessage.contextInfo.participant === undefined) {
										entah = Ofc.message.extendedTextMessage.contextInfo.mentionedJid
										if (entah.length > 0) {
											var mems_ids = []
											for (let ids of entah) {
												mems_ids.push(ids)
												}
												Zeeone.groupMakeAdmin(from, mems_ids)
												} else {
													Zeeone.groupMakeAdmin(from, entah)
													}
												} else {
													entah = Ofc.message.extendedTextMessage.contextInfo.participant 
													Zeeone.groupMakeAdmin(from, [entah])
												}
									break
						case 'demote':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (Ofc.message.extendedTextMessage === null || Ofc.message.extendedTextMessage === undefined) return;
									if (Ofc.message.extendedTextMessage.contextInfo.participant === undefined) {
										entah = Ofc.message.extendedTextMessage.contextInfo.mentionedJid
										if (entah.length > 0) {
											var mems_ids = []
											for (let ids of entah) {
												mems_ids.push(ids)
												}
												Zeeone.groupDemoteAdmin(from, mems_ids)
												} else {
													Zeeone.groupDemoteAdmin(from, [entah[0]])
													}
													} else {
														entah = Ofc.message.extendedTextMessage.contextInfo.participant
														Zeeone.groupDemoteAdmin(from, [entah])
													}
									break
						case 'setnamagrup': case 'setnamegrup': case 'setgrupname':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (args.length == 0) return reply(`Penggunaan ${prefix + command} Alphabot Support`)
										Zeeone.groupUpdateSubject(from, q)
										.then((res) => reply(jsonformat(res)))
										.catch((err) => reply(jsonformat(err)))
									break
						case 'setdesc': case 'setdesk': case 'setdeskripsi':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (args.length == 0)  return reply(`Penggunaan ${prefix + command} Alphabot Support`)
										Zeeone.groupUpdateDescription(from, q)
										.then((res) => reply(jsonformat(res)))
										.catch((err) => reply(jsonformat(err)))
									break
						case 'setppbot':
									if (!isOwner && !Ofc.key.fromMe) return
									if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
									enmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(enmedia)
									await Zeeone.updateProfilePicture(botNumber, media)
									reply('Makasih pp barunya lord 🌝')
									break
						case 'setppgrup':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
									if (isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										let media = await Zeeone.downloadMediaMessage(encmedia)
										Zeeone.updateProfilePicture(from, media)
										.then((res) => reply(jsonformat(res)))
										.catch((err) => reply(jsonformat(err)))
										} else if (isQuotedSticker){
											if (Ofc.message.videoMessage) return reply('Error Bro Wkwkwk')
											encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
											media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
											ran = getRandom('.png')
											exec(`ffmpeg -i ${media} ${ran}`, (err) => {
												fs.unlinkSync(media)
												if (err) return reply('Eror Lord')
												buffer = fs.readFileSync(ran)
												Zeeone.updateProfilePicture(from, buffer)
												fs.unlinkSync(ran)
												})
											} else {
												reply(`Kirim atau tag gambar dengan caption ${prefix + command}`)
											}
									break
						case 'premium': case 'prem':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (args[0].startsWith('08')) return reply(`Example : ${prefix + command} add/dell 62887435047326`)
									if (args[0].startsWith("+62")) return reply(`Example : ${prefix + command} add/dell 62887435047326`)
									const arx = body.split(' ')
									if (arx[1] == 'add') {
										_prem.addPremiumUser(arx[2].replace("@","")+ '@s.whatsapp.net', args[2], premium)
										reply(` *PREMIUM ADDED* 

📛 *USER : @${arx[2].replace("@","")}*
🆔 *NOMOR : ${arx[2].replace("@","")}*

🎯 EXPIRED :
 🔖 ${ms(toMs(args[2])).days} Hari
 🔖 ${ms(toMs(args[2])).hours} Jam
 🔖 ${ms(toMs(args[2])).minutes} Menit
 🔖 ${ms(toMs(args[2])).seconds} Detik`)
										sendButMessage(arx[2].replace("@","")+'@s.whatsapp.net', `*Sekarang Akun Anda Telah Premium*`, `Klik Untuk Mengecek Waktu Expired`, [
									{
										buttonId: `${prefix}cekprem`,
										buttonText: {
											displayText: `🔖 CEK PREMIUM`,
											},
											type: 1,
											}]);
										} else if (arx[1] == 'del') {
											premium.splice(_prem.getPremiumPosition(arx[2].replace("@","") + '@s.whatsapp.net', premium), 1)
											fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
											reply('Sukses Lord')
											} else {
												Zeeone.sendMessage(`${owner_number}@s.whatsapp.net`, `*FORMAT SALAH!!*\n\nExample : \n${prefix + command} add @user Target Time\nUNTUK MENAMBAHKAN USER KE DATA USER PREMIUM\n\n${prefix + command} del @user\nUNTUK MENGHAPUS USER DARI DATA USER PREMIUM\n\nD = Day (s)\nH = Hour (s)\nM = Minute (s)\nS = Second (s)\n\n*Jadi Untuk Waktunya Kamu Isi Terserah Sesuai Kemauan Kamu, Contoh 1D Berarti 1HARI. Dst*`, MessageType.text, {quoted:Ofc})
											}
									break
						case 'cekprem': case 'cekpremium': case 'premiumcek':
									if (!isPrem) return reply(`Kamu bukan user premium\nkirim perintah ${prefix}daftarprem untuk membeli premium`)
									let cek = ms(getPremiumExpired(sender, premium) - Date.now())
									let premiumnya = `🎯 *EXPIRED :*
🔖 ${cek.days} Hari
🔖 ${cek.hours} Jam
🔖 ${cek.minutes} Menit
🔖 ${cek.seconds} Detik`
									reply(`${isOwner?'Unlimited Prem (Owner)':premiumnya}`)
									break
						case 'listprem': case 'listpremium': case 'premiumlist': case 'premlist':
									if (!isOwner && !Ofc.key.fromMe) return
									let txt = `「 LIST PREMIUM 」\n\n*💹 JUMLAH :* ${premium.length}\n\n`
									let men = [];
									for (let i of premium){
										men.push(i.id)
										let cekvi0p = ms(i.expired - Date.now())
										txt += `*🆔 Nomor : ${i.id.split("@")[0]}*\n*📛 User : @${i.id.split("@")[0]}*\n📊 Expired : ${cekvip.days} Hari, ${cekvi0p.hours} Jam, ${cekvi0p.minutes} Menit, ${cekvi0p.seconds} Detik\n\n`
									}
									reply(`${txt}`)
									break
						case 'extend': case 'perpanjang':
									if (!isSewa) return reply('Kamu belum sewa bot sebelumnya? klik #sewabot')
									reply('Sedang Mengirim Pesan Perpanjangan Masa Sewa Ke Owner Bot')
									Zeeone.sendMessage(`${owner_number}@s.whatsapp.net`, `Hai Owner, @${sender.split("@")[0]} Mau Memperpanjang Waktu Sewa Bot`, text, {contextInfo: {"mentionedJid" : [sender]}})
									break
						case 'sewa':{
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.sewabot)
									if(!isGroup) return reply(mess.only.group)
									if (args[0].toLowerCase() === 'add') {
										_sewa.addSewaGroup(from, args[1], sewa)
										reply(`Sukses Lord`)
									} else if (args[0].toLowerCase() === 'dell') {
										sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
										fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
										reply(`Sukses Lord`)
										} else {
										}
									}
									break
						case 'sewalist':  case 'listsewa':
									if (!isOwner && !Ofc.key.fromMe) return
									let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
									for (let i of sewa){
										let cekviopp = ms(i.expired - Date.now())
										txtnyee += `🆔 *ID :* ${i.id}\n📊 *Expire :* ${cekviopp.days} day(s) ${cekviopp.hours} hour(s) ${cekviopp.minutes} minute(s) ${cekviopp.seconds} second(s)\n\n`
										}
										reply(txtnyee)
									break
						case 'sewacheck': case 'ceksewa':  case 'sewacek':
									if (!isGroup) return reply(mess.only.group)
									if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
									let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
									let sewenye = `「 *SEWA EXPIRE* 」

🆔 *ID*: ${from}
💹 *EXPIRE :* ${cekvip.days} Hari, ${cekvip.hours} Jam, ${cekvip.minutes} Menit, ${cekvip.seconds} Detik`
									reply(sewenye)
									break
						case 'antibadword': case 'nobadword':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group`)
									if (args.length === 0) return reply(`Pilih on atau off`)
									if (args[0] == 'on'){
										if (isBadword) return reply(`Udah aktif Lord`)
										grupbadword.push(from)
										fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
										reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
										} else if (args[0] == 'off'){
											anu = grupbadword.indexOf(from)
											grupbadword.splice(anu, 1)
											fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
											reply('Antibadword Grup Dimatikan')
											} else {
												reply('pilih on / off')
												}
									break
						case 'antilink':
									if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
										if (args[0].toLowerCase() === 'on'){
											if (isAntiLink) return reply(`Sudah Di Aktifkan Sebelumnya!`)
											antilink.push(from)
											fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
											reply(`Succes mengaktifkan Fitur Antilink`)
											} else if (args[0].toLowerCase() === 'off'){
												if (!isAntiLink) return reply(`Fitur Ini Belum Pernah Di Aktifkan Di Group Ini`)
												var au = antilink.indexOf(from)
												antilink.splice(au, 1)
												fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
												reply(`Succes Mematikan Fitur Antilink`)
												} else {
													reply(`${prefix + command} on / off`)
													}
											break
						case 'listbadword':
									if (isBan) return
									let bi = `List badword\n\n`
									for (let boo of badword){
										bi += `- ${boo}\n`
										}
										bi += `\nTotal : ${badword.length}`
									reply(bi)
									break
						case 'addbadword':
									if (!isOwner && !Ofc.key.fromMe)return reply(mess.only.owner) 
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										if (isKasar(args[0].toLowerCase(), badword)) return reply(`Cari nama lain Lord`)
										addBadword(args[0].toLowerCase(), badword)
										reply(`Sukses Lord`)
										} else {
											if (isKasar(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)) return reply(`Udah ada`)
											addBadword(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)
											reply(`Sukses Lord`)
										}
									break
						case 'delbadword':{
									if (!isOwner && !Ofc.key.fromMe)return reply(mess.only.owner) 
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										if (!isKasar(args[0].toLowerCase(), badword)) return reply(`Tidak ada dalam list`)
										delBadword(args[0].toLowerCase(), badword)
										reply(`Sukses Lord`)
										} else {
											if (!isKasar(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)) return reply(`Tidak ada dalam list`)
											delBadword(Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation.toLowerCase(), badword)
											reply(`Sukses Lord`)
										}
									}
									break
						case 'clearbadword':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (!m.quoted) return reply(`Reply Pesan Target!`)
									entah = Ofc.message.extendedTextMessage.contextInfo.participant
									delCountKasar(entah, senbadword)
									reply(`Sukses clear badword ${entah}`)
									break
						case 'antitroli': case 'antifaketroli':{
									try {
										if (!isGroupAdmins && !isOwner && !Ofc.key.fromMe) return reply(mess.only.admin)
										if (args[0].toLowerCase() === 'on'){
											if (isAntro) return reply(`Sudah Di Aktifkan Sebelumnya!`)
											atro.push(from)
											fs.writeFileSync('./database/ATO.json', JSON.stringify(atro))
											reply(`Succes mengaktifkan Fitur Anti-Troli`)
											} else if (args[0].toLowerCase() === 'off'){
												if (!isAntro) return reply(`Fitur Ini Belum Pernah Di Aktifkan Di Group Ini`)
												var ou = atro.indexOf(from)
												atro.splice(ou, 1)
												fs.writeFileSync('./database/ATO.json', JSON.stringify(atro))
												reply(`Succes Mematikan Fitur Anti-Troli`)
												}
											} catch {
												}
											}
									break
						case 'me': case 'myinfo': case 'info': case 'profile': case 'profil':{
									var p = await Zeeone.getStatus(`${sender}`, MessageType.text)
									let cek = ms(getPremiumExpired(sender, premium) - Date.now())
									Zeeone.sendMessage(from, pp_userz, image, {thumbnail:pp_userz, caption:` * USER PROFILE*

📛 Nama : ${pushname==undefined?sender.split("@")[0]:pushname}
🎯 Bio : ${p.status==undefined?`Not Found`:p.status}
💬 Tag : @${sender.split("@")[0]}
🆔 Api : wa.me/${sender.split("@")[0]}

⬣ Limit : ${isPrem ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
⬣ Balance : ${getBalance(sender, balance)}
⬣ Role : ${role}
⬣ Level : ${getLevelingLevel(sender)}
⬣ Xp : ${getLevelingXp(sender)}
⬣ Status : ${isOwner?`Owner`:isPrem?`Premium User
⬣ Expired Prem : ${cek.days} d, ${cek.hours} h, ${cek.minutes} m, ${cek.seconds} s`:isUser?`Free User`:`Belum Daftar`}
⬣ Baned : ${isBan?`Terbanned`:`Tidak Terbanned`}`, quoted: Ofc, contextInfo:{mentionedJid:[sender]}})
									}
									break
						case 'listonline': case 'listaktif':
									if (!isGroup) return reply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
									let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
									let online = [...Object.keys(Zeeone.chats.get(ido).presences), Zeeone.user.jid]
									Zeeone.sendMessage(from, '*List Online :*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
										quoted: fakevideo,
										contextInfo: { mentionedJid: online }
										})
									break
							case 'infogc': case 'groupinfo': case 'infogrup': case 'grupinfo':
							console.log('eror bang fix sendiri')
									if (!isGroup) return reply(mess.only.group)
									try {
										ppUrl = await Zeeone.getProfilePicture(groupMetadata.jid)
											} catch {
												ppUrl = `${imagebb}`
												}
												let cekviip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
												let nya = `*G R O U P - I N F O*

📛 Nama : ${groupName}
 - Terakhir Di Ubah Oleh : ${groupMetadata.subjectOwner}
⏰ Waktu Dibuat :
 - Jam : ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss')} Wib
 - Tanggal : ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('d, m, y')}
👤 Owner Grup : ${groupMetadata.owner}
👥 Total Member : ${groupMembers.length}
👥 Total Admin : ${groupAdmins.length}
 
⬣ Welcome : ${isWelkom ? 'On':'Off'}
⬣ Anti Link : ${isAntiLink? 'On':'Off'}
⬣ Anti Badword : ${isBadword? 'On':'Off'}
⬣ Anti Fake Troli : ${isAntro? 'On':'Off'} ${isSewa?`
⬣ Expired Sewa : ${cekviip.days} Hari, ${cekviip.hours} Jam, ${cekviip.minutes} Menit, ${cekviip.seconds} Detik*`:``}
  
💬 Deskripsi Group :
\`\`\`${groupDesc}\`\`\`
- Terakhir Di Ubah Oleh : ${groupMetadata.descOwner}`
									var jk = await getBuffer(thumbnail)
									Zeeone.sendMessage(from, jk, MessageType.image, {thumbnail: thumbnail, caption: nya, quoted: Ofc})
									break
						case 'caripesan': case 'searchmessage':
									if (!Ofc.key.fromMe && !isPrem) return reply(mess.only.prem)
									if(!q)return reply('Pesannya apa Lord?')
									reply('Otw Lord')
									let v = await Zeeone.searchMessages(q,from,10,1)
									let s = v.messages
									let el = s.filter(v => v.message)
									el.shift()
									try {
										if(el[0].message.conversation == undefined) return
										reply(`Ditemukan ${el.length} pesan`)
										await sleep(3000)
										for(let i = 0; i < el.length; i++) {
											await Zeeone.sendMessage(from,'Nih Pesannya',text,{quoted:el[i]})
											}
										} catch(e){
											reply('Pesan tidak ditemukan!')
											} 
									break
						case 'tomp3': case 'tomusic': case 'toaudio':
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedVideo) return reply(`Reply video nya lord`)
									reply(mess.wait)
									var encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									var media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									var ran = getRandom('.mp4')
									exec(`ffmpeg -i ${media} ${ran}`, (err) => {
										fs.unlinkSync(media)
										if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
										var buffer = fs.readFileSync(ran)
										Zeeone.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: Ofc})
										fs.unlinkSync(ran)
										})
									limitAdd(sender, limit)
									break
						case 'toptt': case 'tovn':
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedAudio) return reply(`Reply Audionya Lord`)
									reply(mess.wait)
									var encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									var media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									var ran = getRandom('.mp4')
									exec(`ffmpeg -i ${media} ${ran}`, (err) => {
										fs.unlinkSync(media)
										if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
										var buffer = fs.readFileSync(ran)
										Zeeone.sendMessage(from, buffer, audio, {ptt: true, mimetype: 'audio/mp4', quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
									break
						case 'toimg': 
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									reply(mess.wait)
									if (!isQuotedSticker) return reply('Reply stiker Lord')
									if ((isMedia && !Ofc.message.videoMessage || isQuotedImage || isQuotedSticker && args.length == 0)) {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.png')
										exec(`ffmpeg -i ${media} ${ran}`, (err) => {
											fs.unlinkSync(media)
											if (err) return reply('❎ Gagal, pada saat mengkonversi sticker ke gambar ❎')
											buffer = fs.readFileSync(ran)
											Zeeone.sendMessage(from, buffer, image, {thumbnail : thumbnail, caption:'Sukses Lord',quoted:Ofc})
											fs.unlinkSync(ran)
											})
										} else {
											reply(`Reply Stiker Nya Lord`)
										}
										limitAdd(sender, limit)
									break
						case 'togif':
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedSticker) return reply('Reply stiker Lord')
									reply(mess.wait)
									if (Ofc.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									moew = await webp2gifFile(media)
									console.log(moew)
									Frd = await getBuffer(moew.result)
									Zeeone.sendMessage(from, Frd, video, { mimetype: 'video/gif', caption: 'Sukses Lord', quoted: Ofc })
									limitAdd(sender, limit)
									break
						case 'tovideo': case 'tomp4':
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!isQuotedSticker) return reply('Reply stiker gif lord')
									reply(mess.wait)
									if ((isMedia && !Ofc.message.videoMessage || isQuotedSticker) && args.length == 0) {
										ger = isQuotedSticker ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
										webp2mp4File(owgi).then(res=>{
											Zeeone.sendMessage(from, res.result, video, { mimetype: Mimetype.mp4, filename: 'tovideo.mp4',caption: 'Sukses Lord', quoted: Ofc})
											})
										}else {
											reply('reply stiker')
										}
									fs.unlinkSync(owgi)
									limitAdd(sender, limit)
									break
						case 'tourl': case 'imagetorul': case 'imgtourl': case 'audiotourl': case 'videotourl': case 'stickertourl': case 'stikertourl': case 'tolink':
									var imgbb = require('imgbb-uploader')
									if (isQuotedAudio) {
										ger = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										reply(mess.wait)
										owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
										Okelor = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
										teks=`─ 「 *AUDIO TO URL* 」 ─

*🔖 Url : ${Okelor.display_url}*`
										reply(teks)
 
										} else if (isQuotedImage) {
											ger = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ofc
											reply(mess.wait)
											owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
											qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
											teks=`─ 「 *IMAGE TO URL* 」 ─

*🔖Url : ${qbc.display_url}*`
											reply(teks)
											} else if (isQuotedVideo) {
												ger = isQuotedVideo ? JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ofc
												reply(mess.wait)
												owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
												ffff = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
												teks=`─ 「 *VIDEO TO URL* 」 ─

*🔖 Url : ${ffff.display_url}*`
												reply(teks)
												} else if (isQuotedSticker) {
													ger = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
													reply(mess.wait)
													owgi = await Zeeone.downloadAndSaveMediaMessage(ger)
													vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
													teks=`─ 「 *STICKER TO URL* 」 ─

*🔖 Url : ${vrr.display_url}*`
													reply(teks)
												}
											break
						case 'q': case 'ulang':
									if (!m.quoted) return reply('reply pesan!')
									var jpio = Zeeone.serializeM(await m.getQuotedObj())
									if (!jpio.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
									await jpio.quoted.copyNForward(m.chat, true)
									break
						case 'block':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ny = `${args[0].replace('@', '')}@c.us`
										Zeeone.blockUser (`${ny}@c.us`, "add")
										reply(`Nomor ${ny} telah di blockir!`)
										} else {
											ny = `${mentionUser}`
											Zeeone.blockUser (`${ny.replace("@s.whatsapp.net","@c.us")}`, "add")
											reply(`Nomor ${ny.replace("@s.whatsapp.net","@c.us")} telah blockir!`)
											}
									break
						case 'unblock':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ny = `${args[0].replace('@', '')}@c.us`
										Zeeone.blockUser (`${ny}@c.us`, "remove")
										reply(`Nomor ${ny} telah di unblockir!`)
										} else {
											ny = `${mentionUser}`
											Zeeone.blockUser (`${ny.replace("@s.whatsapp.net","@c.us")}`, "remove")
											reply(`Nomor ${ny.replace("@s.whatsapp.net","@c.us")} telah dibanned!`)
										}
									break
						case 'ban':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ny = `${args[0].replace('@', '')}@s.whatsapp.net`
										ban.push(ny)
										fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
										reply(`Nomor ${ny} telah dibanned!`)
										} else {
											ny = `${mentionUser}`
											ban.push(ny)
											fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
											reply(`Nomor ${ny} telah dibanned!`)
										}
									break
						case 'unban':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										ah = `${args[0].replace("@","")}@s.whatsapp.net`
										unb = ban.indexOf(ah)
										ban.splice(unb, 1)
										fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
										reply(`Nomor ${ah} telah di unban!`)
										} else {
											ah = `${mentionUser}`
											unb = ban.indexOf(ah)
											ban.splice(unb, 1)
											fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
											reply(`Nomor ${ah} telah di unban!`)
										}
									break
						case 'resetlimit':
									if (!isOwner && !Ofc.key.fromMe) return reply(mess.only.owner)
									Zeeone.updatePresence(from, Presence.avaible)
									fs.writeFileSync('./database/limit.json', ('[]'))
									reply('Sukses Lord')
									await sleep(5000)
									break
						case 'bc':
									if (!Ofc.key.fromMe && !isOwner) return reply(mess.only.owner) 
									if (args.length < 1) return reply(`${prefix + command} Alphabot`)
									anjir = await Zeeone.chats.all()
									for (let _ of anjir) {
										Zeeone.sendMessage(`${_.jid}`, q, text)
										}
									reply('Sukses Lord')
									break
						case 'faktaunik':{
									const faktau = ["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
									const ran_faktau = faktau[Math.floor(Math.random() * faktau.length)]
									reply(`*Fakta Unik :*\n${ran_faktau}`)
									}
									break
						case 'pantun':{
									const pantun = ["\nAnak tikus rindu ibunya\n\nsombong nich ceritanya","\nAda kepompong ada kupu\n\nbales donk sms dari aku","\nBeli bandeng\n\ndi Malaysia\n\ngue ganteng\n\nkayak Pasha","\nHati siapa tak bimbang\n\nsitu botak minta dikepang","\nBuah semangka\n\nbuah duren\n\nnggak nyangka\n\ngue keren\n ","\n Mawar bersemi\n\ndi batang kayu\n\ndo you love me\n\nlike i love you","\nBurung perkutut\n\nburung kuthilang\n\nkamu kentut\n\nenggak bilang bilang","\nBread is roti\n\nshadow is bayang\n\nbefore you mati\n\nbetter you sembahyang","\nJangan takut\n\njangan khawatir\n\nitu kentut\n\nbukan petir","\nBeli ikan di pasar malam\n\ndasar bego ni kawan","\nMakan duren sambil ngelamun,\n\nHati-hati ketelen ntar bijinya","\nDi  sana gunung, di sini gunung\n\nCiptaan Tuhan deh","\nKan bandeng\n\nmakan kawat\n\norang ganteng\n\nnumpang lewat","\nOrang ganteng\n\nsuka sama si Rini\n\ngak seneng\n\nmaju sini","\nMelon manis di air es\n\nke mana aja lo gak pernah sms","\nJambu merah\n\ndi dinding\n\njangan marah\n\njust kidding","\nBuah semangka\n\nbuah manggis\n\nnggak nyangka\n\ngue manis","\nMen sana\n\nin corpore sano\n\ngue maen ke sana,\n\nelo maen ke sono!","\nBuah apel\n\ndi air payau\n\nnggak level\n\nlayauuuuuuu","\nDi sini bingung, di sana linglung\n\nemangnya enak, enggak nyambung…","\nBuah semangka berdaun sirih\n\nBuah ajaib kali yah","\nPilih suara harpa yang jelas.\n\nTali di harpa diikat cinta","\nCiuman di pipi\n\nciuman di dahi\n\nApa yang dicium sesudah lah cinta?","\nSepandai-pandai tupai melompat\n\nPolisi lebih pandai melompat","\nDua tiga kacang tanah\n\nenggak ada pacar yang datang ke rumah","\nDapet kado isinya tomat\n\nBodo amat!!","\nDulu delman, sekarang gokar\n\ndulu teman, sekarang pacar","\nStroberi mangga apel\n\nsorry gak level","\nBola pingpong dimakan gelatik\n\nBiar ompong yang penting cantik\n","\nMata belo,\n\nala komedian.\n\ngue sama elo?\n\nmaunya jadian.","\nTunda lapar,\n\nmakan indomi.\n\nhati menggelepar,\n\ncintapun bersemi.","\nPotong kuku,\n\npendek-pendek.\n\nhatiku beku,\n\nsi abang mendadak ngondek.","\nBeli ketan,\n\nbeli kain songket.\n\nbiar udah mantan,\n\nkita tetep lengket.","\nKe pasar, nyari obat gatal\n\nDasar, gak modal!","\nMakan semangka,\n\nmakan kedondong.\n\nkalau suka,\n\nnyatain dong.","\nGa punya pendirian,\n\nbikin jemu.\n\nga mau sendirian,\n\nmaunya bobo sama kamu.","\nNembak itik,\n\nlangsung kena.\n\nkamu cantik,\n\nhey nona!","\nKotak amal,\n\ndigoyang-goyang.\n\nkemarin aku diramal,\n\njodohnya sama abang.","\nHari Jumat,\n\npada pake batik.\n\nsalam hormat,\n\nbuat neng cantik.","\nPecahan genting,\n\ndi bawah kursi.\n\nbetah meeting,\n\nkarena si boss seksi.","\nNangis-nangis,\n\nmobil kena srempet.\n\nneng manis,\n\nmau dong dipepet.","\nPanasin mentega,\n\nkarena mulai beku.\n\nkamu mau ga,\n\njadi imamku?","\nPotong sebahu,\n\nbiar ga sendu.\n\nkamu tahu?\n\nAku rindu.","\nJangan tanya,\n\nkapan lulus kuliah.\n\nga dapet anaknya,\n\nmamanya boleh lah","\nBikin anak,\n\ndi pojokan sekolah\n\nkalau mau enak,\n\nnikah dulu lah.","\nMain mata,\n\nmesem-mesem.\n\nneng tetep cinta,\n\nbiarpun abang keteknya asem.","\nTiduran di tandu,\n\nberjam-jam.\n\nhati merindu,\n\nmata sulit memejam.","\nUbek-ubek peti,\n\ncari gunting.\n\nsaking cinta mati,\n\nneng rela bunting.","\nNamanya penjahat,\n\npolisi jadi inceran.\n\nbosan jadi temen curhat,\n\nmaunya pacaran.","\nKe salon creambath,\n\nbiar aliran darah lancar.\n\nbosen ah jadi sahabat,\n\nmaunya jadi pacar!"]
									const ran_pantun = pantun[Math.floor(Math.random() * pantun.length)]
									reply(`*Pantun :* \n${ran_pantun}`)
									}
									break
						case 'dare':
									const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
									const der = dare[Math.floor(Math.random() * dare.length)]
									sendButMessage(from, `${der}`, `${ucapannya}`, [
									{
										buttonId: `${prefix}dare`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
									break
						case 'truth':
									const trut = ['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
									const ttrth = trut[Math.floor(Math.random() * trut.length)]
									sendButMessage(from, `${ttrth}`, `${ucapannya}`, [
									{
										buttonId: `${prefix}truth`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
									break
						case 'slot':
									const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍐 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇 ','🍌 : 🍒 : 🔔','🍐 : 🔔 :  🔔','🍊 : 🍋 :  🍒','🍋 : 🍋 :  🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 :  🍇','🔔 : 🔔 :  🔔','🍒 : 🍒 :  🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
									somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
									somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									rn = randomNomor(100)
									if (somtoyy== '🍌 : 🍌 : 🍌') {
										bp = await sendButMessage(from, `─「 🎰 *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `${prefix}slot`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
										addBalance(sender, rn, balance)
										} else if (somtoyy == '🍒 : 🍒 : 🍒') {
									bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `${prefix}slot`,
										buttonText: {
											displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
									addBalance(sender, rn, balance)
										} else if (somtoyy == '🔔 : 🔔 : 🔔') {
											bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `${prefix}slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
											addBalance(sender, rn, balance)
												} else if (somtoyy == '🍐 : 🍐 : 🍐') {
													bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `${prefix}slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
													addBalance(sender, rn, balance)
														} else if (somtoyy == '🍇 : 🍇 : 🍇') {
															bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${rn}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `${prefix}slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
															addBalance(sender, rn, balance)
																} else {
																	ok = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲  *YOU LOSE*  ❳──\nXP BERKURANG 1000`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `${prefix}slot`,
												buttonText: {
													displayText: `NEXT ➡️`,
											},
											type: 1,
											}]);
																	addLevelingXp(sender, -1000)
																	}
															break
						case 'attp':{ 
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}attp* teks`)
									let ane = await getBuffer(`https://api.xteam.xyz/attp?file&text=${q}`)
									fs.writeFileSync('./sticker/attp.webp', ane)
									exec(`webpmux -set exif ./sticker/data.exif ./sticker/attp.webp -o ./sticker/attp.webp`, async (error) => {
										if (error) return reply(mess.error)
										Zeeone.sendMessage(from, fs.readFileSync(`./sticker/attp.webp`), sticker, {quoted: Ofc})
										fs.unlinkSync(`./sticker/attp.webp`)
									})
									}
									limitAdd(sender, limit)
									break
						case 'memegenerator': case 'memegen':
									if (!isPrem && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage && !isQuotedSticker) return reply(`Reply Gambar Atau Sticker!`)
										reply(mess.wait)
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var imgbb = require('imgbb-uploader')
										var enmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										var media = await Zeeone.downloadAndSaveMediaMessage(enmedia)
										var njay = await imgbb('3b8594f4cb11895f4084291bc655e510', media)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
										Zeeone.sendMessage(from, resu, image, {thumbnail: thumbnail, quoted: Ofc})
										fs.unlinkSync(media)
										} catch (e) {
											return reply(`${e}`)
											console.log(e)
										}
									break
						case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
									if (!isPrem && !Ofc.key.fromMe) return reply(mess.only.prem)
									try {
										if (!q) return reply(`${prefix+command} Alphabot`)
										var bawah = q.replace('', '_').replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('&', '~a').replace('#', '~h').replace('/', '~s')
										if (isImage || isQuotedImage) {
											reply(mess.wait)
											var imgbb = require('imgbb-uploader')
											let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
											let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
											var tolink = await imgbb("3b8594f4cb11895f4084291bc655e510", media)
											var sticknye = `https://api.memegen.link/images/custom/-/${bawah}.png?background=${tolink.display_url}`
											var short = await axios.get('https://tinyurl.com/api-create.php?url=' + sticknye)
											var anuu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${short.data}`)
											fs.writeFileSync('./sticker/smemek.webp', anuu)
											exec(`webpmux -set exif ./sticker/data.exif ./sticker/smemek.webp -o ./sticker/smemek.webp`, async (error) => {
												if (error) return reply(mess.error)
												Zeeone.sendMessage(from, fs.readFileSync(`./sticker/smemek.webp`), sticker, { quoted: Ofc })
												})
												} else if (isQuotedSticker){
													reply(mess.wait)
													var imgbb = require('imgbb-uploader')
													let encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
													let media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
													let ran = getRandom('.png')
													exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
														fs.unlinkSync(media)
														if (err) return reply('Error')
														var tolink = await imgbb("3b8594f4cb11895f4084291bc655e510", ran)
														var sticknye = `https://api.memegen.link/images/custom/-/${bawah}.png?background=${tolink.display_url}`
														var short = await axios.get('https://tinyurl.com/api-create.php?url=' + sticknye)
														var anuu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${short.data}`)
														fs.writeFileSync('./sticker/smemek.webp', anuu)
														exec(`webpmux -set exif ./sticker/data.exif ./sticker/smemek.webp -o ./sticker/smemek.webp`, async (error) => {
															if (error) return reply(mess.error)
															Zeeone.sendMessage(from, fs.readFileSync(`./sticker/smemek.webp`), sticker, { quoted: Ofc })
															fs.unlinkSync(ran)
															})
														})
														} else {
															reply(`Reply gambar atau sticker dengan Caption ${prefix+command} teks`)
															}
														} catch (e) {
															return reply(`${e}`)
															console.log(e)
														}
													break
						case 'emoji':case 'semoji':
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									if (!q) return reply(`Example : ${prefix + command} 😂`)
									hex2 = args.join(' ') 
									emoji.get(`${hex2}`).then(emoji => {
										teks = `${emoji.images[4].url}`
										sendStickerFromUrl(from,`${teks}`)
									})
									limitAdd(sender, limit)
									break
						case 'stickerwm': case 'swm': case 'take': case 'takesticker': case 'takestick':{
									if (!Ofc.key.fromMe && !isPrem) return reply(mess.only.prem)
									reply(mess.wait) 
									let packname1 = q.split('|')[0] ? q.split('|')[0] : q
									let author1 = q.split('|')[1] ? q.split('|')[1] : ''
									if (isImage || isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
										exif.create(packname1, author1, `stickwm_${sender}`)
										await ffmpeg(`${media}`)
										.input(media)
										.on('start', function (cmd) {
											console.log(color(`STARTED : ${cmd}`,'yellow'))
											})
											.on('error', function (err) {
												console.log(color(`ERROR : ${err}`,'red'))
												fs.unlinkSync(media)
												reply(mess.error)
												})
												.on('end', function () {
													console.log(color(`FINISH`,'magenta'))
													exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
														if (error) return reply(mess.error)
														Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
														fs.unlinkSync(media)
														fs.unlinkSync(`./sticker/${sender}.webp`)
														fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
														})
														})
														.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
														.toFormat('webp')
														.save(`./sticker/${sender}.webp`)
														} else if ((isVideo && Ofc.message.videoMessage.fileLength < 10000000 || isQuotedVideo && Ofc.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
															let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
															let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
															exif.create(packname1, author1, `stickwm_${sender}`)
															reply(mess.wait)
															await ffmpeg(`${media}`)
															.inputFormat(media.split('.')[4])
															.on('start', function (cmd) {
																console.log(color(`STARTED : ${cmd}`,'yellow'))
																})
																.on('error', function (err) {
																	console.log(color(`ERROR : ${err}`,'red'))
																	fs.unlinkSync(media)
																	let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
																	reply(mess.error)
																	})
																	.on('end', function () {
																		console.log((`FINISH`,'magenta'))
																		exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
																			if (error) return reply(mess.error)
																			Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
																			fs.unlinkSync(media)
																			fs.unlinkSync(`./sticker/${sender}.webp`)
																			fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
																			})
																			})
																			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
																			.toFormat('webp')
																			.save(`./sticker/${sender}.webp`)
																			} else if (isQuotedSticker) {
																				let encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
																				let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
																				exif.create(packname1, author1, `takestick_${sender}`)
																				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
																				if (error) return reply(mess.error)
																				Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
																				fs.unlinkSync(media)
																				fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
																				})
																				} else {
																					reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
																				 }
																			}
																	 break
						case 'sticker': case 'stiker':  case 'stickergif': case 'stikergif': case 'sgif': case 's':
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									if (isImage || isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
										let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
										await ffmpeg(`${media}`)
										.input(media)
										.on('start', function (cmd) {
											console.log(color(`STARTED : ${cmd}`))
											})
											.on('error', function (err) {
												console.log(color(`ERROR : ${err}`))
												fs.unlinkSync(media)
												reply(mess.error)
												})
												.on('end', function () {
													console.log(color(`FINISH`,'magenta'))
													exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
														if (error) return reply(mess.error)
														Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
														limitAdd(sender)
														fs.unlinkSync(media)
														fs.unlinkSync(`./sticker/${sender}.webp`)
														})
														})
														.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
														.toFormat('webp')
														.save(`./sticker/${sender}.webp`)
														} else if ((isVideo && Ofc.message.videoMessage.fileLength < 10000000 || isQuotedVideo && Ofc.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
															let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ofc
															let media = await Zeeone.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
															reply(mess.wait)
															await ffmpeg(`${media}`)
															.inputFormat(media.split('.')[4])
															.on('start', function (cmd) {
																console.log(color(`STARTED : ${cmd}`))
																})
																.on('error', function (err) {
																	console.log(color(`ERROR : ${err}`))
																	fs.unlinkSync(media)
																	let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
																	reply(mess.error)
																	})
																	.on('end', function () {
																		console.log(color(`FINISH`,'magenta'))
																		exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
																			if (error) return reply(mess.error)
																			Zeeone.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: Ofc})
																			limitAdd(sender)
																			fs.unlinkSync(media)
																			fs.unlinkSync(`./sticker/${sender}.webp`)
																			})
																			})
																			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
																			.toFormat('webp')
																			.save(`./sticker/${sender}.webp`)
																			} else {
																				reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
																				}
																				limitAdd(sender, limit)
												break
						case 'exif':
									if (!Ofc.key.fromMe && !isOwner)return reply(mess.only.owner)
									if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|author`)
									if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
									exif.create(arg.split('|')[0], arg.split('|')[1])
									reply('Sukses Lord')
									break
						case 'owner':{
							const ownerContact = [owner_number, "", "", "", "", "", "", "", "", "", ""]
							let ini_list = []
							for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
								const vname = Zeeone.contacts[i] != undefined ? Zeeone.contacts[i].vname || Zeeone.contacts[i].notify : undefined
								ini_list.push({
									"displayName": `${owner_name}`,
									"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
									})
									}
									hehe = await Zeeone.sendMessage(from, {
										"displayName": `${ini_list.length} kontak`,
										"contacts": ini_list 
										}, 'contactsArrayMessage', { quoted: Ofc })
										Zeeone.sendMessage(from, `Nih Kak Contact Owner Ku ✨`, text, {quoted: hehe})
										}
										break
						case 'lirik':
									if (args.length < 1) return reply('Judulnya?')
									reply(mess.wait)
									teks = body.slice(7)
									lirikLagu(teks).then((res) => {
										let lirik = `*Hasil Pencarian Dari : ${q}*
										\n${res[0].result}`
										reply(lirik)
									})
									break
						case 'ultah': case 'hbd':
									if (args.length < 1) return reply(`Usage : #ultah tahun-bulan-tanggal\nExample : #ultah 2006-08-02`)
									if (!args[0].includes("-")) return reply(`Usage : #ultah tahun-bulan-tanggal\nExampla : #ultah 2006-08-02`)
									qq = q
									zodiakk = [
									["Capricorn", new Date(1970, 0, 1)],
									["Aquarius", new Date(1970, 0, 20)],
									["Pisces", new Date(1970, 1, 19)],
									["Aries", new Date(1970, 2, 21)],
									["Taurus", new Date(1970, 3, 21)],
									["Gemini", new Date(1970, 4, 21)],
									["Cancer", new Date(1970, 5, 22)],
									["Leo", new Date(1970, 6, 23)],
									["Virgo", new Date(1970, 7, 23)],
									["Libra", new Date(1970, 8, 23)],
									["Scorpio", new Date(1970, 9, 23)],
									["Sagittarius", new Date(1970, 10, 22)],
									["Capricorn", new Date(1970, 11, 22)]
									].reverse()
									function getZodiac(month, day) {
										dey = new Date(1970, month - 1, day)
										return zodiakk.find(([_,_d]) => dey >= _d)[0]
										}
										dateek = new Date(qq)
										if (dateek == 'Invalid Date') throw dateek
										let dd = new Date()
										let [tahun, bulan, tanggal] = [dd.getFullYear(), dd.getMonth() + 1, dd.getDate()]
										birth = [dateek.getFullYear(), dateek.getMonth() + 1, dateek.getDate()]
										zodiackk = getZodiac(birth[1], birth[2])
										ageD = new Date(d - dateek)
										agek = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()
										birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
										cekusia = bulan === birth[1] && tanggal === birth[2] ? `Selamat ulang tahun yang ke-${agek} 🥳` : agek
										reply(`
*Lahir : ${birth.join(', ')}*
*Ultah Mendatang : ${birthday.join(', ')}*
*Usia : ${cekusia}*
*Zodiak : ${zodiackk}*
`.trim())
									break
						case 'bass': 
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
										break
						case 'slowmo': case 'slow':
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											uhh = fs.readFileSync(ran)
											Zeeone.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc,duration:999999999999})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply(mess.error)
												}  
												limitAdd(sender, limit)
									break
						case 'fast':
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply(mess.error)
												}  
										limitAdd(sender, limit)
									break
						case 'robot':
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
									break
						case 'detikvn': case 'setdetikvn': case 'setdurasi':
									if (!Number(args[0])) return reply(`EXAMPLE : ${prefix + command} 50`)
									reply(mess.wait)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									cokmatane = Number(args[0])
									hah = fs.readFileSync(media)
									Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted: Ofc})
									fs.unlinkSync(media)
									limitAdd(sender, limit)
									break
						case 'tupai':
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: Ofc,duration:99})
											fs.unlinkSync(ran)
											})
											 } catch (e) {	
												reply(mess.error)
												}  	
												limitAdd(sender, limit)
												break
						case 'vibra': case 'vibrato':
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									encmedia = JSON.parse(JSON.stringify(Ofc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await Zeeone.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										Zeeone.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: Ofc})
										fs.unlinkSync(ran)
										})
										limitAdd(sender, limit)
									break
						case 'tinyurl':{
									if (args.length < 1) return reply(`Masukkan link`)
									if (!isUrl) return reply(`Masukkan link`)
									const fetchText = (url, optiono) => {
										return new Promise((resolve, reject) => {
											return fetch(url, optiono)
											.then(response => response.text())
											.then(text => resolve(text))
											.catch(err => {
												console.log(color(err,'red'))
												reject(err)
												})
											})
										}
										okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
										shorti = `*Result : ${okok}*`
										reply(shorti)
										}
									break
						case 'infoall': case 'tagall':
									if (!isGroupAdmins && !Ofc.key.fromMe && !isOwner) return reply(mess.only.admin)
									if (!isGroup) return reply(mess.only.group)
									var nom = Ofc.participant
									members_id = []
									teks = ''
									for (let mem of groupMembers) {
										teks += `│ *@${mem.jid.split('@')[0]}*\n`
										members_id.push(mem.jid)
										}
										mentions(`「 *TAG ALL*  」
${q?`\nPesan : `+q:``}
							
${teks}`, members_id, true)
									break
						case 'hidetag': 
									if (!isPrem && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										hideTag(from, `${q}`) 
										} else {  
											quotedText = Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation
											hideTag(from, `${quotedText}`)
											}
									break
						case 'tts': case 'say':
									try {if (args.length > 50) return reply('```Error, Teks Terlalu Panjang!```')
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
										const gtts = require('./lib/gtts')(args[0])
										dtt = body.slice(8)
										ranm = getRandom('.mp3')
										rano = getRandom('.ogg')
										dtt.length > 50
										? reply('```Error, Teks Terlalu Panjang!```')
										: gtts.save(ranm, dtt, function() {
											exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
												fs.unlinkSync(ranm)
												buff = fs.readFileSync(rano)
												if (err) return reply(mess.error)
												Zeeone.sendMessage(from, buff, audio, {quoted: Ofc, ptt:true})
												fs.unlinkSync(rano)
												})
												})
												} else {
													const gtts = require('./lib/gtts')(args[0]?args[0]:'id')
													dtt = Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation
													ranm = getRandom('.mp3')
													rano = getRandom('.ogg')
													dtt.length > 50
													? reply('```Error, Teks Terlalu Panjang!```')
													: gtts.save(ranm, dtt, function() {
														exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
															fs.unlinkSync(ranm)
															buff = fs.readFileSync(rano)
															if (err) return reply(mess.error)
															Zeeone.sendMessage(from, buff, audio, {quoted: Ofc, ptt:true})
															fs.unlinkSync(rano)
															})
														})
													}
												} catch (e) {
													reply(`${e}`)
													}
												limitAdd(sender, limit)
											break
						case 'translate': case 'tr':
									try {
										if (args.length < 1)return reply(`Usage : #translate kode bahasa teks/reply pesan\nExample : #translate id why`)
										if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) {
											translate(`${body.slice(10+args[0].length+1)}`, args[0])
											.then((res) => { reply(`${res}`) })
											} else {
												tolang = args[0]
												entah = Ofc.message.extendedTextMessage.contextInfo.quotedMessage.conversation
												translate(entah, tolang)
												.then((res) => { reply(`${res}`) })
												}
											} catch (e) {
												reply(`${e}`)
												}
											break
						case 'mystat': case 'stats': case 'infobot':{
									try {
										let totalchat = await Zeeone.chats.all()
										let i = []
										let giid = []
										for (let mem of totalchat){
											i.push(mem.jid)
											}
											for (let id of i){
												if (id && id.includes('g.us')){
													giid.push(id)
													}
												}
												const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Zeeone.user.phone
												nupe = owner_number + '@s.whatsapp.net'
												teks = `「 *BOT STATISTIC* 」 

🔖 Botname : ${namabot}
🔖 Owner : @${nupe.split("@")[0]}
🔖 Prefix : ${nopref?'No prefix':multiprefix?'Multi prefix':prefix}
🔖 Runtime : ${kyun(process.uptime())}
🔖 Speed : ${processsTime(Ofc.messageTimestamp.low, moment())}s
🔖 Status : ${public_mode?`Public Mode`:`Self Mode`}
🔖 Total Hit : -
🔖 Personal Chat : ${totalchat.length - giid.length}
🔖 Group Chat : ${giid.length}
🔖 Total Chat : ${totalchat.length}
🔖 Total User : ${_user.length}
🔖 Total Block : ${blocked.length}
🔖 Total Baned : ${ban.length}

「 *PHONE STATISTIC* 」
 
🔖 Whatsapp Ver. : ${wa_version}
🔖 Ram Usage : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
🔖 Mcc : ${mcc}
🔖 Mnc : ${mnc}
🔖 Versi OS : ${os_version}
🔖 Merk HP : ${device_manufacturer}
🔖 Versi HP : ${device_model}
🔖 Browser : ${Zeeone.browserDescription}
🔖 Baterai : ${battre}% ${baterai.cas === 'true' ? 'Di cas' : 'Ga di cas'}
`
let qqppp = [{
                    "buttonId": `${prefix}owner`,
                    "buttonText": {
                        "displayText": "OWNER"
                    },
                    "type": "RESPONSE"
                },{
                    "buttonId": `${prefix}sewa`,
                    "buttonText": {
                        "displayText": "SEWA"
                    },
                    "type": "RESPONSE"
                }]
                sendButLocation(from, teks, `LordUserbot™© | Allright Reserved.`, thumbnail, qqppp, {contextInfo: { mentionedJid: [nupe]}})
				
} catch (e){
reply(`${e}`)
}
}
break
						case 'clearall':{
									if (!isOwner && !Ofc.key.fromMe) return
									let chiit = await Zeeone.chats.all()
									for (let i of chiit){
										Zeeone.modifyChat(i.jid, 'clear', {
											includeStarred: false
											})
											}
											reply(`Succes Lord`)
											}
									break
						case 'tes': case 'test': case 'ping':{
									reply('Bot on')
									}
									break
						case 'cekapikey':
									if (!isOwner && !Ofc.key.fromMe) return
									anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${lolkey}`)
									teks = `─「 *APIKEY CEK* 」─\n\n➸ *Username :* ${anu.result.username}\n➸ *REQUEST :* ${anu.result.requests}\n➸ *Today :* ${anu.result.today}\n➸ *Akun Type :* ${anu.result.account_type}\n➸ *Expired :* ${anu.result.expired}`
									Zeeone.sendMessage(`${ownerNumber}`, teks, text, {quoted: Ofc})
									break
						case 'nulis': case 'tulis':
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									 if (args.length < 1) return reply('Yang mau di tulis apaan?')
									teks = args.join(' ')
									reply(mess.wait)
									nulis = encodeURIComponent(teks)
									res = await axios.get(`https://api.zeks.me/api/nulis?text=${nulis}&apikey=Apivinz`)
									if (res.data.error) return reply(res.data.error)
									buff = Buffer.from(res.data.result.split(',')[1], 'base64')
									Zeeone.sendMessage(from, buff, image, {thumbnail: thumbnail, quoted: Ofc, caption: 'Jangan Males Lord'})
									limitAdd(sender, limit)
									break
						case 'getpic': case 'getpp': case 'getprofile':{
									if (!isGroup) return reply(mess.only.group)
									reply(mess.wait)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) return
									mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
									try {
										pp = await Zeeone.getProfilePicture(mentioned)
										} catch {
											pp = `${imagebb}`
											}
											buffer = await getBuffer(pp)
											Zeeone.sendMessage(from, buffer, image, {quoted: Ofc, caption: `*Profile Picture Of @${mentioned.split("@")[0]}*`, thumbnail: thumbnail, contextInfo:{mentionedJid:[mentioned]}})
											}
									break
						case 'getnum': case 'getnomor': case 'getnumber':
									if (!isGroup) return reply(mess.only.group)
									if (Ofc.message.extendedTextMessage === undefined || Ofc.message.extendedTextMessage === null) return reply('Reply Pesan Target Lord')
									mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
									reply(`${mentioned.split('@')[0]}`)
									break
						case 'towame':
									if (Ofc.message.extendedTextMessage != undefined){
										mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
										reply(`wa.me/`+mentioned.split("@")[0])
										} else {
											reply(`${prefix+command} @tag atau reply`)
											}
											break
						case 'wame':
									wamo = q.replace(new RegExp("[()/ ]", "gi"), "+")
									reply(q?`wa.me/`+sender.split("@")[0]+'?text='+wamo: `wa.me/`+sender.split("@")[0])
									break
						case 'sendkontak': case 'kontak':
									if (!isPrem && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (Ofc.message.extendedTextMessage != undefined){
										mentioned = Ofc.message.extendedTextMessage.contextInfo.mentionedJid[0]
										const ynkos = 'BEGIN:VCARD\n' 
										+ 'VERSION:3.0\n' 
										+ `FN:${q?q:`KONTAK`}\n`
										+ `ORG:KONTAK;\n`
										+ `TEL;type=CELL;type=VOICE;waid=${mentioned.split("@")[0]}:+${mentioned.split("@")[0]}\n`
										+ 'END:VCARD'
										Zeeone.sendMessage(from, {displayname: "Jeff", vcard: ynkos}, MessageType.contact, { quoted: Ofc})
										} else {
											const ynkos = 'BEGIN:VCARD\n' 
											+ 'VERSION:3.0\n' 
											+ `FN:${q.split('|')[1]}\n`
											+ `ORG:KONTAK;\n`
											+ `TEL;type=CELL;type=VOICE;waid=${q.split('|')[0]}:+${q.split('|')[0]}\n`
											+ 'END:VCARD'
											Zeeone.sendMessage(from, {displayname: "Jeff", vcard: ynkos}, MessageType.contact, { quoted: Ofc})
											}
									break 
						case 'notif':
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									teks = `Notif Dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
									group = await Zeeone.groupMetadata(from);
									member = group['participants']
									jids = [];
									member.map(async adm => {
										jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
										})
										options = {
											text: teks,
											contextInfo: {
												mentionedJid: jids
												},
												quoted: Ofc
												}
												await Zeeone.sendMessage(from, options, text)
												limitAdd(sender, limit)
										break
						case 'addvn': case 'addaudio': case 'addmusic':
									if (!Ofc.key.fromMe && !isOwner && !isPrem) return reply(mess.only.prem)
									if (!isQuotedAudio) return reply('Reply Audionya Lord')
									if (!q) return reply('Nama Audionya Apa Lord?')
									boij = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									delb = await Zeeone.downloadMediaMessage(boij)
									fs.writeFileSync(`./database/audio/${q}.mp3`, delb)
									addVn(`${q}`)
									reply(`Sukses Menambahkan Audio!!\nCek Audio Dengan Cara Ketik ${prefix}listvn`)
									break
						case 'addstik': case 'addstiker': case 'addsticker':
									if (!Ofc.key.fromMe && !isOwner && !isPrem) return reply(mess.only.prem)
									if (!isQuotedSticker) return reply('Reply stiker nya Lord')
									if (!q) return reply('Nama Sticker Nya Apa Lord?')
									boij = JSON.parse(JSON.stringify(Ofc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
									delb = await Zeeone.downloadMediaMessage(boij)
									fs.writeFileSync(`./database/stick/${q}.webp`, delb)
									addStc(`${q}`)
									reply(`Sukses Menambahkan Sticker!!\nCek Sticker Dengan Cara Ketik ${prefix}liststick`)
									break
						case 'delstik': case 'delstick': case 'delsticker': case 'delstiker':
									if (!Ofc.key.fromMe && !isOwner  && !isPrem) return reply(mess.only.prem)
									if (!q) return reply(`Nama Sticker Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/stick/${q}.webp`)
										dellStc(`${q}`)
										reply(`Succes Menghapus sticker ${q}!`)
										await sleep(5000)
										} catch (err) {
											reply(`Gagal Menghapus sticker ${q}!`)
										}
									break
						case 'delaudio': case 'delvn':
									if (!Ofc.key.fromMe && !isOwner && !isPrem) return reply(mess.only.prem)
									if (!q) return reply(`Nama Audio Yang Mau Di Hapus Apa Lord?`)
									try {
										fs.unlinkSync(`./database/audio/${q}.mp3`)
										dellVn(`${q}`)
										reply(`Succes Menghapus Audio ${q}!`)
										await sleep(5000)
										} catch (err) {
											console.log(err)
											reply(`Gagal Menghapus Audio ${q}!`)
										}
									break
						case 'liststik': case 'liststicker': case 'liststiker': case 'liststick':
									Zeeone.updatePresence(from, Presence.avaible) 
									teks = '*「 LIST STICKER 」*\n\n'
									for (let awokwkwk of setiker) {
										teks += `📊 ${awokwkwk}\n`
										}
										teks += `\n*TOTAL :* ${setiker.length}`
										reply(`${teks}`)
									break
						case 'listvn': case 'listaudio':
									Zeeone.updatePresence(from, Presence.avaible) 
									teks = '*「 LIST AUDIO 」*\n\n'
									for (let awokwkwk of audionye) {
										teks += `📊 ${awokwkwk}\n`
										}
										teks += `\n*TOTAL :* ${audionye.length}`
										reply(`${teks}`)
									break
						case 'chatinfo': case 'sider':{
									if (!isGroup) return reply(mess.only.group)
									infom = await Zeeone.messageInfo(from, Ofc.message.extendedTextMessage.contextInfo.stanzaId)
									hemm = infom.reads
									hemms = infom.deliveries
									readon = hemms.map(v => v.jid)
									readdin = hemm.map(v => v.jid)
									stamp = hemm.map(v => v.t)
									function toTime(UNIXtimestamp, ribuan) {
										ribuan = (typeof ribuan == 'undefined') ? false : true;
										let a = new Date(UNIXtimestamp);
										if (ribuan) {
											a = new Date(UNIXtimestamp * 1000);
											}
											var hour = a.getHours();
											var min = a.getMinutes();
											var sec = a.getSeconds();
											var time = `${hour}:${min}:${sec}`;
											return time;
										}

										function toBulan(UNIXtimestamp, ribuan) {
											ribuan = (typeof ribuan == 'undefined') ? false : true;
											let a = new Date(UNIXtimestamp);
											if (ribuan) {
												a = new Date(UNIXtimestamp * 1000);
												}
												var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];
												var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum at', 'Sabtu'];
												var day = a.getDate()
												bulanee = a.getMonth()
												var thisDay = a.getDay(),
												thisDay = myDays[thisDay];
												var yy = a.getYear()
												var year = (yy < 1000) ? yy + 1900 : yy;
												var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}`;
												return bul;
												}
												teksx = `「 *TELAH DIBACA* 」\n\n`
												for (let i of hemm) {
													teksx += `📛 Nama : @${i.jid.split('@')[0]}\n⏰ Waktu : ${toTime(i.t, true)}\n📅 Tanggal : ${toBulan(i.t, true)}\n\n`
													}
												teksx1 = `「 *BELUM DIBACA* 」\n\n`
												for (let i of hemms) {
													teksx1 += `📛 Nama : @${i.jid.split('@')[0]}\n`
													teksx1 += `⏰ Waktu : ${toTime(i.t, true)}\n📅 Tanggal : ${toBulan(i.t, true)}\n\n`
													}
												Zeeone.sendMessage(from, teksx, text, { sendEphemeral: false, quoted: Ofc, thumbnail: thumbnail, contextInfo: { forwardingScore: 999, isForwarded: false, mentionedJid: readdin } })
												Zeeone.sendMessage(from, teksx1, text, { sendEphemeral: false, quoted: Ofc, thumbnail: thumbnail, contextInfo: { forwardingScore: 999, isForwarded: false, mentionedJid: readon } })
												}
												break
						case 'jadian':
									if (!isGroup) return reply(mess.only.group)
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									jds = []
									const A11 = groupMembers
									const B11 = groupMembers
									const C11 = A11[Math.floor(Math.random() * A11.length)] 
									const C22 = B11[Math.floor(Math.random() * B11.length)]
									D11 = `*「 JADIAN 」*\n\n@${C11.jid.split('@')[0]} ❤ @${C22.jid.split('@')[0]}\n\nMogaa Langgeng 😘`  
									jds.push(C11.jid)
									jds.push(C22.jid)
									mentions(D11, jds, true)
									await limitAdd(sender)
									break
						case 'naruto':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pNaruto(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url, q)
										})
									break
						case 'shadow':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pShadow(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'romantic':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pRomantic(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'smoke':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pSmoke(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'burnpaper':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pBurnPapper(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'lovemsg':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pLoveMsg(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'grass':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pMsgGrass(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'doubleheart':
									if (!q) return reply('teksnya Lord?')
									reply(mess.wait)
									pDoubleHeart(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'coffecup':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pCoffeCup(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'lovetext':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pLoveText(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
									})
									break
						case 'butterfly':
									if (!q) return reply('Teksnya Lord?')
									reply(mess.wait)
									pButterfly(`${q}`)
									.then(res => {
										sendMediaURL(from, res.url)
										})
									break
						case 'styletext': case 'textstyle':
									reply(Object.entries(await styleText(q)).map(([name, value]) => `_${name}_ : ${value}`).join`\n\n`)
									break
						case 'addrespon': case 'addres':
									if (!isPrem && !Ofc.key.fromMe) return reply(mess.only.prem)
									 if (args.length < 1) return reply(`Kirim perintah ${command} command|jawaban`)
									var soal = q.split('|')[0]
									var jawaban = q.split('|')[1]
									if (!jawaban) return reply(`Jawabannya apa?`)
									if (checkCommands(soal.toLowerCase(), cmdDB)) return reply(`Command tersebut sudah ada!`)
									addCommands(soal.toLowerCase(), jawaban, sender, cmdDB)
									reply('Sukses!')
									break
						case 'deleterespon': case 'dellrespon': case 'delrespon': 
									if (!isPrem && !Ofc.key.fromMe) return reply(mess.only.prem)
									if (args.length < 1) return reply(`Kirim perintah ${command} list respon`)
									if (isCreated(q.toLowerCase(), sender, cmdDB) && !isOwner) return reply(`Anda bukan pembuat command!`)
									deleteCommands(q.toLowerCase(), cmdDB)
									reply('Sukses Lord')
									break
						case 'listrespon': case 'listres':
									if (!isOwner && !Ofc.key.fromMe) return
									var txtt = `LIST REPONSE\nJumlah : *${cmdDB.length}*\n\n`
									for (let i of cmdDB){
										txtt += `*Respon :* ${i.commands}\n*Jawaban :* ${i.jawaban}\n*Created :* @${i.created.split("@")[0]}\n\n`
										}
										Zeeone.sendMessage(`${ownerNumber}`, txtt, text, { quoted: Ofc, contextInfo:{ mentionedJid: parseMention(txtt) }})
										break
						case 'inspect':
									if (isLimit(sender, isPrem, isOwner, limitawal, limit)) return reply(mess.limit)
									try {
										let linkRegex = /chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
										let [, code] = q.match(linkRegex) || []
										if (!code) throw 'Link invalid'
										res = await Zeeone.query({json: ["query", "invite", code],
										expect200: true})
										caption = `「 *GROUP LINK INSPECTOR* 」 
										
🔖 Nama Grup : ${res.subject}
🔖 Terakhir di ubah oleh : @${res.subjectOwner.replace("@c.us","")}
🔖 Di Ubah Pada ${formatDate(res.subjectTime * 1000)}

🔖 ID : ${res.id}
🔖 Di Buat Oleh : @${res.id.split('-')[0]}
🔖 Di Buat pada ${formatDate(res.creation * 1000)}

🔖Edit info grup : ${res.restrict?`Hanya admin`:`Semua peserta`}
🔖Kirim pesan : ${res.announce?`Hanya admin`:`Semua peserta`}
🔖Pesan sementara : ${res.ephemeralDuration?`Aktif`:`mati`}
🔖Jumlah Member : ${res.size}
🔖Member Yang Diketahui : ${res.participants ? '\n│ *' + res.participants.map((user, i) => ++i + '. @' + user.id.split`@`[0]+'*').join('\n│ *').trim() : 'Gada'}
🔖Deskripsi :*
${res.desc ? `${res.desc}` : 'Gada'}
🔖Terakhir di ubah oleh : @${res.descOwner.replace("@c.us","")}*
🔖Di ubah pada ${formatDate(res.descTime * 1000)}`
									try {
										profilePic = await Zeeone.getProfilePicture(res.id)
										} catch {
											profilePic = `${imagebb}`
											}
											anay = await getBuffer(profilePic)
											Zeeone.sendMessage(from, anay, image, {quoted: Ofc, thumbnail: thumbnail, caption: caption, contextInfo: {
												mentionedJid: Zeeone.parseMention(caption)
												}})
												} catch (e) {
													reply(`${e}`)
													}
												limitAdd(sender, limit)
												break
												default:

if (budy.startsWith("$")){
if (!isOwner && !isSelf) return
console.log(color('[ EXEC ]','yellow'), budy.slice(2))
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) reply(`${stdout}`)
})
}

if (budy.startsWith("x")){
try {
if (!isOwner && !isSelf)return
return Zeeone.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: Ofc})
} catch(err) {
e = String(err)
reply(`${e}`)
}
}
if(budy.startsWith(">")){
if (!isOwner && !Ofc.key.fromMe) return
console.log(color('[ EVAL ]','yellow'), budy.slice(2))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !isSelf) return
try {
return Zeeone.sendMessage(from, 
`${JSON.stringify(eval(budy.slice(2)),null,'\t')}`
,text, {quoted:Ofc })
} catch(err) {
e = String(err)
reply(`*ERROR :* ${e}`)
}
}
if (budy.startsWith('<')){
if (!Ofc.key.fromMe && !isOwner) return
if (!/^https?:\/\//.test(budy.slice(2))) return reply('Awali *URL* dengan http:// atau https://')
  res = await fetch(budy.slice(2))
  if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
  delete res
  throw `Content-Length: ${res.headers.get('content-length')}`
}
  if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, budy.slice(2))
  txtx = await res.buffer()
  try {
  txtx = util.format(JSON.parse(txtx+''))
  } catch (e) {
  txtx = txtx + ''
  } finally {
  reply(txtx.slice(0, 65536) + '')
}
}
if (isGroup && !isCmd && budy != undefined) {
} else {
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero")) {
if (!e.includes("Cannot read property 'conversation' of null")) {
if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
if (!e.includes("Cannot set property 'mtype' of undefined")) {
if (!e.includes("jid is not defined")) {
console.log('ERROR : %s', color(e, 'red'))
}
}
}
}
}
}
}
