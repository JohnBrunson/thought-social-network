import { Request, Response } from 'express';
import { User } from './models/User.js';

// GET all users

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find({})
        res.status(200).json(users);
    }catch (err){
        res.status(500).json({ message: 'Something when wrong when getting All Users'})
    }
};

//POST: Create a user
export const createNewUser = async (req: Request, res: Response) => {
    try{
        const newUser = new User({ name: req.body.name }, email: req.body.email);
        newUser.save();
        if (newUser) {
          res.status(200).json(newUser);
    }catch {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  }};

//**userId functions**

// GET
  export const findUser = async (req: Request, res:Response ) => {
    try {
        const result = await Users.findOne({ id: req.params.id});
        res.status(200).json(result);
    } catch (err) {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }};

// PUT
export const modifyUser = async (req: Request, res: Response) => {
    try {
      const result = await Users
        .findOneAndUpdate(
          { name: req.params.id },
          // Replaces id with value in body param
          { name: req.body.id },
          // Sets to true so updated document is returned; Otherwise original document will be returned
          { new: true }
        );
      res.status(200).json(result);
      console.log(`Updated: ${result}`);
    } catch (err) {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  }

  //DELETE
  export const deleteUser = async (req: Request, res: Response) => {
    try {
      const result = await Genre.findOneAndDelete({ name: req.params.id });
      res.status(200).json(result);
      console.log(`Deleted: ${result}`);
    } catch (err) {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  }

  //POST add friend
  //TODO: Not sure this is finished
  export const addFriend = async (req: Request, res: Response) => {
    const newFriend = new User({ id: req.body.id }, email: req.body.email);
    newFriend.save();
    if (newUser) {
      res.status(200).json(newUser);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  };