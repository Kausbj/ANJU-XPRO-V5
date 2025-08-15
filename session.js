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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0NyM21XR2ZPMDZLandGaHpDSS9WMy9KdVBBSmdnQVh6N1ZLTlBNNnAwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmcwQVJIdEhUOEN5cWRrczE2SGtrRVRFNHZNYVl4dHpjVWl4ZUhJK3Ezbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSC82bERORTN0bmF3VWp3Mm1FZmRSUEJtdDdIdnkxYURuY3hFMmZtWjFFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFdmFoejZnQTB6blFPWjVKWTludGE3NnY2UzlKanpvcDhOdVVHMjVMVjBFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBBa1Npai9SeFBaN0Q5OFFnTTRYL29vVnZLZEQwUlVmaVBkcVN5akwwa2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9SK1hFKzFqM1lkclgvUVpnNzRvNEE3d21qMWlhOWV6dnkyRU9aNDRSWDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0R3a1drWnhpcm9oWEFJclpLWTFhdkdxRWJjaDB0cFN0cXhLeGV3REZXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEVXTWFsYThaNmgrRVUySjliRDRTWitQaFlZaVZCS3Z4dDFZMWdLNURDYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndnQ0RCK1p4Y2dlL09IRE9ZTnRpeVlhdE1SZWd3bG1EQ3NGUHRVLzU5OW1tMTZvSVRPcGJ0Rzc3bUNnZ3BGa0pxY29CU0F1MjZJY29YTis5ZGJ3RWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiJvT1ZMQ1dOVHpuMjRHQ3JPemwyR204cHp0dHRWT3NnVVNPekp2UXlqYUxRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIWDBRWGFIeFNKT1FtZXlBNTJqTW5nIiwicGhvbmVJZCI6IjhiMTc1NjZlLWE5OTctNGNkMi1hMmEyLWZkZTI3MjUxMzQ3YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3d2hGS25YSkxCYStNc1lLajdmUDFaczczWVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVllvSS9xMjh6Yk5uSllKWEF3RkNYdERBVVhRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkQzOEpKTjVBIiwibWUiOnsiaWQiOiI5NDc3NDM5MTU2MDo1NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJVIFAgbCBvIGEgZCBlIHIgIDogKSIsImxpZCI6IjcwNzIxNTUyMjc3NjQzOjU0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSktEN0xjSEVPQ0YvTVFHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTzg2QU5ROHJSTzNzUm1lMHY5SG9ETEswWUFSZUtJSUU3WEZHMXBreFZHST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVGhlamNKQitqMnN1WTZXMGhFNnRZVk9LNVRBdlB4NWFHYURMb0ZKZUJJaFhOQ0FFR1huRjVoWlhJdndUR042SjhBdVQrc21NMlJTRVlmQVZ0UEdmQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IlVWMGwrNS9iUHZqcmVYc2NXVm93amo0UWhVWUxVVWhPS2hoT0NGMDN0VGpTRmh2eDRvbWpuVDVnK2VuM2xGam9aMnN4cDc2YmNmZTRuWS96aEFoNmhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzQzOTE1NjA6NTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVHZPZ0RVUEswVHQ3RVpudEwvUjZBeXl0R0FFWGlpQ0JPMXhSdGFaTVZSaSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1MjUxNDM3LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU54cSJ9",
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
