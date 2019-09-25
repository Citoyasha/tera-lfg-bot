const fs = require("fs");
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = require(__dirname+'/BT.json');
bot.login(TOKEN.TOKEN)

fs.copyFileSync('./error.log', './error_old.log');
fs.watch('./error.log', (eventType, FN) => {
  if(eventType == "change") {
    F1 = fs.readFileSync('./error_old.log', 'utf8')
    F2 = fs.readFileSync('./error.log', 'utf8')
    gd = bot.guilds.get('301831766262546432');
    chlog = gd.channels.get('466056944478584843');
    chlog.send(F2.replace(F1, ''));
    setTimeout(() => { fs.copyFileSync('./error.log', './error_old.log') }, 30000);
  }

});
