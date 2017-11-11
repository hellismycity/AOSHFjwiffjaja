const Discord = require('discord.js');
const client = new Discord.Client();
const urban = require('urban.js')

client.on('ready', () => {
var statuses = [`type fergie, help!`, `with ${client.users.size} users!`, `in ${client.guilds.size} guilds!`, `in ${client.channels.size} channels!`, `type f:help!`]
client.user.setPresence({ game: { name: `${statuses[Math.floor(Math.random() * statuses.length)]}`, type: 0 } });
  console.log('I am ready!');
  const snekfetch = require('snekfetch')

snekfetch.post(`https://discordbots.org/api/bots/stats`)
  .set('Authorization', process.env.DBOTS_TOKEN)
  .send({ server_count: client.guilds.size })
  .then(() => console.log('Updated discordbots.org stats.'))
  .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
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
   const snekfetch = require('snekfetch')

snekfetch.post(`https://discordbots.org/api/bots/stats`)
  .set('Authorization', process.env.DBOTS_TOKEN)
  .send({ server_count: client.guilds.size })
  .then(() => console.log('Updated discordbots.org stats.'))
  .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
})

client.on('guildDelete', guild => {
  const snekfetch = require('snekfetch')

snekfetch.post(`https://discordbots.org/api/bots/stats`)
  .set('Authorization', process.env.DBOTS_TOKEN)
  .send({ server_count: client.guilds.size })
  .then(() => console.log('Updated discordbots.org stats.'))
  .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
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
  
  if (message.content.startsWith(prefix + 'invite')) {
  message.channel.send('Use this link to invite me! \n https://discordapp.com/oauth2/authorize?client_id=366033207931568138&scope=bot&permissions=8')
  }
                       

if (message.content.startsWith(prefix + 'avatar')) {
let mentioned = message.mentions.users.first()

  if (!mentioned) {
    const embed = new Discord.RichEmbed()
    .setTitle(`${message.author.tag}'s Avatar`)

    .setColor("0x4f351")
    .setImage(message.author.displayAvatarURL)

    message.channel.send({embed}) } else {
  const embed = new Discord.RichEmbed()
    .setTitle(`${mentioned.tag}'s Avatar`)

    .setColor("0x4f351")
    .setImage(mentioned.displayAvatarURL)

    message.channel.send({embed});
}
} 

if (message.content.startsWith(prefix + 'quote')) {
  const args = message.content.split(" ").slice(1).join(" ")
  const embed = new Discord.RichEmbed()
  .setTitle(``)
  .setAuthor(`Quote`)

  .setColor(message.member.displayColor)
  .setDescription(`${args}`)
  .setFooter(`Submitted by ${message.author.tag}`, `${message.author.avatarURL}`)
  .setImage('')

  .setTimestamp()

  if(!message.guild.channels.find('name', 'quotes')) return message.channel.send("I couldn't find a quotes channel. Please make one and name it `quotes`")
  message.channel.send(':thumbsup:');
  message.guild.channels.find('name', 'quotes').send({embed})

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
  
 if(message.content.startsWith(prefix + 'name')) {
   const emoji = client.emojis.find("name", "error")
  if (!message.member.permissions.has("MANAGE_NICKNAMES")) {
    message.channel.send(`${emoji} My Apologies ${message.author}, but you must have the \`MANAGE_NICKNAMES\` permission to use this.`);
    return;
  }
  let test = message.content.split(' ').slice(1);
  if (test == '' || test == null){
      return message.channel.send({embed: {
          color: 0x5fef2f,
          description: `${message.author} cleared my nickname.`
      } }).then(message.guild.member(client.user).setNickname(''));
  }
  else{
      let command = message.content.split(' ')[0];
      command = command.slice(prefix.length);

      let nickname = message.content.split(" ").slice(1).join(" ")
      message.guild.member(client.user).setNickname(`${nickname}`)
      message.channel.send({embed: {
          color: 0x5fef2f,
          description: `${message.author} set my nickname to "**${nickname}**"`
      } });
  }

}

if (message.content.startsWith(prefix + 'cat')) {  
const {get} = require("snekfetch");
      get("https://random.cat/meow").then(response => {
        message.channel.send({files:[{attachment: response.body.file}]}).catch(e => message.channel.send('An error occurred! Error:' + `\n \`\`\`${e.stack}\`\`\``))
      });
  };
  
  if (message.content.startsWith(prefix + 'dog')) {  
const {get} = require("snekfetch");
      get("https://random.dog/woof").then(response => {
        message.channel.send({files:[{attachment: response.body.file}]}).catch(e => message.channel.send('An error occurred! Error:' + `\n \`\`\`${e.stack}\`\`\``))
      });
  };
  
  
if(message.content.startsWith(prefix + 'discrim')) {
  let args = message.content.split(" ").slice(1).join(" ")
  const res = client.users.filter(u => u.discriminator === `${args}`).map(u => `${u.tag}  (${u.id})`);
  message.channel.send(`\n ${res.join('\n')}`, { code: "css" }).catch(e => message.channel.send('No users found.'))
};

if(message.content.startsWith(prefix + 'hackban')) {
let args = message.content.split(" ").slice(1).join(" ")
message.guild.ban(args)
message.channel.send('👍')

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
  
if(message.content.startsWith(prefix + 'blur')) {
var Jimp = require('jimp')
  if (message.mentions.users.size === 0) {
    const res = message.channel.send(':gear: generating...')
    Jimp.read(message.author.avatarURL, (err, avatar) => {
      if (err) return message.edit('failed to generate.')
      avatar.blur(5).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        message.delete()
        message.channel.send({
          files: [{
            attachment: buffer,
            name: 'bringBack-sendFile.png'
          }]
        })
      })
    })
  } else {
    const res = message.channel.send(':gear: generating...')
    Jimp.read(message.mentions.users.first().avatarURL, (err, avatar) => {
      if (err) return message.edit('failed to generate.')
      avatar.blur(5).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        message.delete()
        message.channel.send({
          files: [{
            attachment: buffer,
            name: 'bringBack-sendFile.png'
          }]
        })
      })
    })
  }
} 
  
