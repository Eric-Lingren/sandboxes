const express = require('express')
const testRouter = express.Router()
const db = require("../models/index")


testRouter.get("/", (req, res) => {
    db.User.findAll({
        // include: [ 
        //     { model: db.Task }
        // ]
    })
    .then( testData => res.status(200).send(testData) )
    .catch( err => res.status(500).send(err) )
})


module.exports = testRouter