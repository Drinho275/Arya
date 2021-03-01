let handler = function (m) {
  this.sendContact(m.chat, '554999156302', 'Drinho', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
