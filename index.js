const express = require('express')
const app = express()
const port = 9000

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



app.post('/', function (req, res) {
    console.log(req.body);
    res.send(req.body);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})