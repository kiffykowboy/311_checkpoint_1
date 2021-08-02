const users = require("../data/index.js");
const sampleUser = require('../data/sampleUser.js');

function listUsers (req, res) {
    if (users.length == 0) {
        res.status(404).send({error : "ALL GONE"})
    } else {
        res.json(users);
    }
}

function showUser (req, res) {
    let userFound = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == req.params.id) {
            res.json(users[i]);
            return userFound = 1;
        }
    }
    if (userFound != true) {
        res.status(400).send({error : "NOT HERE"})
    }
}

function createUser (req, res) {
    const userId = users.length + 1;
    users.push(sampleUser);
    users[userId - 1].id = userId;
    res.json(users[userId - 1]);

}

function updateUser (req, res) {
    let requestId = req.params.id -1

    if(users[requestId] == null) {
        res.status(400).send({error : "NO USER AT THIS ADDRESS"})
    } else {
      users[requestId] = sampleUser
      users[requestId].id = req.params.id
      return res.json(users[requestId])
    }

}

function deleteUser (req, res) {
    if (users[req.params.id - 1] == null) {
        res.status(400).send({error : "NOPE"});
    } else {
        users.splice(req.params.id - 1, 1);
        res.json(users);
    }

}

module.exports = {listUsers, showUser, createUser, updateUser, deleteUser}; 