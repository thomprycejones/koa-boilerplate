/* Authentication */
const jwt = require("koa-jwt")

async function authenticationMiddleware(ctx, next) {
  jwt({ secret: process.env.JWT_SECRET, key: "authData" })
  if (ctx.state.authData && ctx.state.authData.userId) {
    ctx.state.currentUser = await ctx.orm.user.findById(
      ctx.state.authData.userId
    )
  }
  return next()
}

module.exports = [
  jwt({ secret: process.env.JWT_SECRET, key: "authData" }),
  authenticationMiddleware,
]
