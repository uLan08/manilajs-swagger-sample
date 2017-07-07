import { addContact, getContact, updateContact, getContacts, getCurrentId } from '../models/contacts'

const notFound = {
	status: 404,
	body: { message: 'Contact not found.' }
}

export const routes = (router) => {
    router
        .get('/contacts', async (ctx) => {
            ctx.status = 200
            ctx.body = getContacts()
        })
        .post('/contacts', async (ctx) => {
            ctx.status = 200
            const data = ctx.request.body
            Object.assign(data, {id: getCurrentId() + 1})
            ctx.body = {id:addContact(data)}
        })
        .get('/contacts/:id', async (ctx) => {
            const contact = getContact(parseInt(ctx.params.id))
            if (!contact) {
                Object.assign(ctx, notFound)
                return
            }
            ctx.status = 200
            ctx.body = contact
        })
        .put('/contacts/:id', async (ctx) => {
            const contact = getContact(parseInt(ctx.params.id))
            if (!contact) {
                Object.assign(ctx, notFound)
                return
            }
            ctx.status = 204
            updateContact(contact.id, ctx.request.body)
        })
}
