const xp = (prefix, botName, ownerName) => {
        return `
「 *Arya Bot* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: Drinho 
  ❏ Version: 0.0.4
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *XP*
  │
  ├─ ❏ ${prefix}leveling
  ├─ ❏ ${prefix}level
  └─ ❏ ${prefix}mining
--------------------------------
Note: Kamu bisa mengumpulkan xp dan menaikan levelmu dengan cara chat dengan siapapun di dalam grup yang telah di aktifkan fitur leveling nya.`
}
exports.xp = xp
