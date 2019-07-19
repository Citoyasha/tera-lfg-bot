const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const path = require("path");
const TOKEN = require(__dirname+'/BT.json');
const utils = require(__dirname+'/commands/utils.js');

bot.on('message', message => {

    {
      var C = ((Math.floor((Math.random() * 255) + 1)) * 65536) + ((Math.floor((Math.random() * 255) + 1)) * 256) + (Math.floor((Math.random() * 255) + 1));
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
    var ign = message.channel.guild.member(message.author).displayName;
    gd = bot.guilds.get('301831766262546432');
    chlog = gd.channels.get('466056944478584843');
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
                fd1 = JSON.stringify(id)
                str2 = "● " + fd1.slice(1, fd1.length - 1) + "\n"
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
        message.channel.send({
            embed
        });

    }

    function delfg() {
      if(message.author.id === "202373842490884096"){
        i = require(__dirname+'/LFGs/' + arg[2] + '.json');
        for (var m in i) {
          gd = bot.guilds.get(i[m].GID);
          ch = gd.channels.get(i[m].CID);
          ch.fetchMessage(i[m].ID)
            .then(message => {
              message.delete();
        });};
      }
    }

    function delserver() {
      if((message.author.id === message.guild.ownerID) || message.author.id === "202373842490884096"){
        let g = message.channel.guild.name;
        if(arg[2] != "undefined"){
          g = message.content.split(" ").slice(2).toString().replace(/,/g, " ");;
        }
        if (typeof data[g] === "undefined") {
            message.reply("Not found!")
        } else {
            delete data[g]
            fileaddserver();
            setTimeout(() => {
                message.reply("deleted")
            }, 500);
            chlog.send(message.author + " deleted server. Server name :" + g)
        }
      } else {
        message.channel.send("Only Server owner or bot owner can do that!")
      };
    }

    function addserver() {
      if((message.author.id === message.guild.ownerID) || message.author.id === "202373842490884096"){
        data[message.channel.guild.name] = {
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
    }

    function embedlfg(x, y, z, cl, mc, mess, msgID, mgi, mat, maa, ps, gid, ce, ge, cid) {
     const embed = {
      "title": "LFG",
      "description": "**Dungeon : **" + x + "\n**Roles : **" + y + "\n**ign : **" + z,
      "color": cl,
      "timestamp": mc,
      "footer": {
       "icon_url": "https://yt3.ggpht.com/a-/AAuE7mCbbY0URkX4tN90qG8KNPdpZmRrOj3jBfYNhw=s288-mo-c-c0xffffffff-rj-k-no",
       "text": mess + " | " + msgID
      },
      "thumbnail": {
       "url": mgi
      },
      "author": {
       "name": mat,
       "icon_url": maa
      },
      "fields": [
        {
       "name": "PS:",
       "value": ps
     },
     {
       "name" : "React with ✅ when party is Full!",
       "value" : "**React with ❌ to delete lfg in all servers.**"
     }
   ]
     };
     gd = bot.guilds.get(gid);
     if (typeof gd === "undefined") {
      chlog.send("channel "+ ce + " of " + ge + " not found!")
     } else {
       ch = gd.channels.get(cid);
      ch.send({
       embed
      })
     };
    };

    function lfg() {
     for (var id in data) {
      if (data.hasOwnProperty(id)) {
      if (typeof arg[3] != "undefined") {
         ign = arg[3];
        };
      if (typeof arg[4] != "undefined") {
        ps = message.content.split(" ").slice(4).toString().replace(/,/g, " ");
       };
      embedlfg(arg[1], arg[2], ign, C, message.createdAt, message.guild.name,message.id, message.guild.iconURL, message.channel.guild.member(message.author).displayName + " ( " + message.author.tag + " )", message.author.avatarURL, ps, data[id].GID, data[id].channel, id, data[id].ID);
      };
     };
    };

    function discordlfg() {

     for (var id in data) {
      if (data.hasOwnProperty(id)) {
       if (message.channel.id === data[id].ID) { //loop JSON for channel IDs
        lfg()
        message.react('✅')
        message.react('❌')
       };
      };
    };//lfg
     setTimeout(() => {
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
     }, 1000);//save lfg info
     const collector = message.createReactionCollector((reaction, user) => user === message.author);
     collector.on('collect', async (messageReaction) => {
       i = require(__dirname+'/LFGs/' + message.id + '.json');

       if (messageReaction.emoji.name === '✅') {
         for (var m in i) {
           gd = bot.guilds.get(i[m].GID);
           ch = gd.channels.get(i[m].CID);
           ch.fetchMessage(i[m].ID)
             .then(message => {
               message.edit("Party Full!");
         });};
         messageReaction.remove(bot.user);
         messageReaction.remove(message.author);
         return;
       }

       if (messageReaction.emoji.name === '❌') {
         for (var m in i) {
           gd = bot.guilds.get(i[m].GID);
           ch = gd.channels.get(i[m].CID);
           ch.fetchMessage(i[m].ID)
             .then(message => {
               message.delete();
         });};
         messageReaction.remove(bot.user);
         messageReaction.remove(message.author);
         return;
       }

       setTimeout(() => {
       collector.stop();
     }, 7200000);

     });

    }

    if(arg[0] === "lfg") {

      switch (arg[1]) {
        case "game":
          utils.Game(bot,context)
          break;
        case "nick":
          utils.Nick(message,bot.user,context)
          break;
        case "help":
          utils.Help(C,message)
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
          delfg();
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
  delete data[guild.name]
  fileaddserver();
  gd = bot.guilds.get('301831766262546432');
  chlog = gd.channels.get('466056944478584843');
  chlog.send("kicked/banned/left from "+guild.name);

});

bot.login(TOKEN.TOKEN)
.then(console.log("Logged in!"))
.catch(console.error);
