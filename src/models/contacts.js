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

export const add = (contact) => {
    contacts.push(contact)
    return contact.id
}

export const update = (id, newContact) => {
    const currentContact = get(id)
    const index = contacts.indexOf(currentContact)
    Object.assign(newContact, {id:id})
    contacts[index] = newContact
}

export const get = (id) => {
    return contacts.find((contact) => contact.id === id)
}

export const getAll = () => {
    return contacts
}

export const currentId = () => {
    return Math.max(...contacts.map((contact) => contact.id))
}
