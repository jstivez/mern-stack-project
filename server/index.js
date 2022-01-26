import mongoose from "mongoose";
import cors from 'cors';
import allUsers from "./models/fakeUsers.js";
import express from "express";
import bodyParser from "body-parser"
import cuid from "cuid";
const router = express.Router();
const app = express();

const CONNECTION_URL = "mongodb+srv://jon:stivers@cluster0.3n2xo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5001;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
    console.log(`connection is running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

const connection = mongoose.connect(CONNECTION_URL).then(() => { 
    console.log('Connect is working');
})
const messageTextSchema = new mongoose.Schema({ id: 'string', messageText: 'string' })
const MessageText = mongoose.model('MessageText', messageTextSchema)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);
app.use("/user-post", router);

const corsOptions ={
    origin:'*', 
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions)) // Use this after the variable declaration
app.post('/user-post', async (req, res) => {
    await MessageText.create({ id: cuid() , messageText: req.body?.messageText })
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.send(messageTexts)
})

console.log(allUsers)
app.get('/users', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.send(allUsers)

})
app.get('/posts', async (req, res) => {
    const messageTexts = await MessageText.find().exec();
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.send(messageTexts)
})

app.delete("/user-post", function(req, res) {
    MessageText.deleteMany({}, function(err) {
        if (err) {
            res.status(500).send({error: "Could not clead database..."});           
        } else {
            res.status(200).send({message: "All hasp info was deleted succesfully..."});
        }
    });
});