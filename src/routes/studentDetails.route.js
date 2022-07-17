const express = require('express')
const router = express.Router()


const {
    create,
} = require('../controllers/studentDetails.controller');

router.route('/create').post(create)
module.exports = router