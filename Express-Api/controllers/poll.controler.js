const pollService = require('../services/poll.service')

module.exports = {

    getAllPolls: async (req, res) => {
        const polls = await pollService.getAllPolls()
        res.send({ polls })
    },
    getOnePoll: async ({ params: { _id } }, res) => {
        const poll = await pollService.getOnePoll(_id)
        res.send({ poll })
    },
    createNewPoll: async ({ body }, res) => {
        console.log("controller : ", body)
        try {
            const poll = await pollService.createNewPoll(body)
            res.send({ poll })
        } catch (error) {
            res.status(400).json(error)
        }
    },
    updateOnePoll: async ({ params: { _id }, body }, res) => {
        try {
            const poll = await pollService.updateOnePoll(_id, body)
            res.send({ poll })
        } catch (error) {
            res.status(400).json(error)
        }
    },
    pollTop3: async (req, res) => {
        const polls = await pollService.pollTop3()
        res.send({ polls })
    }

}