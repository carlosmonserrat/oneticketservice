const express = require('express')
const app = express()
const port = 9000
const cors = require('cors');

app.use(cors({
    origin:"*"
}))

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.get('/passes', (req, res) => {

    if (req.query.user == "example" && req.query.password == 123) {
        res.json({
            "passNumber": 1111,
            "username": req.query.user,
            "holderName": "Example Guy"
        })
    }
    else {
        res.json({
            "error": "unknown user"
        })
    }

})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})