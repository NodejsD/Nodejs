
const student_details = require('../models/StudentDetails.Models');
exports.create = async(req, res, next) => {
    try {
        const {
            student_name,
            address,
            mobile,
            student_id,
            state,
        } = req.body

        const students_det = new student_details({
            student_name,
            address,
            mobile,
            student_id,
            state,
        })
        const students_Details = await students_det.save();

        res.status(201).send({
            success: true,
            data: students_Details,
            message: 'You have created students_Detail successfullyd'
        })

    } catch (err) {
        console.log(err.message)
    }
};


