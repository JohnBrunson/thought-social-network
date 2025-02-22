import { Request, Response } from 'express';
import { User } from './models/User.js';

// get all users

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await Users.find({})
        res.status(200).json(users);
    }catch (err){
        res.status(500).json({ message: 'Something when wrong when getting All Users'})
    }
}