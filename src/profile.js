const moment = require("moment")

function profile(member){
    if(!member){
        return new TypeError("Can't find the member selection");
    }
    let x = Date.now() - member.user.createdAt
    let created = Math.floor(x / 86400000)

    let avatar = member.user.displayAvatarURL()
    let userAge = created
    let username = member.user.username
    let userTag = member.user.tag
    let userID = member.user.id
    let dateCreate = moment.utc(member.user.createdAt).format("lll")
    let datenow = moment.utc(Date.now()).format("lll")
    let kerangka = {
        "username":username,
        "userID":userID,
        "userTag":userTag,
        "userAvatar":avatar,
        "userAge":userAge,
        "date":{
            "date_now":datenow,
            "userDateCreated":dateCreate
        }
    }
    return kerangka
}

module.exports = profile;
