import { Router } from 'express';
//import db from '../../config/connection';
import { getAllUsers, createNewUser, findUser, modifyUser, deleteUser, addFriend } from '../../controllers/userControllers.js';

const router = Router();
//api/users
router.route('/users').get(getAllUsers).post(createNewUser);

//api/users/:userId
router.route('/users/:id').get(findUser).put(modifyUser).delete(deleteUser);

//api/users/:userId/friends/:friendID
router.route('users/:userId/friends/:friendID').post(addFriend);

export default router;