if(message.content.startsWith(prefix + 'pixelate')) {
var Jimp = require('jimp')
  if (message.mentions.users.size === 0) {
    const res = message.channel.send(':gear: generating...')
    Jimp.read(message.author.avatarURL, (err, avatar) => {
      if (err) return message.edit('failed to generate.')
      avatar.pixelate(5).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        message.delete()
        message.channel.send({
          files: [{
            attachment: buffer,
            name: 'bringBack-sendFile.png'
          }]
        })
      })
    })
  } else {
    const res = message.channel.send(':gear: generating...')
    Jimp.read(message.mentions.users.first().avatarURL, (err, avatar) => {
      if (err) return message.edit('failed to generate.')
      avatar.pixelate(5).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        message.delete()
        message.channel.send({
          files: [{
            attachment: buffer,
            name: 'bringBack-sendFile.png'
          }]
        })
      })
    })
  }
} 
    
if(message.content.startsWith(prefix + 'reverse')) {
let args = message.content.split(" ").slice(1)
var text = args.join(" ");
    text = text.split("").reverse().join("");
 message.channel.send(`🔄 ${text}`)
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
    const online = client.emojis.find("name", "fergieonline");
    const offline = client.emojis.find("name", "fergieoffline");
    const dnd = client.emojis.find("name", "fergiednd");
    const idle = client.emojis.find("name", "fergieidle");
   let args = message.content.split(" ").slice(1).join(" ")
 const moment = require("moment");
require("moment-duration-format");
const status = {
  online: `${online} Online`,
  idle: `${idle} Idle`,
  dnd: `${dnd} Do Not Disturb`,
  offline: `${offline} Offline/Invisible`
};
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
  const member = message.mentions.members.first() || message.guild.members.get(args) || message.member;
  if (!member) return message.reply("Please provide a vaild Mention or USER ID");
  let bot;
  if (member.user.bot === true) {
    bot = "Yes";
  } else {
    bot = "No";
  }
  const embed = new Discord.RichEmbed()
    .setColor(randomColor)
    .setThumbnail(`${member.user.avatarURL}`)
    .setAuthor(`${member.user.tag} (${member.id})`, `${member.user.avatarURL}`)
    .addField("Nickname", `${member.nickname !== null ? `Nickname: ${member.nickname}` : "No nickname"}`, true)
    .addField("Bot", `${bot}`, true)
    .addField("Status", `${status[member.user.presence.status]}`, true)
    .addField("Playing", `${member.user.presence.game ? `${member.user.presence.game.name}` : "not playing anything."}`, true)
    .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
    .addField("Joined At", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .addField("Created At", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true);

  message.channel.send({embed})
};
  
if(message.content.startsWith(prefix + 'test')) {
 const snekfetch = require('snekfetch');
 const votes = snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/votes?onlyids=1`).set('Authorization', process.env.DBOTS_TOKEN).catch(e => message.channel.send(`\`\`\`${e.stack}\`\`\``))

if (!votes.body.includes(message.author.id)) {
    message.channel.send('pls updoot')
  } else {
    message.channel.send('yay u updooted')
  }
};
  
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
   const embed = new Discord.RichEmbed()
   embed.setAuthor(`Fergie Commands`)
   embed.addField("Fun `(3)`", "`ping` `reverse` `urban` ", false)
   embed.addField("Utility `(5)`", "`userinfo` `serverinfo` `stats` `discrim`, `name` `quote`", false)
   embed.addField("Moderation `(3)`", "`ban` `softban` `hackban`", false)
   embed.addField("Image `(5)`", "`achievement` `blur` `pixelate` `cat` `dog`", false)
   embed.addField("Need support or want to hangout?", "[Join our server!](https://discord.gg/ZXugv2Z)")
   embed.setColor("RANDOM")
message.author.send({embed})
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
