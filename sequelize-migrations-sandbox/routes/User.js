const express = require('express')
const userRouter = express.Router()
const db = require("../models/index")


userRouter.get("/", (req, res) => {
    db.User.findAll({
        include: [ 
            { model: db.Task }
        ]
    })
    .then( users => res.status(200).send(users) )
    .catch( err => res.status(500).send(err) )
})


userRouter.get("/:id", (req, res) => {
    db.User.findAll({
        where: { id: req.params.id }
    })
    .then( user => res.status(200).send(user) )
    .catch( err => res.status(500).send(err) )
})


userRouter.post("/", (req, res) => {
    let newUser = req.body
    db.User.create(newUser)
    .then( user => res.status(201).send(user) )
    .catch( err => res.status(500).send(err) )
})


userRouter.delete("/:id", (req, res) => {
    db.User.destroy({
        where: { id: req.params.id }
    })
    .then(removedUser => {
        if(removedUser === 0) return res.status(500).send({msg: "User was unable to be deleted." })
        return res.status(200).send({msg: "User has been successfully deleted." })
    })
    .catch( err => res.status(500).send(err) )
})


userRouter.put("/:id", (req, res) => {
    db.User.update(req.body, {
        where: { id: req.params.id }
    })
    .then(updatedUser => {
        if(updatedUser[0] === 0) return res.status(500).send({msg: "User was unable to be updated." })
        return res.status(200).send({msg: "User has been successfully updated." })
    })
    .catch( err => res.status(500).send(err) )
})


module.exports = userRouter