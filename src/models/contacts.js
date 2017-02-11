const contacts = []

export const add = (contact) => {
    contacts.push(contact)
    return contact.id
}

export const update = (id, newContact) => {
    const currentContact = contacts.find((contact) => contact.id === id)
    const index = contacts.indexOf(currentContact)
    contacts[index] = newContact
}

export const get = (id) => {
    return contacts.find((contact) => contact.id === id)
}

export const getAll = () => {
    return contacts
}
