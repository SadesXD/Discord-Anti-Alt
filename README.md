# Discord Anti Alt

## 📥 Installation
```js
npm install discord-anti-alt
```

## 🔎 About
<b>Discord Anti Alt</b> is simple npm package for help you to make anti alt account system for discord server

<b><h4>List: </h4></b>
- [Installation](#installation)
- [About](#about)
- [Usage](#usage)
- [opinion](#opinion)

## 🔧 Usage

<b>Configurations ( config ):</b>
- **options List [ type: <i>**string**</i> ] :**

    - kick
    - ban

- <b>days [ type:  <i>number</i> ]: </b> Only less than that's( days option ) ages will get a response

## Basic Usage
```js
const alt = require("discord-anti-alt");
const account = new alt.config({
    days: 2, // Only user who has less than 2 days ages will get a response
    options: "" // Options will you set for alt account system
});

client.on('guildMemberAdd', async member => {
    account.run(member);
    alt.profile(member); // show information about alt user
})
```

List of usage:
- [Full Usage](#full_usage)
- [Kick / Ban Alt user](#kick_ban)

## Full_usage
```js
const Discord = require("discord.js");
const client = new Discord.Client();

// Usage
const alt = require("discord-anti-alt");
const account = new alt.config({
    days: 2,// only user who has less than 2 days ages will got kick
    options: "kick"
});

let altChannel = "779585627595210772"; //Channel ID will you set as logs channel

client.on('guildMemberAdd', async member => {
    let play = account.run(member);
    let info = alt.profile(member); //Show the information about alt user
    if(play){
        //Your message when someone join the server using alt account
        const embed = new Discord.MessageEmbed()
        .setAuthor(info.userTag,info.avatar)
        .setColor("RANDOM")
        .addField("Username",info.username)
        .addField("UserID",info.userID)
        .addField("User Age",info.userAge)
        .setTimestamp()
        return member.guild.channels.cache.get(altChannel).send(embed)
        //You can also send a normal message
    }
})

client.login("Your Secret token");
```


## Kick_Ban
```js
const Discord = require("discord.js");
const client = new Discord.Client();

// Usage
const alt = require("discord-anti-alt");
const account = new alt.config({
    days: 2,// Only user who has less than 2 days ages will got kick
    options: "kick"// You can also set it to "ban"
});

let altChannel = "779585627595210772"; //Channel ID will you set as logs channel

client.on('guildMemberAdd', async member => {
    let play = account.run(member);
    let info = alt.profile(member); //Show the information about alt user
    if(play){
        //Your message when someone join the server using alt account
        const embed = new Discord.MessageEmbed()
        .setAuthor(info.userTag,info.avatar)
        .setColor("RANDOM")
        .addField("Username",info.username)
        .addField("UserID",info.userID)
        .addField("User Age",info.userAge)
        .setTimestamp()
        return member.guild.channels.cache.get(altChannel).send(embed)
        //You can also send a normal message
    }
})

client.login("Your Secret token");
```

## ⏳ Opinion
> If you found some bug or you have some suggestion to our npm package, You can join our discord server [https://discord.gg/8rUvTYhFqK](https://discord.gg/8rUvTYhFqK)
