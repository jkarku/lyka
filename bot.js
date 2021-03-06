const Discord = require('discord.js');
const logger = require('winston');
const auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
const bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Burn! :fire:'


                });
            break;
            // !help
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'I work with commands: !zak !recruit !members !jr !invite !event !boss !RR'
		  });
            break;
            // !recruit
            case 'recruit':
                bot.sendMessage({
                    to: channelID,
                    message: 'New application: https://mapleroyals.com/forum/threads/resonance-just-beat-it.131324/page-2'
                });
            break;
            // !members
            case 'members':
                bot.sendMessage({
                    to: channelID,
                    message: 'List of current members can be found in here #members'
                });
            break;
            // !jr
            case 'jr':
                bot.sendMessage({
                    to: channelID,
                    message: 'Call for aid. Better tag all of them @Maestro'
                });
	  break;
         // !boss
            case 'boss':
                bot.sendMessage({
                    to: channelID,
                    message: '_"The one leader to rule them all..._" @Virtuoso Jake, HIDE THE BOTTLES!'
                });
	  break;
         // !event
            case 'event':
                bot.sendMessage({
                    to: channelID,
                    message: '_No events can be found..._ Make one! #events'
                });
	break;
         // !RR
            case 'RR':
                bot.sendMessage({
                    to: channelID,
                    message: 'Lost Ronald due to too many name changes? I got you: @///////#0151'
                });
	         break;
            // !zak
            case 'zak':
                bot.sendMessage({
                    to: channelID,
                    message: 'ZAK TIME. Running in 15 minutes join if you can'
		  });
	         break;
            // !invite
            case 'invite':
                bot.sendMessage({
                    to: channelID,
                    message: 'Send this link to your friend: https://discord.gg/dvpTMzq'
		  });



         }
     }
});

client.login(process.env.BOT_TOKEN)


