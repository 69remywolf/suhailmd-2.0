const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_29_12_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM1LFxuICAgICAgICA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTksXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQyLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDczLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc4LFxuICAgICAgICA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDM0LFxuICAgICAgICA3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDkyLFxuICAgICAgICAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyLFxuICAgICAgICA2NSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDgyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICA2MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjksXG4gICAgICAgIDIzLFxuICAgICAgICA5NixcbiAgICAgICAgODAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDUwLFxuICAgICAgICA1NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIndUR2xZOVJNeUUzenc3YkhTS1c3SThnVzZndDZlNDBBOXhkSldZQXIxS0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRFU0JZZHlpU0oyUTRiZ3ZmYW8wLUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTQ0NGM0ZGUtZGY3OS00YTUyLTgzNTQtOWZiY2M0ZWI0YTFiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDExNyxcbiAgICAgIDEwLFxuICAgICAgMTYyLFxuICAgICAgMTIxLFxuICAgICAgMjM4LFxuICAgICAgNzksXG4gICAgICA0MSxcbiAgICAgIDQ0LFxuICAgICAgMjksXG4gICAgICAxMSxcbiAgICAgIDc3LFxuICAgICAgMTEzLFxuICAgICAgMTIwLFxuICAgICAgMTg5LFxuICAgICAgMTYwLFxuICAgICAgMjUxLFxuICAgICAgMTgxLFxuICAgICAgMjUwLFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA4LFxuICAgICAgMTkzLFxuICAgICAgNTEsXG4gICAgICA4NyxcbiAgICAgIDE3MCxcbiAgICAgIDIxMCxcbiAgICAgIDY0LFxuICAgICAgMjUxLFxuICAgICAgMjE0LFxuICAgICAgNjksXG4gICAgICAxNjYsXG4gICAgICAyMTgsXG4gICAgICA3LFxuICAgICAgMjI4LFxuICAgICAgMjQzLFxuICAgICAgNTgsXG4gICAgICAyMTksXG4gICAgICAxMDYsXG4gICAgICAyMDUsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNEY5SzZYRUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTY5Nzk2MjM6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYxNjkzMDQ0NDk0NDM5OjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0syWjNKVUNFT2Fpd3JvR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicStKbzdoNkx1NWtVVjVEQUcvK0NmWllYbGk5VEw2K2tLQXJEUC9mTHVBdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUOUVwaVI3N1M5ZlcySXVySTBkYVNuM0VTeFBhNC9EOVlPNGQybVpIK3pqQThObzZSbXNUM0JhTXJmTCt1Z0F4YjVBOS9vVkRDSlcyRmI5NE5BbmVDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5QWVDS1llZEJEcUQ4NytuOURHUlJFODdBaExDNWVyamlYM29MOW44UTZ5eVY5RXFKbVVBMzNQb2FRVEsrb1dIMFRzRFlhZjc0dnpQNlNGbjZlQ09nQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDE2OTc5NjIzOjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMzMzMzU0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
