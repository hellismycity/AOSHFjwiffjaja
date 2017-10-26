const Discord = require('discord.js');
const manager = new Discord.ShardingManager('./app.js', {
  respawn: true,
  token: process.env.BOT_TOKEN
});

manager.spawn(2);

manager.on('launch', (shard) => {
  console.log(`[STATUS] Spawned shard ${shard.id} / ${manager.totalShards}`)
});

