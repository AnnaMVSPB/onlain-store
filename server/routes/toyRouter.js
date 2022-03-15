const Router = require('express')
const router = new Router()
const {addToy} = require('../controllers/toyControllers')
const fileMiddeleware = require('../middleware/multer')

router.post('/', fileMiddeleware.array("img"),addToy)
// router.get('/',)

module.exports = router

