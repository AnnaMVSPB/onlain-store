const Router = require('express')
const router = new Router()
const {addType,allType} = require('../controllers/typeController')

router.post('/',addType)
router.get('/',allType)

module.exports = router

