import { Request, Response } from 'express';
import Thought from "../models/Thought";

// GET all thoughts
export const getAllThoughts = async (_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find({})
        res.status(200).json(thoughts);
    }catch (err){
        res.status(500).json({ message: 'Something when wrong when getting All Users'})
    }
};

//POST thought
export const createNewThought = async (req: Request, res: Response) => {
    try{
        const newThought = new Thought({ thoughtText: req.body.name }, email: req.body.email);
        newThought.save();
        if (newThought) {
          res.status(200).json(newUser);
    }catch {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  }};

  //PUT (modify) thought
export const modifyThought = async (req: Request, res: Response) => {
    try {
      const result = await Thought.findOneAndUpdate(
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

//DELETE Thought
    export const deleteThought = async (req: Request, res: Response) => {
      try {
        const result = await Thought.findOneAndDelete({ name: req.params.id });
        res.status(200).json(result);
        console.log(`Deleted: ${result}`);
      } catch (err) {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
      }
    }

//GET thought by id
  export const findThought = async (req: Request, res:Response ) => {
    try {
        const result = await Thought.findOne({ id: req.params.id});
        res.status(200).json(result);
    } catch (err) {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }};


    // Reactions
    //POST add Reaction
      // Not sure this is quite right
      export const addReaction = async (req: Request, res: Response) => {
        const newFriend = new Reaction({ id: req.body.id }, email: req.body.email);
        newReaction.save();
        if (newReaction) {
          res.status(200).json(newFriend);
        } else {
          console.log('Uh Oh, something went wrong');
          res.status(500).json({ message: 'something went wrong' });
        }
      };
    
      //DELETE Reaction
      export const deleteReaction = async (req: Request, res: Response) => {
        try {
            const result = await User.findOneAndDelete ({name: req.params.id});
            res.status(200).json(result);
            console.log(`Deleted: ` ${result});
        } catch (err) {
          console.log ('ERROR: ', err)
        }}