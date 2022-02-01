import { Request, Response } from 'express';
import { userIn, userOut } from '../interface/user.interface';
import { createUser, getAllUser, removeUser } from '../services/user.service';

//post user controller
export const postUser = async (req: Request, res: Response) => {
    let data: userIn = req.body;
    try {
        let result: userOut = await createUser(data);
        return res.status(201).json({ success: true, data: result });
    } catch (error: any) {
        return res.status(412).json({ success: false, message: error.message })
    }
}

//get all users controller
export const getUser = async (req: Request, res: Response) => {
    try {
        const result: any = await getAllUser();
        return res.status(201).json({ success: true, data: result });
    } catch (error: any) {
        return res.status(412).json({ success: false, message: error.message })
    }
}

//delete a controller
export const deleteuser = async(req: any, res: any) => {
    try {
        const username = req.params.username
        await removeUser(username);
        res.status(201).json({ success: true, message: "You deleted the user successfully" });
    } catch (error: any) {
        return res.status(412).json({ success: false, message: error.message })
    }
}