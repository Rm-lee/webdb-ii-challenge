const express = require("express")
const router = express.Router()
const db = require('../utils/db')


router.get("/", async (req,res,next) => {
    try {
        const cars = await db("cars").select()
        res.json(cars)
    }
    catch(err) {
        next(err)
    }
})

module.exports = router