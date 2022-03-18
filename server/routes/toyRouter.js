const Router = require('express')
const router = new Router()
const {addToy,initToys} = require('../controllers/toyControllers')


router.post('/',addToy)
router.get('/',initToys)

module.exports = router


