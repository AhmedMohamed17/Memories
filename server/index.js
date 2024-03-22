import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// const CONNECTION_URL = "mongodb+srv://ahmedmohamed7sayed:<password>@memoriesdatabase.g1bd97q.mongodb.net/?retryWrites=true&w=majority&appName=MemoriesDataBase"
const CONNECTION_URL = "mongodb://127.0.0.1:27017/MEMOREIES-DEMO";

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    )
  )
  .catch((error) => console.log(error.message));
app.get("/", (req, res) => res.send("Hello sfsgsrrrgWorld!"));
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
