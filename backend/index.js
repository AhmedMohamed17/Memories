import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 3000;
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
