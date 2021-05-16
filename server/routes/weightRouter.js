const Router = require('express')
const router = new Router()
const weightController = require('../controllers/weightContorller')
const checkRole = require('../middleware/checkRoleMiddleware')

//Проверка роли для добавления товара
//

router.post('/',checkRole('ADMIN'),weightController.create)
router.get('/',weightController.get)

module.exports = router