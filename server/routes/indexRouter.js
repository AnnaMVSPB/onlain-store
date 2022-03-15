const Router = require('express')
const router = new Router()
const typeRouter = require('./typeRouter')
const toyRouter = require('./toyRouter')

// router.use('/user',)
// router.use('/brand',)
router.use('/toy',toyRouter)
router.use('/type',typeRouter)

module.exports = router

