const { users } = require('./data')

const findByEmail = jest.fn((id, userId) => {
    const [contact] = users.filter((el) => {
        String(el._id) === String(id)
    })
    return contact
})

const findById = jest.fn((id) => {
    const [user] = users.filter((el) => String(el._id) === String(id))
    return user
})

const create = jest.fn((body) => {
    {
    }
})

const update = jest.fn((contactId, body, userId) => {
    {
    }
})

const remove = jest.fn((id, userId) => {
    const index = users.findIndex((el) => String(el._id) === String(id))
    if (index === -1) {
        return null
    }
    const [contact] = users.splice(index, 1)
    return contact
})
const updateAvatar = jest.fn((id, avatar) => {
    return {}
})
module.exports = {
    findByEmail,
    findById,
    remove,
    create,
    update,
    updateAvatar,
}
