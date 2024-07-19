//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "2347045845726";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09FaTlFajlkMEpmTmV2dTFSRjZkaGZLa0h3eUFaem1ILzc2U251Zm9YUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicyt6dzV3ckg3Y2E2QStGaDZHSnp6M0JRMUNaYnVjeUxQR1lCY0pUdlNpdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTUFDeE5kNGxuSlhKdlZZRm9lTENLMko2SzZiUktrM01tS2lHK0tvQ1VBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4S2IzTWRHNjl0QWQ4VE5nRGdRMjNyY29BYThEVmh0aFJPZW1xVzlST2tZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MWWdCZVdSa0tobFhodlp4Q2duSmYyNm1FbnAxZFdIL3dENU9jQUxxWFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdvM1dyL0Y1MVdDZ1kwSHoxTWt3dnVBYmtmTHpMYmNPRzJhcHRmeVdaMDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0dtWGRWWTRubUhuRFJGNEtUeTB4aEFmMnpvc01wSlRySjZXbGZLWW5FTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlFDR0ZBTmxDeUUwUTVRL25ldjgrcmJ2RklWQ21CbDRnbEIzY25RL0dRaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVwTVZPUVNTVXdTdlliUUtDUVpQL1FHSGVHM1ZBd09rVnUwZlFIQ0w2UTdncDQ3WjZsbDZVTnpTUW9sV1doSUlLTWZSeWN1MUJnQ1BLc3cyVnd4SENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA2LCJhZHZTZWNyZXRLZXkiOiJOYTdpMjFLWTFFZmhqYlVTaG9SSEVaQWxEa2t1WkpUd2x0QzlPbmhGL0lVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDU4NDU3MjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkZCODVCRjE2RDM1QkRBREU1NUI5RDJENEY1MkIxMUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTQxNTU2N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieXpYVWItcThSdU9LUXNjZm10U1pyZyIsInBob25lSWQiOiI2MjlmNzhjZi1hMDUyLTQxNGUtYTBmMy04NTFlODhiYjM5OGQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHJvdFBwaDgyRXJha3liK0RqWlBkQ0VXcyt3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFqYmlkYTBpRmdMNGxRcmNSU2ZyMTd6TEhvOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJYNEE4OUtRQSIsIm1lIjp7ImlkIjoiMjM0NzA0NTg0NTcyNjoxM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLDl82cw5figqbFguKCtcmG4oKyyYTJjjQ1NsOXzZzDlyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlBvbmtvUS9PN3F0QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT2lRVm8wdGE3QWpiS0I5QXJtNlc5UmxTbWxraFNaN0lPZElsTVZLRnhqST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMWlFaU9BY2FoUjdZUUZtMGVvNENHZTZDOGQ2TWFEaGZnNGk5RGlMdHZjTHpud0IzV01HdDE2NkNNZDNrMlpVcUVCL2xEVVZTVXBiQmZxb0RPdjB5RHc9PSIsImRldmljZVNpZ25hdHVyZSI6IldxM3pWZmtLZ3lBNnlQaWtOaC81b2xadmNFZGpFYUF6MmtUZytKTHVpS3lDNS9mdFFHdEZvRlA5QXBUYzNjTlB4aEVIU3c1WnQxRWdXUUprVjBIRkFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0NTg0NTcyNjoxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUb2tGYU5MV3V3STJ5Z2ZRSzV1bHZVWlVwcFpJVW1leURuU0pURlNoY1l5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNDE1NTYyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUp6eiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "oi Wₐᵣₐᵢ ₒ𝚗ᵢ desu",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Wₐᵣₐᵢ ₒ𝚗ᵢ-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Wₐᵣₐᵢ ₒ𝚗ᵢ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
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
