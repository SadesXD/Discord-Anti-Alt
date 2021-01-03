class antiAlt{
    constructor(options){
      
        this.days = options.days
        this.options = options.options
        this.role = options.role

        if(!this.days)
        {
            this.days = 0
        };

        if(!this.options)
        {
            this.option = "none"
        };
        
        if(typeof this.days !== "number")
        {
            return new TypeError("days options must be number, Received options: " + typeof this.days)
        };

        if(this.options === "giveRole"){
            if(!this.role){
                return new TypeError("You're options is giving role to someone, but i can't see the spesifics role will you give, please put it first")
            }
        };

        if(this.role){
            if(this.options !== "giveRole"){
                return new TypeError("You're options is not giving role to someone, you need to change your options")
            }
        }

        if(typeof this.options !== "string")
        {
            return new TypeError("Option type must be string, Received options: " + typeof this.option)
        };

        let opt = ["none","ban","kick","giveRole"]
        if(!opt.some(m => this.options === m))
        {
          return new TypeError("options is not listed")  
        };
    }

    run(member){
        if(!member)
        {
          return new TypeError("cannot find the user of undefined, need help ?? join our discord server: https://discord.gg/8rUvTYhFqK");
        }
        let x = Date.now() - member.user.createdAt
        let created = Math.floor(x / 86400000)
        if(!created) created = 0

        let orang = member.guild.member(member.user)

        if(parseInt(created) < parseInt(this.days))
        {
            if(this.options.toLowerCase() === "none")
            {
                return;
            }
            else if(this.options.toLowerCase() === "ban")
            {
                return orang.ban("Banned by Discord anti alt").catch(() => {
                    return new TypeError(`I don't have enough role permission for activated anti alt account system in server: ${member.guild.name},guildID: ${member.guild.id}`)
                })
            }
            else if(this.options.toLowerCase() === "kick")
            {
                return orang.kick("Kick by Discord anti alt").catch(() => {
                    return new TypeError(`I don't have enough role permission for activated anti alt account system in server: ${member.guild.name},guildID: ${member.guild.id}`)
                })
            }
            else if(this.options.toLowerCase() === "giveRole"){
                let role = member.guild.roles.cache.find(x => x.id === this.role)
                member.guild.members.cache.get(member.user).roles.add(role).catch(err => {
                    return new TypeError(`I don't have enough role permission for activated anti alt account system in server: ${member.guild.name},guildID: ${member.guild.id}`)
                })
            }
        }
    }
}

module.exports = antiAlt;
