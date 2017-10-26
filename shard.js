const Discord = require('discord.js');
const shard = new Discord.Shard(Manager);
const Manager = new Discord.ShardingManager('./app.js');
Manager.spawn(1)

