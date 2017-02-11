import { add, get, update, getAll, currentId } from '../models/contacts'

const notFound = {
	status: 404,
	body: { message: 'Contact not found.' }
}

export const routes = (router) => {
    router
        .get('/contacts', async (ctx) => {
            ctx.status = 200
            ctx.body = await getAll()
        })
        .post('/contacts', async (ctx) => {
            ctx.status = 200
            const data = ctx.request.body
            data.id = currentId() + 1
            ctx.body = await add()
        })
        .get('/contacts/:id', async (ctx) => {
            const contact = get(parseInt(ctx.params.id))
            if(!contact){
                Object.assign(ctx, notFound)
                return
            }
            ctx.status = 200
            ctx.body = await contact
        })
        .put('/contacts/:id', async (ctx) => {
            const contact = get(ctx.params.id)
            if(!contact){
                Object.assign(ctx, notFound)
                return
            }
            ctx.status = 204
            await update(contact.id, ctx.request.body)
        })
}
