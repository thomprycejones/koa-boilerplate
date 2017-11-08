const KoaRouter = require("koa-router")

const router = new KoaRouter()

router.get("index", "/", ctx => {
  ctx.body = "Hello World"
})

module.exports = router
