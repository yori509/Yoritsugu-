//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "50942243437";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJnd1lnWTQzZzRBb2VSZ05SREU0WFp1RS91Yys2eFkybXBSUTN6OEZGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVl2UXk0dFBUaU9OOTB5RVpqUnVXdTQxTHJXL0RrNEpWU3ZBRHdqdXUxUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlT0U0Wmh4cHFwejcrblNDbDBrbEo0OW9EVkovems3dGlmOXFkOE04ZW5nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUkZDMzNabVFCYnk2UDVaZGZxR0JBNkRUVHFlSExBV29MV1ZBQWY1MDJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDdXE5MzZtV2h6M2x1dW9xWTBaQ1EwRjlIbU1LZlUvTjRPbHpLbCtkV1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhEOTZ3amx0WHJjL2RUVVhTU1RGbWhUTVZFRVR5d0VpczlDTUl6bVBqbG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVAzRENDdGdZaHZHQkJTTk1xelVTdEdjUDVPdHZIeHpEM0dNOGVQMDVGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnFjYmkrbHkvQUFoeU5GanQrZVpJc092QS9sVEJtVWJybm9QQUJXQmprdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFsYkNZN3lUU1VTYjE0b0JXczBkdXhNTVo5N0hzV3F0L2VjSitsZ2tVK0pqaW1VNXA1QlVGUVJFUms4cGhPVkpLUmRDczl1K0FHbDk4T09zdjh5Wmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjAsImFkdlNlY3JldEtleSI6Ik1McDhrTFVobFJTRWF5Y0pUUkxJWnZjYjJLU1FidHByTEs3SGdMYit2dmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5NDIyNDM0MzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOUFFRDg3RENCNjIzMjE1M0YzQUI5NzNFMjAxOTU2OEYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTUyOTY3N30seyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5NDIyNDM0MzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0NCQTc2Njc0MTVCNzRGMzM2RTc0RkIwRjUyQ0NFN0IifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTUyOTY3N30seyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5NDIyNDM0MzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEIzQThCQjkxNDc3OTBCMjE2MjRBQTlFQjRBNjBGQTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTUyOTY3OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5NDIyNDM0MzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkM3QkY0QjBDRjI3NkU1RkREMURGOTlBMzgxODYzMDIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTUyOTY3OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoib1Z6YTlORllSTy1yWGt4X1ZBekY2QSIsInBob25lSWQiOiIzNDhlYWI1ZC1hMTRlLTQyMjctYTkwMS1kNGMwYjJkMjZjNmIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEhuOFFYeTBNT2JLZ2FIQkc5SE9tSmpBMGRRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVoVHN0a01MTjMzY3MweWJ3NkhuQ0NOMEl1dz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNSEQ2UlE5ViIsIm1lIjp7ImlkIjoiNTA5NDIyNDM0Mzc6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJibGFjayBsYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHUrbzg0SEVML1dxc0FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNGVndGVCTGZXRFNWcjh6S3hPckFyLzRrZlJTWm01cXF5STVuZnZNTEx5cz0iLCJhY2NvdW50U2lnbmF0dXJlIjoieDhpMVA5MGQybDc5bGdPdC84bElBcVQxREphcmw0RE5aNStOam5MTitZNGh0ejZZeTZmWEx3TXpUU1B3WU90WmRhR2lEdHRTWlNpeW51ZlBLejZXQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjZPMFhrNG9VOURCeFBQZ0Y4cWJCQUxsbFJ6UUhWZ2FtOGxtc0Y2c2YvS0xjOHBXWGpjK04ydk0zb042N2ZYY0VaQ1I0V3BwK1dvWmVvVUJGQ2tkU2pnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDIyNDM0Mzc6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlSG9MWGdTMzFnMGxhL015c1Rxd0svK0pIMFVtWnVhcXNpT1ozN3pDeThyIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ1NTI5Njc2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9XeSJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
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
