
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});

client.on("ready", () => {
console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
client.user.setActivity(`Serving ${client.guilds.size} servers`);
  });

if

            // !ping
            case 'ping':
                client.sendMessage({
                    to: channelID,
                    message: 'Burn! :fire:'


                });
            break;
            // !help
            case 'help':
                client.sendMessage({
                    to: channelID,
                    message: 'I work with commands: !zak !recruit !members !jr !invite !event !boss !RR'
		            });
            break;
            // !recruit
            case 'recruit':
                client.sendMessage({
                    to: channelID,
                    message: 'New application: https://mapleroyals.com/forum/threads/resonance-just-beat-it.131324/page-2'
                });
            break;
            // !members
            case 'members':
                client.sendMessage({
                    to: channelID,
                    message: 'List of current members can be found in here #members'
                });
            break;
            // !jr
            case 'jr':
                client.sendMessage({
                    to: channelID,
                    message: 'Call for aid. Better tag all of them @Maestro'
                });
	          break;
         // !boss
            case 'boss':
                client.sendMessage({
                    to: channelID,
                    message: '_"The one leader to rule them all..._" @Virtuoso Jake, HIDE THE BOTTLES!'
                });
	          break;
         // !event
            case 'event':
                client.sendMessage({
                    to: channelID,
                    message: '_No events can be found..._ Make one! #events'
                });
	          break;
         // !RR
            case 'RR':
                client.sendMessage({
                    to: channelID,
                    message: 'Lost Ronald due to too many name changes? I got you: @///////#0151'
                });
	         break;
            // !zak
            case 'zak':
                client.sendMessage({
                    to: channelID,
                    message: 'ZAK TIME. Running in 15 minutes join if you can'
		            });
	         break;
            // !invite
            case 'invite':
                client.sendMessage({
                    to: channelID,
                    message: 'Send this link to your friend: https://discord.gg/dvpTMzq'
		            });


else; return
         }
     }
});

client.login(process.env.BOT_TOKEN);




