import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connection = mongoose.connect(process.env.mongoURL||"");
export {connection}
// const mongoose=require("mongoose");
// // require('dotenv').config()
// const connection=mongoose.connect("mongodb+srv://vivekanjan:vivek@cluster0.napjbng.mongodb.net/");
// module.exports={
//     connection
// }