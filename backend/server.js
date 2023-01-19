import  dotenv from 'dotenv';
{dotenv.config({ path: 'backend/.env' })}
import express from 'express';
const app=express();
import mongoose  from 'mongoose';
import User from './model.js';
import bodyParser from 'body-parser';
import cors from 'cors';

 
 
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}))
const connectdatabase =()=>{
    mongoose.connect(process.env.URL,{
         useNewUrlParser: true, 
         useUnifiedTopology: true,
     }).then( (con)=>{
 console.log(`connect to database : ${con.connection.host}`);
     })
 }
 
 connectdatabase();
  app.post("/form",  async (req,res)=>{
    console.log(req.body);
    const {name,age}= req.body;
        const user=  await User.create({
            name,
            age
        })
        res.status(200).json({
            success:true,
            user
        }) 
 })

 app.get('/user/:id', async (req,res)=>{
    const user= await User.findById(req.params.id);
    res.status(200).json({
        success:true,
        user
    })

 })

const PORT = process.env.PORT || 4000;
app.listen(PORT, function(err){
    console.log(`Server is running on Port ${PORT}`);
})