const contacts = []

export const addContact = (contact) => {
    contacts.push(contact)
    return contact.id
}

export const updateContact = (id, newContact) => {
    const currentContact = getContact(id)
    const index = contacts.indexOf(currentContact)
    Object.assign(newContact, {id:id})
    contacts[index] = newContact
}

export const getContact = (id) => {
    return contacts.find((contact) => contact.id === id)
}

export const getContacts = () => {
    return contacts
}

export const getCurrentId = () => {
    return contacts.length > 0 ? Math.max(...contacts.map((contact) => contact.id)) : 0
}
