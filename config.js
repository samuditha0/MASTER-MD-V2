const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "masterhelper@gmail.com";
global.location = "Asia/Colombo";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "94720797915@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github = process.env.GITHUB || "https://github.com/MrMasterOfc/MASTER-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaWWZa1G3R3c4TPADo0M";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2368f1b5d6ff724ae0c51.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94720797915,94763621705";
global.owner = process.env.OWNER_NUMBER || "94720797915";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";  //Fill the value: 'unavailable'(for nothing) | 'available'(for alwaysonline) | 'composing'(for typing) | 'recording' | 'paused'
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "94720797915";
global.read_status_from = process.env.READ_STATUS_FROM || "94720797915";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID = 
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJYNUFZTUJucGhVL2JxemRVNmZWRGJidnZBNTBPbTVwbEVDQ1JQZXBuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkpiSENmWDBSNUhmZlZJK1ZNVmRUb0lLY1RhbWQ3SlE2NkpQb3A4a0pSbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQmdVWkZZam5paEdIeWtFMGVmZUxydGIzNURPSGxLQ0xVZzF1alhNRzNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4ZTRtY3JFZ1hyR2ZMTmJiYkNtS2NwdTNRWFVNTGZuVENlSTNWNmxkRFh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNFS0lpNXphWDRIc0RSbi93bktyMGJsbVhGa0lrdjE2OGRGYS9NN3MvbVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlWYXJXMkR6STYxYlF0RE9RNFVhSFpuT0xNeGhDTXdxenliK0FVRnJoV2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0wyRUwzUTJSYVlnYUt3bVM2UmhURkUwV0ZmRTZFTStmUFN1SCtvZGNrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0s2enFjblAyVG1RNHl5OXFVMU11TCtsbzdubVNPcENsNzdFQ2dMYTNBbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iko1YWg2bU55cXY4VmxhZnhscGZJODF0OExBdHlkdzFaWjdqV3BEaVlzNXh0bE8wS1lJVzR6TUJLYmdhTm5BTHRTMUh1RVhNUk9kTGNTNjJYZFNuZmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6IjJLQ0RPYkZlS2lqaENCN0JlZzRiR0tuazZZSmY3NDcrZXlmR2duNUwxc2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDQ2MDM2NDBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTJFREE0QTRDOEVDMzg1NDE1RkYwQzdCOTg2ODNFNjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTQ1NTU1OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYUlJN2FiaGtRem1YRWZSQlExVl9EQSIsInBob25lSWQiOiJhYjFmZGM5Yi1mYjk4LTQ5ZTgtYmVjNi1kYTJmZWI2OGNkMTkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDFxaWVoN2h0NHM3NXpzbVdJNCtOaHdUcmFvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikp4ZlRuVkUvQWswREVra0Y5WjFkS0U4cEVsZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJCRjhES1ZFVyIsIm1lIjp7ImlkIjoiOTQ3MDQ2MDM2NDA6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTXIuQXJvc2gifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pLdzJMTURFTGllODdNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlM1NXRhUzBGSy9HMDJPRVJyY2tNbVhiQmVSWTlpS0g1MlIvNm5yZ2lpa1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9YSmxzRFkxdktaY2ZhcGdneC9JTVRvbzhaN1pvUm8wWE5ZSGlmZ3owcmIxNm1SdXk2YVlmWkdOQWF4aytPZ3JIeTlQSTh5WERBNDhpOFhhNU1RWUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3N2NNMVRDRml2aU84NXh2MGZaRW85N3Y4U1owZ1A4OTN0T1N6VHFObVhMbnIwczloMDZYVDNkYXR4Myt5blFzYVgwWFkzUEpnengrL2ZYWlhERUNqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzA0NjAzNjQwOjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlV1ZWJXa3RCU3Z4dE5qaEVhM0pESmwyd1hrV1BZaWgrZGtmK3A2NElvcEYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk0NTU1NTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRVJpIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ꜱᴀʜᴀɴ ᴏꜰᴄ",
  author: process.env.PACK_AUTHER || "Sahan",
  packname: process.env.PACK_NAME || "MASTER-MD",
  botname: process.env.BOT_NAME || "•ᴍᴀꜱᴛᴇʀ-ᴍᴅ•",
  ownername: process.env.OWNER_NAME || "Sahan",
  errorChat: process.env.ERROR_CHAT || "94720797915",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "345f70f1c3f2ecef4d718d33c14026f9",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
