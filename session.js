//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieURSbmVUUDNBVGxibXZzL3FVVUUyanYvOEd5Z3F2RlJlcDVKbytFbzZVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3Y2RUVEeGJ6UWdMdWJZR0JSRkV6K3Z1OGN1enVmbGpvbWcrZTA5U1dsST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTzd4R2hISkhsMWk3aHBpeW5CKzhpNjZacVlEdnhGQ01KMnAxaFdRNzM0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnYjRFQ3NEOXZvS01HS3dLUjk1SExNeXhmQzBOTmZSMHZLR3ZCYVQyWlZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNEUUNLOGUyZzI3SXVJbFRPOGZ6WmZ1QzlsUXBMRXRnZUpEZ3UvREtORU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB2dzIxeXVac2lZaUdLOHhnUGNKTHhUWUVQMWN5ZUZIYWtwZ1FLRWZWQ0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK000Mkw3anAvZThEZnVabFBueG4vREZnbDVuS0Z5c3BKWmg0eFFyTjVuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDc4WVJ1TEVacVplSzFFWGVUZjBRZ3lkcm5BT2Q2NnJxTTdKWjJtWEx5TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNUW8vZzJRKzU2UW9QV1hqNHhKRFl1L0RMUkVJSFcweW1CdWFDZUlaSzJLQnB1bTFrTFdBNG9UQk1XNjJYekRPbzhWQlhoL09BUmowMmtYbDZwZUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI2LCJhZHZTZWNyZXRLZXkiOiJoVzJuc2IrT2loUFF5VzRlSXZzeEdaYjNxUVA3MVIxUXBBUkZpdzVMZXRRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc0MzkxNTYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU0MUM1MzM0RDgyQTAzOUQ1MENBQkJDMzdGQThFNzlGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUwNTgxNjF9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc0MzkxNTYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZFRjVDMUMwQjVERUI3QjkwQjFENjZCRkNGRTE2OUJGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUwNTgxNjN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Il8tOThKMkJUUkE2V3J4QnJsTUtaS0EiLCJwaG9uZUlkIjoiYmJlN2VlZDgtZTc4MS00NTU5LTgwYjctY2Q5NWNmZmY4MzM1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRranN6OElZNFFFRWpTcm0xRW92aXZBUGlwdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFNjBmSndRUG4rVHZ4RFNHSzNDZU1ocTNKN009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWEI4UFZITjIiLCJtZSI6eyJpZCI6Ijk0Nzc0MzkxNTYwOjUzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlUgUCBsIG8gYSBkIGUgciAgOiApIiwibGlkIjoiNzA3MjE1NTIyNzc2NDM6NTNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKS0Q3TGNIRU9LZjhNUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPODZBTlE4clJPM3NSbWUwdjlIb0RMSzBZQVJlS0lJRTdYRkcxcGt4VkdJPSIsImFjY291bnRTaWduYXR1cmUiOiJMZTEyNVlkSVdaL1BRRGN6RlVKQnJhNlZCRU54dkl2WFhJbkV6Q2hwN3NLT2JuSjdiS3R3WkIvUTZ0QjdPcjM3bE4rdHMwczNYTXl3QWxnZHNhK1REQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOFVmbzJVa3JvZTgvcW5OL0Q2SEh4dzdDVHVwa1RoRnlqY1VMNDZ4QlZhWGtremE1VmZlMERqdXArZGZyYUJnM3g1YUcvVHY5ZjlEUi9BRW9TQWVBQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NDM5MTU2MDo1M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUdk9nRFVQSzBUdDdFWm50TC9SNkF5eXRHQUVYaWlDQk8xeFJ0YVpNVlJpIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUwNTgxNTksImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTnhxIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0774391560",
  PASSWORD: 
    process.env.PASSWORD || "Kavi@1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
