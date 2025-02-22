//TODO: Clean up routes once they've been moved to a controller.
import { Router } from 'express';
import db from './config/connection.js';
import { getAllUsers, createNewUser, findUser, modifyUser, deleteUser, addFriend } from '../../controllers/userControllers.js';

const router = Router();
//api/users
router.route('/users').get(getAllUsers).post(createNewUser);

//api/users/:userId
router.route('/users:id').get(findUser).put(modifyUser).delete(deleteUser);

//api/users/:userId/friends/:friendID
router.route('users/:userId/friends/:friendID').post(addFriend);
// transferred to a getAllUsers functions in controller.
// app.get ('/users', async (_req, res) => {
//     try {
//         const result = await Users.find({})
//         res.status(200).json(result);
//     }catch (err){
//         res.status(500).json({ message: 'Something when wrong when GETting All Users'})
//     }
// })

// app.get ('/users:id', async (req, res ) => {
//     try {
//         const result = await Users.findOne({ id: req.params.id});
//         res.status(200).json(result);
//     } catch (err) {
//       console.log('Uh Oh, something went wrong');
//       res.status(500).json({ message: 'something went wrong' });
//     }
// });
// transferred to a createnewUser Function in controller
// app.post('/users', async (req, res) => {
//     const newUser = new User({ name: req.body.name }, email: req.body.email);
//     newUser.save();
//     if (newUser) {
//       res.status(200).json(newUser);
//     } else {
//       console.log('Uh Oh, something went wrong');
//       res.status(500).json({ message: 'something went wrong' });
//     }
//   });

//   app.put('/users/:id', async (req, res) => {
//     try {
//       const result = await Users
//         .findOneAndUpdate(
//           { name: req.params.id },
//           // Replaces id with value in body param
//           { name: req.body.id },
//           // Sets to true so updated document is returned; Otherwise original document will be returned
//           { new: true }
//         );
//       res.status(200).json(result);
//       console.log(`Updated: ${result}`);
//     } catch (err) {
//       console.log('Uh Oh, something went wrong');
//       res.status(500).json({ message: 'something went wrong' });
//     }
//   });

//   app.delete('/users/:id', async (req, res) => {
//     try {
//       const result = await Genre.findOneAndDelete({ name: req.params.id });
//       res.status(200).json(result);
//       console.log(`Deleted: ${result}`);
//     } catch (err) {
//       console.log('Uh Oh, something went wrong');
//       res.status(500).json({ message: 'something went wrong' });
//     }
//   });

  // users with friends

  // not entirely sold that this is correct?
  //TODO: Finish this route next time.
//   app.post('/users/:userId/friends/:friendID', async (req, res) => {
//     const newFriend = new User({ id: req.body.id }, email: req.body.email);
//     newFriend.save();
//     if (newUser) {
//       res.status(200).json(newUser);
//     } else {
//       console.log('Uh Oh, something went wrong');
//       res.status(500).json({ message: 'something went wrong' });
//     }
//   });