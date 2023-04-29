import request from 'supertest';
import app from '@/app';
import mongoose from 'mongoose'

afterAll(async () => {
    await mongoose.disconnect();
});

describe('Test Users API', () => {
    describe('[GET] /users', () => {
        it('response with array of users', () => {
            return request(app).get('/users').expect(200).then(response => {
                expect(response.body).toBeInstanceOf(Array);
            });
        });
    });
});