// require('dotenv').config({path: './env'})
import dotenv from "dotenv";

// import mognoose from "mongoose";
// import {DB_NAME} from "./constants";
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("MONGO DB connection failed");
})


/*
import express from "express";
const app = express();

// immedietly executes the function - ifi
;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("ERROR: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`);
        });

    } catch(error){
        console.error("ERROR:" , error);
        throw err;
    }
})()
*/