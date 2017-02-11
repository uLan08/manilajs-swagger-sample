import Koa from 'koa'
import Router from 'koa-router'
import jsonBody from 'koa-json-body'
import swagger from 'swagger2'
import { validate as swaggerValidation, ui as swaggerUI } from 'swagger2-koa'

import { routes } from './routes/contacts'

const app = new Koa()
app.use(jsonBody())


const router = new Router({
	prefix: '/v1'
})
routes(router)
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(8080)
console.log('Listening on port :8080')