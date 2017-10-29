const Discord = require('discord.js');
const client = new Discord.Client();
const urban = require('urban.js')

client.on('ready', () => {
var statuses = [`type fergie, help!`, `with ${client.users.size} users!`, `in ${client.guilds.size} guilds!`, `in ${client.channels.size} channels!`, `type f:help!`]
client.user.setPresence({ game: { name: `${statuses[Math.floor(Math.random() * statuses.length)]}`, type: 0 } });
  console.log('I am ready!');
});

var prefix = 'f:'

const fergieLyrics = ["🎶 \"Heard you in the mood for a little MILFshake\"\n*https://www.youtube.com/watch?v=bsUWK-fixiA*"]

client.on('guildCreate', guild => {
let users = guild.memberCount
let bots = guild.members.filter(m=>m.user.bot).size
let percent = Math.floor(bots / users * 10000) / 100;
const embed = new Discord.RichEmbed()
  .setTitle(`${guild.name}`)
  .setAuthor('Joined Server')
  .setColor(0x64e547)
  .setFooter(``)
  .setTimestamp()
  .addField('Owner', `${guild.owner.user.tag} (${guild.owner.user.id})`)
  .addField('Members', `${guild.memberCount - guild.members.filter(m=>m.user.bot).size} (${guild.members.filter(m=>m.user.bot).size} bots)`, true)
  .addField('Percent', `${percent}%`)
  .addField('ID', `${guild.id}`, true)
client.channels.get('372227505324818432').send({embed})

if(percent > 75) {
let users = guild.memberCount
  let bots = guild.members.filter(m=>m.user.bot).size
  let percent = Math.floor(bots / users * 10000) / 100;
  const embed = new Discord.RichEmbed()
    .setTitle(`${guild.name}`)
    .setAuthor('Bot Farm Automatically Left')
    .setColor(0xe52020)
    .setFooter(``)
    .setTimestamp()
    .addField('Owner', `${guild.owner.user.tag} (${guild.owner.user.id})`)
    .addField('Members', `${guild.memberCount - guild.members.filter(m=>m.user.bot).size} (${guild.members.filter(m=>m.user.bot).size} bots)`, true)
    .addField('Percent', `${percent}%`)
    .addField('ID', `${guild.id}`, true)
  client.channels.get('372227505324818432').send({embed}).then(guild.leave())
}
})

client.on('guildMemberAdd', member => {
  let guild = member.guild;
     if(guild.id === '364774461649715202') return
  if(!guild.channels.find('name', 'join-log')) return
   guild.channels.find('name', 'join-log').send('', {
      embed: {
      color: 0x4af43a,
      url: '',
      thumbnail: {url: `${member.user.avatarURL}`},
      title: `✅ ${member.user.tag} joined.`,

      description: `You now have ${guild.memberCount} members`,
        }
    });
})

client.on('guildMemberRemove', member => {
  let guild = member.guild;
     if(guild.id === '364774461649715202') return
  if(!guild.channels.find('name', 'join-log')) return
   guild.channels.find('name', 'join-log').send('', {
        embed: {
        color: 0xdda325,
        url: '',
        thumbnail: {url: `${member.user.avatarURL}`},
        title: `❌ ${member.user.tag} left.`,

        description: `You now have ${guild.memberCount} members`,
        }
     });
})

 client.on('messageDelete', message => {
  let guild = message.guild;
   if(guild.id === '364774461649715202') return
  if(!guild.channels.find('name', 'mesaage-log')) return
   guild.channels.find('name', 'message-log').send('', {
      embed: {
        color: 0xdda325,
        url: '',
        thumbnail: {url: `${message.author.avatarURL}`},
        title: `🚫 Message deleted by ${message.author.tag}`,

        description: `Content: \`\`\`${message}\`\`\` `,
        }
      });
})

