const Router = require('express')
const router = new Router()
const nutritionController = require('../controllers/nutritionController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'),nutritionController.create)
router.get('/',nutritionController.get)
router.delete('/',nutritionController.delete)

module.exports = router