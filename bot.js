
const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client({
   token: (process.env.TOKEN),
   autorun: true

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
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

client.login(process.env.BOT_TOKEN);




