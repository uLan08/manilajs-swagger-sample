const contacts = [
    {
        id: 1,
        name: "Nanay",
        contact_no: 9163276189
    },
    {
        id: 2,
        name: "Tatay",
        contact_no: 9347623189
    },
    {
        id: 3,
        name: "Balance Inquiry",
        contact_no: 222
    },
    {
        id: 4,
        name: "Globe Rewards",
        contact_no: 4438
    }
]

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
    return Math.max(...contacts.map((contact) => contact.id))
}
