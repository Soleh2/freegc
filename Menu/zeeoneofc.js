exports.allmenu = (pushname, sender, isOwner, isPrem, cekvipp, getLimit, limitawal, limit, balance, getBalance, simbolnya, petik, prefix) => {
return`Hello ${pushname}🤗

• Nama : ${pushname} 
• Nomor : @${sender.split("@")[0]} 
• Status : ${isOwner?`Owner ⚔️`:isPrem?`Premium 🏅`:`Free User`} 
• Expired Prem : ${isOwner?`Unlimited Owner`:isPrem ? `${cekvipp.days}d, ${cekvipp.hours}h, ${cekvipp.minutes}m, ${cekvipp.seconds}s`:'Not Premium'}
• Limit : ${isOwner?`Unlimited`: isPrem ? `Unlimited Premium` : getLimit(sender, limitawal, limit) +' / '+limitawal}
• Balance : $${getBalance(sender, balance)}


*Owner Menu*${petik}
${simbolnya} ${prefix}bc
${simbolnya} ${prefix}exif
${simbolnya} ${prefix}ban
${simbolnya} ${prefix}unban
${simbolnya} ${prefix}block
${simbolnya} ${prefix}unblock
${simbolnya} ${prefix}clearall
${simbolnya} ${prefix}setbiobot
${simbolnya} ${prefix}setnamabot
${simbolnya} ${prefix}resetlimit
${simbolnya} ${prefix}cekapikey
${simbolnya} ${prefix}setthumb
${simbolnya} ${prefix}prem add @tag waktu
${simbolnya} ${prefix}prem dell
${simbolnya} ${prefix}sewa add waktu
${simbolnya} ${prefix}sewa dell
${simbolnya} ${prefix}auto ngetik/vn
${simbolnya} ${prefix}setprefix nopref/multi
${simbolnya}  > || x
${simbolnya}  =>
${simbolnya}  $
${simbolnya}  <${petik}

*Download Menu*${petik}
${simbolnya} ${prefix}play
${simbolnya} ${prefix}ytmp3
${simbolnya} ${prefix}ytmp4
${simbolnya} ${prefix}igpost
${simbolnya} ${prefix}tiktok
${simbolnya} ${prefix}tiktokaudio
${simbolnya} ${prefix}tiktoknowm
${simbolnya} ${prefix}mediafire${petik}

*Convert Menu*${petik}
${simbolnya} ${prefix}sticker
${simbolnya} ${prefix}swm
${simbolnya} ${prefix}take
${simbolnya} ${prefix}attp
${simbolnya} ${prefix}semoji
${simbolnya} ${prefix}toimg
${simbolnya} ${prefix}tomp4
${simbolnya} ${prefix}togif
${simbolnya} ${prefix}tomp3
${simbolnya} ${prefix}tovn
${simbolnya} ${prefix}tinyurl
${simbolnya} ${prefix}kontak
${simbolnya} ${prefix}tts Kode Bahasa Teks
${simbolnya} ${prefix}translate Kode Bahasa
${simbolnya} ${prefix}bass
${simbolnya} ${prefix}slow
${simbolnya} ${prefix}fast
${simbolnya} ${prefix}robot
${simbolnya} ${prefix}detikvn
${simbolnya} ${prefix}tupai
${simbolnya} ${prefix}vibrato${petik}

*Editor Menu*${petik}
${simbolnya} ${prefix}memegen teks atas | teks bawah
${simbolnya} ${prefix}stickmeme teks${petik}

*Search Menu*${petik}
${simbolnya} ${prefix}caripesan
${simbolnya} ${prefix}pinterest
${simbolnya} ${prefix}wikipedia
${simbolnya} ${prefix}playstore
${simbolnya} ${prefix}brainly
${simbolnya} ${prefix}yts${petik}

*Storage Menu*${petik}
${simbolnya} ${prefix}addrespon
${simbolnya} ${prefix}dellrespon
${simbolnya} ${prefix}listrespon
${simbolnya} ${prefix}listbadword
${simbolnya} ${prefix}addvn
${simbolnya} ${prefix}addsticker
${simbolnya} ${prefix}listvn
${simbolnya} ${prefix}liststicker
${simbolnya} ${prefix}delstik${petik}

*Fun Menu*${petik}
${simbolnya} ${prefix}slot
${simbolnya} ${prefix}truth
${simbolnya} ${prefix}dare
${simbolnya} ${prefix}voting @tag | alasan | waktu
${simbolnya} ${prefix}dellvote
	vote
	devote${petik}
   
*Group Menu*${petik}
${simbolnya} ${prefix}chatinfo
${simbolnya} ${prefix}afk reason
${simbolnya} ${prefix}hidetag
${simbolnya} ${prefix}notif
${simbolnya} ${prefix}infogc
${simbolnya} ${prefix}jadian
${simbolnya} ${prefix}listonline
${simbolnya} ${prefix}tagall
${simbolnya} ${prefix}ceksewa
${simbolnya} ${prefix}add 628XX
${simbolnya} ${prefix}kick
${simbolnya} ${prefix}promote
${simbolnya} ${prefix}demote
${simbolnya} ${prefix}resetlink
${simbolnya} ${prefix}linkgc
${simbolnya} ${prefix}grup buka/tutup
${simbolnya} ${prefix}antibadword on/off
${simbolnya} ${prefix}antilink on/off
${simbolnya} ${prefix}antitroli on/off${petik}
   
*Limit Menu*${petik}
${simbolnya} ${prefix}topbalance
${simbolnya} ${prefix}toplimit
${simbolnya} ${prefix}limit
${simbolnya} ${prefix}level
${simbolnya} ${prefix}balance
${simbolnya} ${prefix}buylimit Nominal
${simbolnya} ${prefix}giftlimit @tag | nominal
${simbolnya} ${prefix}buyprem [need 1k limit]${petik}
   
*Maker Menu*${petik}
${simbolnya} ${prefix}naruto
${simbolnya} ${prefix}shadow
${simbolnya} ${prefix}lovemsg
${simbolnya} ${prefix}doubleheart
${simbolnya} ${prefix}coffecup
${simbolnya} ${prefix}lovetext
${simbolnya} ${prefix}butterfly
${simbolnya} ${prefix}romantic
${simbolnya} ${prefix}smoke
${simbolnya} ${prefix}burnpaper
${simbolnya} ${prefix}grass${petik}

*Others Menu*${petik}
${simbolnya} ${prefix}pantun
${simbolnya} ${prefix}faktaunik
${simbolnya} ${prefix}styletext
${simbolnya} ${prefix}donasi
${simbolnya} ${prefix}asupan
${simbolnya} ${prefix}nulis
${simbolnya} ${prefix}getnumber
${simbolnya} ${prefix}getpic
${simbolnya} ${prefix}inspect
${simbolnya} ${prefix}wame 
${simbolnya} ${prefix}towame${petik}`
}
