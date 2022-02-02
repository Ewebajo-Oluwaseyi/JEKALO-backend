/**testing endpoint*/
import { assert } from 'chai';  // Using Assert style
import { createUser } from '../services/user.service';
import connectDB from '../database/config/db';

describe('User', () => {
    let result;
    const data = {
        first_name: 'person',
        last_name: 'person',
        username: 'person person',
        date_of_birth: '02-02-2022'
    }
    beforeEach(async () => {
        
        await connectDB()
        result = await createUser(data);
    })

    it('it should create a user', async () => {
        assert.equal(result.username, 'person person', 'successfully created user')
    });
})