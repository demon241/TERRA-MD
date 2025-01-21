const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID |LF50zTKS#AfAf9cr5MXwHCLQ3zM86FfwhK1Cljn3DNEIHgcng-oE| "ENTER YOUR SESSION HERE",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/RDMZltj.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "TERRA ITS ALIVE🫧 AND READY JUST TYPE .menu TO SHOW COMMAND LIST",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX |.| ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME |𖤓⃞⃝🌹༒• 𝐾𝐴𝑅𝑀𝐴•𖤓⃞⃝🌹༒| "『𝐓𝐄𝐑𝐑𝐀 𝐌𝐃』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
