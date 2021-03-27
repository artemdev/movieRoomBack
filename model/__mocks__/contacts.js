const { contacts } = require('./data')

const list = jest.fn((userId) => {
    return contacts
})

const findById = jest.fn((id, userId) => {
    const [contact] = contacts.filter((el) => {
        String(el._id) === String(id)
    })
    return contact
})

const create = jest.fn((body) => {
    const contact = contacts.push({ ...body, _id: '5eb074232c30a1378dacdbdd' })
    return contact
})

const update = jest.fn((contactId, body, userId) => {
    const [contact] = contacts.filter((el) => String(el._id) === String(id))
    if (contact) {
        contact = { ...contact, body }
    }
})

const remove = jest.fn((id, userId) => {
    const index = contacts.findIndex((el) => String(el._id) === String(id))
    if (index === -1) {
        return null
    }
    const [contact] = contacts.splice(index, 1)
    return contact
})
module.exports = {
    list,
    findById,
    remove,
    create,
    update,
}
