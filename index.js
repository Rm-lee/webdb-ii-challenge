const express = require("express")
const helmet = require("helmet")

const carsRouter = require("./data/carsRouter")
const host = process.env.HOST || "localhost"
const port = process.env.PORT || 5000

const server=express()
server.use(helmet())
server.use(express.json())

server.use("/api/cars", carsRouter)
server.use((err, req,res,next) => {
    console.log(err)
    res.status(500).json({
        message:"there was an error",
    })
})

server.listen(port,host, () => {
    console.log(`\nRunning server on http://${host}:${port}\n`)
})