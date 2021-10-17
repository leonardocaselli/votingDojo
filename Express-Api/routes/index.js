const { Router } = require('express')

const router = Router()

/* Rutas principales */
router.use('/poll', require('./poll'))


module.exports = router
