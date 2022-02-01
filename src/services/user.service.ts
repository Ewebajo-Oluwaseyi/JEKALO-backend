import User from "../database/model/User"
import { userIn } from '../interface/user.interface';


//creat a user in db
export const createUser = async(data: userIn) => {
    const { first_name, last_name, username, date_of_birth } = data;
    const name_prefix = `${first_name.charAt(0).toUpperCase()}${last_name.charAt(0).toUpperCase()}`
     try {
        const newUser = new User({
            first_name,
            last_name,
            username,
            date_of_birth,
            name_prefix
        });
        const user =  await newUser.save();
        return user
    } catch (error) {
        throw new Error('Error creating user')
    }
}

//get all users in db
export const getAllUser = async() => {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        throw new Error('Error getting users')
    }
}

//remove a user in db
export const removeUser = async(username: string) => {
    try {
        await User.findOneAndDelete({username: username});
    } catch (error) {
        throw new Error('Error deleting user')
    }
}