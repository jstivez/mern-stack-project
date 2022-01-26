import express from "express";
<<<<<<< Updated upstream
import res from "express/lib/response";
import { getUsers, createUser } from '../controllers/users.js'
import user from '../models/users.js'

=======
const bodyParser = require("body-parser");
>>>>>>> Stashed changes
const router = express.Router();
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

<<<<<<< Updated upstream
// app.post('/', (req,res) => {
//     res.send('')
// })
=======
router.post('/user-post', (req,res) =>{
    console.log(req.body)
    res.send()
}
)
app.get('/', (req,res) => {
    res.send('booby G')
})
>>>>>>> Stashed changes

// router.get('/', getUsers);
// router.post('/', createUser);


export default router; 