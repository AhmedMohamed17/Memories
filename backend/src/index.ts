import express ,{ Request ,Response} from "express";
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose'
import myUserRoute from './routes/MyUserRoutes'
const PORT = 3000 ;
mongoose
.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=>console.log("Connected to database!"))

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/my/user" , myUserRoute )


app.listen(PORT ,()=>{
    console.log(`server started on localhost:${PORT}`)
})