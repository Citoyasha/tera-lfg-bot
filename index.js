const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const path = require("path");
const TOKEN = require(__dirname + '/BT.json');
const utils = require(__dirname + '/commands/utils.js');
const BlackList = require(__dirname + '/BL.json');
const Vibrant = require('node-vibrant');

bot.on('message', message => {

 {
  try {
   BL = require("./BL.json");
  } catch (e) {
   BL = {};
  }
 }

 {
  try {
   data = require('./lfg.json');
  } catch (e) {
   data = {};
  };
 }

 {
  try {
   lfgi = require('./LFGs/' + x + '.json');
  } catch (e) {
   lfgi = {};
  };
 }

 {
  var context = message.content.split(" ").slice(2).toString().replace(/,/g, " ");
  var arg = message.content.split(" ");
  var ps = "Contact party leader via Discord!";
  gd = bot.guilds.get('301831766262546432');
  chlog = gd.channels.get('466056944478584843');
  var img = message.guild.iconURL
 }

 {
  var C = ((Math.floor((Math.random() * 255) + 1)) * 65536) + ((Math.floor((Math.random() * 255) + 1)) * 256) + (Math.floor((Math.random() * 255) + 1));
 }

 function Dlog(msg) {
  gd = bot.guilds.get('301831766262546432');
  chlog = gd.channels.get('466056944478584843');
  chlog.send(msg);
 }

 function BlackList() {
  if (message.author.id != "202373842490884096") return;
  member = bot.users.get(arg[2]);
  BL[member.username + "#" + member.discriminator] = {
   "ID": member.id
  };
  fs.writeFileSync(path.join(__dirname, "BL.json"), JSON.stringify(BL, null, 2));
  chlog.send("Blacklisted : " + member.username + "#" + member.discriminator)
 };

 function BlackListed() {
  for (var user in BL) {
   if (BL[user].ID === message.author.id) return false;
  }
  return true;
 };

 function DelBL() {
  if (message.author.id != "202373842490884096") return;
  for (var user in BL) {
   if (BL[user].ID === arg[2]) {
    delete BL[user];
    fs.writeFileSync(path.join(__dirname, "BL.json"), JSON.stringify(BL, null, 2));
    member = bot.users.get(arg[2]);
    chlog.send("Whitelisted : " + member.username + "#" + member.discriminator)
   }
  }
 }

 function fileaddserver() {
  fs.writeFileSync(path.join(__dirname, "lfg.json"), JSON.stringify(data, null, 2));
 };

 function lfginfo(msgID) {
  fs.writeFileSync(path.join(__dirname + "/LFGs", msgID + ".json"), JSON.stringify(lfgi, null, 2), (err) => {
   if (err) throw err;
   chlog.send('LFG saved under ' + msgID);
  });
 };

 function stats() {
  var N = 0;
  arr = [];
  arr1 = [];
  arr2 = [];
  for (var id in data) {
   if (data.hasOwnProperty(id)) {
    N++
    gd = bot.guilds.get(data[id].GID);
    gdn = gd.name
    str2 = "● " + gdn + "\n"
    arr = arr.concat(str2);
   }
  }
  var hlf = (N / 2).toFixed(0);
  for (var i = 0; i < hlf; i++) {
   arr1 = arr1 + arr[i];
  }
  for (var i = hlf; i < N; i++) {
   arr2 = arr2 + arr[i];
  }

  const embed = {
   "color": C,
   "fields": [{
     "name": "🔮 Users count :",
     "value": bot.users.size
    },
    {
     "name": "🔮 Servers list :",
     "value": N + " Servers."
    },
    {
     "name": "\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_",
     "value": arr1,
     "inline": true
    },
    {
     "name": "\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_",
     "value": arr2,
     "inline": true
    }
   ]
  };
  message.channel.send({embed});

 };

 function delfg(id) {
  if (message.author.id === "202373842490884096") {
   i = require(__dirname + '/LFGs/' + id + '.json');
   for (var m in i) {
    gd = bot.guilds.get(i[m].GID);
    ch = gd.channels.get(i[m].CID);
    ch.fetchMessage(i[m].ID)
     .then(message => {
        message.delete();
     });
   };
  }
 };

 function delserver() {
  if ((message.author.id === message.guild.ownerID) || message.author.id === "202373842490884096") {
   let gid = message.channel.guild.id;
   let gd = bot.guilds.get(gid);
   let gname = gd.name;
   if (typeof data[gid] === "undefined") {
    message.reply("Not found!")
   } else {
    delete data[gid]
    fileaddserver();
    setTimeout(() => {
     message.reply("deleted")
    }, 500);
    chlog.send(message.author + " deleted server. Server name :" + gname)
   }
  } else {
   message.channel.send("Only Server owner or bot owner can do that!")
  };
 };

 function addserver() {
  if ((message.author.id === message.guild.ownerID) || message.author.id === "202373842490884096") {
   data[message.channel.guild.id] = {
    Name: message.channel.guild.name,
    GID: message.channel.guild.id,
    ID: message.channel.id,
    channel: message.channel.name
   };
   fileaddserver();
   setTimeout(() => {
    message.reply("added");
   }, 500);
   chlog.send(message.author.tag + " added server. Server name :" + message.channel.guild.name + " Channel name :" + message.channel.name)
  } else {
   message.channel.send("Only Server owner or bot owner can do that!")
  };
 };

 function embedlfg(x, y, z, mc, mess, msgID, mgi, mat, maa, ps, gid, ce, ge, cid) {
  if(!mgi) return;
  Vibrant.from(img).getPalette().then((palette) => {
   var rgbToHex = function(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
     hex = "0" + hex;
    }
    return hex;
   }
   var fullColorHex = function(r, g, b) {
    var red = rgbToHex(r)
    var green = rgbToHex(g)
    var blue = rgbToHex(b)
    return red + green + blue
   }
   C = fullColorHex(palette.Vibrant._rgb[0], palette.Vibrant._rgb[1], palette.Vibrant._rgb[2]);

   const embed = new Discord.RichEmbed()
    .setTitle('LFG [Mystel]')
    .setDescription("**Dungeon : **" + x + "\n**Roles : **" + y + "\n**ign : **" + z, )
    .setColor(C)
    .setTimestamp(mc)
    .setFooter(mess + " | " + msgID, 'https://pbs.twimg.com/profile_images/1113257574302777351/53c1KCSh_bigger.png')
    .setThumbnail(mgi)
    .setAuthor(mat, maa)
    .addField('PS :', ps)
    .addField('React with :', '✅ when party is Full!\n❌ to delete lfg');

   gd = bot.guilds.get(gid);
   if (typeof gd === "undefined") {
    chlog.send("channel " + ce + " of " + ge + " not found!")
   } else {
    ch = gd.channels.get(cid);
    ch.send({embed})
   };
  });
 };

 function lfg() {
  for (var id in data) {
   if (data.hasOwnProperty(id)) {
    if (typeof arg[3] != "undefined") {
     var ign = arg[3];
    } else {
     var ign = message.channel.guild.member(message.author).displayName;
    }
    if (typeof arg[4] != "undefined") {
     ps = message.content.split(" ").slice(4).toString().replace(/,/g, " ");
    };
    embedlfg(arg[1], arg[2], ign, message.createdAt, message.guild.name, message.id, message.guild.iconURL, message.channel.guild.member(message.author).displayName + " ( " + message.author.tag + " )", message.author.avatarURL, ps, data[id].GID, data[id].channel, id, data[id].ID);
   };
  };
 };

 function discordlfg() {

  for (var id in data) {
   if (data.hasOwnProperty(id)) {
    if (message.channel.id === data[id].ID) {
     lfg()
    };
   };
  };
  setTimeout(() => {
   message.react('✅')
   message.react('❌')
   for (var id in data) {
    if (data.hasOwnProperty(id)) {
      let gd = bot.guilds.get(data[id].GID);
      if (typeof gd === "undefined") {
       console.log("error! channel not found!")
      } else {
       let ch = gd.channels.get(data[id].ID);
       let msg = ch.guild.member(bot.user.id).lastMessageID;
       lfgi[gd.name] = {
        CID: ch.id,
        GID: gd.id,
        ID: msg,
        author: message.author.id
       };
       lfginfo(message.id)
     }
    }
   }

  }, 5000);

  const collector = message.createReactionCollector((reaction, user) => user === message.author);
  collector.on('collect', async (messageReaction) => {
   i = require(__dirname + '/LFGs/' + message.id + '.json');

   if (messageReaction.emoji.name === '✅') {
    for (var m in i) {
     gd = bot.guilds.get(i[m].GID);
     ch = gd.channels.get(i[m].CID);
     ch.fetchMessage(i[m].ID)
      .then(message => {
       message.edit("Party Full!")
      });
    };
    messageReaction.remove(bot.user);
    return;
   }

   if (messageReaction.emoji.name === '❌') {
    for (var m in i) {
     gd = bot.guilds.get(i[m].GID);
     ch = gd.channels.get(i[m].CID);
     ch.fetchMessage(i[m].ID)
      .then(message => {
       message.delete()
      });
    };
    messageReaction.remove(bot.user);
    collector.stop();
    return;
   }

  });
  setTimeout(() => {
   collector.stop();
   delfg(message.id);
  }, 7190000);


 };

 function notice() {
  let msg = message.content.split(" ").slice(2).toString().replace(/,/g, " ");
  for (var id in data) {
   if (data.hasOwnProperty(id)) {
    const notice = new Discord.RichEmbed()
     .setColor('#f72d2d')
     .setDescription(msg);
    gd = bot.guilds.get(data[id].GID);
    ch = gd.channels.get(data[id].ID);
    ch.send(notice)
   };
  };
 };

 function clean(messagecount) {
  for (var id in data) {
   if (data.hasOwnProperty(id)) {
    gd = bot.guilds.get(data[id].GID);
    ch = gd.channels.get(data[id].ID);
    ch.fetchMessages({limit: 100})
     .then(messages => {
      let msg_array = messages.array();
      msg_array = msg_array.filter(m => m.author.id === '316693341435723777');
      msg_array.length = messagecount + 1;
      msg_array.map(m => m.delete().catch(console.error));
     })
   };
  };
 };

 if ((arg[0].toLowerCase() === "lfg") && (BlackListed())) {
  if(!arg[1]) return;
  switch (arg[1].toLowerCase()) {
   case "clean":
    if (message.author.id != "202373842490884096") break;
    clean(arg[2])
    break;
   case "game":
    if (message.author.id != "202373842490884096") break;
    utils.Game(bot, context)
    break;
   case "nick":
    if (message.author.id != "202373842490884096") break;
    utils.Nick(message, bot.user, context)
    break;
   case "help":
    utils.Help(C, message)
    break;
   case "stats":
    stats();
    break;
   case "addserver":
    addserver();
    break;
   case "deleteserver":
    delserver();
    break;
   case "delfg":
    delfg(arg[2]);
    break;
   case "bl":
    BlackList();
    break;
   case "wl":
    DelBL();
    break;
   case "list":
    break;
   case "notice":
    if (message.author.id != "202373842490884096") break;
    notice();
    break;
   default:
    discordlfg();
  }

 }

});


