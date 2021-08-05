const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./Database.json');

client.prefix = prefix;

client.once("ready", () => {
    console.log('ready!!!')

    client.user.setActivity("Beat Nation", { type: "PLAYING", url: "" }) 
}); 

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message' , message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    }  else if(command === 'ping'){
        client.commands.get('suggest').execute(message, args)
    }
})

if(command ==='youtube'){
    let embed = new MessageEmbed()
    //embed here
    message.channel.send(embed)
    }



client.login('');