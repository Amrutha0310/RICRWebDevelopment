// import dotenv from 'dotenv'
// dotenv.config();
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cloudinary from "./src/config/cloudinary.js"
import cookieParser from 'cookie-parser';
import connectDB from './src/config/db.js';
import  AuthRouter from './src/routers/authRouter.js';
import PublicRouter from './src/routers/publicRouter.js'
import UserRouter from './src/routers/userRouter.js'
import RestaurantRouter from './src/routers/restaurantRouter.js'

const app = express();   //app-express access
 
app.use(cors({origin:"http://localhost:5173", credentials:true}));
app.use(express.json());// converting data into readable json format -so that when data is send(r
app.use(cookieParser());
app.use(morgan("dev"));


app.use("/auth",AuthRouter);
app.use("/public",PublicRouter);   
app.use("/user",UserRouter);
app.use("/restaurant",RestaurantRouter);  //Router call

// creating server using express
app.get("/", (req,res) => {   // route handler
    console.log("Server is Working"); 
});

 app.use((err,req,res,next)=>{    //Default Error Handler
    const ErrorMessage = err.message || "Internal Server Error";
    const StatusCode = err.statusCode || 500;
    console.log("Error Found ", { ErrorMessage, StatusCode });

 res.status(StatusCode).json({message:ErrorMessage});   
 });
const port = process.env.PORT ||5000;    //port listen karwaaya 
app.listen(port,  async () =>{
    console.log("Server Started Port:",port);   
    connectDB();     //connected db
    try {  //we need to show (try-catch) error as  if any case because cloudinary is  not in my system it is in network(API-call)
          const res = await cloudinary.api.ping()  // check connectivity power=>
            console.log("Cloudinary API is Working:",res);

    } catch (error) {
         console.error("Error Connecting Cloudinary API",error);
    }
}); 