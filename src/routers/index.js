

const express = require('express')
const router = express.Router()

const user = require('../controllers/user/index')
const authors = require('../controllers/author/index')
const stories = require('../controllers/story/index')


router.post('/addUser', user.create)
router.post('/addStory', stories.create)
router.post('/addAuthor', authors.create)
router.get('/allUser/:userid', user.get)
router.get('/author/:userid', authors.get)


module.exports = router