const Router = require('express')
const router = new Router()
const typeRouter = require('./typeRouter')
const toyRouter = require('./toyRouter')
const userRouter = require('./userRouter')
const cartRouter = require('./cartRouter')
const adminRouter = require('./adminRouter')

router.use('/user',userRouter)
// router.use('/brand',)
router.use('/toy',toyRouter)
router.use('/type',typeRouter)
router.use('/cart',cartRouter)
router.use('/admin',adminRouter)
module.exports = router

