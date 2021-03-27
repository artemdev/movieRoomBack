const users = [
    {
        _id: '604bbdc164d02919949dc936',
        name: 'Guest',
        subscription: 'free',
        email: 'artem.zimovets@gmail.com',
        password:
            '$2a$08$bFo./ykBFw583vJko9OQP.6of451vGqp5aoLyTpz0WVdDiSsgnRRm',
        avatar:
            'https://s.gravatar.com/avatar/4a3ff16afc0d68d46dd87c7e7bd7783a?s=250',
        createdAt: '2021-03-12T19:15:13.990Z',
        updatedAt: '2021-03-13T07:31:35.219Z',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGJiZGMxNjRkMDI5MTk5NDlkYzkzNiIsImlhdCI6MTYxNTYyMDY5NSwiZXhwIjoxNjE1NjI3ODk1fQ.Tqqh8QYaCwdQhyPXbTC35IKeYFYZSWhJJmJjjfwWdi0',
    },
    {
        _id: '604c7792177184238d85486b',
        name: 'name',
        subscription: 'free',
        email: 'artem.zimovets1@gmail.com',
        password:
            '$2a$08$4KVU/KOdHcs23WHe4Zgt1.3q1r29.UVW8wi34fANrZZDWVbL5Wu/C',
        avatar:
            'https://s.gravatar.com/avatar/e3f06aec3a4fc4742cef5c4705c16860?s=250',
        createdAt: { $date: '2021-03-13T08:28:02.133Z' },
        updatedAt: { $date: '2021-03-13T08:28:08.550Z' },
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGM3NzkyMTc3MTg0MjM4ZDg1NDg2YiIsImlhdCI6MTYxNTYyNDA4OCwiZXhwIjoxNjE1NjMxMjg4fQ.Lr3nDZ0LrV3_1yPoRL1p-MjcxWOmnwln_W6MXP-MUz4',
    },
    {
        _id: '604c7792177184238d85486b',
        name: 'name',
        subscription: 'free',
        email: 'artem.zimovets1@gmail.com',
        password:
            '$2a$08$4KVU/KOdHcs23WHe4Zgt1.3q1r29.UVW8wi34fANrZZDWVbL5Wu/C',
        avatar:
            'https://s.gravatar.com/avatar/e3f06aec3a4fc4742cef5c4705c16860?s=250',
        createdAt: { $date: '2021-03-13T08:28:02.133Z' },
        updatedAt: { $date: '2021-03-13T08:28:08.550Z' },
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGM3NzkyMTc3MTg0MjM4ZDg1NDg2YiIsImlhdCI6MTYxNTYyNDA4OCwiZXhwIjoxNjE1NjMxMjg4fQ.Lr3nDZ0LrV3_1yPoRL1p-MjcxWOmnwln_W6MXP-MUz4',
    },
    {
        _id: '6045fffbe9da06aceb588c7c',
        name: 'Guest',
        sex: 'none',
        token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNDVmZmZiZTlkYTA2YWNlYjU4OGM3YyIsImlhdCI6MTYxNTIxNjI0NCwiZXhwIjoxNjE1MjIzNDQ0fQ.oHXVDg7K9t6vizoHTq4D6KMPYiEM7pz18PbBbBPUV7Q',
        password:
            '$2a$08$r8mCyLNc7SqhbNckK3PCJO4gIXW1Hwn/WcROUZXbzJFhDEZmsXRke',
        email: 'email@facebook.com',
        createdAt: { $date: '2021-03-08T10:44:11.033Z' },
        updatedAt: { $date: '2021-03-08T15:10:44.734Z' },
    },
    {
        _id: '60489aa0b9674fcac4f36808',
        name: 'Guest',
        subscription: 'free',
        email: 'artem@email.com',
        password:
            '$2a$08$2N/a8VCbp4grtMq9EqevbuX9PUlnVBwzA7PDlmQB1BwZqpNGXVdTa',
        createdAt: { $date: '2021-03-10T10:08:32.764Z' },
        updatedAt: { $date: '2021-03-10T10:57:47.813Z' },
        token: null,
    },
]

const contacts = [
    {
        _id: '5eb074232c30a1378dacdbda',
        name: 'artem123123',
        email: 'nulla.ante@vestibul.co.uk',
        phone: '(992) 914-3792',
        subscription: 'free',
        password: 'password',
        token: '',
        updatedAt: { $date: '2021-03-08T17:18:13.325Z' },
    },
    {
        _id: '5eb074232c30a1378dacdbdc',
        name: 'artem',
        email: 'email@email',
        phone: '(542) 451-7038',
        subscription: 'free',
        password: '123123',
        token: '',
    },
    {
        _id: '5eb074232c30a1378dacdbe0',
        name: 'Reuben Henry',
        email: 'pharetra.ut@dictum.co.uk',
        phone: '(715) 598-5792',
        subscription: 'premium',
        password: 'password',
        token: '',
    },
]

const newUser = {
    email: 'artem.zimovets@gmail.com',
    password: '123123123',
}
const User = users[0]

module.exports = {
    users,
    contacts,
    newUser,
    User,
}
