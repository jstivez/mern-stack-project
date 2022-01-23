import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import userRoutes from './routes/users.js';
import comments from './routes/comments.js';



const app = express();

app.get('/:users', (req,res) => {
    const { users } = req.params;
    res.send(`<h1>This is ${ users }'s Page</h1>`)
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