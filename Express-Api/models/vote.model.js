const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema(
    {
        option: String
    }, {
    timestamps: true
});



module.exports = mongoose.model("Vote", VoteSchema);