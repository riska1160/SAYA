let handler = function (m) {
  // this.sendContact(m.chat, '6289535566000', 'Nurutomo', m)
  this.sendContact(m.chat, '6289535566000', 'BOT SAD', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
