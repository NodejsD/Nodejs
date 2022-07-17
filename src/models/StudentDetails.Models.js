const mongoose = require('mongoose');
const student_details = new mongoose.Schema({

    student_name: {
        type: String,
    },
    address: {
        type: String,

    },
    mobile: {
        type: Number,
    },
    student_id: {
        type: Number,
    },
    state: {
        type: String,
    },
    is_active: {
        type: Number,
        default: 1
    },
    is_deleted: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

const students = new mongoose.model('student_details', student_details);
module.exports = students;