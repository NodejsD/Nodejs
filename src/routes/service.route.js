const express = require("express");
const router = express.Router();
const studentDetails = require('./studentDetails.route');


router.use('/studentDetails', studentDetails);

module.exports = router;