bot.on('ready', () => {

 gd = bot.guilds.get('301831766262546432');
 ch = gd.channels.get('466056944478584843');
 ch.send("Starting!");

});

bot.on('guildDelete', guild => {
 {
  try {
   data = require('./lfg.json');
  } catch (e) {
   data = {};
  };
 }

 function fileaddserver() {
  fs.writeFileSync(path.join(__dirname, "lfg.json"), JSON.stringify(data, null, 2));
 };
 delete data[guild.id]
 fileaddserver();
 gd = bot.guilds.get('301831766262546432');
 chlog = gd.channels.get('466056944478584843');
 chlog.send("kicked/banned/left from " + guild.name);

});

bot.on('guildCreate', guild => {

 gd = bot.guilds.get('301831766262546432');
 chlog = gd.channels.get('466056944478584843');
 chlog.send("Joined " + guild.name);
 let owner = guild.members.get(guild.ownerID);
 owner.send("Hello,\nto get started using the lfg bot type `lfg addserver` in your lfg channel (only server owner or bot owner can use this command).\n> make sure the bot has permission to `React`, `Delete his own messages` and `edit his own messages`.\n> For any issues or suggestions DM Cito Yasha#7196.\n> PS : the bot is for Mystel only at the moment.")

});

bot.login(TOKEN.TOKEN)
 .then(console.log("Logged in!"))
 .catch(console.error);
