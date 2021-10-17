const { Router } = require('express')
const pollController = require('../controllers/poll.controler')

const router = Router()
// regresa 3 mas votados
router.get('/top', pollController.pollTop3)
// regresa por orden del updata mas reciente al mas viejo
router.get('/', pollController.getAllPolls)

// carga pagina con la encuesta 
router.get('/:_id', pollController.getOnePoll)

// crea new poll
router.post('/new', pollController.createNewPoll)


// suma y muestra resultado de la encuesta
router.patch('/vote/:_id', pollController.updateOnePoll)

router.post('/:_id', pollController.getOnePoll)




module.exports = router