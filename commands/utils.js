
var Game = function (x,context){

    x.user.setActivity(context)

};

var Nick = function (msg,user,context){

    msg.channel.guild.member(user).setNickname(context)

  };

var Help = function (c,msg){
    const embed = {
      "title": "Secret agent 069 help message!🎫",
      "url": "https://discord.gg/TePFGBs",
      "description": "Secret agent 069 is a cross-server lfg bot. It sends your lfg message across discord servers the bot is connected to. Type `lfg stats` to see all the servers the bot is in.",
      "color": c,
      "footer": {
        "text": "Contact Cito Yasha#7196 for any issues or suggestions."
      },
      "fields": [
        {
          "name": "Commands",
          "value": "all the commands are case sensitive. No spaces between Roles"
        },
        {
          "name": "lfg dungeon roles name message(optional)",
          "value": "e.g : `lfg GVH T/H Mizettorisu 3/5 training run`"
        },
        {
          "name": "lfg help",
          "value": "Shows this help message."
        },
        {
          "name": "lfg stats",
          "value": "Shows the member count and servers list."
        },
        {
          "name": "addserver",
          "value": "adds the server to the bot's lfg list. Only server owner and bot owner can use this command."
        },
        {
          "name": "deleteserver",
          "value": "Removes the server from the bot's lfg list. Only server owner and bot owner can use this command."
        }
      ]
    };    msg.channel.send({ embed });
};

module.exports = {
  Game,
  Nick,
  Help
}
