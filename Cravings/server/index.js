import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import cors from cors;
import connectDB from './src/config/db.js';

const app = express();

app.use
app.use(express.json());// converting data into readable json format
// app.use("/auth",AuthRouter);

app.get("/", (req,res) => {
    console.log("Server is Working");
});
const port = process.env.PORT ||5000;
app.listen(port, () =>{
    console.log("Server Started Port:",port);
    connectDB();
});