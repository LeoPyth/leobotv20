import fetch from 'node-fetch'

let handler = async (m, {text, usedPrefix, command, conn}) => {
let noteks = 'Kosong'
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Minecraft`
  
  if (command == 'apkdone') {
  let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + 'š ' + v.apps_name,
		description: '\nā Version: ' + v.apps_version + '\nā²ļø Rate: ' + v.apps_rate + '\nšļø Tags: ' + v.apps_tag + '\nš Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `āļø ${command} Search Disini āļø`,
		description: `ā” Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'apkgoogle') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkgoogle?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + 'š ' + v.apps_name,
		description: '\nā Version: ' + noteks + '\nā²ļø Rate: ' + noteks + '\nšļø Tags: ' + v.apps_tag + '\nš Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `āļø ${command} Search Disini āļø`,
		description: `ā” Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'apkmody') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkmody?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + 'š ' + v.apps_name,
		description: '\nā Version: ' + noteks + '\nā²ļø Rate: ' + noteks + '\nšļø Desc: ' + v.desc + '\nš Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `āļø ${command} Search Disini āļø`,
		description: `ā” Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'apkshub') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkshub?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + 'š ' + v.apps_name,
		description: '\nā Version: ' + noteks + '\nā²ļø Rate: ' + noteks + '\nšļø View: ' + v.apps_views + '\nš Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `āļø ${command} Search Disini āļø`,
		description: `ā” Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'happymod') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/happymod?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + 'š ' + v.apps_name,
		description: '\nā Version: ' + noteks + '\nā²ļø Rate: ' + v.apps_rate + '\nšļø View: ' + v.apps_views + '\nš Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `āļø ${command} Search Disini āļø`,
		description: `ā” Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'hostapk') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/hostapk?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + 'š ' + v.apps_name,
		description: '\nā Released: ' + v.apps_released + '\nā²ļø Author: ' + v.apps_author + '\nšļø Desc: ' + v.apps_desc + '\nš Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `āļø ${command} Search Disini āļø`,
		description: `ā” Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'revdl') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/revdl?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + 'š ' + v.apps_name,
		description: '\nā Released: ' + noteks + '\nā²ļø Author: ' + noteks + '\nšļø Desc: ' + noteks + '\nš Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `āļø ${command} Search Disini āļø`,
		description: `ā” Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'toraccino') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/toraccino?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + 'š ' + v.apps_name,
		description: '\nā Released: ' + v.apps_upload + '\nā²ļø Author: ' + v.apps_author + '\nā” Desc: ' + v.apps_desc + '\nšļø Tag: ' + v.apps_tag + '\nš Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `āļø ${command} Search Disini āļø`,
		description: `ā” Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'uapkpro') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + 'š ' + v.apps_name,
		description: '\nā Version: ' + noteks + '\nā²ļø Rate: ' + v.apps_rate + '\nšļø View: ' + v.apps_views + '\nš Url: ' + v.apps_linkdl,
		rowId: usedPrefix + 'ss ' + v.apps_linkdl
	}))
	let button = {
		buttonText: `āļø ${command} Search Disini āļø`,
		description: `ā” Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

}
handler.help = ['apkdone', 'apkgoogle', 'apkmody', 'apkshub', 'happymod', 'hostapk', 'revdl', 'toraccino', 'uapkpro'].map(v => v + ' <app>')
handler.command = ['apkdone', 'apkgoogle', 'apkmody', 'apkshub', 'happymod', 'hostapk', 'revdl', 'toraccino', 'uapkpro']
handler.tags = ['random']

export default handler