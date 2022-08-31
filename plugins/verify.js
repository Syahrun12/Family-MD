let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let PhoneNumber = require('awesome-phonenumber')
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.verifikasi === true) throw `Anda Sudah Terdaftar Ke Dalam Database`
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.profilePictureUrl(who, 'image')
  } catch (e) {
    console.log(e)
  } finally {
    let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, verifyTime, age, level, role, rank } = global.db.data.users[who]
    let verify = Object.values(global.db.data.users).filter(user => user.verifikasi == true).length
let totalreg = Object.keys(global.db.data.users).length
    // let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = await(conn.getName(who)) 
  global.users[m.sender].verifikasi = true 
  global.users[m.sender].verifyTime = + new Date

let str = `
    ━━ *『 Success 』* ━━
Verification Success

╭─ *『 VERIFY 』*
│ ⇒ Name: ${username} ${registered ? '(' + name + ') ': ''}
│ ⇒ Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
│ ⇒ Link: https://wa.me/${who.split`@`[0]}
│ ⇒ Total User: ${totalreg} User
│ ⇒ User Verifikasi: ${verify} User
╰── *Success* ──
`.trim()
    let mentionedJid = [who]
    conn.sendButton(m.chat, str, wm, { 'button[0]': 'Menu', 'row[0]': '.menu' }, m, null, 'image', pp)
    conn.reply('120363039892334404@g.us', `*「 Verify 」*\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${'@' + m.sender.split`@`[0]} Berhasil Melakukan Verifikasi`, m)
}
}
handler.help = ['verify']
handler.tags = ['main']

handler.customPrefix = /^@verify$/i
handler.command = new RegExp
module.exports = handler

