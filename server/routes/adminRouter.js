const Router = require('express')
const router = new Router()
const {addProduct,sendMessage} = require('../controllers/adminControllers')


router.post('/addProduct/img', addProduct)
router.post('/eemail',sendMessage)

module.exports = router

