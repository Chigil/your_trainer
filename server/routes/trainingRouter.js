const Router = require('express')
const router = new Router()
const trainingController = require('../controllers/trainingController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'),trainingController.create)
router.get('/',trainingController.get)

module.exports = router