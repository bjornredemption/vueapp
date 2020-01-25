const express = require('express')
const app = express()
const port = 3000

const matches = [
    {
        matchId: 1,
        role: 'duo'
    },
    {
        matchId: 2,
        role: 'jungle'
    }
];

app.get('/', (req, res) => res.send(matches))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))