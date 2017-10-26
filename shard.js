const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./app.js');
const shard = new Discord.Shard(Manager);
Manager.spawn(1)

