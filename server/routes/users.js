import express from "express";
import res from "express/lib/response";
import { getUsers, createUser } from '../controllers/users.js'
import user from '../models/users.js'
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);


router.post('/user-post', (req,res) =>{
    console.log(req.body)
    res.send()
}
)
app.get('/', (req,res) => {
    res.send('booby G')
})

// router.get('/', getUsers);
// router.post('/', createUser);


// export default router; 