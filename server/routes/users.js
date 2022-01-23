import express from "express";
import res from "express/lib/response";
import { getUsers, createUser } from '../controllers/users.js'
import user from '../models/users.js'

const router = express.Router();
const app = express();


// app.post('/', (req,res) => {
//     res.send('')
// })

// router.get('/', getUsers);
// router.post('/', createUser);


export default router; 