const Router = require('express')
const router = new Router()
const {addToy} = require('../controllers/toyControllers')
const storageMulter = require('../middleware/multer')

router.post('/',addToy)
// router.get('/',)

module.exports = router


