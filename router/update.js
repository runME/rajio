const moment = require('moment')
const koaBody = require('koa-body')

const downloadLimit = [
  1, 5, 10, 20, 50, 100, 1000, null 
]

const timeLimit = [
  [1, 'hour'],
  [12, 'hour'],
  [1, 'day'],
  [7, 'day'],
  [1, 'month'],
  [6, 'month'],
  [1, 'year'],
  null
]

const koaBodyRoute = koaBody()

const route = async function (ctx, next) {
  const item = await sequelize.findOne({
    where: {
      id: ctx.id
    }
  })
  if (!item || item.deleted) {
    ctx.throw(404)
    return
  }
  if (item.identifier !== ctx.identifier) {
    ctx.throw(403)
    return
  }

  ctx.response.body = {
    message: "OK"
  }
}

module.exports = {
  koaBody: koaBodyRoute,
  route
}