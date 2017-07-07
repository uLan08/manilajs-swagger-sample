import { addMessage, getMessage, getMessages, getCurrentId, updateMessage } from '../models/messages'

const notFound = {
	status: 404,
	body: { message: 'Message not found.' }
}

export const routes = (router) => {
	router
		.get('/messages', async (ctx) => {
			ctx.status = 200
			ctx.body = getMessages()
		})
		.post('/messages', async (ctx) => {
			ctx.status = 200
            const data = ctx.request.body
            Object.assign(data, {id: getCurrentId() + 1})
            ctx.body = {id:addMessage(data)}
		})
		.get('/messages/:id', async (ctx) => {
            const message = getMessage(parseInt(ctx.params.id))
            if (!message) {
                Object.assign(ctx, notFound)
                return
            }
            ctx.status = 200
            ctx.body = message			
		})
		.put('/messages/:id', async (ctx) => {
            const message = getMessage(parseInt(ctx.params.id))
            if (!message) {
                Object.assign(ctx, notFound)
                return
            }
            ctx.status = 204
            updateMessage(message.id, ctx.request.body)			
		})
}