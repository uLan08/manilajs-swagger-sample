import Koa from 'koa'
import Router from 'koa-router'
import jsonBody from 'koa-json-body'
import swagger from 'swagger2'
import { validate as swaggerValidation, ui as swaggerUI } from 'swagger2-koa'
import cors from 'koa2-cors'

import { errorHandler } from './errors'

import { routes as contactsRoutes } from './routes/contacts'
import { routes as messagesRoutes } from './routes/messages'

const spec = swagger.loadDocumentSync('./src/swagger.yaml')
if (!swagger.validateDocument(spec)){
	throw Error('./src/swagger.yaml is not a Swagger 2.0 schema')
}

const app = new Koa()
app.use(errorHandler())
app.use(cors())
app.use(jsonBody())
app.use(swaggerValidation(spec))
app.use(swaggerUI(spec, '/', ['/v1']))

const router = new Router({
	prefix: '/v1'
})
contactsRoutes(router)
messagesRoutes(router)
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(8080)
console.log('Listening on port :8080')