client.on('message', message => {
if(message.author.bot) return
const mentionPrefix = new RegExp(`^<@!?${client.user.id}> `);
  const prefixMention = mentionPrefix.exec(message.content);

  const prefixes = ['fergie, ', 'f:', `${prefixMention}`];
  let prefix = false;

  for (const thisPrefix of prefixes) {
    if (message.content.indexOf(thisPrefix) == 0) prefix = thisPrefix;
  }

  if (message.content.match(new RegExp(`^<@!?${client.user.id}>$`))) {
    let mentionMsg = ':ghost:';
    return message.channel.send(mentionMsg);
  }

  if (message.content.startsWith(prefix + 'ping')) {
  message.channel.send('Ping?').then(m => {
    m.edit(`Pong! - Time Taken: ${m.createdTimestamp - message.createdTimestamp}ms`)
  })
  }

  if (message.content.startsWith(prefix + 'ban')) {
  var reason = message.content.split(' ').slice(2).join(' ');
  let userToBan = message.mentions.users.first()

  if (!message.member.permissions.has("BAN_MEMBERS")) {
    return message.channel.send('You do not have the required permissions to execute this command.');
  }

   if (message.author.id === message.mentions.users.first().id) {
    return message.channel.send("You cannot ban yourself.")
   }
  if (client.user.id === message.mentions.users.first().id) {
   return message.channel.send("I cannot ban myself.")
  }
  if (message.mentions.users.size === 0) {
   return message.reply("Please mention a user to ban.");
  }
  if (!message.guild.member(userToBan).bannable) {
   return message.channel.send("I cannot ban that member.")
  }

   message.guild.member(userToBan).ban()
   message.channel.send("👍");
   var user = message.mentions.users.first()
}

if(message.content.startsWith(prefix + 'urban')) {
  let args = message.content.split(' ').slice(1).join(' ')
  const unirest = require ('unirest')
 unirest.get(`https://mashape-community-urban-dictionary.p.mashape.com/define?term=${args}`)
 .header("X-Mashape-Key", "kpkOWomvxOmshmL5UBLZYTjw7lWUp1LCls5jsnJhDLm4VjIPl6")
 .header("Accept", "text/plain")
 .end(function (result, err) {
   if(!result.body.list[0]) return message.reply('No definition found!')
   //message.channel.send(`\`Definition for ${args.join(' ')}\`\n\n**Definition**: ${result.body.list[0].definition}\n\n**Example**: ${result.body.list[0].example}\n\n**Author**: ${result.body.list[0].author}\n\n**Up / Down Ratio**: ${result.body.list[0].thumbs_up} :thumbsup: to ${result.body.list[0].thumbs_down} :thumbsdown:`)
   const embed = new Discord.RichEmbed()
   embed.setAuthor(`Definition for ${args}`)
   embed.setTitle(`By ${result.body.list[0].author}`)
   embed.setDescription(`${result.body.list[0].definition}`)
   embed.addField(`Example`, `${result.body.list[0].example}`, false)
   embed.setColor(0xffffff)
   embed.setFooter(`👍 ${result.body.list[0].thumbs_up} | 👎 ${result.body.list[0].thumbs_down}  `)
   message.channel.send({embed})
 })
}
  
if(message.content.startsWith(prefix + 'stats')) {
const { version: discordVersion } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
   const embed = new Discord.RichEmbed()
   embed.setAuthor(`Fergie Stats`)
   embed.addField(`Memory Usage`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
   embed.addField(`Uptime`, `${duration}`, true)
   embed.addField(`Users`, `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
   embed.addField(`Guilds`, `${client.guilds.size.toLocaleString()}`, true)
   embed.addField(`Channels`, `${client.channels.size.toLocaleString()}`, true)
   embed.addField(`Discord.js`, `${discordVersion}`, true)
   embed.addField(`Node.js`, `${process.version}`, true)
   embed.setColor(0xffffff)
   message.channel.send({embed})
}                          
  
if(message.content.startsWith(prefix + 'serverinfo')) {
 const arrow = client.emojis.get('373337856061472769')
const embed = new Discord.RichEmbed()
   embed.setAuthor(`Server Information for ${message.guild.name}`)
   embed.setThumbnail(`${message.guild.iconURL}`)
   embed.addField(`► Owner`, `${message.guild.owner.user.tag}`, true)
   embed.addField(`► Members`, `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} (${message.guild.members.filter(m=>m.user.bot).size} bots)`, true)
   embed.addField(`► Channels`, `${message.guild.channels.size}`, true)
   embed.addField(`► Created At`, `${message.guild.createdAt.toString().substr(0, 15)}`, true)
   embed.addField(`► Roles`, `${message.guild.roles.size}`, true)
   embed.addField(`► Region`, `${message.guild.region}`, true)
   embed.addField(`► ID`, `${message.guild.id}`, true)
   embed.addField(`► Verification`, `${message.guild.verificationLevel}`, true)
   
   embed.setColor(message.member.displayColor)
   message.channel.send({embed})
  }

  if (message.content.startsWith(prefix + 'restart')) {
    if (!["298706728856453121", "229552088525438977"].includes(message.author.id)) return;
     message.channel.send('Rebooting...').then(() => {
       client.destroy().then(() => {
       process.exit();
     })
   })
  }

   if (message.content.startsWith(prefix + 'softban')) {
   var reason = message.content.split(' ').slice(2).join(' ');
   let userToSoftBan = message.mentions.users.first()

   if (!message.member.permissions.has("BAN_MEMBERS")) {
     return message.channel.send("Insufficient Permissions.").catch(console.error);
   }
   if (!message.guild.member(client.user).permissions.has("BAN_MEMBERS")) {
     return message.channel.send("I cannot execute this command as I have insufficient permissions.").catch(console.error);
   }

     if (message.mentions.users.size === 0) {
       return message.channel.send("No user provided.")
     }

     if (!message.guild.member(userToSoftBan).bannable) {
       return message.channel.send("I cannot softban that member.").catch(console.error);
     }

     if (message.author.id === message.mentions.users.first().id) {
       return message.channel.send("You can't softban yourself.").catch(console.error);
     }

     if (client.user.id === message.mentions.users.first().id) {
       return message.channel.send(`I can't be softbanned, ${message.author.username}.`).catch(console.error);
     }

   userToSoftBan.ban().then(member => {message.guild.unban(member.user.id)});
     var user = message.mentions.users.first()
     message.guild.channels.find("name", "mod-log").send('', {
        embed: {
          color: 0xbc1e1e,
          author: {
            name: message.author.tag,
            icon_url: message.author.avatarURL
          },
          url: '',
          description: `**Action:** Softban\n**Member:** ${userToSoftBan.user.tag} (${userToSoftBan.id})\n**Reason:** ${reason}`,
          timestamp: new Date(),
          }
        });
  }

  if(message.content.startsWith(prefix + 'achievement')) {
  const snekfetch = require('snekfetch');
  let args = message.content.slice(14).split(' ')
  let [title, contents] = args.join(" ").split("|");
  if(!args) return message.channel.send('You have to tell me what to put in the achievement!')
  if(!contents) {
    [title, contents] = ["Achievement Get!", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;

  if(title.length > 22 || contents.length > 22) return message.channel.send("Max Length is 22 Characters.").then(message.delete.bind(message), 2000);
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));
  message.delete();

};
  
 if(message.content.startsWith(prefix + 'userinfo')) {
   let target = message.mentions.users.first()
  if(!target) return const embed = new Discord.RichEmbed()
  .setTitle(``)
  .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
  .setColor("RANDOM")
  .setDescription('')
  .setFooter('')
  .setImage('')
  .setThumbnail(`${message.author.avatarURL}`)
  .setTimestamp(new Date())
  .addField('Full username',`${message.author.tag}`)
  .addField('Created At ', `${message.author.createdAt.toString().substr(0, 15)}`, true)
  .addField('Status ', `${message.author.presence.status}`, true)
  .addField('Nickname', `${message.author.displayName}`, true)
  .addField('Bot ', `${message.author.bot}`, true);
  message.channel.send({embed});
   
  const embed = new Discord.RichEmbed()
  .setTitle(``)
  .setAuthor(`${target.username}`, `${target.avatarURL}`)

  .setColor("RANDOM")
  .setDescription('')
  .setFooter('')
  .setImage('')
  .setThumbnail(`${target.avatarURL}`)

  .setTimestamp(new Date())
  .addField('Full username',
    `${target.tag}`)
  .addField('Created At ', `${target.createdAt.toString().substr(0, 15)}`, true)
  .addField('Status ', `${target.presence.status}`, true)
  .addField('Nickname', `${target.displayName}`, true)
  .addField('Bot ', `${target.bot}`, true);

  message.channel.send({embed}); 
 }

  if (message.content.startsWith(prefix + 'randomlyric')) {
    message.channel.send(`${fergieLyrics[Math.floor(Math.random() * fergieLyrics.length)]}`)
  }

  if (message.content.startsWith(prefix + 'order')) {
    let orderMenuItem = message.content.split(' ').slice(1).join(' ');
    let orderChannel = message.guild.channels.find("name", "order-requests")
    if (!["298706728856453121", "229552088525438977"].includes(message.author.id)) {
      return message.reply("Sorry! This command is developer only until it becomes stable.")
    }

    if (!orderMenuItem) {
      return message.reply("You didn't provide any arguments.")
    }

    if (!orderChannel) {
      return message.reply("I cannot log the order as there's no \"order-requests\" channel.")
    }

    if (orderMenuItem !== "Milf") {
      return message.reply("Sorry, that item is not on the menu.")
    } else if (orderMenuItem !== "Fergburger"){
      return message.reply("Sorry, that item is not on the menu.")
    } else {
    message.reply("Coming right up!")
    orderChannel.send('', {
      embed: {
        color: 0xa5a5a5,
        author: {
          name: message.author.tag,
          icon_url: message.author.avatarURL
        },
        url: '',
        description: `**Order:** ${orderMenuItem}`,
        timestamp: new Date(),
        }
      });
    }
  }


 if (message.content.startsWith(prefix + 'help')) {
   message.reply(`You've been DMed a list of commands.`)
   message.author.send(`\`\`\`xml
< COMMANDS LIST >
fergie, ping : Checks if the bot is still alive.
fergie, help : Brings up this help list.
fergie, ban : Bans the user specified (MOD)
fergie, softban : Softbans the user specified (MOD)
fergie, serverinfo : Shows server info
fergie, achievement : Generates a Minecraft achievement
fergie, urban : Searches Urban Dictionary \`\`\``)
    message.author.send("You can also check out the commands here:\nhttps://github.com/Ellie-bot/Fergie/wiki/Fergie:-Commands")
}

if(message.content.startsWith(prefix + 'eval')) {
if (message.author.id !== "298706728856453121") return
let evall = message.content.split(' ')[0];
let evalstuff = message.content.split(" ").slice(1).join(" ")
try {
     const code = message.content.split(" ").slice(1).join(" ")
     let evaled = eval(code);

     if (typeof evaled !== 'string')
       evaled = require('util').inspect(evaled);

       const embed = new Discord.RichEmbed()
       .setTitle(`Evaluation:`)

       .setColor("0x4f351")
       .setDescription(`✔ Input: \n \`\`\`${evalstuff}\`\`\` \n :outbox_tray: Output: \n  \`\`\`${clean(evaled)}\`\`\``)

     message.channel.send({embed});
   } catch (err) {
     const embed = new Discord.RichEmbed()
     .setTitle(`Evaluation:`)

     .setColor("0xff0202")
     .setDescription(`❌ Input: \n \`\`\`${evalstuff}\`\`\` \n :outbox_tray: Output: \n  \`\`\`${clean(err)}\`\`\``)

     message.channel.send({embed});
   }
 }

    if (message.content.startsWith(prefix + 'say')) {
    if (!["298706728856453121", "229552088525438977"].includes(message.author.id)) return;
    let args = message.content.split(' ').slice(1).join(' ')
    message.delete();
    message.channel.send(`${args}`)
  }
})

function clean(text) {
 if (typeof(text) === 'string')
   return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
 else
     return text;
}


client.login(process.env.BOT_TOKEN)
