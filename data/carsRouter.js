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

router.post("/", async (req,res,next) => {
    try {
        const ids = await db("cars").insert(req.body)
        const newCar = await db("cars").where({id: ids[0] }).first()
        res.status(201).json(newCar)
    }
    catch(err) {
        next(err)
    }
})

module.exports = router