const Router = require('express')
const router = new Router()
const recordController = require('../controllers/recordController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'),recordController.create)
router.get('/',recordController.get)

module.exports = router