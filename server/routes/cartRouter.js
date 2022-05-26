const Router = require('express')
const router = new Router()
const {addCart,initOrders} = require('../controllers/cartControllers')


router.post('/',addCart)
router.post('/:id',initOrders)

module.exports = router


