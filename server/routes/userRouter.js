const Router = require('express')
const { regUser,logUser } = require('../controllers/userControllers')
const router = new Router()


router.post('/reg',regUser)
router.post('/log',logUser)
router.get('/',)

module.exports = router

