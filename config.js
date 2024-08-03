const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_26_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM3LFxuICAgICAgICA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU3LFxuICAgICAgICAzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDg0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDg2LFxuICAgICAgICA0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAzNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjksXG4gICAgICAgIDU0LFxuICAgICAgICA5OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDgxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzSktONEZSRlJrY0V4ZGM0T0JLOWMvT0E2S2pwRHVqVzdkTUxnREFPcHJFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTc3ODAzNTQ5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjE2Q0E0MkJCNjVFMjhBNEMyMkMxMDFDNzg2Nzg1RURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjk4NzgwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5Nzc4MDM1NDk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEN0M5QUQ4OUZBMzYxRTRFNDNFNTM0NTlEN0I3RDY3OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2OTg3ODNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSFNCRThaQlRSZ3lnVzA3UE9kUktoZ1wiLFxuICBcInBob25lSWRcIjogXCJhMzU1OTQ3NS0wZmJiLTQwZjMtOTY4Yi02MmU0ZTEyM2U0NjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI5LFxuICAgICAgMTAsXG4gICAgICAyMDYsXG4gICAgICAzNixcbiAgICAgIDU0LFxuICAgICAgMTczLFxuICAgICAgNTUsXG4gICAgICAyMixcbiAgICAgIDEzNixcbiAgICAgIDExNixcbiAgICAgIDIzMSxcbiAgICAgIDkwLFxuICAgICAgODEsXG4gICAgICAyMDIsXG4gICAgICAxMDEsXG4gICAgICAyNDUsXG4gICAgICAxMjcsXG4gICAgICAxMTIsXG4gICAgICA2MyxcbiAgICAgIDEzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICA0OCxcbiAgICAgIDIyMSxcbiAgICAgIDE2NSxcbiAgICAgIDE4MixcbiAgICAgIDEzNCxcbiAgICAgIDcxLFxuICAgICAgMTYxLFxuICAgICAgNzcsXG4gICAgICA5MCxcbiAgICAgIDE3MCxcbiAgICAgIDMyLFxuICAgICAgMTksXG4gICAgICA1OSxcbiAgICAgIDUwLFxuICAgICAgMjEyLFxuICAgICAgMTYwLFxuICAgICAgMTI4LFxuICAgICAgMTgsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1VDNGSFJQSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5Nzc4MDM1NDk2OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR2l0PC8+Q29kZXJcIixcbiAgICBcImxpZFwiOiBcIjIwNjA2NDQxMDczMDc0NjozMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPTG43dkVFRUkyWXViVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjAwZVRVT09uUG1yaUdMSG1CUHBoMjBsUDFCWVdtVmdlYlBHM0dxYzNFaEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM0h5UUx5aXVlRzlLQXVYWjZ4UC84Tm5EajlmZENHS2psaXh0TXhPWHZta095NmlmTlVjUEdKdlpiZUtteTdzQ09OUnlNcWgwODhTbWNaT1pDZXpGQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYS9EUFpRSXV5aElFVkNEVHBBdWx0dHBtYkdnZVUvZ3N0ZTl1b0VPT2dVMnpOd20vVDlKT1RQY1RoWWpTcURXZEdMN0VHUUVpMFNnUnlmSHVPR205QXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5Nzc4MDM1NDk2OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjY5ODc3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1WS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVZLLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
