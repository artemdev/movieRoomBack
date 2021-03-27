const path = require('path');
const fs = require('fs').promises;
// const usersController = require(path.join(__dirname, '../controllers/users.js'))
const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../model/__mocks__/data');
const SECRET_KEY = process.env.JWT_SECRET;
const issueToken = (payload, secret) => jwt.sign(payload, secret);
const token = issueToken({ id: User._id }, SECRET_KEY);
User.token = token;

jest.mock('../model/users.js');
jest.mock('../model/contacts.js');

describe('Avatars', () => {
    it('Upload should return 200', async (done) => {
        const buffer = await fs.readFile('./tests/default.jpg');
        const res = await request(app)
            .patch('/users/avatars')
            .set('Authorization', `Bearer ${token}`)
            .attach('avatar', buffer, 'default-avatar.jpg');

        expect(res.status).toEqual(200);
        expect(res.body).toBeDefined();
        console.log(res.body);
        done();
    });
});
