const fetch = require("node-fetch");
class easy_fetch {
    constructor({logs}){
        this.logs = logs
    }

    async post({url, auth, body}){
        if(!this.logs) this.logs = false
        else if(typeof this.logs !== "boolean"){
            throw new Error("Logs can't be string or integar, *true* or *false*")
        }
        if(!auth) throw new Error("Define the auth or type *none*")
        if(!body) throw new Error("What you will post without body?!")
        if(!url) throw new Error("Please define the endpoint i will post too *url*")
        await fetch(url, {
            method: "POST",
            headers: auth == "none" ? {"Content-Type": "application/json"} : {"Content-Type": "application/json","authorization": auth} ,
            body: JSON.stringify(body)
        }).then(async res => {
            if(this.logs) console.log(await res.json())
        })
    }
}
module.exports = easy_fetch;