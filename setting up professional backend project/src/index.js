import mognoose from "mongoose";
import {DB_NAME} from "./constants";

connectDB()




// import express from "express";
// const app = express();

// // immedietly executes the function
// ( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error)=>{
//             console.log("ERROR: ", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`app is listening on port ${process.env.PORT}`);
//         });

//     } catch(error){
//         console.error("ERROR:" , error);
//         throw err;
//     }
// })()