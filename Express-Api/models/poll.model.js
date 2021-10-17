const mongoose = require('mongoose')
const Vote = require('./vote.model')


function arrayLimit(val) {
    return val.length >= 2;
}

const PollSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            requiered: [true, "La pregunta es obligatoria y unica"],
            minlength: [10, "Question must be at least 10 characters long"],
        },
        options: {
            type: [String],
            validate: [arrayLimit, 'There must be at least 2 options ']
        },
        votes: {
            type: [Number],
            'default': [0, 0, 0, 0],
            required: true
        },
        number_of_votes: {
            type: Number,
            'default': 0,
            required: true
        },
        status: {
            type: String,
            required: false
        }

    },
    {
        timestamps: true
    });

module.exports = mongoose.model("Poll", PollSchema);

