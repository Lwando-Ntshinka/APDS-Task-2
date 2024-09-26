// import http from "http";


// //Setting the port
// const PORT = 443

// const server = http.createServer((req, res) => {
//     res.end('Truly one of the modules man JS sucks so much what is syntax man.')
// })

// server.listen(PORT)
import express from "express"

const PORT = 443
const app =  express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Yo this lab guide is kinda goated')
})

app.listen(PORT)