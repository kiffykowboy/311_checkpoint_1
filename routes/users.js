const express = require('express')
const usersRouter = express.Router();
const usersController = require('../controllers/users.js');

// GET /users
//   * Return all users

usersRouter.get('/users', usersController.listUsers);


// * GET /users/:id
//   * Return just the user that matches the path param (id)

usersRouter.get('/users/:id', usersController.showUser);

// * POST /users
//   * Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list. Currently we have users 1-10 (_data/index_). The next user should be 11

usersRouter.post('/users', usersController.createUser);

// * PUT /users/:id
//   * Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request

usersRouter.put('/users/:id', usersController.updateUser);

// * DELETE /users/:id
//   * Delete one user by its id

usersRouter.delete('/users/:id', usersController.deleteUser);


module.exports = usersRouter;