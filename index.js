const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/login', function(req, res){
    res.send("login");
})

app.get('/date',(req,res) => {
    res.json({ram_mandir: "22 Jan 2024"})
})

app.listen(port, () => {
    console.log(`Example app start in ${port}`)
})