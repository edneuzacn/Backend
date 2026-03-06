const express = require('express')
const app = express()
app.get("/", (request, response)=> {
    response.send("Provérbios 16:3 - Consagre ao Senhor tudo o que você faz e os seus planos serão bem sucedidos-")
})

app.get("/users", (req, res)=> {
    res.send([
        {
            "id" : 1,
            "name" : "João",
            "idade" : 25
        }
    ])
})

module.exports = app