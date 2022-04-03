const Router = require('express')
const router = new Router()
const typeRouter = require('./typeRouter')
const toyRouter = require('./toyRouter')
const userRouter = require('./userRouter')

router.use('/user',userRouter)
// router.use('/brand',)
router.use('/toy',toyRouter)
router.use('/type',typeRouter)

module.exports = router

