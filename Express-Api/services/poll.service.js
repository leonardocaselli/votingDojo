const Poll = require('../models/poll.model')



module.exports = {
    // regrsa todos de forma decendente en el tiempo 
    getAllPolls: () => Poll.find({}).sort({ updatedAt: -1 }),
    //getAllPolls: () => Poll.find({}).sort({ number_of_votes: -1, updatedAt: -1 }),
    // getAllPolls: () => {
    //     const PollTop3 = Poll.find({}).sort({ number_of_votes: -1 }).limit(3)
    //     const PollRecentUpdate = Poll.find({}).sort({ updatedAt: -1 })
    //     return PollRecentUpdate
    // },
    //  regresa los 3 mas votados
    pollTop3: () => Poll.find({}).sort({ number_of_votes: -1 }).limit(3),


    getOnePoll: (_id) => Poll.findOne({ _id }),
    createNewPoll: (poll) => {
        console.log("services createNewPoll:", poll)
        const newPoll = new Poll(poll)
        return newPoll.save()
    },
    // query, udpate, options
    updateOnePoll: (_id, poll) => Poll.findOneAndUpdate({ _id }, poll, { new: true, runValidators: true }),

    // getTop3: () => Poll.aggregate([{ $sort:}])

}
