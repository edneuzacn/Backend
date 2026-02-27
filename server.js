const express = require('express')
const app = express()
app.get("/", (request, response)=> {
    response.send("Provérbios 16:3")
})
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})
