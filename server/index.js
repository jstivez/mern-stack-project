<<<<<<< Updated upstream
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import userRoutes from './routes/users.js';
import comments from './routes/comments.js';
=======
import express, { response } from "express";
// import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import allUsers from "./models/fakeUsers.js";
//import userRoutes from './routes/users.js';
>>>>>>> Stashed changes



const app = express();

<<<<<<< Updated upstream
app.get('/:users', (req,res) => {
    const { users } = req.params;
    res.send(`<h1>This is ${ users }'s Page</h1>`)
=======
// app.use('/users', userRoutes);
// app.use(bodyParser.json({
//     limit: "20mb",
//     extended: true
// }));
// app.use(bodyParser.urlencoded({
//     limit: "20mb",
//     extended: true
// }));
console.log(allUsers)
app.get('/', (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.send(allUsers)
>>>>>>> Stashed changes
})


app.use(cors());

const CONNECTION_URL = "mongodb+srv://jon:stivers@cluster0.3n2xo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5001;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
    console.log(`connection is running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

mongoose.connect(CONNECTION_URL).then(()=>{console.log('Connect is working')})