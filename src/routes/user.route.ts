import express from 'express';
import { postUser, getUser, deleteuser } from '../controllers/user.controller';


const userRouter = express.Router();

//routes
userRouter.post('/api/user', postUser);
userRouter.get('/api/users', getUser);
userRouter.delete('/:username', deleteuser);


export default userRouter;