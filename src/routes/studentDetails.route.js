const express = require('express')
const router = express.Router()


const {
    create,
} = require('../controllers/studentDetails.controller');

router.route('/create').get(create)
module.exports = router