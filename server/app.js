const express = require('express')
const ejs = require('ejs');

const connect = require('./connect');
const app = express()
app.set('view engine', 'ejs');
//const port = 80

app.get('/',  async (req, res) => { 
    const resp = await connect.getData({path : 'https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/bj0rnred3mpti0n?api_key=RGAPI-b6576f48-fda4-4328-be07-4732b4a5350c'});
    
    if (resp && resp.accountId){
        const resp2 = await connect.getData({path : 'https://oc1.api.riotgames.com/lol/match/v4/matchlists/by-account/'+resp.accountId+'?api_key=RGAPI-b6576f48-fda4-4328-be07-4732b4a5350c'});
        if (resp2 && resp2.matches){
            res.render('index.ejs', {matches: resp2.matches});
        }
    }
})

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;