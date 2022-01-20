import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import userRoutes from './routes/users.js';



const app = express();

app.use('/users', userRoutes);
app.use(bodyParser.json({
    limit: "20mb",
    extended: true
}));
app.use(bodyParser.urlencoded({
    limit: "20mb",
    extended: true
}));

app.use(cors());

const CONNECTION_URL = "mongodb+srv://jon:stivers@cluster0.3n2xo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
    console.log(`connection is running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

mongoose.connect(CONNECTION_URL).then(()=>{console.log('Connect is working')})