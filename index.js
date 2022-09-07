import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import userRoutes from './routes/crud.js'





const app = express();

const uri = "mongodb+srv://admin:admin123@cluster0.xuwyjqe.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('db is connected');
})

const PORT = 5000;

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hello")
})



app.use('/user', userRoutes);




app.listen(PORT,()=>{
    console.log(`The server has started on ${PORT}`)
})