let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let PhoneNumber = require('awesome-phonenumber')
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.verifikasi === true) throw `Anda Sudah Terdaftar Ke Dalam Database`
conn.sendButton(m.chat, '```Sukses Verify```', wm, 'Menu', '.menu', m)
    conn.reply('6285669537589-1614830865@g.us', `*「 Verify 」*\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${'@' + m.sender.split`@`[0]} Berhasil Melakukan Verifikasi`, m)
}
}
handler.help = ['verify']
handler.tags = ['main']

handler.customPrefix = /^@verify$/i
handler.command = new RegExp
module.exports = handler

